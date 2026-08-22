const TimelineActivity = ({ activity }) => {
  return (
    <div className="relative flex gap-5 group">

      <div className="w-14 shrink-0 pt-5 text-right">
        <span className="text-sm font-medium text-[#6F716E]">
          {activity.time}
        </span>
      </div>

      <div className="relative z-10 flex items-center justify-center w-10 h-10 shrink-0 mt-3">

        <div className="w-3.5 h-3.5 rounded-full bg-[#173B35] border-4 border-[#F8F7F3]" />

      </div>

      <div className="flex-1 bg-white border border-[#D9DAD5] rounded-2xl p-5 hover:border-[#173B35] transition">

        <div className="flex items-start justify-between gap-4">

          <div>
            <p className="text-xs uppercase tracking-widest text-[#C49A55] mb-1">
              {activity.category}
            </p>

            <h3 className="font-serif text-2xl text-[#182321]">
              {activity.title}
            </h3>

            <p className="text-sm text-[#6F716E] mt-2">
              {activity.location}
              {" · "}
              {activity.duration}
            </p>
          </div>

          <div className="flex items-center gap-2">

            <button className="w-9 h-9 rounded-full hover:bg-[#EDE9E0] text-[#6F716E] transition">
              ✎
            </button>

            <button className="w-9 h-9 rounded-full hover:bg-[#EDE9E0] text-[#6F716E] cursor-grab">
              ⋮⋮
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default TimelineActivity;