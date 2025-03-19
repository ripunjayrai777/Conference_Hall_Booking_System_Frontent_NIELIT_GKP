

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_lx18xfp", // Replace with your EmailJS Service ID
        "template_4n9jnhj", // Replace with your EmailJS Template ID
        formData,
        "vK-mTOLq-l8ptnHbm" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("Email sending failed:", error);
          setStatus("Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <div>
      <Header />
       {/* Navbar */}
       <nav className="flex items-center justify-between px-6 py-4 bg-gray-600 bg-opacity-90 shadow-md">
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="text-gray-200 hover:text-gray-50">Home</Link>
          <Link to="/about" className="text-gray-200 hover:text-gray-50">About</Link>
          <Link to="/contact" className="text-gray-200 hover:text-gray-50">Contact</Link>
        </div>
        
      </nav>
      {/*contact us */}
      <div className="text-[28px] bg-gray-200">
        <h1 className='ml-45 text-gray-600 cursor-pointer hover:text-gray-700 font-semibold transition-all'>Contact Us</h1>
      </div>
      <div className="bg-gray-200 p-5">
        <div className="max-w-6xl mx-auto bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">NIELIT Gorakhpur Centre</h2>
          <p className="text-gray-700 mb-4">
            The working hours at NIELIT Gorakhpur are from 9:00 A.M. to 5:30 P.M (Monday to Friday). The centre remains closed on all Gazetted holidays as declared by the Government of India.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">How to Reach at NIELIT Gorakhpur Centre</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><span className="font-semibold">Rail:</span> Gorakhpur Junction Railway Station is connected to major cities like Delhi, Mumbai, Kolkata, etc.</li>
            <li><span className="font-semibold">Road:</span> The main bus depot is located near Gorakhpur Junction.</li>
            <li><span className="font-semibold">Air:</span> Mahayogi Gorakhnath Airport has direct connectivity to Delhi.</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100 p-6 rounded-lg">
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h4 className="font-semibold text-gray-800">Location</h4>
              <p className="text-gray-600">Gorakhpur-Deoria State Highway</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h4 className="font-semibold text-gray-800">Distance</h4>
              <p className="text-gray-600">8 km from Railway Station, 7.5 km from Bus Station, 5.5 km from Airport</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h4 className="font-semibold text-gray-800">Contact</h4>
              <p className="text-gray-600">info@nielit.gov.in</p>
            </div>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Designation</th>
                  <th className="border border-gray-300 px-4 py-2">E-Mail</th>
                </tr>
              </thead>
              
              <tbody>
               {[
                 { name: "Dr. D. K Mishra", designation: "Director", email: "dkmishra@nielit.gov.in" },
                 { name: "Shri. S.K. Singh", designation: "Additional Director/Scientist 'E'", email: "sksingh@nielit.gov.in" },
                 { name: "Shri. Pankaj Shukla", designation: "Scientist 'E'", email: "pankaj.shukla@nielit.gov.in" },
                 { name: "Shri. Abhinav Mishra", designation: "Joint Director (Tech)", email: "abhinav@nielit.gov.in" },
                 { name: "Shri. Anurag Govind Rao", designation: "Scientist-'D'", email: "agrao@nielit.gov.in" },
                 { name: "Shri. Prashant Gupta", designation: "Scientist-'D'", email: "prashant@nielit.gov.in" },
                 { name: "Shri. Ravi Rastogi", designation: "Scientist-'D'", email: "ravirastogi@nielit.gov.in" },
                 { name: "Km. Shalinee Mishra", designation: "Scientist-'C'", email: "shalinee@nielit.gov.in" },
                 { name: "Shri. Challa Venkata Harish", designation: "Scientist-'C'", email: "cvharish@nielit.gov.in" },
                 { name: "Shri. Ritesh Pratap Rao", designation: "Scientist-'C'", email: "riteshpratap@nielit.gov.in" },
                 { name: "Shri. R.K. Singh", designation: "Deputy Director (Admin)", email: "singhrajkumar@nielit.gov.in" },
                 { name: "Shri. B.S. Shishodia", designation: "Deputy Director (Civil)", email: "shishodiabs@nielit.gov.in" },
                 { name: "Mrs. Archana Tripathi", designation: "Pr. Technical Officer", email: "archana@nielit.gov.in" },
                 { name: "Shri. R.K.Chauhan", designation: "Sr. Technical Officer", email: "rkc@nielit.gov.in" },
                 { name: "Shri. Bhairav Mishra", designation: "Sr. Technical Officer", email: "bmishra@nielit.gov.in" },
               ].map((contact, index) => (
                 <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                   <td className="border border-gray-300 px-4 py-2">{contact.name}</td>
                   <td className="border border-gray-300 px-4 py-2">{contact.designation}</td>
                   <td className="border border-gray-300 px-4 py-2">{contact.email}</td>
                 </tr>
               ))}
             </tbody>
            </table>
          </div>

          <div className="w-full mt-10 flex justify-center">
            <div className="w-full  bg-white p-10 shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Mail Us Your Queries 📩</h2>
              <form onSubmit={handleSubmit} className="space-y-6 ">
                <div>
                  <label className="block text-gray-700 font-medium">Name:</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" required placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Email:</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" required placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Message:</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" rows="4" required placeholder="Write your message..." />
                </div>
                <button type="submit" className="w-full bg-gray-500 text-white px-5 py-3 rounded-md font-medium transition duration-100 hover:bg-gray-600 disabled:opacity-70" disabled={loading}>{loading ? "Sending..." : "Send Message"}</button>
              </form>
              {status && <p className="mt-4 text-center font-medium text-green-600">{status}</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
