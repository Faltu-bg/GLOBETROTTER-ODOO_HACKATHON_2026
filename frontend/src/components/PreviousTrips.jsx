import PreviousTripCard from "./PreviousTripCard"
import {Link} from'react-router-dom'

const PreviousTrips = () => {

  const trips = [
    {
      id: 1,
      title: "Paris Getaway",
      location: "France",
      date: "May 2026",
      days: 5,
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Dubai Adventure",
      location: "UAE",
      date: "Feb 2026",
      days: 4,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Bali Escape",
      location: "Indonesia",
      date: "Dec 2025",
      days: 7,
      image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "New York City",
      location: "USA",
      date: "Oct 2025",
      days: 6,
      image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80"
    }
  ]

  return (
    <section className="px-6 pb-12">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-[#C49A55] text-sm uppercase tracking-[0.2em]">
              Your Journeys
            </p>

            <h2 className="text-3xl font-serif text-[#182321] mt-1">
              Previous Trips
            </h2>
          </div>

          <button className="text-sm text-[#173B35] hover:text-[#C49A55] transition">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((trip) => (
            <PreviousTripCard
              key={trip.id}
              image={trip.image}
              title={trip.title}
              location={trip.location}
              date={trip.date}
              days={trip.days}
            />
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-[#173B35] px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <p className="text-[#C49A55] text-sm uppercase tracking-[0.2em]">
              Your next adventure
            </p>

            <h2 className="text-3xl font-serif text-white mt-2">
              Ready to plan your next trip?
            </h2>

            <p className="text-white/70 mt-2">
              Create a personalized itinerary and start exploring.
            </p>
          </div>

          <button className="shrink-0 px-8 py-3.5 rounded-full bg-[#C49A55] text-white font-medium hover:bg-[#B58A48] transition duration-300">
            <Link to="/create-trip">Plan Your Trip</Link>
          </button>

        </div>

      </div>
    </section>
  )
}

export default PreviousTrips