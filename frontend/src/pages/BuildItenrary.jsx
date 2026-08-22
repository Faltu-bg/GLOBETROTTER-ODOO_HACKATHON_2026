import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000";

function BuildItinerary({ tripId }) {
    const [trip, setTrip] = useState(null);
    const [stops, setStops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Section states
    const [showAddSection, setShowAddSection] = useState(false);
    const [addingSection, setAddingSection] = useState(false);
    const [editingSection, setEditingSection] = useState(null);

    const [newSection, setNewSection] = useState({
        city: "",
        date: "",
        description: ""
    });

    const [sectionForm, setSectionForm] = useState({
        city: "",
        date: "",
        description: ""
    });

    // Activity states
    const [addingActivityFor, setAddingActivityFor] = useState(null);
    const [editingActivity, setEditingActivity] = useState(null);

    const [activityForm, setActivityForm] = useState({
        name: "",
        description: "",
        activity_date: "",
        start_time: "",
        end_time: "",
        estimated_cost: "",
        location: ""
    });

    // --------------------------------------------------
    // LOAD ITINERARY
    // --------------------------------------------------

    useEffect(() => {
        if (tripId) {
            loadItinerary();
        }
    }, [tripId]);

    const loadItinerary = async () => {
        try {
            setLoading(true);
            setError("");

            // Get trip
            const tripResponse = await fetch(
                `${API_URL}/trip/${tripId}`
            );

            if (!tripResponse.ok) {
                throw new Error("Failed to load trip");
            }

            const tripData = await tripResponse.json();
            setTrip(tripData);

            // Get stops
            const stopsResponse = await fetch(
                `${API_URL}/trip/${tripId}/stops`
            );

            if (!stopsResponse.ok) {
                throw new Error("Failed to load stops");
            }

            const stopsData = await stopsResponse.json();

            // Sort sections by date
            const sortedStops = [...stopsData].sort(
                (a, b) =>
                    new Date(a.date) - new Date(b.date)
            );

            // Get activities for every stop
            const stopsWithActivities = await Promise.all(
                sortedStops.map(async (stop) => {
                    const activityResponse = await fetch(
                        `${API_URL}/tripstop/${stop._id}/activities`
                    );

                    if (!activityResponse.ok) {
                        throw new Error(
                            `Failed to load activities for ${stop.city}`
                        );
                    }

                    const activities =
                        await activityResponse.json();

                    // Sort activities by date and time
                    activities.sort((a, b) => {
                        const dateDifference =
                            new Date(a.activity_date) -
                            new Date(b.activity_date);

                        if (dateDifference !== 0) {
                            return dateDifference;
                        }

                        return (
                            a.start_time || ""
                        ).localeCompare(
                            b.start_time || ""
                        );
                    });

                    return {
                        ...stop,
                        activities
                    };
                })
            );

            setStops(stopsWithActivities);

        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // --------------------------------------------------
    // ADD SECTION
    // --------------------------------------------------

    const handleAddSection = async (e) => {
        e.preventDefault();

        if (!newSection.city || !newSection.date) {
            return;
        }

        try {
            setAddingSection(true);
            setError("");

            const response = await fetch(
                `${API_URL}/trip/${tripId}/stops`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newSection)
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to add section"
                );
            }

            setNewSection({
                city: "",
                date: "",
                description: ""
            });

            setShowAddSection(false);

            await loadItinerary();

        } catch (error) {
            console.error(error);
            setError(error.message);
        } finally {
            setAddingSection(false);
        }
    };

    // --------------------------------------------------
    // EDIT SECTION
    // --------------------------------------------------

    const handleEditSection = async (e) => {
        e.preventDefault();

        if (!editingSection) {
            return;
        }

        try {
            setError("");

            const response = await fetch(
                `${API_URL}/tripstop/${editingSection._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(sectionForm)
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "Failed to update section"
                );
            }

            setEditingSection(null);

            setSectionForm({
                city: "",
                date: "",
                description: ""
            });

            await loadItinerary();

        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    };

    // --------------------------------------------------
    // ADD ACTIVITY
    // --------------------------------------------------

    const handleAddActivity = async (e, stopId) => {
        e.preventDefault();

        if (
            !activityForm.name ||
            !activityForm.activity_date ||
            !activityForm.start_time
        ) {
            setError(
                "Activity name, date and start time are required."
            );
            return;
        }

        try {
            setError("");

            const response = await fetch(
                `${API_URL}/tripstop/${stopId}/activities`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: activityForm.name,
                        description:
                            activityForm.description,
                        activity_date:
                            activityForm.activity_date,
                        start_time:
                            activityForm.start_time,
                        end_time:
                            activityForm.end_time,
                        estimated_cost:
                            Number(
                                activityForm.estimated_cost
                            ) || 0,
                        location:
                            activityForm.location
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "Failed to add activity"
                );
            }

            resetActivityForm();

            setAddingActivityFor(null);

            await loadItinerary();

        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    };

    // --------------------------------------------------
    // EDIT ACTIVITY
    // --------------------------------------------------

    const handleEditActivity = async (e) => {
        e.preventDefault();

        if (!editingActivity) {
            return;
        }

        try {
            setError("");

            const response = await fetch(
                `${API_URL}/activity/${editingActivity._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: activityForm.name,
                        description:
                            activityForm.description,
                        activity_date:
                            activityForm.activity_date,
                        start_time:
                            activityForm.start_time,
                        end_time:
                            activityForm.end_time,
                        estimated_cost:
                            Number(
                                activityForm.estimated_cost
                            ) || 0,
                        location:
                            activityForm.location
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "Failed to update activity"
                );
            }

            setEditingActivity(null);

            resetActivityForm();

            await loadItinerary();

        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    };

    // --------------------------------------------------
    // RESET ACTIVITY FORM
    // --------------------------------------------------

    const resetActivityForm = () => {
        setActivityForm({
            name: "",
            description: "",
            activity_date: "",
            start_time: "",
            end_time: "",
            estimated_cost: "",
            location: ""
        });
    };

    // --------------------------------------------------
    // OPEN ADD ACTIVITY
    // --------------------------------------------------

    const openAddActivity = (stop) => {
        setEditingActivity(null);

        setActivityForm({
            name: "",
            description: "",
            activity_date: stop.date
                ? stop.date.substring(0, 10)
                : "",
            start_time: "",
            end_time: "",
            estimated_cost: "",
            location: ""
        });

        setAddingActivityFor(stop._id);
    };

    // --------------------------------------------------
    // OPEN EDIT ACTIVITY
    // --------------------------------------------------

    const openEditActivity = (activity) => {
        setAddingActivityFor(null);

        setEditingActivity(activity);

        setActivityForm({
            name: activity.name || "",
            description:
                activity.description || "",
            activity_date:
                activity.activity_date
                    ? activity.activity_date.substring(
                          0,
                          10
                      )
                    : "",
            start_time:
                activity.start_time || "",
            end_time:
                activity.end_time || "",
            estimated_cost:
                activity.estimated_cost ?? "",
            location:
                activity.location || ""
        });
    };

    // --------------------------------------------------
    // OPEN EDIT SECTION
    // --------------------------------------------------

    const openEditSection = (stop) => {
        setEditingSection(stop);

        setSectionForm({
            city: stop.city || "",
            date: stop.date
                ? stop.date.substring(0, 10)
                : "",
            description:
                stop.description || ""
        });
    };

    // --------------------------------------------------
    // FORMAT DATE
    // --------------------------------------------------

    const formatDate = (date) => {
        if (!date) {
            return "";
        }

        return new Date(date).toLocaleDateString(
            "en-US",
            {
                day: "numeric",
                month: "short",
                year: "numeric"
            }
        );
    };

    // --------------------------------------------------
    // FORMAT TIME
    // --------------------------------------------------

    const formatTime = (time) => {
        if (!time) {
            return "";
        }

        const [hours, minutes] =
            time.split(":");

        const date = new Date();

        date.setHours(
            Number(hours),
            Number(minutes)
        );

        return date.toLocaleTimeString(
            "en-US",
            {
                hour: "numeric",
                minute: "2-digit"
            }
        );
    };

    // --------------------------------------------------
    // LOADING
    // --------------------------------------------------

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">
                    Loading itinerary...
                </p>
            </div>
        );
    }

    // --------------------------------------------------
    // ERROR
    // --------------------------------------------------

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-500 mb-4">
                        {error}
                    </p>

                    <button
                        onClick={() => {
                            setError("");
                            loadItinerary();
                        }}
                        className="px-5 py-2 rounded-lg bg-black text-white"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    // --------------------------------------------------
    // PAGE
    // --------------------------------------------------

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-10">

            <div className="max-w-5xl mx-auto">

                {/* ============================
                    PAGE HEADER
                ============================ */}

                <div className="mb-10">

                    <p className="text-sm text-gray-500 mb-2">
                        Build Itinerary
                    </p>

                    <h1 className="text-3xl font-semibold text-gray-900">
                        {trip?.name}
                    </h1>

                    {trip?.description && (
                        <p className="mt-2 text-gray-500">
                            {trip.description}
                        </p>
                    )}

                    {trip && (
                        <p className="mt-3 text-sm text-gray-400">
                            {formatDate(
                                trip.start_date
                            )}{" "}
                            -{" "}
                            {formatDate(
                                trip.end_date
                            )}
                        </p>
                    )}

                </div>

                {/* ============================
                    SECTIONS
                ============================ */}

                <div className="space-y-6">

                    {stops.length === 0 ? (

                        <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center">

                            <h2 className="text-lg font-medium">
                                No sections yet
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Add a destination to
                                start building your
                                itinerary.
                            </p>

                        </div>

                    ) : (

                        stops.map((stop, index) => (

                            <div
                                key={stop._id}
                                className="bg-white border border-gray-200 rounded-2xl p-6"
                            >

                                {/* ====================
                                    SECTION HEADER
                                ==================== */}

                                <div className="flex items-start justify-between">

                                    <div>

                                        <p className="text-sm text-gray-400">
                                            Section{" "}
                                            {index + 1}
                                        </p>

                                        <h2 className="text-2xl font-semibold text-gray-900 mt-1">
                                            {stop.city}
                                        </h2>

                                        <p className="text-sm text-gray-500 mt-2">
                                            {formatDate(
                                                stop.date
                                            )}
                                        </p>

                                    </div>

                                    <button
                                        onClick={() =>
                                            openEditSection(
                                                stop
                                            )
                                        }
                                        className="text-sm text-gray-400 hover:text-gray-700"
                                    >
                                        Edit
                                    </button>

                                </div>

                                {/* ====================
                                    SECTION DESCRIPTION
                                ==================== */}

                                {stop.description && (
                                    <p className="mt-5 text-gray-600">
                                        {stop.description}
                                    </p>
                                )}

                                {/* ====================
                                    EDIT SECTION
                                ==================== */}

                                {editingSection?._id ===
                                    stop._id && (

                                    <form
                                        onSubmit={
                                            handleEditSection
                                        }
                                        className="mt-5 border border-gray-200 rounded-xl p-5 bg-gray-50"
                                    >

                                        <h3 className="font-semibold text-gray-900 mb-4">
                                            Edit Section
                                        </h3>

                                        <div className="space-y-4">

                                            <div>

                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    City
                                                </label>

                                                <input
                                                    type="text"
                                                    value={
                                                        sectionForm.city
                                                    }
                                                    onChange={(
                                                        e
                                                    ) =>
                                                        setSectionForm(
                                                            {
                                                                ...sectionForm,
                                                                city: e
                                                                    .target
                                                                    .value
                                                            }
                                                        )
                                                    }
                                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                                    required
                                                />

                                            </div>

                                            <div>

                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Date
                                                </label>

                                                <input
                                                    type="date"
                                                    value={
                                                        sectionForm.date
                                                    }
                                                    onChange={(
                                                        e
                                                    ) =>
                                                        setSectionForm(
                                                            {
                                                                ...sectionForm,
                                                                date: e
                                                                    .target
                                                                    .value
                                                            }
                                                        )
                                                    }
                                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                                    required
                                                />

                                            </div>

                                            <div>

                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Description
                                                </label>

                                                <textarea
                                                    value={
                                                        sectionForm.description
                                                    }
                                                    onChange={(
                                                        e
                                                    ) =>
                                                        setSectionForm(
                                                            {
                                                                ...sectionForm,
                                                                description:
                                                                    e
                                                                        .target
                                                                        .value
                                                            }
                                                        )
                                                    }
                                                    rows={3}
                                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none"
                                                />

                                            </div>

                                        </div>

                                        <div className="flex gap-3 mt-5">

                                            <button
                                                type="submit"
                                                className="px-5 py-2 bg-black text-white rounded-lg"
                                            >
                                                Save Changes
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setEditingSection(
                                                        null
                                                    )
                                                }
                                                className="px-5 py-2 border border-gray-300 rounded-lg"
                                            >
                                                Cancel
                                            </button>

                                        </div>

                                    </form>
                                )}

                                {/* ====================
                                    ACTIVITIES
                                ==================== */}

                                <div className="mt-6">

                                    <h3 className="text-sm font-semibold text-gray-700 mb-3">
                                        Activities
                                    </h3>

                                    {stop.activities.length ===
                                    0 ? (

                                        <p className="text-sm text-gray-400">
                                            No activities
                                            added.
                                        </p>

                                    ) : (

                                        <div className="space-y-3">

                                            {stop.activities.map(
                                                (
                                                    activity
                                                ) => (

                                                    <div
                                                        key={
                                                            activity._id
                                                        }
                                                    >

                                                        {/* ACTIVITY CARD */}

                                                        <div className="border border-gray-100 rounded-xl p-4">

                                                            <div className="flex justify-between gap-5">

                                                                <div className="min-w-0">

                                                                    <h4 className="font-medium text-gray-900">
                                                                        {
                                                                            activity.name
                                                                        }
                                                                    </h4>

                                                                    {activity.description && (
                                                                        <p className="text-sm text-gray-500 mt-1">
                                                                            {
                                                                                activity.description
                                                                            }
                                                                        </p>
                                                                    )}

                                                                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">

                                                                        <span>
                                                                            {formatDate(
                                                                                activity.activity_date
                                                                            )}
                                                                        </span>

                                                                        {activity.start_time && (
                                                                            <span>
                                                                                {formatTime(
                                                                                    activity.start_time
                                                                                )}

                                                                                {activity.end_time &&
                                                                                    ` - ${formatTime(
                                                                                        activity.end_time
                                                                                    )}`}
                                                                            </span>
                                                                        )}

                                                                        {activity.location && (
                                                                            <span>
                                                                                {
                                                                                    activity.location
                                                                                }
                                                                            </span>
                                                                        )}

                                                                    </div>

                                                                </div>

                                                                <div className="flex flex-col items-end gap-2">

                                                                    <div className="text-sm font-medium whitespace-nowrap">
                                                                        ₹
                                                                        {activity.estimated_cost ||
                                                                            0}
                                                                    </div>

                                                                    <button
                                                                        type="button"
                                                                        onClick={() =>
                                                                            openEditActivity(
                                                                                activity
                                                                            )
                                                                        }
                                                                        className="text-sm text-gray-400 hover:text-black"
                                                                    >
                                                                        Edit
                                                                    </button>

                                                                </div>

                                                            </div>

                                                        </div>

                                                        {/* EDIT ACTIVITY FORM */}

                                                        {editingActivity?._id ===
                                                            activity._id && (

                                                            <form
                                                                onSubmit={
                                                                    handleEditActivity
                                                                }
                                                                className="mt-3 border border-gray-200 rounded-xl p-5 bg-gray-50"
                                                            >

                                                                <h4 className="font-semibold text-gray-900 mb-4">
                                                                    Edit Activity
                                                                </h4>

                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                                                    <div>

                                                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                            Activity Name
                                                                        </label>

                                                                        <input
                                                                            type="text"
                                                                            value={
                                                                                activityForm.name
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                setActivityForm(
                                                                                    {
                                                                                        ...activityForm,
                                                                                        name: e
                                                                                            .target
                                                                                            .value
                                                                                    }
                                                                                )
                                                                            }
                                                                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                                                            required
                                                                        />

                                                                    </div>

                                                                    <div>

                                                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                            Location
                                                                        </label>

                                                                        <input
                                                                            type="text"
                                                                            value={
                                                                                activityForm.location
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                setActivityForm(
                                                                                    {
                                                                                        ...activityForm,
                                                                                        location:
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                    }
                                                                                )
                                                                            }
                                                                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                                                        />

                                                                    </div>

                                                                    <div>

                                                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                            Date
                                                                        </label>

                                                                        <input
                                                                            type="date"
                                                                            value={
                                                                                activityForm.activity_date
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                setActivityForm(
                                                                                    {
                                                                                        ...activityForm,
                                                                                        activity_date:
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                    }
                                                                                )
                                                                            }
                                                                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                                                            required
                                                                        />

                                                                    </div>

                                                                    <div>

                                                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                            Estimated Cost
                                                                        </label>

                                                                        <input
                                                                            type="number"
                                                                            min="0"
                                                                            value={
                                                                                activityForm.estimated_cost
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                setActivityForm(
                                                                                    {
                                                                                        ...activityForm,
                                                                                        estimated_cost:
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                    }
                                                                                )
                                                                            }
                                                                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                                                        />

                                                                    </div>

                                                                    <div>

                                                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                            Start Time
                                                                        </label>

                                                                        <input
                                                                            type="time"
                                                                            value={
                                                                                activityForm.start_time
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                setActivityForm(
                                                                                    {
                                                                                        ...activityForm,
                                                                                        start_time:
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                    }
                                                                                )
                                                                            }
                                                                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                                                            required
                                                                        />

                                                                    </div>

                                                                    <div>

                                                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                            End Time
                                                                        </label>

                                                                        <input
                                                                            type="time"
                                                                            value={
                                                                                activityForm.end_time
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                setActivityForm(
                                                                                    {
                                                                                        ...activityForm,
                                                                                        end_time:
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                    }
                                                                                )
                                                                            }
                                                                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                                                        />

                                                                    </div>

                                                                </div>

                                                                <div className="mt-4">

                                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                        Description
                                                                    </label>

                                                                    <textarea
                                                                        value={
                                                                            activityForm.description
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            setActivityForm(
                                                                                {
                                                                                    ...activityForm,
                                                                                    description:
                                                                                        e
                                                                                            .target
                                                                                            .value
                                                                                }
                                                                            )
                                                                        }
                                                                        rows={3}
                                                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none"
                                                                    />

                                                                </div>

                                                                <div className="flex gap-3 mt-5">

                                                                    <button
                                                                        type="submit"
                                                                        className="px-5 py-2 bg-black text-white rounded-lg"
                                                                    >
                                                                        Save Changes
                                                                    </button>

                                                                    <button
                                                                        type="button"
                                                                        onClick={() =>
                                                                            setEditingActivity(
                                                                                null
                                                                            )
                                                                        }
                                                                        className="px-5 py-2 border border-gray-300 rounded-lg"
                                                                    >
                                                                        Cancel
                                                                    </button>

                                                                </div>

                                                            </form>
                                                        )}

                                                    </div>

                                                )
                                            )}

                                        </div>
                                    )}

                                    {/* ADD ACTIVITY BUTTON */}

                                    <button
                                        type="button"
                                        onClick={() =>
                                            openAddActivity(
                                                stop
                                            )
                                        }
                                        className="mt-4 text-sm font-medium text-gray-600 hover:text-black"
                                    >
                                        + Add Activity
                                    </button>

                                    {/* ADD ACTIVITY FORM */}

                                    {addingActivityFor ===
                                        stop._id && (

                                        <form
                                            onSubmit={(e) =>
                                                handleAddActivity(
                                                    e,
                                                    stop._id
                                                )
                                            }
                                            className="mt-4 border border-gray-200 rounded-xl p-5 bg-gray-50"
                                        >

                                            <h4 className="font-semibold text-gray-900 mb-4">
                                                Add Activity
                                            </h4>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                                <div>

                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Activity Name
                                                    </label>

                                                    <input
                                                        type="text"
                                                        placeholder="e.g. Eiffel Tower"
                                                        value={
                                                            activityForm.name
                                                        }
                                                        onChange={(
                                                            e
                                                        ) =>
                                                            setActivityForm(
                                                                {
                                                                    ...activityForm,
                                                                    name: e
                                                                        .target
                                                                        .value
                                                                }
                                                            )
                                                        }
                                                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                                        required
                                                    />

                                                </div>

                                                <div>

                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Location
                                                    </label>

                                                    <input
                                                        type="text"
                                                        placeholder="e.g. Paris"
                                                        value={
                                                            activityForm.location
                                                        }
                                                        onChange={(
                                                            e
                                                        ) =>
                                                            setActivityForm(
                                                                {
                                                                    ...activityForm,
                                                                    location:
                                                                        e
                                                                            .target
                                                                            .value
                                                                }
                                                            )
                                                        }
                                                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                                    />

                                                </div>

                                                <div>

                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Date
                                                    </label>

                                                    <input
                                                        type="date"
                                                        value={
                                                            activityForm.activity_date
                                                        }
                                                        onChange={(
                                                            e
                                                        ) =>
                                                            setActivityForm(
                                                                {
                                                                    ...activityForm,
                                                                    activity_date:
                                                                        e
                                                                            .target
                                                                            .value
                                                                }
                                                            )
                                                        }
                                                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                                        required
                                                    />

                                                </div>

                                                <div>

                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Estimated Cost
                                                    </label>

                                                    <input
                                                        type="number"
                                                        min="0"
                                                        placeholder="0"
                                                        value={
                                                            activityForm.estimated_cost
                                                        }
                                                        onChange={(
                                                            e
                                                        ) =>
                                                            setActivityForm(
                                                                {
                                                                    ...activityForm,
                                                                    estimated_cost:
                                                                        e
                                                                            .target
                                                                            .value
                                                                }
                                                            )
                                                        }
                                                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                                    />

                                                </div>

                                                <div>

                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Start Time
                                                    </label>

                                                    <input
                                                        type="time"
                                                        value={
                                                            activityForm.start_time
                                                        }
                                                        onChange={(
                                                            e
                                                        ) =>
                                                            setActivityForm(
                                                                {
                                                                    ...activityForm,
                                                                    start_time:
                                                                        e
                                                                            .target
                                                                            .value
                                                                }
                                                            )
                                                        }
                                                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                                        required
                                                    />

                                                </div>

                                                <div>

                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        End Time
                                                    </label>

                                                    <input
                                                        type="time"
                                                        value={
                                                            activityForm.end_time
                                                        }
                                                        onChange={(
                                                            e
                                                        ) =>
                                                            setActivityForm(
                                                                {
                                                                    ...activityForm,
                                                                    end_time:
                                                                        e
                                                                            .target
                                                                            .value
                                                                }
                                                            )
                                                        }
                                                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                                    />

                                                </div>

                                            </div>

                                            <div className="mt-4">

                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Description
                                                </label>

                                                <textarea
                                                    placeholder="Describe the activity..."
                                                    value={
                                                        activityForm.description
                                                    }
                                                    onChange={(
                                                        e
                                                    ) =>
                                                        setActivityForm(
                                                            {
                                                                ...activityForm,
                                                                description:
                                                                    e
                                                                        .target
                                                                        .value
                                                            }
                                                        )
                                                    }
                                                    rows={3}
                                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none"
                                                />

                                            </div>

                                            <div className="flex gap-3 mt-5">

                                                <button
                                                    type="submit"
                                                    className="px-5 py-2 bg-black text-white rounded-lg"
                                                >
                                                    Add Activity
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setAddingActivityFor(
                                                            null
                                                        );
                                                        resetActivityForm();
                                                    }}
                                                    className="px-5 py-2 border border-gray-300 rounded-lg"
                                                >
                                                    Cancel
                                                </button>

                                            </div>

                                        </form>
                                    )}

                                </div>

                            </div>
                        ))
                    )}

                </div>

                {/* ============================
                    ADD SECTION
                ============================ */}

                {!showAddSection && (
                    <button
                        type="button"
                        onClick={() =>
                            setShowAddSection(true)
                        }
                        className="mt-8 w-full border-2 border-dashed border-gray-300 rounded-2xl py-6 text-gray-500 hover:border-gray-400 hover:text-gray-700 transition"
                    >
                        + Add Another Section
                    </button>
                )}

                {showAddSection && (

                    <form
                        onSubmit={handleAddSection}
                        className="mt-8 bg-white border border-gray-200 rounded-2xl p-6"
                    >

                        <h2 className="text-xl font-semibold text-gray-900">
                            Add Section
                        </h2>

                        <p className="text-sm text-gray-500 mt-1 mb-6">
                            Add a new destination to
                            your itinerary.
                        </p>

                        {/* CITY */}

                        <div className="mb-4">

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                City
                            </label>

                            <input
                                type="text"
                                placeholder="e.g. Mumbai"
                                value={
                                    newSection.city
                                }
                                onChange={(e) =>
                                    setNewSection({
                                        ...newSection,
                                        city: e.target.value
                                    })
                                }
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                                required
                            />

                        </div>

                        {/* DATE */}

                        <div className="mb-4">

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Date
                            </label>

                            <input
                                type="date"
                                value={
                                    newSection.date
                                }
                                onChange={(e) =>
                                    setNewSection({
                                        ...newSection,
                                        date: e.target.value
                                    })
                                }
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                                required
                            />

                        </div>

                        {/* DESCRIPTION */}

                        <div className="mb-6">

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Description
                            </label>

                            <textarea
                                placeholder="Describe this section..."
                                value={
                                    newSection.description
                                }
                                onChange={(e) =>
                                    setNewSection({
                                        ...newSection,
                                        description:
                                            e.target.value
                                    })
                                }
                                rows={4}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black resize-none"
                            />

                        </div>

                        {/* BUTTONS */}

                        <div className="flex gap-3">

                            <button
                                type="submit"
                                disabled={
                                    addingSection
                                }
                                className="px-5 py-3 bg-black text-white rounded-lg hover:bg-gray-800 disabled:opacity-50"
                            >
                                {addingSection
                                    ? "Adding..."
                                    : "Add Section"}
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setShowAddSection(
                                        false
                                    );

                                    setNewSection({
                                        city: "",
                                        date: "",
                                        description:
                                            ""
                                    });
                                }}
                                className="px-5 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                            >
                                Cancel
                            </button>

                        </div>

                    </form>
                )}

            </div>
        </div>
    );
}

export default BuildItinerary;