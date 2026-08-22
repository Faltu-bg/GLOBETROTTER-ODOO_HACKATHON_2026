import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import {Route,Routes} from "react-router-dom"
import CreateTrip from "./pages/CreateTrip"
import UserProfile from "./pages/UserProfile"
const App=()=>{
    return (
    <div className="min-h-screen bg-[#F8F7F3]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-trip" element={<CreateTrip />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </div>
  )
}
export default App