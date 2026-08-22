const Navbar = () => {
  return (
    <nav className="w-full border-b border-[#D9DAD5] bg-[#F8F7F3]">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        
        <div className="text-2xl font-semibold text-[#173B35]">
          GlobalTrotter
        </div>

        <button className="w-11 h-11 rounded-full border border-[#173B35] flex items-center justify-center hover:bg-[#173B35] transition duration-300 group">
          <span className="w-5 h-[1px] bg-[#173B35] relative group-hover:bg-white">
            <span className="absolute w-5 h-[1px] bg-[#173B35] -top-2 group-hover:bg-white"></span>
            <span className="absolute w-5 h-[1px] bg-[#173B35] top-2 group-hover:bg-white"></span>
          </span>
        </button>

      </div>
    </nav>
  )
}

export default Navbar