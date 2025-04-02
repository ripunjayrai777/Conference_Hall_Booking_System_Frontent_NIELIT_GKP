

//new phase of booking page , preview feature of selected hall added--------------------------------------------------------
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Booking = () => {
  const [halls, setHalls] = useState([
    { id: 1, name: "Auditorium A", image: "auditorium_a.jpg", capacity: 200, features: ["Projector", "Sound System", "WiFi"] },
    { id: 2, name: "Conference Room B", image: "conference_b.jpg", capacity: 50, features: ["Whiteboard", "Video Conferencing"] },
    { id: 3, name: "Seminar Hall C", image: "seminar_c.jpg", capacity: 100, features: ["AC", "Podium", "Microphones"] }
  ]);
  const [selectedHall, setSelectedHall] = useState(null);
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const isValidTimeDifference = () => {
    if (!startTime || !endTime) return false;
    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);
    return end - start >= 30 * 60 * 1000;
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!isValidTimeDifference()) {
      alert("End time must be at least 30 minutes after start time.");
      return;
    }
    alert("Booking requested successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 w-full">
      <Header />
      <div className="flex flex-grow items-center justify-center p-10 w-full">
        <div className="bg-white shadow-lg rounded-xl p-10 sm:p-12 w-full max-w-5xl flex gap-10">
          <div className="w-2/3">
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">Book a Seminar Hall</h1>
            <form onSubmit={handleBooking} className="space-y-6">
              <select
                value={selectedHall?.name || ""}
                onChange={(e) =>
                  setSelectedHall(halls.find((hall) => hall.name === e.target.value))
                }
                className="border border-gray-300 rounded-lg p-4 w-full focus:ring-2 focus:ring-green-500 outline-none text-lg"
                required
              >
                <option value="" disabled>
                  Select a Hall
                </option>
                {halls.map((hall) => (
                  <option key={hall.id} value={hall.name}>
                    {hall.name}
                  </option>
                ))}
              </select>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border border-gray-300 rounded-lg p-4 w-full focus:ring-2 focus:ring-green-500 outline-none text-lg"
                required
              />
              <div className="flex gap-6">
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="border border-gray-300 rounded-lg p-4 w-full focus:ring-2 focus:ring-green-500 outline-none text-lg"
                  required
                />
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className={`border p-4 w-full rounded-lg outline-none text-lg focus:ring-2 ${
                    isValidTimeDifference() ? "border-gray-300 focus:ring-green-500" : "border-red-500 focus:ring-red-500"
                  }`}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white text-xl font-semibold p-4 rounded-lg shadow-md hover:bg-green-600 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={!isValidTimeDifference() || !selectedHall}
              >
                Request Booking
              </button>
              <div className="text-center text-gray-400 text-lg">
                <h1>Minimum Hall Booking Time is 30 Minutes.</h1>
              </div>
            </form>
          </div>
          {selectedHall && (
            <div className="w-1/3 bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center">
              <h2 className="text-xl font-semibold text-gray-700 mb-3">{selectedHall.name}</h2>
              <img src={selectedHall.image} alt={selectedHall.name} className="w-full h-40 object-cover rounded-md" />
              <p className="text-lg text-gray-600 mt-3">Capacity: {selectedHall.capacity}</p>
              <p className="text-lg text-gray-600 mt-2">Features: {selectedHall.features.join(", ")}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
