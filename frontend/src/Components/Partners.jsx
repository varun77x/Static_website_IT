import partnersImg from '../assets/partnersImg.jpeg'
export default function Partners() {
  return (
    <section
      id="partners"
      className="w-full bg-white text-center flex flex-col justify-center items-center px-4 sm:px-6 py-4 mt-20"
    >
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
        PARTNERS
      </h2>
      <img src={partnersImg} alt="partnersImg.jpeg" />
    </section>
  );
}
