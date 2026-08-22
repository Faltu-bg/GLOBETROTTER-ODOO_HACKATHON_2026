import { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";

import ProfileHeader from "../components/ProfileHeader";
import Preferences from "../components/Preferences";
import TripSection from "../components/TripSection";
import Delete from "../components/Delete";
import Navbar from "../components/Navbar";

const API_URL = "http://localhost:3000";

const UserProfile = () => {

    const { user, loading: authLoading } = useAuth();

    const [profile, setProfile] = useState(null);
    const [plannedTrips, setPlannedTrips] = useState([]);
    const [previousTrips, setPreviousTrips] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    // =========================
    // LOAD PROFILE
    // =========================

    useEffect(() => {

    if (authLoading) {
        return;
    }

    if (!user?.id) {
        setError("User is not logged in");
        setLoading(false);
        return;
    }

    // Load immediately
    loadProfile();

    // Refresh every 3 seconds
    const interval = setInterval(() => {
        loadProfile();
    }, 3000);

    // Stop interval when leaving page
    return () => {
        clearInterval(interval);
    };

}, [user, authLoading]);


    const loadProfile = async () => {

        try {

            setLoading(true);
            setError("");

            console.log("Profile user:", user);


            // =========================
            // GET USER ID
            // =========================

            const userId = user?.id;

            console.log("Profile user ID:", userId);

            if (!userId) {
                throw new Error("User ID not found");
            }


            // =========================
            // FETCH USER
            // =========================

            const userResponse = await fetch(
                `${API_URL}/user/${userId}`
            );

            console.log(
                "User response:",
                userResponse.status
            );

            if (!userResponse.ok) {
                throw new Error("Failed to load user");
            }

            const userData = await userResponse.json();

            console.log("User data:", userData);

            setProfile(userData);


            // =========================
            // FETCH TRIPS
            // =========================

            const tripsResponse = await fetch(
                `${API_URL}/user/${userId}/trips`
            );

            console.log(
                "Trips response:",
                tripsResponse.status
            );

            if (!tripsResponse.ok) {
                throw new Error("Failed to load trips");
            }

            const tripsData = await tripsResponse.json();

            console.log("Trips data:", tripsData);


            // =========================
            // CURRENT DATE
            // =========================

            const today = new Date();


            // =========================
            // PLANNED TRIPS
            // =========================

            const upcoming = tripsData.filter((trip) => {

                const endDate = new Date(trip.end_date);

                return (
                    endDate >= today &&
                    trip.status !== "completed"
                );

            });


            // =========================
            // PREVIOUS TRIPS
            // =========================

            const previous = tripsData.filter((trip) => {

                const endDate = new Date(trip.end_date);

                return (
                    endDate < today ||
                    trip.status === "completed"
                );

            });


            console.log("Upcoming trips:", upcoming);
            console.log("Previous trips:", previous);


            setPlannedTrips(upcoming);
            setPreviousTrips(previous);

        } catch (err) {

            console.error(
                "Profile loading error:",
                err
            );

            setError(err.message);

        } finally {

            setLoading(false);

        }

    };


    // =========================
    // LOADING
    // =========================

    if (authLoading || loading) {

        return (
            <div className="min-h-screen bg-[#F7F4EC] flex items-center justify-center">

                <p className="text-[#6F716E]">
                    Loading profile...
                </p>

            </div>
        );

    }


    // =========================
    // ERROR
    // =========================

    if (error) {

        return (
            <div className="min-h-screen bg-[#F7F4EC] flex items-center justify-center">

                <div className="text-center">

                    <p className="text-red-600 mb-4">
                        {error}
                    </p>

                    <button
                        onClick={loadProfile}
                        className="px-5 py-2 rounded-lg bg-[#1E3A32] text-white"
                    >
                        Try Again
                    </button>

                </div>

            </div>
        );

    }


    // =========================
    // PROFILE PAGE
    // =========================

    return (

        <div>

            <Navbar />

            <div className="min-h-screen bg-[#F7F4EC] px-6 py-10">

                <div className="max-w-6xl mx-auto">


                    {/* HEADER */}

                    <p className="text-[#C49A55] text-sm uppercase tracking-[0.2em]">
                        My Account
                    </p>

                    <h1 className="text-4xl font-serif text-[#182321] mt-1">
                        User Profile
                    </h1>

                    <p className="text-[#6F716E] mt-2">
                        Manage your profile, preferences and travel history.
                    </p>


                    {/* PROFILE */}

                    <div className="mt-8">

                        <ProfileHeader
                            user={profile}
                        />

                    </div>


                    {/* PREFERENCES */}

                    <Preferences
                        user={profile}
                    />


                    {/* PLANNED TRIPS */}

                    {plannedTrips.length > 0 && (

                        <TripSection
                            label="Upcoming"
                            title="Planned Trips"
                            trips={plannedTrips}
                        />

                    )}


                    {/* PREVIOUS TRIPS */}

                    {previousTrips.length > 0 && (

                        <TripSection
                            label="Travel History"
                            title="Previous Trips"
                            trips={previousTrips}
                        />

                    )}


                    {/* DELETE ACCOUNT */}

                    <Delete
                        user={profile}
                    />

                </div>

            </div>

        </div>

    );

};

export default UserProfile;