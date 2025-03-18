import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AdminDashboard from "../pages/AdminDashboard";
import UserDashboard from "../pages/UserDashboard";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Booking from "../pages/Booking";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Booking />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute role="admin" />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
        <Route element={<PrivateRoute role="user" />}>
          <Route path="/user" element={<UserDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
