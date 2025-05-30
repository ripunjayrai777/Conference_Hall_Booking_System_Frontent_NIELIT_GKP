import { useEffect, useState } from "react";
import axios from "axios";
// import { useAuth } from "../context/AuthContext";

const UserDashboard = () => {
  // const { user, logout } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/bookings/user")
      .then((res) => setBookings(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">Welcome, {user?.name} (User)</h1>
      <div className="mt-6">
        {bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          bookings.map((booking) => (
            <div
              key={booking._id}
              className="p-4 bg-white rounded shadow-md mb-4"
            >
              <p>
                <strong>Hall:</strong> {booking.hall}
              </p>
              <p>
                <strong>Time:</strong> {booking.time}
              </p>
              <p>
                <strong>Status:</strong> {booking.status}
              </p>
            </div>
          ))
        )}
      </div>
      {/* <button
        onClick={logout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button> */}
    </div>
  );
};

export default UserDashboard;
