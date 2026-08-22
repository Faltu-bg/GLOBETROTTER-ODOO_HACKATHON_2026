import TripCard from "./TripCard";

const trips = [
  {
    id: 1,
    name: "European Escape",
    dates: "12 Aug — 18 Aug 2026",
    destinations: 4,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80",
    status: "Upcoming"
  },
  {
    id: 2,
    name: "Alpine Adventure",
    dates: "05 Sep — 12 Sep 2026",
    destinations: 3,
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=80",
    status: "Upcoming"
  },
  {
    id: 3,
    name: "Kerala Escape",
    dates: "14 Jan — 20 Jan 2026",
    destinations: 5,
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
    status: "Past"
  },
  {
    id: 4,
    name: "Japanese Journey",
    dates: "22 Mar — 31 Mar 2026",
    destinations: 6,
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1000&q=80",
    status: "Past"
  }
];

const TripGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {trips.map((trip) => (
        <TripCard
          key={trip.id}
          trip={trip}
        />
      ))}

    </div>
  );
};

export default TripGrid;