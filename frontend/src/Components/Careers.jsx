export default function Careers() {
    return(
        <>
         <section id="careers" className=" w-full py-4 px-6 bg-gray-100 flex flex-col items-center">
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
        </>
    )
}