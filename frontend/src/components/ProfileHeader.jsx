const ProfileHeader = () => {
  return (
    <div className="bg-[#FFFCF5] border border-[#DED8CA] rounded-2xl p-6 shadow-sm">

      <div className="flex flex-col md:flex-row items-center gap-6">

        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#C49A55]">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 text-center md:text-left">

          <h2 className="text-2xl font-serif text-[#182321]">
            Krishna Sonar
          </h2>

          <p className="text-[#6F716E] mt-1">
            krishna@example.com
          </p>

          <button className="mt-4 px-5 py-2 rounded-lg bg-[#1E3A32] text-white text-sm hover:bg-[#284B40] transition">
            Edit Profile
          </button>

        </div>

      </div>

    </div>
  )
}

export default ProfileHeader