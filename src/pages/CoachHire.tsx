import React from 'react';

const CoachHire = () => {
  return (
    <div className="section">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">Coach Hire Services</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Private Coach Hire</h2>
          <p className="mb-4 text-gray-600">
            Whether you're planning a corporate event, school trip, or private tour, our modern fleet
            of coaches is available for hire. We offer competitive rates and flexible booking options
            to meet your specific requirements.
          </p>
          <ul className="space-y-2 text-gray-600 list-disc list-inside">
            <li>Modern, well-maintained fleet</li>
            <li>Professional, experienced drivers</li>
            <li>Flexible booking options</li>
            <li>24/7 customer support</li>
          </ul>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Corporate Services</h2>
          <p className="mb-4 text-gray-600">
            Specializing in corporate transport solutions, we provide reliable and comfortable coach
            services for business events, conferences, and staff transportation needs.
          </p>
          <ul className="space-y-2 text-gray-600 list-disc list-inside">
            <li>Corporate account management</li>
            <li>Event transportation planning</li>
            <li>Regular shuttle services</li>
            <li>VIP transport options</li>
          </ul>
        </div>
      </div>
      <div className="p-6 mt-12 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Request a Quote</h2>
        <p className="mb-6 text-gray-600">
          Contact us today to discuss your coach hire requirements and receive a competitive quote
          tailored to your needs.
        </p>
        <button className="px-6 py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default CoachHire;