import React from "react";
import { Check, Calendar, Clock, Star, ArrowRight } from "lucide-react";

// import ChatBot from "../ChatBot/ChatBot";
// import "../ChatBot/ChatBot.css";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-20"
      style={{ backgroundColor: "#FFF5D5" }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#1A365D] via-blue-800 to-[#1A365D] bg-clip-text text-transparent leading-tight">
                Fresh, Healthy & Affordable
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
                  {" "}
                  Meals for Everyone
                </span>
              </h1>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl font-medium">
                From families to students, bachelors to busy professionals, and
                migrant workers – we deliver tasty, hygienic meals made with
                love, just like home.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#meal-plans">
                <button className="group bg-gradient-to-r from-[#044735] to-[#0a7a5a]  hover:from-[#033a2c] hover:to-[#09664b] text-white px-8 py-4 rounded-full text-lg font-semibold  transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
                  Explore Meal Plans
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </a>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Main image container */}
              <div className="relative">
                {/* Image container */}
                <div className="relative rounded-3xl  sm:p-6 lg:p-8">
                  {/* Hero Image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/hero-img.png"
                      alt="Fresh and healthy meals for everyone"
                      className="w-full h-auto object-cover rounded-2xl"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ChatBot /> */}
    </section>
  );
};

export default Hero;
