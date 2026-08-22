import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlanTrip = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");

    const [loading, setLoading] = useState(false);

    const handleCreateTrip = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const token = localStorage.getItem("token");

            const response = await axios.post(
                "http://localhost:3000/api/create_trip",
                {
                    name,
                    description,
                    start_date: startDate,
                    end_date: endDate
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            console.log("Trip created:", response.data);

            // Go to dashboard after successful creation
            navigate("/dashboard");

        } catch (error) {

            console.error(
                "Failed to create trip:",
                error.response?.data?.message || error.message
            );

        } finally {
            setLoading(false);
        }
    };

    return (
        <div>

            <div className="mb-8">

                <p className="text-[#C49A55] text-sm uppercase tracking-[0.2em]">
                    Start your journey
                </p>

                <h1 className="text-4xl md:text-5xl font-serif text-[#182321] mt-2">
                    Plan a New Trip
                </h1>

                <p className="text-[#6F716E] mt-2">
                    Create your personalized travel experience.
                </p>

            </div>

            <form
                onSubmit={handleCreateTrip}
                className="bg-[#F0EDE4] rounded-2xl border border-[#D8D2C5] p-6 md:p-8 shadow-sm"
            >

                <h2 className="text-2xl font-serif text-[#182321] mb-6">
                    Trip Details
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    {/* Trip Name */}
                    <div>

                        <label className="block text-sm text-[#173B35] mb-2">
                            Trip Name
                        </label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter trip name"
                            required
                            className="w-full h-12 px-4 rounded-lg border border-[#D9DAD5] bg-white outline-none text-[#182321] focus:border-[#173B35]"
                        />

                    </div>

                    {/* Place */}
                    <div>

                        <label className="block text-sm text-[#173B35] mb-2">
                            Select a Place
                        </label>

                        <input
                            type="text"
                            value={place}
                            onChange={(e) => setPlace(e.target.value)}
                            placeholder="Where do you want to go?"
                            className="w-full h-12 px-4 rounded-lg border border-[#D9DAD5] bg-white outline-none text-[#182321] focus:border-[#173B35]"
                        />

                    </div>

                    {/* Start Date */}
                    <div>

                        <label className="block text-sm text-[#173B35] mb-2">
                            Start Date
                        </label>

                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            required
                            className="w-full h-12 px-4 rounded-lg border border-[#D9DAD5] bg-white outline-none text-[#182321] focus:border-[#173B35]"
                        />

                    </div>

                    {/* End Date */}
                    <div>

                        <label className="block text-sm text-[#173B35] mb-2">
                            End Date
                        </label>

                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            required
                            className="w-full h-12 px-4 rounded-lg border border-[#D9DAD5] bg-white outline-none text-[#182321] focus:border-[#173B35]"
                        />

                    </div>

                </div>

                {/* Description */}
                <div className="mt-6">

                    <label className="block text-sm text-[#173B35] mb-2">
                        Trip Description
                    </label>

                    <textarea
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Tell us something about your trip..."
                        className="w-full px-4 py-3 rounded-lg border border-[#D9DAD5] bg-white outline-none text-[#182321] resize-none focus:border-[#173B35]"
                    />

                </div>

                {/* Button */}
                <div className="flex justify-end mt-6">

                    <button
                        type="submit"
                        disabled={loading}
                        className="px-7 py-3 rounded-full bg-[#173B35] text-white hover:bg-[#102D28] transition duration-300 disabled:opacity-50"
                    >
                        {loading ? "Creating..." : "Create Trip →"}
                    </button>

                </div>

            </form>

        </div>
    );
};

export default PlanTrip;