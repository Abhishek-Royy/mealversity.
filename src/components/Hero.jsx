import React from "react";
import { ArrowRight, Check } from "lucide-react";
import AppLaunch from "../components/AppLaunch"

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-20 lg:pt-24 pb-20 lg:pb-30"
      style={{ backgroundColor: "#FFF5D5" }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-100 rounded-full opacity-50 blur-xl"></div>
        <div className="absolute top-1/3 -left-20 w-48 h-48 bg-green-100 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-yellow-100 rounded-full opacity-30 blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 z-10">
            {/* Tagline */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-orange-100">
                <span className="text-sm font-semibold text-orange-600 tracking-wide">
                  MealVersity - The Smarter Choice
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#1A365D] via-blue-800 to-[#1A365D] bg-clip-text text-transparent leading-tight">
                You Deserve Fresh, Healthy & Affordable Meals
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
                  {" "}
                  Your Schedule Demands It
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                Invest in your well-being — not just your wallet. We deliver mom-quality healthy meals 
                for students, professionals, families, and hardworking migrants — all made with love, 
                priced with respect. Because you shouldn't have to choose between feeling cared for and staying within budget.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Chef-prepared meals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Budget-friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Flexible delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Nutritionist approved</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/meal-plans">
                <button className="group bg-gradient-to-r from-[#044735] to-[#0a7a5a] hover:from-[#033a2c] hover:to-[#09664b] text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 w-full sm:w-auto">
                  Start Eating Better
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </a>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="relative flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
     

              {/* Main image container */}
              <div className="relative">
                <div className="relative rounded-3xl sm:p-6 lg:p-8">
                  {/* Hero Image */}
                  <div className="relative overflow-hidden rounded-2xl transform hover:scale-[1.02] transition-transform duration-500">
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
      <AppLaunch/>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;