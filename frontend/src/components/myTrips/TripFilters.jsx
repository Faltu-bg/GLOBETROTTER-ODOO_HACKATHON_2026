import { useState } from "react";

const TripFilters = () => {
  const [active, setActive] = useState("All");

  const filters = ["All", "Upcoming", "Past"];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-10 mb-7">

      <div className="flex gap-2">

        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`px-5 py-2 rounded-full text-sm transition ${
              active === filter
                ? "bg-[#173B35] text-white"
                : "bg-white border border-[#D9DAD5] text-[#6F716E] hover:bg-[#EDE9E0]"
            }`}
          >
            {filter}
          </button>
        ))}

      </div>

      <div className="relative">

        <input
          type="text"
          placeholder="Search trips..."
          className="w-full sm:w-64 bg-white border border-[#D9DAD5] rounded-full px-5 py-2.5 text-sm outline-none focus:border-[#173B35]"
        />

      </div>

    </div>
  );
};

export default TripFilters;