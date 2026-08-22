const Preferences = () => {
  return (
    <section className="mt-10">

      <h2 className="text-2xl font-serif text-[#182321]">
        Preferences
      </h2>

      <div className="bg-[#FFFCF5] border border-[#DED8CA] rounded-2xl mt-4 divide-y divide-[#DED8CA]">

        <div className="flex items-center justify-between p-5">

          <div>
            <p className="text-[#182321] font-medium">
              Language
            </p>

            <p className="text-sm text-[#6F716E] mt-1">
              Choose your preferred language
            </p>
          </div>

          <select className="border border-[#CFC8B9] rounded-lg px-4 py-2 bg-[#F7F4EC] text-[#182321] outline-none">
            <option>English</option>
            <option>Hindi</option>
            <option>Gujarati</option>
          </select>

        </div>

        <div className="flex items-center justify-between p-5">

          <div>
            <p className="text-[#182321] font-medium">
              Privacy
            </p>

            <p className="text-sm text-[#6F716E] mt-1">
              Manage your profile visibility
            </p>
          </div>

          <button className="text-[#1E3A32] font-medium hover:text-[#C49A55]">
            Manage
          </button>

        </div>

      </div>

    </section>
  )
}

export default Preferences