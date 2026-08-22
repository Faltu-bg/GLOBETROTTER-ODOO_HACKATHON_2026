import ProfileHeader from '../components/ProfileHeader'
import Preferences from '../components/Preferences'
import TripSection from '../components/TripSection'
import Delete from '../components/Delete'
import Navbar from '../components/Navbar'

const UserProfile = () => {

  const plannedTrips = [
    {
      id: 1,
      title: "Swiss Alps",
      location: "Switzerland",
      image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Santorini",
      location: "Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Kyoto",
      location: "Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"
    }
  ]

  const previousTrips = [
    {
      id: 1,
      title: "Paris",
      location: "France",
      image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Bali",
      location: "Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Dubai",
      location: "UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
    }
  ]

  return (
    <div>
        <Navbar/>
    <div className="min-h-screen bg-[#F7F4EC] px-6 py-10">

      <div className="max-w-6xl mx-auto">

        <p className="text-[#C49A55] text-sm uppercase tracking-[0.2em]">
          My Account
        </p>

        <h1 className="text-4xl font-serif text-[#182321] mt-1">
          User Profile
        </h1>

        <p className="text-[#6F716E] mt-2">
          Manage your profile, preferences and travel history.
        </p>

        <div className="mt-8">
          <ProfileHeader />
        </div>

        <Preferences />

        <TripSection
          label="Upcoming"
          title="Planned Trips"
          trips={plannedTrips}
        />

        <TripSection
          label="Travel History"
          title="Previous Trips"
          trips={previousTrips}
        />

        <Delete/>

      </div>

    </div>
    </div>
  )
}

export default UserProfile