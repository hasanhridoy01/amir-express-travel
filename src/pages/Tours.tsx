import React from "react";
import { tours } from "../data/tours";
import { Link } from "react-router-dom";
import { FaClock, FaCheckCircle } from "react-icons/fa";

const Tours = () => {
  return (
    <div className="section">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">Our Tours</h1>

      {tours.map((tour) => (
        <div
          key={tour.id}
          className="flex flex-col p-4 mb-8 bg-white rounded-lg shadow md:flex-row"
        >
          {/* Tour Image */}
          <div className="w-full md:w-1/3">
            <img
              src={tour.image || "/placeholder.jpg"}
              alt={tour.title}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="w-full mt-4 md:w-2/3 md:pl-6 md:mt-0">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              {tour.title}
            </h2>

            {/* Duration */}
            <div className="flex items-center my-4 text-gray-700">
              <FaClock className="mr-2 text-blue-600" />
              <span className="font-semibold">Duration:</span>
              <span className="ml-1">{tour.duration}</span>
            </div>

            {/* Highlights */}
            <ul className="mb-4 space-y-2 text-gray-700">
              {tour.Highlights?.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Price and CTA */}
            <div className="flex items-center justify-end gap-5">
              <div className="text-right">
                {tour.oldPrice && (
                  <p className="text-sm text-gray-500 line-through">
                    was £{tour.oldPrice}
                  </p>
                )}
                <p className="text-xl font-bold text-gray-900">
                  From £{tour.price}
                </p>
              </div>
              <Link
                to={`/tours/${tour.id}`}
                className="px-6 py-3 text-sm font-semibold text-white transition bg-orange-500 rounded-md hover:bg-orange-600"
              >
                More info →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tours;
