const Card = ({ image, title, location, description }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#E5E2D9] shadow-sm hover:shadow-lg transition duration-300">

      <div className="h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-5">

        <p className="text-[#C49A55] text-xs uppercase tracking-[0.2em]">
          {location}
        </p>

        <h3 className="mt-2 text-xl font-serif text-[#182321]">
          {title}
        </h3>

        <p className="mt-2 text-sm text-[#6F716E] line-clamp-2">
          {description}
        </p>

        <button className="mt-4 text-sm font-medium text-[#173B35] hover:text-[#C49A55] transition">
          Explore →
        </button>

      </div>

    </div>
  )
}

export default Card