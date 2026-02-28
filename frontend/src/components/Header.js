import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const nav = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/booking', label: 'Booking' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-40">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl overflow-hidden bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-md flex items-center justify-center">
            <img src="/images/gallery/logo.png" alt="GlowStack" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-lg font-semibold text-gray-900">GlowStack</div>
            <div className="text-xs text-gray-500">Wellness & Beauty</div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          {nav.map((n) => (
            <Link
              key={n.path}
              to={n.path}
              className={`text-sm font-medium transition-colors ${location.pathname === n.path ? 'text-yellow-600' : 'text-gray-700 hover:text-gray-900'}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/booking" className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-sm text-sm font-semibold transition-transform transform hover:-translate-y-0.5">
            Book Now
          </Link>
          <Link to="/admin" className="text-sm text-gray-500 hover:text-gray-700">Admin</Link>
        </div>

        {/* Mobile */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white/90">
          <div className="px-6 py-4 space-y-3 flex flex-col">
            {nav.map((n) => (
              <Link key={n.path} to={n.path} onClick={() => setOpen(false)} className={`py-2 rounded-lg ${location.pathname === n.path ? 'bg-yellow-50 text-yellow-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                {n.label}
              </Link>
            ))}
            <Link to="/booking" onClick={() => setOpen(false)} className="block text-center mt-2 py-3 bg-yellow-500 text-white rounded-lg font-semibold">Book Now</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;