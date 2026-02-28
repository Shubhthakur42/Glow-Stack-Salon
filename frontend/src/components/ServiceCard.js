import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { getServiceImage } from '../utils/serviceImages';

const ServiceCard = ({ service }) => {
  const image = getServiceImage(service);

  return (
    <article className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl overflow-hidden transform transition-transform duration-400 hover:-translate-y-2">
      <div className="relative h-56 overflow-hidden bg-gray-50">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop';
          }}
          loading="lazy"
        />

        {service.popular && (
          <span className="absolute top-4 left-4 inline-flex items-center gap-2 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Popular</span>
        )}

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold text-lg">{service.name}</div>
              <div className="text-xs opacity-80">{service.category}</div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold">₹{service.price.toLocaleString('en-IN')}</div>
              <div className="text-xs opacity-80 flex items-center gap-1"><Clock className="w-3 h-3" />{service.duration}m</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>

        {service.features && (
          <div className="mb-4 flex flex-wrap gap-2">
            {service.features.slice(0, 3).map((f, i) => (
              <span key={i} className="text-xs px-3 py-1 rounded-full bg-yellow-50 text-yellow-700">{f}</span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between gap-3">
          <Link to={`/booking?service=${encodeURIComponent(service.name)}`} className="flex-1 text-center py-3 rounded-lg font-semibold bg-yellow-500 text-white hover:bg-yellow-600 transition-shadow shadow-sm">
            Book Now
          </Link>
          <Link to={`/services`} className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700">Details</Link>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;