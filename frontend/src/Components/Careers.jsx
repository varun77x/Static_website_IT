import { useState } from "react";

export default function Careers() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    coverLetter: "",
    resumeLink: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxUcIS9mQ0pxIwLG5cwphapvI8PLfHsE1hzdmHes7tKNHUvLyRv_FfBOGBjQ-qOToA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(formData);

      setFormData({
        fullName: "",
        email: "",
        coverLetter: "",
        resumeLink: "",
      });

      alert("Application submitted!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed.");
    }
  };

  return (
    <section
      id="careers"
      className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 flex flex-col items-center"
    >
      <h2 className="text-4xl sm:text-5xl font-semibold mb-10 text-center">
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
        drive to perform and thrive in teamwork. Please fill in the form and
        attach your latest resume to explore career options at Xangam.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-2xl space-y-6"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-2">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Jane Doe"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="jane@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Cover Letter / Message</label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            rows="4"
            required
            placeholder="Tell us why you'd be a great fit..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Resume Link (Google Drive, Dropbox etc.)</label>
          <input
            type="url"
            name="resumeLink"
            value={formData.resumeLink}
            onChange={handleChange}
            required
            placeholder="https://drive.google.com/..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

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
