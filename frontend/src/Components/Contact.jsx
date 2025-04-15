export default function Contact(){
    return (
        <>
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
        </>
    )
}