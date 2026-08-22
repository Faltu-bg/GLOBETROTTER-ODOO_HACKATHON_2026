const TripCard = ({ trip }) => {
  return (
    <div className="bg-[#FFFCF5] rounded-2xl overflow-hidden border border-[#DED8CA] shadow-sm hover:shadow-md transition">

      <img
        src={trip.image}
        alt={trip.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">

        <h3 className="text-xl font-serif text-[#182321]">
          {trip.title}
        </h3>

        <p className="text-sm text-[#6F716E] mt-1">
          {trip.location}
        </p>

        <button className="mt-4 w-full border border-[#1E3A32] text-[#1E3A32] rounded-lg py-2 text-sm hover:bg-[#1E3A32] hover:text-white transition">
          View Trip
        </button>

      </div>

    </div>
  )
}

export default TripCard