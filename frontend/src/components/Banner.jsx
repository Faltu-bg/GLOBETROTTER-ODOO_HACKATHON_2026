const Banner = () => {
  return (
    <section className="w-full px-6 pt-6">
      <div className="max-w-8xl mx-auto h-[420px] rounded-2xl overflow-hidden relative">

        <img
          src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=80"
          alt="Travel destination"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent"></div>

        <div className="absolute left-10 top-1/2 -translate-y-1/2 max-w-lg">
          <p className="text-[#E1B86A] uppercase tracking-[0.25em] text-sm mb-3">
            Discover the world
          </p>

          <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
            Explore
            <br />
            <span className="text-[#E1B86A]">the World</span>
          </h1>

          <p className="text-white/80 mt-5 max-w-md">
            Discover beautiful destinations, unforgettable experiences,
            and memories that last a lifetime.
          </p>

          <button className="mt-6 px-6 py-3 rounded-full bg-[#173B35] text-white hover:bg-[#102D28] transition duration-300">
            Explore Now
          </button>
        </div>

      </div>
    </section>
  )
}

export default Banner