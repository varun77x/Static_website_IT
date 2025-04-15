export default function Offerings(){
    return (
        <>
        <section id="offerings" className="scroll-mt-14 w-full bg-white flex flex-col justify-center items-center px-6 py-4">
        <h2 className="text-7xl font-semibold mb-10 text-center w-full">OFFERINGS</h2>

        <div className="flex flex-col space-y-6 w-full max-w-5xl">
          {/* Card 1 */}
          <div className="bg-green-400 hover:bg-green-500 transition-colors duration-400 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl mb-2 text-center italic">Insurance</h3>
            
          </div>

          {/* Card 2 */}
          <div className="bg-red-300 hover:bg-red-400 transition-colors duration-500 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl mb-2 text-center italic">Retail</h3>
          </div>

          {/* Card 3 */}
          <div className="bg-yellow-300 hover:bg-yellow-400 transition-colors duration-400 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl mb-2 text-center italic">Custom Software Development</h3>
          </div>
        </div>
      </section>

      {/* Insurance Solutions Section */}
      <section id="insurance" className="w-full  bg-gray-100 py-20 px-6 flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-12 text-center">INSURANCE SOLUTIONS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md ">
            <h3 className="text-xl font-semibold mb-2">Health Insurance</h3>
            <p className="text-gray-600">
              Comprehensive health plans to cover you and your family with top-tier medical support.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md h-full">
            <h3 className="text-xl font-semibold mb-2">Life Insurance</h3>
            <p className="text-gray-600">
              Financial security for your loved ones with flexible and reliable life coverage options.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md h-full">
            <h3 className="text-xl font-semibold mb-2">Travel Insurance</h3>
            <p className="text-gray-600">
              Stay protected on your journeys with travel policies that cover emergencies and losses.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-md h-full">
            <h3 className="text-xl font-semibold mb-2">Vehicle Insurance</h3>
            <p className="text-gray-600">
              Safeguard your car or bike with coverage plans that offer peace of mind and easy claims.
            </p>
          </div>
        </div>
        <br />
        <br />
        <h2 className="text-3xl font-semibold mb-12 text-center">TECH DRIVEN INSURANCE OFFERINGS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md ">
            <h3 className="text-xl font-semibold mb-2">Health Insurance</h3>
            <p className="text-gray-600">
              Comprehensive health plans to cover you and your family with top-tier medical support.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md h-full">
            <h3 className="text-xl font-semibold mb-2">Life Insurance</h3>
            <p className="text-gray-600">
              Financial security for your loved ones with flexible and reliable life coverage options.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md h-full">
            <h3 className="text-xl font-semibold mb-2">Travel Insurance</h3>
            <p className="text-gray-600">
              Stay protected on your journeys with travel policies that cover emergencies and losses.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-md h-full">
            <h3 className="text-xl font-semibold mb-2">Vehicle Insurance</h3>
            <p className="text-gray-600">
              Safeguard your car or bike with coverage plans that offer peace of mind and easy claims.
            </p>
          </div>
        </div>
      </section>
      {/*Retail*/}
      <section id="retail" className="h-screen w-full bg-white text-center flex flex-col justify-center items-center px-6">
        <h2 className="text-3xl font-semibold mb-6">RETAIL</h2>
        <p className="text-lg max-w-4xl mx-auto">
          .
        </p>
      </section>

      <section id="customized-software" className="w-full h-screen bg-gray-100 py-20 px-6 flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-12 text-center">CUSTOMIZED SOFTWARE DEVELOPMENT</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl h-84">
          {/* Card 1 */}
          <div className="bg-white p-6  shadow-lg h-full ">
            <h3 className="text-xl font-semibold mb-2">Health Insurance</h3>
            <p className="text-gray-600">
              Comprehensive health plans to cover you and your family with top-tier medical support.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 shadow-lg h-full">
            <h3 className="text-xl font-semibold mb-2">Life Insurance</h3>
            <p className="text-gray-600">
              Financial security for your loved ones with flexible and reliable life coverage options.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 shadow-lg h-full">
            <h3 className="text-xl font-semibold mb-2">Travel Insurance</h3>
            <p className="text-gray-600">
              Stay protected on your journeys with travel policies that cover emergencies and losses.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 shadow-lg h-full">
            <h3 className="text-xl font-semibold mb-2">Vehicle Insurance</h3>
            <p className="text-gray-600">
              Safeguard your car or bike with coverage plans that offer peace of mind and easy claims.
            </p>
          </div>
        </div>
      </section>
      </>
    )
}