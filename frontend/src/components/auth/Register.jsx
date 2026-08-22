import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    additionalInfo: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-[#F7F4EC] flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-3xl">

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
              className="w-full mt-6 py-3 rounded-lg bg-[#1E3A32] text-white font-medium hover:bg-[#284B40] transition"
            >
              Create Account
            </button>

          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-[#6F716E] mt-6">

            Already have an account?

            <button
              type="button"
              className="ml-1 text-[#1E3A32] font-medium hover:text-[#C49A55]"
            >
              <Link to="/">Login</Link>
            </button>

          </p>

        </div>

      </div>

    </div>
  )
}

export default Register