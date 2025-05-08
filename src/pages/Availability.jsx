// import { useState, useEffect } from "react";
// import axios from "axios";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const Availability = () => {
//   const [date, setDate] = useState("");
//   const [availability, setAvailability] = useState([]);

//   const checkAvailability = () => {
//     axios
//       .get(`/api/bookings/availability?date=${date}`)
//       .then((res) => setAvailability(res.data))
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100 w-full">
//       <Header />
//     <div className="p-6 bg-gray-100 min-h-screen">
      
//       <h1 className="text-2xl font-bold">Check Hall Availability</h1>
//       <input
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         className="border p-2 mt-4"
//       />
//       <button
//         onClick={checkAvailability}
//         className="ml-2 bg-blue-500 text-white px-4 py-2"
//       >
//         Check Availability
//       </button>

//       <div className="mt-6">
//         {availability.length === 0 ? (
//           <p>No data available</p>
//         ) : (
//           availability.map((slot, index) => (
//             <p key={index} className="bg-white p-2 mt-2 rounded shadow-md">
//               {slot.time} - {slot.status}
//             </p>
//           ))
//         )}
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   );
// };

// export default Availability;


import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Bar } from "recharts";

const CheckAvailability = () => {
  const [availability, setAvailability] = useState({});
  const [timeSlots, setTimeSlots] = useState([]);
  const [date, setDate] = useState(new Date());


  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const response = await axios.get("/api/halls/availability");
        setAvailability(response.data);
      } catch (error) {
        console.error("Error fetching availability data:", error);
      }
    };
    fetchAvailability();
  }, []);

  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        const formattedDate = date.toISOString().split("T")[0];
        const response = await axios.get(`/api/halls/availability/${formattedDate}`);
        setTimeSlots(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching time slots:", error);
        setTimeSlots([]); // Ensure it's an empty array on error
      }
    };
    fetchTimeSlots();
  }, [date]);
  

  const tileClassName = ({ date }) => {
    const formattedDate = date.toISOString().split("T")[0];
    if (availability[formattedDate] === "available") {
      return "bg-blue-200 text-gray-700";
    } else if (availability[formattedDate] === "unavailable") {
      return "bg-red-200 text-gray-700";
    }
    return "bg-gray-100";
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex flex-grow items-center justify-center p-10">
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-6xl w-full flex gap-8">
          <div className="w-2/3">
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Check Hall Availability</h1>
            <div className="flex justify-center">
              <Calendar
                onChange={setDate}
                value={date}
                tileClassName={tileClassName}
                className="border border-gray-300 rounded-lg p-4 w-full max-w-lg"
              />
            </div>
          </div>
          <div className="w-1/3 bg-gray-50 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 text-center">Time Availability</h2>
            <div className="mt-4">
              {timeSlots.length > 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((slot, index) => (
                    <div
                      key={index}
                      className={`p-2 text-center rounded-lg text-sm font-medium ${
                        slot.status === "available" ? "bg-blue-200" : "bg-red-200"
                      }`}
                    >
                      {slot.time}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500">Select a date to see availability.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckAvailability;