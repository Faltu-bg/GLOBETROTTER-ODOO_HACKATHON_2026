import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import { Route, Routes, useParams } from "react-router-dom";
import CreateTrip from "./pages/CreateTrip"
import UserProfile from "./pages/UserProfile"
import LoginPage from "./pages/LoginPage"
import SignUp from "./pages/SignUp"
import BuildItinerary from "./pages/BuildItenrary";

const BuildItineraryPage = () => {

    const { tripId } = useParams();

    return (
        <BuildItinerary tripId={tripId} />
    );
};
const App=()=>{
    return (
    <div className="min-h-screen bg-[#F8F7F3]">
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-trip" element={<CreateTrip />} />
       <Route path="/profile" element={<UserProfile />} />
         <Route
                    path="/user-itenrary/:tripId"
                    element={<BuildItineraryPage />}
                />
      </Routes>
    </div>
  )
}

export default App;