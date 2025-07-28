import React from "react";
import Wellcom from "../images/Wellcom.png";
import supportingimg2 from "../images/supportingimg2.png";

function Home() {
  return (
    <div className="w-screen bg-gray-100 px-6">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full min-h-screen py-12">
        {/* Text Content */}
        <div className="text-center lg:text-left w-full ml-[5%] max-w-2xl">
          <h1 className="text-6xl font-bold text-blue-900 leading-tight">
            We Provide
          </h1>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 text-transparent bg-clip-text">
            Best Broadband &
          </h1>
          <h1 className="text-6xl font-bold text-blue-900">
            Internet Service
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Find superfast network solutions tailored for your needs.
          </p>
          <button className="mt-6 px-6 py-3 bg-amber-400 text-white text-lg font-semibold rounded-full shadow-md hover:bg-amber-500 hover:text-black hover:scale-105 transition-all">
            Read More
          </button>
        </div>

       
        <div className="ml-[10%] lg:ml-auto flex justify-center items-center  lg:w-[70%] h-[10rem] md:h-[25rem] rounded-xl mt-10 lg:mt-0 p-5 overflow-hidden">
  <img
    src={Wellcom}
    alt="Welcome"
    className="w-full h-full object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
  />
</div>


      </div>

      <div className="flex flex-col lg:flex-row items-center bg-transparent hover:shadow-cyan-400 transition duration-75 rounded-lg shadow-xl w-full h-auto mb-44 p-6">
  
        <div className="rounded-lg overflow-hidden w-full lg:w-[35%] flex justify-center">
          <img
            src={supportingimg2}
            alt="Supporting"
            className="w-80 h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-all duration-300"
          />
        </div>

       
        <div className="w-full lg:w-[60%] max-w-4xl p-6 text-center lg:text-left">
          <p className="text-gray-700 text-lg">
            Experience the future of high-speed internet with our cutting-edge
            broadband services.
          </p>

          <h1 className="text-3xl font-bold text-gray-950 mt-4">
            Ultra-Fast, Reliable, and Affordable Internet
          </h1>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our telecom company is committed to delivering lightning-fast
            internet speeds with unbeatable reliability. Whether you are
            streaming movies, working remotely, or gaming online, we ensure
            seamless connectivity without interruptions.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Powered by{" "}
            <span className="font-semibold text-gray-800">
              advanced fiber-optic technology
            </span>
            , our network provides speeds of up to{" "}
            <span className="font-semibold text-gray-800">1 Gbps</span>,
            ensuring ultra-low latency and smooth browsing. With{" "}
            <span className="font-semibold text-gray-800">
              24/7 customer support
            </span>{" "}
            and <span className="font-semibold text-gray-800">affordable</span>{" "}
            plans, we bring you the best internet experience at the best price.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Join thousands of satisfied customers who trust us for their
            internet needs. Upgrade to a smarter, faster, and more efficient
            broadband connection today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
