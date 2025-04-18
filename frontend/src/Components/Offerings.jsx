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
import RT1 from '../assets/RT1.png';
import RT2 from '../assets/RT2.png';
import RT3 from '../assets/RT3.png';
import RT4 from '../assets/RT4.png';
import RT5 from '../assets/RT5.png';

// decided not to use swiper...
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';


export default function Offerings() {
    const insuranceSolutions = [
        {
            id: 1,
            img: IS1,
            title: "GLIMPSE - Life Insurance Admin System",
            features: [
                "Policy Creation",
                "Policy Administration",
                "Claim Management",
                "Reinsurance",
                "Billing and Accounting",
                "Commission Module",
                "Reports"
            ]
        },
        {
            id: 2,
            img: IS2,
            title: "Customer Portals",
            features: [
                "Brings insurer closer to clients",
                "Manage client issues remotely",
                "Customized portals",
                "Track online enrollment",
                "Claim status management"
            ]
        },
        {
            id: 3,
            img: IS3,
            title: "Insurance Business Intelligence",
            features: [
                "Logic scripts",
                "Templates",
                "KPIs",
                "Reports"
            ]
        },
        {
            id: 4,
            img: IS4,
            title: "Mobile Insurance",
            features: [
                "Location search",
                "Nearby hospitals/doctors",
                "Room rates",
                "Doctor specialty"
            ]
        }
    ];
    return (
        <>
            {/* Offerings Title Section */}
            <section id="offerings" className="mt-20 w-full bg-white flex flex-col justify-center items-center px-4 sm:px-6 py-4 sm:py-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 sm:mb-10 text-center w-full">OFFERINGS</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl">
                    <div className="transition-colors duration-400 rounded-2xl shadow-lg p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl md:text-2xl mb-2 text-center italic">Insurance</h3>
                    </div>
                    <div className="transition-colors duration-500 rounded-2xl shadow-lg p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl md:text-2xl mb-2 text-center italic">Retail</h3>
                    </div>
                    <div className="transition-colors duration-400 rounded-2xl shadow-lg p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl md:text-2xl mb-2 text-center italic">Custom Software Development</h3>
                    </div>
                </div>
            </section>


            {/* Insurance Solutions Section */}
            <section id="insurance" className="mt-20 w-full bg-gray-100 py-20 px-6 flex flex-col items-center">
                <h2 className="text-3xl font-semibold mb-12 text-center">INSURANCE SOLUTIONS</h2>

                {/* Desktop Grid View */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                    {insuranceSolutions.map((solution) => (
                        <div
                            key={solution.id}
                            className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col h-full"
                        >
                            <div className="flex flex-col items-center text-center flex-grow">
                                <img src={solution.img} alt={solution.title} className="w-16 h-16 mb-4" />
                                <h3 className="text-sm md:text-xl font-semibold mb-2">{solution.title}</h3>
                                <ul className="text-gray-600 text-xs md:text-sm list-disc pl-5 text-left w-full">
                                    {solution.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Swiper View */}
                {/* <div className="sm:hidden w-full max-w-md px-4">
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={20}
                        centeredSlides={false}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {insuranceSolutions.map((solution) => (
                            <SwiperSlide key={solution.id}>
                                <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col h-full">
                                    <div className="flex flex-col items-center text-center flex-grow h-60">
                                        <img src={solution.img} alt={solution.title} className="w-16 h-16 mb-4" />
                                        <h3 className="text-sm md:text-xl font-semibold mb-2">{solution.title}</h3>
                                        <ul className="text-gray-600 text-xs md:text-sm list-disc pl-5 text-left w-full">
                                            {solution.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div> */}
            </section>

            {/* Additional Insurance Section */}
            <section className="mt-20 w-full bg-gray-100 py-20 px-6 flex flex-col items-center">
                <h2 className="text-3xl font-semibold mb-12 text-center">TECHNOLOGY DRIVEN INSURANCE</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={TD1} alt="Underwriting" className="w-16 h-16 mb-4" />
                        <h3 className="text-sm md:text-xl font-semibold mb-2">Underwriting</h3>
                        <ul className="text-gray-600 text-sm list-disc pl-5 text-left">
                            <li>Video MER</li>
                            <li>Smart Reports</li>
                            <li>Digitization</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={TD2} alt="Claims" className="w-16 h-16 mb-4" />
                        <h3 className="text-sm md:text-xl font-semibold mb-2">Claims Investigation</h3>
                        <ul className="text-gray-600 text-sm list-disc pl-5 text-left">
                            <li>Motor OD</li>
                            <li>AI-based assessment</li>
                            <li>Health reimbursement</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={TD3} alt="Risk Mitigation" className="w-16 h-16 mb-4" />
                        <h3 className="text-sm md:text-xl font-semibold mb-2">Risk Mitigation</h3>
                        <ul className="text-gray-600 text-sm list-disc pl-5 text-left">
                            <li>eKYC</li>
                            <li>Face Match</li>
                            <li>Data Forgery Check</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={TD4} alt="Deep Learning" className="w-16 h-16 mb-4" />
                        <h3 className="text-sm md:text-xl font-semibold mb-2">Deep Learning</h3>
                        <ul className="text-gray-600 text-sm list-disc pl-5 text-left">
                            <li>Speech to Text</li>
                            <li>Smart Underwriting</li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* Retail Section */}
            <section id="retail" className="mt-20 w-full bg-white text-center flex flex-col justify-center items-center px-6">
                <h2 className="text-3xl font-semibold mb-12 text-center">RETAIL</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 w-full max-w-6xl">
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={RT1} alt="Glimpse" className="w-20 h-20 mb-4" />
                        <h3 className="text-sm md:text-xl font-semibold mb-2">Analyse Your Sales</h3>
                        <p className="text-xs md:text-sm max-w-4xl mx-auto text-gray-600">
                            Streamline daily tasks by integrating all sales processes of a retail business.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={RT2} alt="Customer Portals" className="w-2- h-20 mb-4" />
                        <h3 className="text-sm md:text-xl font-semibold mb-2">Customization & Add-On</h3>
                        <p className="text-xs md:text-sm max-w-4xl mx-auto text-gray-600">
                            Facilitate the customization of the user interface to ensure instant access to assigned tasks
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={RT3} alt="Insurance BI" className="w-2- h-20 mb-4" />
                        <h3 className="text-sm md:text-xl font-semibold mb-2">Market Trends</h3>
                        <p className="text-xs md:text-sm max-w-4xl mx-auto text-gray-600">
                            Are based on proven technologies and help companies to respond better to market developments
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={RT4} alt="Mobile Insurance" className="w-2- h-20 mb-4" />
                        <h3 className="text-sm md:text-xl font-semibold mb-2">Refined Monitoring</h3>
                        <p className="text-xs md:text-sm max-w-4xl mx-auto text-gray-600">
                            ALlow your business partners to support your daily work and monitor your business activity
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={RT5} alt="Mobile Insurance" className="w-2- h-20 mb-4" />
                        <h3 className="text-sm md:text-xl font-semibold mb-2">Refined Monitoring</h3>
                        <p className="text-xs md:text-sm max-w-4xl mx-auto text-gray-600">
                            Boost work productivity by harmonizing data from various company departments
                        </p>
                    </div>
                </div>

            </section>

            {/* Custom Software Section */}
            <section id="customized-software" className="mt-20 w-full bg-gray-100 py-20 px-6 flex flex-col items-center">
                <h2 className="text-3xl font-semibold mb-12 text-center">CUSTOMIZED SOFTWARE DEVELOPMENT</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={CS1} alt="Mobile App" className="w-16 h-16 mb-4" />
                        <h3 className="text-sm md:text-xl font-semibold mb-2">Mobile App Development</h3>
                        <p className="text-gray-600">High performance mobile apps in Android & iOS</p>
                        <ul className="text-gray-600 text-sm list-disc pl-5 text-left mt-2">
                            <li>App Designing</li>
                            <li>Development</li>
                            <li>Maintenance</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={CS2} alt="Web App" className="w-16 h-16 mb-4" />
                        <h3 className="text-sm md:text-xl font-semibold mb-2">Web App Development</h3>
                        <p className="text-gray-600">Offshore software and web app services</p>
                        <ul className="text-gray-600 text-sm list-disc pl-5 text-left mt-2">
                            <li>Conceptualization</li>
                            <li>Design & Development</li>
                            <li>Maintenance</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-blue-50 transition-colors duration-300 flex flex-col items-center text-center">
                        <img src={CS3} alt="Custom Software" className="w-16 h-16 mb-4" />
                        <h3 className="text-sm md:text-xl font-semibold mb-2">Custom Software</h3>
                        <p className="text-gray-600">Tailored software solutions for enterprise needs</p>
                        <ul className="text-gray-600 text-sm list-disc pl-5 text-left mt-2">
                            <li>Conceptualization</li>
                            <li>Design & Development</li>
                            <li>Support</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
