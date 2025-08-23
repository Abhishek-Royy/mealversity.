import React from 'react'
import { Check, Calendar, Clock, Star, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-20" style={{ backgroundColor: '#FFF5D5' }}>
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-tr from-amber-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-6000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* Launch Date Announcement */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 shadow-2xl border border-blue-200/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-6 h-6 text-white" />
                <span className="text-white font-semibold text-lg">Launch Announcement</span>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                Our app will be launching in <span className="font-bold text-yellow-300">September 10, 2025</span>
              </p>
              <div className="flex items-center gap-2 mt-3">
                <Clock className="w-4 h-4 text-white/70" />
                <span className="text-white/70 text-sm">Get ready for a revolutionary food experience!</span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-[#1A365D] via-blue-800 to-[#1A365D] bg-clip-text text-transparent leading-tight">
                Fresh, Healthy & Affordable 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600"> Meals for Everyone</span>
              </h1>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl font-medium">
                From families to students, bachelors to busy professionals, and migrant workers – we deliver tasty, hygienic meals made with love, just like home.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#meal-plans">
              <button className="group bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-700 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
                Explore Meal Plans
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              </a>
              {/* <button className="border-2 border-orange-400 text-orange-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <Star className="w-5 h-5" />
                Join Waitlist
              </button> */}
            </div>

            {/* Enhanced Trust indicators */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-orange-500" />
                Why Choose MealVersity?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Fresh ingredients daily</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Free delivery on orders</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700 font-medium">24/7 customer support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Main image container */}
              <div className="relative">
                {/* Image container */}
                <div className="relative rounded-3xl p-4 sm:p-6 lg:p-8">
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
              
              {/* Bottom caption */}
              <div className="text-center mt-6">
                <p className="text-lg text-gray-700 font-semibold">Delicious meals, happy people</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
