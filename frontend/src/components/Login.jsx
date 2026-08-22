import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import { useAuth } from "../contexts/authContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await login(email, password);

    if (result.success) {
      console.log("Login successful");
      console.log("User:", result.user);

      navigate("/dashboard");
    } else {
      console.error("Login failed:", result.error);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google Login");
  };

  return (
    <div className="min-h-screen bg-[#F7F4EC] flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <div className="text-center mb-8">

          <p className="text-[#C49A55] text-sm uppercase tracking-[0.2em]">
            Welcome Back
          </p>

          <h1 className="text-4xl font-serif text-[#182321] mt-2">
            Login
          </h1>

          <p className="text-[#6F716E] mt-2">
            Access your travel plans and experiences.
          </p>

        </div>

        <div className="bg-[#FFFCF5] border border-[#DED8CA] rounded-2xl p-8 shadow-sm">

          {/* Photo / Logo */}
          <div className="flex justify-center mb-7">

            <div className="w-20 h-20 rounded-full bg-[#E9E3D5] border border-[#C49A55] flex items-center justify-center">

              <span className="text-[#1E3A32] font-serif text-xl">
                GT
              </span>

            </div>

          </div>

          <form onSubmit={handleLogin}>

            {/* Email */}
            <div className="mb-5">

              <label className="block text-sm text-[#182321] mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-lg border border-[#CFC8B9] bg-[#F7F4EC] text-[#182321] outline-none focus:border-[#1E3A32]"
              />

            </div>

            {/* Password */}
            <div className="mb-2">

              <label className="block text-sm text-[#182321] mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 rounded-lg border border-[#CFC8B9] bg-[#F7F4EC] text-[#182321] outline-none focus:border-[#1E3A32]"
              />

            </div>

            {/* Forgot Password */}
            <div className="flex justify-end mb-6">

              <button
                type="button"
                onClick={() => setForgotPasswordOpen(true)}
                className="text-sm text-[#1E3A32] hover:text-[#C49A55] transition"
              >
                Forgot Password?
              </button>

            </div>

            {/* Login */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#1E3A32] text-white font-medium hover:bg-[#284B40] transition"
            >
              Login
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">

            <div className="flex-1 h-px bg-[#DED8CA]" />

            <span className="text-sm text-[#8A8B86]">
              OR
            </span>

            <div className="flex-1 h-px bg-[#DED8CA]" />

          </div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full py-3 rounded-lg border border-[#CFC8B9] bg-white text-[#182321] font-medium flex items-center justify-center gap-3 hover:bg-[#F7F4EC] transition"
          >

            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4285F4"
                d="M21.35 12.23c0-.79-.07-1.55-.23-2.27H12v4.3h5.22a4.47 4.47 0 0 1-1.94 2.93v2.43h3.14c1.84-1.69 2.93-4.18 2.93-7.39Z"
              />

              <path
                fill="#34A853"
                d="M12 21.6c2.63 0 4.84-.87 6.45-2.35l-3.14-2.43c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.29v2.5A9.74 9.74 0 0 0 12 21.6Z"
              />

              <path
                fill="#FBBC05"
                d="M6.54 13.72A5.84 5.84 0 0 1 6.23 12c0-.6.11-1.18.31-1.72v-2.5H3.29A9.74 9.74 0 0 0 2.25 12c0 1.57.38 3.05 1.04 4.22l3.25-2.5Z"
              />

              <path
                fill="#EA4335"
                d="M12 6.25c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 3.35 14.63 2.4 12 2.4a9.74 9.74 0 0 0-8.71 5.38l3.25 2.5C7.31 7.97 9.46 6.25 12 6.25Z"
              />
            </svg>

            Continue with Google

          </button>

          {/* Signup */}
          <p className="text-center text-sm text-[#6F716E] mt-6">

            Don't have an account?

            <button
              type="button"
              className="ml-1 text-[#1E3A32] font-medium hover:text-[#C49A55]"
            >
              <Link to="/signup">
                Sign Up
              </Link>
            </button>

          </p>

        </div>

      </div>

      <ForgotPassword
        open={forgotPasswordOpen}
        onClose={() => setForgotPasswordOpen(false)}
      />

    </div>
  );
};

export default Login;