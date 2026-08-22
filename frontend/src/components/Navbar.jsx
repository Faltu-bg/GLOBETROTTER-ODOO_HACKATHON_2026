import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="w-full border-b border-[#D9DAD5] bg-[#F8F7F3]">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        <div className="text-2xl font-semibold text-[#173B35]">
          <Link to="/dashboard">GLOBETROTTER</Link>
        </div>

        <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#173B35]">
          <Link to="/profile">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80"
            alt="Profile"
            className="w-full h-full object-cover"
          />
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar