import Card from './Card'

const RegionalSelection = () => {

  const regions = [
    {
      id: 1,
      title: "Swiss Alps",
      location: "Europe",
      description: "Snow-covered mountains, peaceful villages and breathtaking alpine views.",
      image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Kyoto",
      location: "Asia",
      description: "Discover ancient temples, beautiful gardens and traditional Japanese culture.",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Santorini",
      location: "Europe",
      description: "Whitewashed villages, blue domes and spectacular Mediterranean sunsets.",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Bali",
      location: "Asia",
      description: "Tropical beaches, lush rice terraces and unforgettable island experiences.",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
    }
  ]

  return (
    <section className="px-6 pb-10">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-[#C49A55] text-sm uppercase tracking-[0.2em]">
              Discover
            </p>

            <h2 className="text-3xl font-serif text-[#182321] mt-1">
              Regional Selections
            </h2>
          </div>

          <button className="text-sm text-[#173B35] hover:text-[#C49A55] transition">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region) => (
            <Card
              key={region.id}
              image={region.image}
              title={region.title}
              location={region.location}
              description={region.description}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default RegionalSelection