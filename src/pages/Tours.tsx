import React from 'react';
import { tours } from '../data/tours';
import { Link } from 'react-router-dom';

const Tours = () => {
  return (
    <div className="section">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">Our Tours</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <div key={tour.id} className="overflow-hidden bg-white rounded-lg shadow-md">
            <img 
              src={tour.imageUrl} 
              alt={tour.name}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h2 className="mb-2 text-xl font-semibold text-gray-900">{tour.name}</h2>
              <p className="mb-4 text-gray-600">{tour.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">£{tour.price}</span>
                <Link 
                  to={`/tours/${tour.id}`}
                  className="px-4 py-2 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;