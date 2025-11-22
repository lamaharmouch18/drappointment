<<<<<<< HEAD
// REHAM

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="p-4 bg-white shadow">
      <nav className="flex justify-between items-center container mx-auto">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          DrAppointment
        </Link>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
=======
import { NavLink, useNavigate } from "react-router-dom";
import { HeartPulse } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/doctors", label: "Doctors" },
    { to: "/contact", label: "Contact" },
  ];

  // Handle "Book Appointment" click
  const handleBookAppointment = () => {
    // tell Contact page we came from this button
    localStorage.setItem("scrollToAppointment", "true");
    navigate("/contact");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="max-w-7xl mx-auto py-4 px-6 flex items-center justify-between">
        {/* LOGO */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2"
          type="button"
        >
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-[#ff5ea8] to-[#7d5bff] flex items-center justify-center">
            <HeartPulse className="h-6 w-6 text-white" />
          </div>

          <h1 className="text-2xl font-semibold">
            <span className="text-[#6a4cff]">Health</span>
            <span className="text-[#ff5ea8]">Care+</span>
          </h1>
        </button>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-10 text-[17px]">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-slate-600 hover:text-slate-900 transition"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate("/login")}
            className="text-slate-600 hover:text-slate-900 transition text-[17px]"
            type="button"
          >
            Login
          </button>

          <button
            onClick={handleBookAppointment}
            className="px-6 py-2 bg-[#7d5bff] hover:bg-[#6a4cff] text-white rounded-xl text-[17px] transition"
            type="button"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}
>>>>>>> 5406e0bb834f0bfc5c07bd7da41f12f5a7d5e74a
