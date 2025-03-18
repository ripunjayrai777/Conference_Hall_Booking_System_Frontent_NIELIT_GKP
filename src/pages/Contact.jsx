import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div><Header/>
    <div className=" text-[28px]   bg-gray-600"><h1 className='ml-45 p-2 text-gray-100 cursor-pointer hover:text-gray-200 font-semibold transition-all'>Contact Us</h1></div>
    <div className="bg-gray-100 p-8">
      
      <div className="max-w-6xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">NIELIT Gorakhpur Centre</h2>
        <p className="text-gray-700 mb-4">
          The working hours at NIELIT Gorakhpur are from 9:00 A.M. to 5:30 P.M (Monday to Friday). The centre remains
          closed on all Gazetted holidays as declared by the Government of India.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">How to Reach at NIELIT Gorakhpur Centre</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li><span className="font-semibold">Rail:</span> Gorakhpur Junction Railway Station is connected to major cities like Delhi, Mumbai, Kolkata, etc.</li>
          <li><span className="font-semibold">Road:</span> The main bus depot is located near Gorakhpur Junction.</li>
          <li><span className="font-semibold">Air:</span> Mahayogi Gorakhnath Airport has direct connectivity to Delhi.</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-100 p-4 rounded-lg">
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

        <div className="mt-6 overflow-x-auto">
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
      </div>
      
      </div>
      <Footer/>
    </div>
  )
}

export default Contact