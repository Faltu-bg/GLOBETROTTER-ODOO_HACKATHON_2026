import TimelineActivity from "./TimelineActivity";

const activities = [
  {
    time: "09:00",
    title: "Breakfast",
    location: "Hotel Palazzo",
    duration: "1h",
    category: "Breakfast"
  },
  {
    time: "10:30",
    title: "Uffizi Gallery",
    location: "Florence",
    duration: "2h 30m",
    category: "Museum"
  },
  {
    time: "14:00",
    title: "Explore Piazza della Signoria",
    location: "Piazza della Signoria",
    duration: "2h",
    category: "Sightseeing"
  },
  {
    time: "18:30",
    title: "Sunset Dinner",
    location: "Rooftop Restaurant",
    duration: "2h",
    category: "Dining"
  }
];

const Timeline = () => {
  return (
    <div className="relative">

      <div className="absolute left-[74px] top-4 bottom-4 w-px bg-[#D9DAD5]" />

      <div className="space-y-6">

        {activities.map((activity, index) => (
          <TimelineActivity
            key={index}
            activity={activity}
          />
        ))}

      </div>

    </div>
  );
};

export default Timeline;