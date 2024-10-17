import React from "react";
import NavBar from "../components/Navbar/NavBar";
import img from "../images/4bhk.jpg"; // Ensure the image path is correct

const FourBHK = () => {
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
            alt="4 BHK Apartment"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        {/* Apartment Heading */}
        <h1 className="text-3xl text-blue-900 font-bold mb-6 text-center">
          4 BHK Apartment
        </h1>
        {/* Apartment Description */}
        <p className="text-lg text-gray-700 leading-8">
          The 4 BHK apartment is a luxurious, spacious home featuring a grand
          living room, large kitchen, four bedrooms, and three bathrooms. Ideal
          for large families, it also includes a wide balcony offering
          breathtaking views.
        </p>
        {/* Apartment Details List */}
        <ul className="list-disc pl-8 my-4">
          <li>Area: 2000 sq ft</li>
          <li>4 Bedrooms</li>
          <li>1 Large Living Room</li>
          <li>3 Bathrooms</li>
          <li>Expansive Balcony with panoramic view</li>
        </ul>
        {/* YouTube Video Embed */}
        <div className="w-full my-8">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/tYi8KSjxUGg?si=wSN0LcpixpwjWHT_" // Replace with actual YouTube video link
            title="4 BHK Apartment Tour"
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

export default FourBHK;
