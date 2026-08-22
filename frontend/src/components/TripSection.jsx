import TripCard from "./TripCard";

const TripSection = ({ label, title, trips }) => {

    // Don't show section if there are no trips
    if (!trips || trips.length === 0) {
        return null;
    }

    return (
        <section className="mt-12">

            <div className="mb-5">

                <p className="text-[#C49A55] text-sm uppercase tracking-[0.2em]">
                    {label}
                </p>

                <h2 className="text-3xl font-serif text-[#182321] mt-1">
                    {title}
                </h2>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {trips.map((trip) => (
                    <TripCard
                        key={trip._id}
                        trip={trip}
                    />
                ))}

            </div>

        </section>
    );
};

export default TripSection;