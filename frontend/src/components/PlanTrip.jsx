const PlanTrip=() => {
    return <div>
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

        <section className="bg-[#F0EDE4] rounded-2xl border border-[#D8D2C5] p-6 md:p-8 shadow-sm">

          <h2 className="text-2xl font-serif text-[#182321] mb-6">
            Trip Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block text-sm text-[#173B35] mb-2">
                Trip Name
              </label>

              <input
                type="text"
                placeholder="Enter trip name"
                className="w-full h-12 px-4 rounded-lg border border-[#D9DAD5] bg-white outline-none text-[#182321] focus:border-[#173B35]"
              />
            </div>

            <div>
              <label className="block text-sm text-[#173B35] mb-2">
                Select a Place
              </label>

              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full h-12 px-4 rounded-lg border border-[#D9DAD5] bg-white outline-none text-[#182321] focus:border-[#173B35]"
              />
            </div>

            <div>
              <label className="block text-sm text-[#173B35] mb-2">
                Start Date
              </label>

              <input
                type="date"
                className="w-full h-12 px-4 rounded-lg border border-[#D9DAD5] bg-white outline-none text-[#182321] focus:border-[#173B35]"
              />
            </div>

            <div>
              <label className="block text-sm text-[#173B35] mb-2">
                End Date
              </label>

              <input
                type="date"
                className="w-full h-12 px-4 rounded-lg border border-[#D9DAD5] bg-white outline-none text-[#182321] focus:border-[#173B35]"
              />
            </div>

          </div>

          <div className="mt-6">
            <label className="block text-sm text-[#173B35] mb-2">
              Trip Description
            </label>

            <textarea
              rows="4"
              placeholder="Tell us something about your trip..."
              className="w-full px-4 py-3 rounded-lg border border-[#D9DAD5] bg-white outline-none text-[#182321] resize-none focus:border-[#173B35]"
            ></textarea>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-7 py-3 rounded-full bg-[#173B35] text-white hover:bg-[#102D28] transition duration-300">
              Create Trip →
            </button>
          </div>

        </section>
        </div>
}
export default PlanTrip