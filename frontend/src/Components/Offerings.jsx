import IS1 from '../assets/IS1.png';
import IS2 from '../assets/IS2.png';
import IS3 from '../assets/IS3.png';
import IS4 from '../assets/IS4.png';
import TD1 from '../assets/TD1.png';
import TD2 from '../assets/TD2.png';
import TD3 from '../assets/TD3.png';
import TD4 from '../assets/TD4.png';
import CS1 from '../assets/CS1.png';
import CS2 from '../assets/CS2.png';
import CS3 from '../assets/CS3.png';
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
                <h2 className="text-3xl font-semibold mb-12 text-center">INSURANCE SOLUTIONS</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={TD1} alt="Health Icon" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Underwriting</h3>
                        <ul className="text-gray-600 text-sm list-disc list-outside text-left pl-5">
                            <li>Video MER</li>
                            <li>Video Graphy</li>
                            <li>Tele MER</li>
                            <li>Smart Report</li>
                            <li>Automated Transcript</li>
                            <li>Digitization</li>
                            
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={TD2} alt="Life Icon" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Claims Investigation</h3>
                        <ul className="text-gray-600 text-sm list-disc list-outside text-left pl-5">
                        
                            <li>Motor Theft</li>
                            <li>Motor OD</li>
                            <li>AI based claim assessment</li>
                            <li>Reinsuranczhealth cashless</li>
                            <li>Billing and Health reimbursement</li>
                            <li>Investigation app</li>
                            <li>Disability verification</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={TD3} alt="Travel Icon" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Risk Mitigation</h3>
                        <ul className="text-gray-600 text-sm list-disc list-outside text-left pl-5">
                            <li>eKYC</li>
                            <li>PVC / PIVV</li>
                            <li>Face Match</li>
                            <li>Adhaar Masking</li>
                            <li>Data Forgery Check</li>
                        </ul>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={TD4} alt="Vehicle Icon" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Deep Learning</h3>
                        <ul className="text-gray-600 text-sm list-disc list-outside text-left pl-5">
                            <li>Speed to text</li>
                            <li>Smart Underwriting</li>
                            <li>Robotic Investigation</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/*Retail*/}
            <section id="retail" className=" w-full bg-white text-center flex flex-col justify-center items-center px-6">
                <h2 className="text-3xl font-semibold mb-6">RETAIL</h2>
                <p className="text-lg max-w-4xl mx-auto">
                https://ebt-me.com/retail/
                </p>
            </section>

            <section id="customized-software" className="w-full h-screen bg-gray-100 py-20 px-6 flex flex-col items-center">
                <h2 className="text-3xl font-semibold mb-12 text-center">CUSTOMIZED SOFTWARE DEVELOPMENT</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={CS1} alt="Health Icon" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
                        <p className="text-gray-600">Xangars is expert in delivering high performance & scalable enterprise mobile apps in adnroid & ios</p> <br />
                        <ul className="text-gray-600 text-sm list-disc list-outside text-left pl-5">
                            <li>Mobile App Designing</li>
                            <li>App Development</li>
                            <li>Support & Maintenance</li>

                            
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={CS2} alt="Life Icon" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Wep App Development</h3>
                        <p className="text-gray-600">Our software developers provide offshore software & wep app development services for enterprises.</p> <br />
                        <ul className="text-gray-600 text-sm list-disc list-outside text-left pl-5">
                        
                            <li>Web app Conceptualisation</li>
                            <li>App Design & Development</li>
                            <li>Support & Maintenance</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={CS3} alt="Travel Icon" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Custom Software Development</h3>
                        <p className="text-gray-600">Xangars is expert in delivering high performance & scalable enterprise mobile apps in adnroid & ios</p> <br />                        <ul className="text-gray-600 text-sm list-disc list-outside text-left pl-5">
                            <li>Software Conceptualisation</li>
                            <li>Software Design & Developemtn</li>
                            <li>SUpport & Maintenance</li>
                        </ul>
                    </div>

                </div>
            </section>
        </>
    )
}