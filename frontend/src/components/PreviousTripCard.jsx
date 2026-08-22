const PreviousTripCard = ({ image, title, location, date, days }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#E5E2D9] hover:shadow-lg transition duration-300">

      <div className="h-48 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#F8F7F3]/90 text-xs text-[#173B35]">
          Completed
        </div>
      </div>

      <div className="p-5">

        <div className="flex justify-between items-start gap-3">
          <div>
            <h3 className="text-xl font-serif text-[#182321]">
              {title}
            </h3>

            <p className="text-sm text-[#6F716E] mt-1">
              {location}
            </p>
          </div>

          <span className="text-[#C49A55] text-lg">
            ✦
          </span>
        </div>

        <div className="border-t border-[#E5E2D9] mt-4 pt-4 flex justify-between text-xs text-[#6F716E]">
          <span>{date}</span>
          <span>{days} Days</span>
        </div>

        <button className="w-full mt-4 py-2.5 rounded-lg border border-[#173B35] text-[#173B35] text-sm hover:bg-[#173B35] hover:text-white transition duration-300">
          View Trip
        </button>

      </div>

    </div>
  )
}

export default PreviousTripCard