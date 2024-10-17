import React from "react";
import NavBar from "../components/Navbar/NavBar";
import img from "../images/3bhk.jpg"; // Ensure the image path is correct

const ThreeBHK = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto my-8 mt-20 px-4 sm:px-0">
        {" "}
        {/* Added px-4 for padding on small screens */}
        {/* Large Image Visible Only on Small Screens */}
        <div className="w-full mb-8 block sm:hidden">
          {" "}
          {/* block on small screens, hidden on larger screens */}
          <img
            src={img}
            alt="3 BHK Apartment"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        {/* Apartment Heading */}
        <h1 className="text-3xl text-blue-900 font-bold mb-6 text-center">
          3 BHK Apartment
        </h1>
        {/* Apartment Description */}
        <p className="text-lg text-gray-700 leading-8">
          This spacious 3 BHK apartment offers a large living room, modern
          kitchen, three comfortable bedrooms, and two bathrooms. The apartment
          features high-end finishes and a balcony with stunning views.
        </p>
        {/* Apartment Details List */}
        <ul className="list-disc pl-8 my-4">
          <li>Area: 1600 sq ft</li>
          <li>3 Bedrooms</li>
          <li>1 Living Room</li>
          <li>2 Bathrooms</li>
          <li>Balcony with scenic view</li>
        </ul>
        {/* YouTube Video Embed */}
        <div className="w-full my-8">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/lJwW6lIckBo?si=7VWSxMk_YubjyQk9" // Replace with actual YouTube video link
            title="3 BHK Apartment Tour"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default ThreeBHK;
