import { Link } from "react-router-dom";

const MyTripsHeader = () => {
  return (
    <header className="max-w-6xl mx-auto px-6 pt-10">

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#C49A55] mb-2">
            Your journeys
          </p>

          <h1 className="font-serif text-4xl md:text-5xl text-[#182321]">
            My Trips
          </h1>

          <p className="text-[#6F716E] mt-3 max-w-xl">
            Manage your upcoming adventures and revisit the journeys
            you've already created.
          </p>
        </div>

        <button className="w-fit px-6 py-3 rounded-full bg-[#173B35] text-white hover:bg-[#245048] transition">
          <Link to="/create-trip">+ Create New Trip</Link>
        </button>

      </div>

    </header>
  );
};

export default MyTripsHeader;