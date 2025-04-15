import IS1 from '../assets/IS1.png';
import IS2 from '../assets/IS2.png';
import IS3 from '../assets/IS3.png';
import IS4 from '../assets/IS4.png';
export default function Offerings() {
    return (
        <>
            <section id="offerings" className=" w-full bg-white flex flex-col justify-center items-center px-6 py-4">
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
            <section id="insurance" className="w-full bg-gray-100 py-20 px-6 flex flex-col items-center">
                <h2 className="text-3xl font-semibold mb-12 text-center">INSURANCE SOLUTIONS</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={IS1} alt="Health Icon" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">GLIMPSE - Life Insurance Admin System</h3>
                        <ul className="text-gray-600 text-sm list-disc list-outside text-left pl-5">
                            <li>Policy Creation</li>
                            <li>Policy Administration</li>
                            <li>Claim Managment</li>
                            <li>Reinsurance</li>
                            <li>Billing and Accounting</li>
                            <li>Commission Module</li>
                            <li>Reports</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={IS2} alt="Life Icon" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Customer Portals</h3>
                        <ul className="text-gray-600 text-sm list-disc list-outside text-left pl-5">
                            <li>Brings the insurer closer to its clients.</li>
                            <li>Manage client issues remotely.</li>
                            <li>Setup customized portal as per client requirement.</li>
                            <li>Manage & track onlilne status of enrollment.</li>
                            <li>Stakeholder to view & manage claims status and intimate claims online.</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={IS3} alt="Travel Icon" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Insurance Business Intelligence</h3>
                        <ul className="text-gray-600 text-sm list-disc list-outside text-left pl-5">
                            <li>Business logic scripts and packages.</li>
                            <li>Calculation templates.</li>
                            <li>Measurements & KPI's.</li>
                            <li>Reports</li>
                        </ul>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={IS4} alt="Vehicle Icon" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Mobile Insurance</h3>
                        <ul className="text-gray-600 text-sm list-disc list-outside text-left pl-5">
                            <li>Search by location.</li>
                            <li>List of hospitals/clinics/doctors near you.</li>
                            <li>Hospital room rates.</li>
                            <li>List of branches near you.</li>
                            <li>Search by doctor speacialty and hospital facilites.</li>
                            <li>Location maps & routes</li>
                        </ul>
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