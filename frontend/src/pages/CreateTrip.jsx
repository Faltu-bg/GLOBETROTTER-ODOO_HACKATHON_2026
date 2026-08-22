import PlanTrip from "../components/PlanTrip"
import SuggestionCard from "../components/SuggestionCard"
import TripSuggestions from "../components/TripSuggestions"

const CreateTrip = () => {
  return (
    <main className="min-h-screen bg-[#F8F7F3] px-6 py-8">

      <div className="max-w-7xl mx-auto">
        <PlanTrip/>
        <TripSuggestions/>
      </div>

    </main>
  )
}

export default CreateTrip