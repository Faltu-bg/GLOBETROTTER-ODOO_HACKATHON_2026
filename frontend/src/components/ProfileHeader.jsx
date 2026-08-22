const ProfileHeader = ({ user }) => {

    return (

        <div className="bg-[#FFFCF5] border border-[#DED8CA] rounded-2xl p-6 shadow-sm">

            <div className="flex flex-col md:flex-row items-center gap-6">

                {/* Profile Photo */}
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#C49A55]">

                    {user?.profile_photo_url ? (
                        <img
                            src={user.profile_photo_url}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-[#E9E3D5] flex items-center justify-center">
                            <span className="text-3xl text-[#1E3A32]">
                                {user?.first?.charAt(0)}
                            </span>
                        </div>
                    )}

                </div>


                {/* User Information */}
                <div className="flex-1 text-center md:text-left">

                    <h2 className="text-2xl font-serif text-[#182321]">
                        {user?.first} {user?.last}
                    </h2>

                    <p className="text-[#6F716E] mt-1">
                        {user?.email}
                    </p>


                    <button
                        className="mt-4 px-5 py-2 rounded-lg bg-[#1E3A32] text-white text-sm hover:bg-[#284B40] transition"
                    >
                        Edit Profile
                    </button>

                </div>

            </div>

        </div>

    );
};

export default ProfileHeader;