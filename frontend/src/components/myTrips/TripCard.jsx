const TripCard = ({ trip }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#D9DAD5] hover:shadow-lg transition duration-300">

      <div className="relative h-56 overflow-hidden">

        <img
          src={trip.image}
          alt={trip.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="absolute top-4 left-4">

          <span
            className={`px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm ${
              trip.status === "Upcoming"
                ? "bg-[#173B35]/90 text-white"
                : "bg-white/90 text-[#6F716E]"
            }`}
          >
            {trip.status}
          </span>

        </div>

        <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-[#182321] hover:bg-white transition">
          ⋮
        </button>

      </div>

      <div className="p-6">

        <div className="flex items-start justify-between gap-4">

          <div>
            <h2 className="font-serif text-2xl text-[#182321]">
              {trip.name}
            </h2>

            <p className="text-sm text-[#6F716E] mt-2">
              {trip.dates}
            </p>
          </div>

          <span className="text-[#C49A55] text-sm whitespace-nowrap">
            {trip.destinations} destinations
          </span>

        </div>

        <div className="h-px bg-[#EDE9E0] my-5" />

        <div className="flex items-center justify-between">

          <button className="text-sm text-[#173B35] font-medium hover:underline">
            View Trip
          </button>

          <div className="flex items-center gap-2">

            <button className="w-9 h-9 rounded-full border border-[#D9DAD5] text-[#6F716E] hover:bg-[#EDE9E0] transition">
              ✎
            </button>

            <button className="w-9 h-9 rounded-full border border-[#D9DAD5] text-[#6F716E] hover:bg-red-50 hover:text-red-600 transition">
              🗑
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default TripCard;