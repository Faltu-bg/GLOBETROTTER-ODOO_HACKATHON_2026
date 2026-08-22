const TripCalendarHeader = () => {
  return (
    <header className="bg-white border-b border-[#D9DAD5]">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full border border-[#D9DAD5] flex items-center justify-center hover:bg-[#EDE9E0] transition">
            ←
          </button>

          <div>
            <h1 className="font-serif text-2xl md:text-3xl text-[#182321]">
              European Escape
            </h1>

            <p className="text-sm text-[#6F716E] mt-1">
              12 Aug — 18 Aug 2026
            </p>
          </div>
        </div>

        <button className="hidden sm:block px-5 py-2.5 rounded-full border border-[#173B35] text-[#173B35] hover:bg-[#173B35] hover:text-white transition">
          Edit Trip
        </button>

      </div>
    </header>
  );
};

export default TripCalendarHeader;