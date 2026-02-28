import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-yellow-500 flex items-center justify-center">
                <img src="/images/gallery/logo.png" alt="logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-white font-semibold">GlowStack</div>
                <div className="text-sm">Wellness & Beauty</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 max-w-sm">Beautifully crafted salon experiences — expert stylists, premium products and relaxed ambiance.</p>

            <div className="flex gap-3 mt-4">
              <a href="https://facebook.com" aria-label="facebook" className="text-gray-400 hover:text-white"><Facebook className="w-5 h-5" /></a>
              <a href="https://instagram.com" aria-label="instagram" className="text-gray-400 hover:text-white"><Instagram className="w-5 h-5" /></a>
              <a href="https://twitter.com" aria-label="twitter" className="text-gray-400 hover:text-white"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="flex justify-between md:justify-center">
            <div>
              <h4 className="text-white font-semibold mb-3">Explore</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/services" className="hover:text-white">Services</Link></li>
                <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
                <li><Link to="/booking" className="hover:text-white">Book</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div className="ml-8 md:ml-12">
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <div className="text-sm text-gray-400 space-y-2">
                <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-yellow-500" /> <span>1234567890</span></div>
                <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-yellow-500" /> <span>hello@glowstack.com</span></div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-yellow-500" /> <span>Phagwara, Punjab</span></div>
              </div>
            </div>
          </div>

          <div className="md:text-right">
            <div className="text-sm text-gray-400">Business Hours</div>
            <div className="mt-2 text-white font-semibold">Mon - Sun · 9:00 AM — 8:00 PM</div>
            <div className="mt-6 text-sm text-gray-500">&copy; {year} GlowStack. All rights reserved.</div>
          </div>
        </div>



        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              &copy; {year} GlowStack. All rights reserved.
            </div>
            

            
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-yellow-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-yellow-600 transition-colors">
                Terms of Service
              </Link>
              <Link to="/faq" className="hover:text-yellow-600 transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;