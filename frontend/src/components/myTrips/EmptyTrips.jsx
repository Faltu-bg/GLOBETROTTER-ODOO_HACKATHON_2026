const EmptyTrips = () => {
  return (
    <div className="bg-white border border-[#D9DAD5] rounded-2xl py-20 px-6 text-center">

      <div className="text-5xl mb-5">
        ✈️
      </div>

      <h2 className="font-serif text-3xl text-[#182321]">
        Your journey starts here
      </h2>

      <p className="text-[#6F716E] max-w-md mx-auto mt-3">
        You haven't created any trips yet. Start planning your next
        adventure and it will appear here.
      </p>

      <button className="mt-7 px-6 py-3 rounded-full bg-[#173B35] text-white hover:bg-[#245048] transition">
        Create Your First Trip
      </button>

    </div>
  );
};

export default EmptyTrips;