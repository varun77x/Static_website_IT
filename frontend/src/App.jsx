// App.js
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <Hero />
      {/* About Section */}
      <About />

      {/* Offerings Section */}
      <section id="offerings" className="scroll-mt-14 w-full bg-white flex flex-col justify-center items-center px-6 py-4">
        <h2 className="text-7xl font-semibold mb-10 text-center w-full">OFFERINGS</h2>

        <div className="flex flex-col space-y-6 w-full max-w-5xl">
          {/* Card 1 */}
          <div className="bg-green-300 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl mb-2 text-center">Insurance</h3>
            <p className="text-gray-700 text-center">
              <i> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </i>
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-red-300 rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl mb-2 text-center">Retail</h3>
            <p className="text-gray-700">
              <i> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </i>
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-yellow-300 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl mb-2 text-center">Custom Software Development</h3>
            <p className="text-gray-700 text-center">
              <i> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </i>
            </p>
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
      {/* Partners Section */}
      <section id="partners" className="scroll-mt-14 w-full bg-white text-center flex flex-col justify-center items-center px-6 py-4">
        <h2 className="text-7xl font-semibold mb-6">PARTNERS</h2>
        <p className="text-lg max-w-4xl mx-auto">
          We are proud to work with some of the leading organizations in the industry. Our partnerships allow us to deliver exceptional services and solutions.
          <br />
          <br />
          By collaborating with key players in the industry, we ensure that our clients have access to the latest technologies and expertise.
        </p>
      </section>

      {/* Careers Section */}
      <section id="careers" className="scroll-mt-14 w-full py-4 px-6 bg-gray-100 flex flex-col items-center">
        <h2 className="text-7xl font-semibold mb-10 text-center">Careers</h2>

        <p className="text-lg max-w-4xl mx-auto">
          One thing that kept us going across the forming, storming, norming, and performing phases of business is our culture! A culture that is welcoming, a culture that helps you to discover YOU!

          We are driven by Passion and Hard Work in a collaborative environment.
          <br />
          We are an expanding company and constantly looking for candidates with a drive to perform and thrive in team work.  Please fill in the form and attach your latest resume to explore career options at Xangam.
          <br />
          <b>Form to fill in and attach resume</b>
        </p>
        <br />


        <form
          className="bg-gray-100 shadow-md rounded-xl p-8 w-full max-w-2xl space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted! (You can hook this to backend)");
          }}
        >
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Jane Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              placeholder="jane@example.com"
            />
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Cover Letter / Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Tell us why you'd be a great fit..."
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Upload Resume</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
                 file:rounded-full file:border-0
                 file:text-sm file:font-semibold
                 file:bg-blue-50 file:text-blue-700
                 hover:file:bg-blue-100"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </form>
      </section>


      {/* Contact Section */}
      <section id="contact" className="scroll-mt-16 px-6 py-20 bg-gray-100">
  <h2 className="text-3xl font-semibold mb-10 text-center">Contact Us</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

    {/* Google Map */}
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.62772018211!2d77.04586597408657!3d28.46063669186841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1939ee0b5733%3A0x2b709b3cb840c0d6!2sGoogle%20Signature%20Tower%20A!5e0!3m2!1sen!2sin!4v1744733710824!5m2!1sen!2sin" // your embed link here
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    {/* Contact Form */}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Message sent!");
      }}
      className="bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <div>
        <label className="block mb-1 font-medium text-gray-700">Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
          placeholder="you@example.com"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Message</label>
        <textarea
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
          placeholder="Your message..."
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

    </div>
  );
}

export default App;
