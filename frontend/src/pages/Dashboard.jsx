import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import PreviousTrips from "../components/PreviousTrips"
import RegionalSelection from "../components/RegionalSelection"
import SearchBar from "../components/Searchbar"

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