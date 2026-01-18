import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  // const linkClass = ({ isActive }) =>
  //   `block px-3 py-2 text-sm font-medium transition ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`;

  const linkClass = ({ isActive }) =>
  `relative block px-3 py-2 text-sm font-medium
   transition-colors duration-300 ease-in-out
   after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
   after:bg-blue-600 after:transition-transform after:duration-300
   after:origin-left
   ${isActive
     ? "text-blue-600 after:scale-x-100"
     : "text-gray-700 hover:text-blue-600 after:scale-x-0 hover:after:scale-x-100"}`;



  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="text-2xl  font-bold text-blue-600 no-underline">
            Solartec
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/service" className={linkClass}>Service</NavLink>
            <NavLink to="/project" className={linkClass}>Project</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>

            <a
              href="#quote"
              className="ml-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Get A Quote
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 "
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>Home</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className={linkClass}>About</NavLink>
            <NavLink to="/service" onClick={() => setOpen(false)} className={linkClass}>Service</NavLink>
            <NavLink to="/project" onClick={() => setOpen(false)} className={linkClass}>Project</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className={linkClass}>Contact</NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;