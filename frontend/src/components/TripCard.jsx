import { useNavigate } from "react-router-dom";

const TripCard = ({ trip }) => {

    const navigate = useNavigate();

    console.log("TRIP CARD DATA:", trip);

    const formatDate = (date) => {
        if (!date) return "No date";

        return new Date(date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    };

    return (
        <div className="bg-[#FFFCF5] rounded-2xl overflow-hidden border border-[#DED8CA] shadow-sm hover:shadow-md transition">

            {/* Image */}
            <div className="w-full h-48 bg-[#E9E3D5]">

                {trip.cover_photo_url ? (
                    <img
                        src={trip.cover_photo_url}
                        alt={trip.name}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-[#6F716E]">
                            No cover image
                        </span>
                    </div>
                )}

            </div>

            {/* Details */}
            <div className="p-5">

                <h3 className="text-xl font-serif text-[#182321]">
                    {trip.name}
                </h3>

                <p className="text-sm text-[#6F716E] mt-2">
                    {trip.description}
                </p>

                <p className="text-sm text-[#6F716E] mt-3">
                    {formatDate(trip.start_date)}
                    {" — "}
                    {formatDate(trip.end_date)}
                </p>

                <p className="text-xs text-[#C49A55] mt-2 uppercase">
                    {trip.status}
                </p>

                <button
    onClick={() => navigate(`/user-itenrary/${trip._id}`)}
    className="mt-4 w-full border border-[#1E3A32] text-[#1E3A32] rounded-lg py-2 text-sm hover:bg-[#1E3A32] hover:text-white transition"
>
    View Trip
</button>

            </div>

        </div>
    );
};

export default TripCard;