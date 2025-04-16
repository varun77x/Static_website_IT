export default function Careers() {
  return (
    <section
      id="careers"
      className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 flex flex-col items-center"
    >
      <h2 className="text-4xl sm:text-5xl lg:text-5xl font-semibold mb-10 text-center">
        CAREERS
      </h2>

      <p className="text-base sm:text-lg max-w-3xl text-center mb-8">
        One thing that kept us going across the forming, storming, norming, and
        performing phases of business is our culture! A culture that is
        welcoming, a culture that helps you to discover YOU!
        <br />
        <br />
        We are driven by Passion and Hard Work in a collaborative environment.
        <br />
        We are an expanding company and constantly looking for candidates with a
        drive to perform and thrive in team work. Please fill in the form and
        attach your latest resume to explore career options at Xangam.
        <br />
        <strong>Form to fill in and attach resume</strong>
      </p>

      <form
        className="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-2xl space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted! (You can hook this to backend)");
        }}
      >
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Full Name</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Jane Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email Address</label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="jane@example.com"
          />
        </div>

        {/* Cover Letter */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Cover Letter / Message</label>
          <textarea
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>
    </section>
  );
}
