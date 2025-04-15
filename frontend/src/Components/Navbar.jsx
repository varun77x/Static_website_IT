export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-lg z-10 h-14">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-semibold"></div>
          <ul className="flex space-x-8">
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#offerings" className="hover:text-gray-400">Offerings</a></li>
            <li><a href="#partners" className="hover:text-gray-400">Partners</a></li>
            <li><a href="#careers" className="hover:text-gray-400">Careers</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      </nav>
    )
}