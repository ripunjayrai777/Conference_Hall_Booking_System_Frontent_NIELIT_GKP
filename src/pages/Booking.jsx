
import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Booking = () => {
  const [hall, setHall] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const isValidTimeDifference = () => {
    if (!startTime || !endTime) return false;
    
    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);
    
    return (end - start) >= 30 * 60 * 1000; // Ensures at least 30 minutes difference
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!isValidTimeDifference()) {
      alert("End time must be at least 30 minutes after start time.");
      return;
    }

    try {
      await axios.post("/api/bookings/request", { hall, date, startTime, endTime });
      alert("Booking requested successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex flex-grow items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 max-w-lg w-full">
          <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Book a Seminar Hall</h1>
          <form onSubmit={handleBooking} className="space-y-4">
            <input
              type="text"
              placeholder="Hall Name"
              value={hall}
              onChange={(e) => setHall(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
            <div className="flex gap-4">
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 outline-none"
                required
              />
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className={`border p-3 w-full rounded-lg outline-none focus:ring-2 ${
                  isValidTimeDifference() ? "border-gray-300 focus:ring-green-500" : "border-red-500 focus:ring-red-500"
                }`}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white text-lg font-semibold p-3 rounded-lg shadow-md hover:bg-green-600 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={!isValidTimeDifference()}
            >
              Request Booking
            </button>
            <div className="text-center text-gray-400"><h1>Minimum Hall Booking Time is 30 Minutes.</h1></div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;


// this code for hall selection using dropdown from backend
 
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const Booking = () => {
//   const [halls, setHalls] = useState([]); // Stores hall names from backend
//   const [hall, setHall] = useState("");
//   const [date, setDate] = useState("");
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch hall names from backend
//   useEffect(() => {
//     axios.get("/api/halls")
//       .then((response) => {
//         setHalls(response.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching halls:", err);
//         setError("Failed to load halls. Please try again.");
//         setLoading(false);
//       });
//   }, []);

//   // Time validation: Minimum 30-minute difference
//   const isValidTimeDifference = () => {
//     if (!startTime || !endTime) return false;
    
//     const start = new Date(`1970-01-01T${startTime}:00`);
//     const end = new Date(`1970-01-01T${endTime}:00`);
    
//     return (end - start) >= 30 * 60 * 1000; // Ensures at least 30 minutes difference
//   };

//   const handleBooking = async (e) => {
//     e.preventDefault();

//     if (!isValidTimeDifference()) {
//       alert("End time must be at least 30 minutes after start time.");
//       return;
//     }

//     try {
//       await axios.post("/api/bookings/request", { hall, date, startTime, endTime });
//       alert("Booking requested successfully!");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       <Header />
//       <div className="flex flex-grow items-center justify-center p-6">
//         <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 max-w-lg w-full">
//           <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Book a Seminar Hall</h1>
          
//           {loading ? (
//             <p className="text-center text-gray-500">Loading available halls...</p>
//           ) : error ? (
//             <p className="text-center text-red-500">{error}</p>
//           ) : (
//             <form onSubmit={handleBooking} className="space-y-4">
//               {/* Dropdown for Hall Selection */}
//               <select
//                 value={hall}
//                 onChange={(e) => setHall(e.target.value)}
//                 className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 outline-none"
//                 required
//               >
//                 <option value="">Select a Hall</option>
//                 {halls.map((hallName, index) => (
//                   <option key={index} value={hallName}>{hallName}</option>
//                 ))}
//               </select>

//               <input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 outline-none"
//                 required
//               />

//               <div className="flex gap-4">
//                 <input
//                   type="time"
//                   value={startTime}
//                   onChange={(e) => setStartTime(e.target.value)}
//                   className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 outline-none"
//                   required
//                 />
//                 <input
//                   type="time"
//                   value={endTime}
//                   onChange={(e) => setEndTime(e.target.value)}
//                   className={`border p-3 w-full rounded-lg outline-none focus:ring-2 ${
//                     isValidTimeDifference() ? "border-gray-300 focus:ring-green-500" : "border-red-500 focus:ring-red-500"
//                   }`}
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-green-500 text-white text-lg font-semibold p-3 rounded-lg shadow-md hover:bg-green-600 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
//                 disabled={!isValidTimeDifference()}
//               >
//                 Request Booking
//               </button>

//               <div className="text-center text-gray-400">
//                 <h1>Minimum Hall Booking Time is 30 Minutes.</h1>
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Booking;
