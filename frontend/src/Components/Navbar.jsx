export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 text-white absolute top-0 z-20">
      <ul className="flex space-x-6 justify-end font-semibold text-3xl pr-20">
        <li><a href="#about">About</a></li>
        <li><a href="#offerings">Offerings</a></li>
        <li><a href="#partners">Partners</a></li>
        <li><a href="#careers">Careers</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
