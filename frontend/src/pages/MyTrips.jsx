import MyTripsHeader from "../components/myTrips/MyTripsHeader";
import TripFilters from "../components/myTrips/TripFilters";
import TripGrid from "../components/myTrips/TripGrid";
import Navbar from "../components/Navbar";

const MyTrips = () => {
  return (
    <div>
        <Navbar/>
    <div className="min-h-screen bg-[#F8F7F3] text-[#182321]">

      <MyTripsHeader />

      <main className="max-w-6xl mx-auto px-6 py-10">

        <TripFilters />

        <TripGrid />

      </main>

    </div>
    </div>
  );
};

export default MyTrips;