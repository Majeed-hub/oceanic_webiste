import React from "react";
import { Link } from "react-router-dom";
import twoBHK from "../images/2bhk.jpg";
import threeBHK from "../images/3bhk.jpg";
import fourBHK from "../images/4bhk.jpg";

// Reusable Card Component
const Card = ({ imgSrc, altText, title, link }) => (
  <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
    {/* <img
      src={imgSrc}
      alt={altText}
      className="w-full h-48 object-cover rounded-lg"
    /> */}
    <div className="m-2 text-justify text-sm">
      <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
        {title}
      </h4>
      <div className="flex justify-center my-4">
        <Link
          to={link}
          className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
        >
          View More
          <svg
            className="w-4 h-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  return (
    <div className="my-4 py-4" id="portfolio">
      <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
        Oceanic Building Apartments
      </h2>
      <div className="flex justify-center">
        <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
      </div>

      <div className="px-4" data-aos="fade-down" data-aos-delay="600">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* 2 BHK Apartment */}
          <Card
            imgSrc={twoBHK}
            altText="2 BHK Apartment"
            title="2 BHK Apartment"
            link="/oceanic-building/2bhk"
          />
          {/* 3 BHK Apartment */}
          <Card
            imgSrc={threeBHK}
            altText="3 BHK Apartment"
            title="3 BHK Apartment"
            link="/oceanic-building/3bhk"
          />
          {/* 4 BHK Apartment */}
          <Card
            imgSrc={fourBHK}
            altText="4 BHK Apartment"
            title="4 BHK Apartment"
            link="/oceanic-building/4bhk"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
