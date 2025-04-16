export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-6 py-20 bg-gray-100">
      <h2 className="text-4xl sm:text-5xl font-semibold mb-12 text-center">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
        {/* Google Map */}
        <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0097552950483!2d72.9986478!3d19.0633087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1d0797205cf%3A0x427bc06eb96f4230!2sXangars%20Infratech%20Solutions!5e0!3m2!1sen!2sin!4v1744788737192!5m2!1sen!2sin"
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
          className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full space-y-6"
        >
          <div>
            <label className="block mb-2 font-medium text-gray-700">Name</label>
            <input
              type="text"
              required
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              required
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
