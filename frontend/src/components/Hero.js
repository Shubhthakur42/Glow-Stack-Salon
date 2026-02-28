import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, ctas = [] }) => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="relative h-[72vh] md:h-[78vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/gallery/barbershop-hero.jpg"
            alt="Salon hero"
            className="w-full h-full object-cover brightness-[0.55]"
            loading="eager"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">{title}</h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-white/90 mb-8">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctas.map((c) => (
              <Link
                key={c.label}
                to={c.to}
                className={`px-6 py-3 rounded-full font-semibold transition-transform ${c.variant === 'primary' ? 'bg-yellow-500 text-white shadow-lg hover:bg-yellow-600' : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'}`}
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent py-6">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold">50+</div>
                <div className="text-sm opacity-90">Salon Services</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold">15</div>
                <div className="text-sm opacity-90">Expert Stylists</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold">5K+</div>
                <div className="text-sm opacity-90">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold">12</div>
                <div className="text-sm opacity-90">Rooms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;