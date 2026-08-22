import Navbar from "../components/Navbar"
import PlanTrip from "../components/createTrip/PlanTrip"
import TripSuggestions from "../components/createTrip/TripSuggestions"

const CreateTrip = () => {
  return (<div>
    <Navbar/>
    <main className="min-h-screen bg-[#F8F7F3] px-6 py-8">

      <div className="max-w-7xl mx-auto">
        <PlanTrip/>
        <TripSuggestions/>
      </div>

    </main>
    </div>
  )
}

export default CreateTrip