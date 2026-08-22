import { useState } from "react";

const dates = [
  { day: "MON", date: "12" },
  { day: "TUE", date: "13" },
  { day: "WED", date: "14" },
  { day: "THU", date: "15" },
  { day: "FRI", date: "16" },
  { day: "SAT", date: "17" },
  { day: "SUN", date: "18" }
];

const DateSelector = () => {
  const [selected, setSelected] = useState(2);

  return (
    <div className="bg-white rounded-2xl border border-[#D9DAD5] p-3 mb-8 overflow-x-auto">
      <div className="flex min-w-max gap-2">

        {dates.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`min-w-[90px] px-4 py-4 rounded-xl transition ${
              selected === index
                ? "bg-[#173B35] text-white"
                : "text-[#6F716E] hover:bg-[#EDE9E0]"
            }`}
          >
            <p className="text-xs tracking-widest">
              {item.day}
            </p>

            <p className="font-serif text-2xl mt-1">
              {item.date}
            </p>

            {selected === index && (
              <div className="w-1.5 h-1.5 bg-[#C49A55] rounded-full mx-auto mt-2" />
            )}
          </button>
        ))}

      </div>
    </div>
  );
};

export default DateSelector;