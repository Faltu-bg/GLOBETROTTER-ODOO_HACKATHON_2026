import { useState } from 'react'

const ForgotPassword = ({ open, onClose }) => {

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email) {
      setMessage("Please enter your email address.")
      return
    }

    setMessage("Password reset link has been sent to your email.")
  }

  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6">

      <div className="relative w-full max-w-md bg-[#FFFCF5] border border-[#DED8CA] rounded-2xl p-8 shadow-xl">

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-5 text-[#6F716E] text-2xl hover:text-[#182321]"
        >
          ×
        </button>

        <div className="text-center mb-7">

          <p className="text-[#C49A55] text-sm uppercase tracking-[0.2em]">
            Account Recovery
          </p>

          <h2 className="text-3xl font-serif text-[#182321] mt-2">
            Forgot Password?
          </h2>

          <p className="text-[#6F716E] text-sm mt-2">
            Enter your email and we'll send you a password reset link.
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <label className="block text-sm text-[#182321] mb-2">
            Email Address
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setMessage("")
            }}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-[#CFC8B9] bg-[#F7F4EC] text-[#182321] outline-none focus:border-[#1E3A32]"
          />

          <button
            type="submit"
            className="w-full mt-6 py-3 rounded-lg bg-[#1E3A32] text-white font-medium hover:bg-[#284B40] transition"
          >
            Send Reset Link
          </button>

        </form>

        {message && (
          <p className="text-sm text-center text-[#1E3A32] mt-5">
            {message}
          </p>
        )}

        <button
          type="button"
          onClick={onClose}
          className="w-full mt-4 text-sm text-[#6F716E] hover:text-[#C49A55]"
        >
          Cancel
        </button>

      </div>

    </div>
  )
}

export default ForgotPassword