import bghero from '../assets/bghero.png';
import xangam from '../assets/xangam.png';

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center bg-gray-300"
      style={{ backgroundImage: `url(${bghero})` }}
    >
      {/* Overlay for readability */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      />
      {/* Company logo in center */}
      <div className="relative z-10">
        <img
          src={xangam}
          alt="Company Logo"
          className="w-72 md:w-96 lg:w-[500px]" // adjust size as needed
        />
      </div>
    </section>
  );
}
