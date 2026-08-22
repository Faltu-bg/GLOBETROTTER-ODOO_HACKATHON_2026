import Banner from "../components/Banner"
import PreviousTrips from "../components/PreviousTrips"
import RegionalSelection from "../components/RegionalSelection"
import SearchBar from "../components/Searchbar"

const Dashboard = () => {
    return <div>
        <Banner/>
        <SearchBar/>
        <RegionalSelection/>
        <PreviousTrips/>
    </div>
}
export default Dashboard