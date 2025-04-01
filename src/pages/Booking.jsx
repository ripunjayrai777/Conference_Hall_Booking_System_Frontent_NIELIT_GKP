
import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Booking = () => {
  const [hall, setHall] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();
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
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white text-lg font-semibold p-3 rounded-lg shadow-md hover:bg-green-600 transition-all"
            >
              Request Booking
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
