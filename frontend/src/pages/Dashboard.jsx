import Banner from "../components/dashboard/Banner"
import Navbar from "../components/Navbar"
import PreviousTrips from "../components/dashboard/PreviousTrips"
import RegionalSelection from "../components/dashboard/RegionalSelection"
import SearchBar from "../components/dashboard/SearchBar"

const Dashboard = () => {
    return <div>
        <Navbar/>
        <Banner/>
        <SearchBar/>
        <RegionalSelection/>
        <PreviousTrips/>
    </div>
}
export default Dashboard