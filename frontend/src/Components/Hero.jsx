import bgHero from '../assets/bgHero.jpg';
export default function Hero(){
    return (
        <>
        {/* Hero Section (Company Name with background) */}
              {/* <section className="h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white flex justify-center items-center">
                <h1 className="text-7xl font-bold">XANGAM</h1>
              </section> */}
              <section className="h-screen bg-cover bg-center text-white flex justify-center items-center" 
               style={{
                backgroundImage: `url(${bgHero})`,
              }}
              >
                <h1 className="text-7xl font-bold">XANGAM</h1>
              </section>
        </>
    )
}