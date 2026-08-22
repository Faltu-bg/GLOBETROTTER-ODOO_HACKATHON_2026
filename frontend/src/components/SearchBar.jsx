const SearchBar = () => {
  return (
    <section className="px-6 py-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-4">

          <div className="flex-1 flex items-center gap-3 bg-white border border-[#D9DAD5] rounded-xl px-5 h-14">
            <span className="text-[#173B35] text-xl">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search destinations..."
              className="w-full outline-none bg-transparent text-[#182321] placeholder:text-[#6F716E]"
            />
          </div>

          <div className="flex gap-3">

            <button className="h-14 px-5 bg-white border border-[#D9DAD5] rounded-xl text-[#173B35] hover:border-[#173B35] transition">
              Group By
            </button>

            <button className="h-14 px-5 bg-white border border-[#D9DAD5] rounded-xl text-[#173B35] hover:border-[#173B35] transition">
              Filter
            </button>

            <button className="h-14 px-5 bg-white border border-[#D9DAD5] rounded-xl text-[#173B35] hover:border-[#173B35] transition">
              Sort By
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}

export default SearchBar