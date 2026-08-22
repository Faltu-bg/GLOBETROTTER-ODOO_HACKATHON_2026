import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000";

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        city: "",
        country: "",
        additionalInfo: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        // Check password
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(
                `${API_URL}/api/users/register`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        first: formData.firstName,
                        last: formData.lastName,
                        email: formData.email,
                        password: formData.password
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Registration failed"
                );
            }

            setSuccess(
                "Account created successfully!"
            );

            // Clear form
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
                phone: "",
                city: "",
                country: "",
                additionalInfo: ""
            });

            // Redirect to login
            setTimeout(() => {
                navigate("/");
            }, 1500);

        } catch (error) {
            console.error(error);

            setError(
                error.message ||
                "Something went wrong."
            );

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F7F4EC] flex items-center justify-center px-6 py-10">

            <div className="w-full max-w-3xl">

                {/* Header */}

                <div className="text-center mb-8">

                    <p className="text-[#C49A55] text-sm uppercase tracking-[0.2em]">
                        Begin Your Journey
                    </p>

                    <h1 className="text-4xl font-serif text-[#182321] mt-2">
                        Create Your Account
                    </h1>

                    <p className="text-[#6F716E] mt-2">
                        Create your profile and start planning your next adventure.
                    </p>

                </div>

                <div className="bg-[#FFFCF5] border border-[#DED8CA] rounded-2xl p-8 shadow-sm">

                    {/* Profile Photo */}

                    <div className="flex justify-center mb-8">

                        <div className="w-24 h-24 rounded-full bg-[#E9E3D5] border-2 border-[#C49A55] flex items-center justify-center">

                            <span className="text-[#1E3A32] text-sm">
                                Photo
                            </span>

                        </div>

                    </div>

                    {/* Error */}

                    {error && (
                        <div className="mb-5 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                            {error}
                        </div>
                    )}

                    {/* Success */}

                    {success && (
                        <div className="mb-5 px-4 py-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm">
                            {success}
                        </div>
                    )}

                    <form onSubmit={handleRegister}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* First Name */}

                            <div>

                                <label className="block text-sm text-[#182321] mb-2">
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-[#CFC8B9] bg-[#F7F4EC] text-[#182321] outline-none focus:border-[#1E3A32]"
                                />

                            </div>

                            {/* Last Name */}

                            <div>

                                <label className="block text-sm text-[#182321] mb-2">
                                    Last Name
                                </label>

                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-[#CFC8B9] bg-[#F7F4EC] text-[#182321] outline-none focus:border-[#1E3A32]"
                                />

                            </div>

                            {/* Email */}

                            <div>

                                <label className="block text-sm text-[#182321] mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email address"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-[#CFC8B9] bg-[#F7F4EC] text-[#182321] outline-none focus:border-[#1E3A32]"
                                />

                            </div>

                            {/* Phone */}

                            <div>

                                <label className="block text-sm text-[#182321] mb-2">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone number"
                                    className="w-full px-4 py-3 rounded-lg border border-[#CFC8B9] bg-[#F7F4EC] text-[#182321] outline-none focus:border-[#1E3A32]"
                                />

                            </div>

                            {/* City */}

                            <div>

                                <label className="block text-sm text-[#182321] mb-2">
                                    City
                                </label>

                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="City"
                                    className="w-full px-4 py-3 rounded-lg border border-[#CFC8B9] bg-[#F7F4EC] text-[#182321] outline-none focus:border-[#1E3A32]"
                                />

                            </div>

                            {/* Country */}

                            <div>

                                <label className="block text-sm text-[#182321] mb-2">
                                    Country
                                </label>

                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    placeholder="Country"
                                    className="w-full px-4 py-3 rounded-lg border border-[#CFC8B9] bg-[#F7F4EC] text-[#182321] outline-none focus:border-[#1E3A32]"
                                />

                            </div>

                            {/* Password */}

                            <div>

                                <label className="block text-sm text-[#182321] mb-2">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-[#CFC8B9] bg-[#F7F4EC] text-[#182321] outline-none focus:border-[#1E3A32]"
                                />

                            </div>

                            {/* Confirm Password */}

                            <div>

                                <label className="block text-sm text-[#182321] mb-2">
                                    Confirm Password
                                </label>

                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm password"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-[#CFC8B9] bg-[#F7F4EC] text-[#182321] outline-none focus:border-[#1E3A32]"
                                />

                            </div>

                        </div>

                        {/* Additional Information */}

                        <div className="mt-5">

                            <label className="block text-sm text-[#182321] mb-2">
                                Additional Information
                            </label>

                            <textarea
                                name="additionalInfo"
                                value={formData.additionalInfo}
                                onChange={handleChange}
                                placeholder="Tell us a little about yourself..."
                                rows="5"
                                className="w-full px-4 py-3 rounded-lg border border-[#CFC8B9] bg-[#F7F4EC] text-[#182321] outline-none resize-none focus:border-[#1E3A32]"
                            />

                        </div>

                        {/* Register Button */}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full mt-6 py-3 rounded-lg bg-[#1E3A32] text-white font-medium hover:bg-[#284B40] transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading
                                ? "Creating Account..."
                                : "Create Account"}
                        </button>

                    </form>

                    {/* Login Link */}

                    <p className="text-center text-sm text-[#6F716E] mt-6">

                        Already have an account?

                        <Link
                            to="/"
                            className="ml-1 text-[#1E3A32] font-medium hover:text-[#C49A55]"
                        >
                            Login
                        </Link>

                    </p>

                </div>

            </div>

        </div>
    );
};

export default Register;