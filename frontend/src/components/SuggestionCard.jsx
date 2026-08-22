const SuggestionCard = ({
  image,
  title,
  location,
  type,
  onAdd
}) => {

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#E5E2D9] hover:shadow-lg transition duration-300">

      <div className="h-52 overflow-hidden relative">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#F8F7F3]/90 text-xs text-[#173B35]">
          {type}
        </div>

      </div>

      <div className="p-5">

        <p className="text-[#C49A55] text-xs uppercase tracking-[0.2em]">
          {location}
        </p>

        <h3 className="mt-2 text-xl font-serif text-[#182321]">
          {title}
        </h3>

        <button
          type="button"
          onClick={onAdd}
          className="mt-4 w-full py-2.5 rounded-lg border border-[#173B35] text-[#173B35] text-sm hover:bg-[#173B35] hover:text-white transition duration-300"
        >
          Add to Trip
        </button>

      </div>

    </div>
  );
};

export default SuggestionCard;