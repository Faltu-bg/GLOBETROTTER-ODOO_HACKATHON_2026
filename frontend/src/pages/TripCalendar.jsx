import TripCalendarHeader from "../components/tripCalendar/TripCalendarHeader";
import DateSelector from "../components/tripCalendar/DateSelector";
import DaySummary from "../components/tripCalendar/DaySummary";
import Timeline from "../components/tripCalendar/Timeline";
import AddActivityButton from "../components/tripCalendar/AddActivityButton";
import Navbar from "../components/Navbar";

const TripCalendar = () => {
  return (
    <div>
    <Navbar/>
    <div className="min-h-screen bg-[#F8F7F3] text-[#182321]">

      <TripCalendarHeader />

      <main className="max-w-6xl mx-auto px-6 py-8">

        <DateSelector />

        <DaySummary />

        <Timeline />

        <AddActivityButton />

      </main>

    </div>
    </div>
  );
};

export default TripCalendar;