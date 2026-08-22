const DaySummary = () => {
  return (
    <div className="mb-8">

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#C49A55] mb-2">
            Wednesday
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-[#182321]">
            Florence
          </h2>

          <p className="text-[#6F716E] mt-2">
            Italy
          </p>
        </div>

        <div className="text-sm text-[#6F716E]">
          <span className="text-[#182321] font-medium">
            3 activities
          </span>
          {" · "}
          8h planned
        </div>

      </div>

    </div>
  );
};

export default DaySummary;