import SuggestionCard from './SuggestionCard'
const TripSuggestions = () => {
    
  const suggestions = [
    {
      id: 1,
      title: "Eiffel Tower",
      location: "Paris, France",
      type: "Sightseeing",
      image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Swiss Alps",
      location: "Switzerland",
      type: "Adventure",
      image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Santorini",
      location: "Greece",
      type: "Experience",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Bali Temple",
      location: "Bali, Indonesia",
      type: "Culture",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Dubai Desert",
      location: "Dubai, UAE",
      type: "Adventure",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Kyoto Gardens",
      location: "Kyoto, Japan",
      type: "Culture",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"
    }
  ]
    return <div>
        <section className="mt-12">

          <div className="mb-6">
            <p className="text-[#C49A55] text-sm uppercase tracking-[0.2em]">
              Inspiration
            </p>

            <h2 className="text-3xl font-serif text-[#182321] mt-1">
              Suggestions for Places & Activities
            </h2>

            <p className="text-[#6F716E] mt-2">
              Explore places and experiences you can add to your trip.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestions.map((suggestion) => (
              <SuggestionCard
                key={suggestion.id}
                image={suggestion.image}
                title={suggestion.title}
                location={suggestion.location}
                type={suggestion.type}
              />
            ))}
          </div>

        </section>
        </div>
}
export default TripSuggestions