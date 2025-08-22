import React from 'react'
import { Check } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-20" style={{ backgroundColor: '#FFF5D5' }}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Fresh, Healthy & Affordable 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600"> Meals for Everyone</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                From families to students, bachelors to busy professionals, and migrant workers – we deliver tasty, hygienic meals made with love, just like home.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-700 hover:to-yellow-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Explore Meal Plans
              </button>
              {/* <button className="border-2 border-green-400 text-green-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-green-500 hover:bg-green-50 transition-all duration-200">
                Order Now
              </button> */}
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-green-600">
              <div className="flex items-center space-x-2 text-sm text-green-700">
                <Check className="w-5 h-5 text-green-700" />
                <span>Fresh ingredients daily</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-green-700">
                <Check className="w-5 h-5 text-green-700" />
                <span>Free delivery on orders</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-green-700">
                <Check className="w-5 h-5 text-green-700" />
                <span>24/7 customer support</span>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Main illustration container */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-orange-100">
                {/* Table with people */}
                <div className="relative">
                  {/* Table */}
                  <div className="w-full h-24 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-lg mb-4 relative">
                    {/* Food items on table */}
                    <div className="absolute top-2 left-4 w-8 h-8 bg-white rounded-full shadow-md"></div>
                    <div className="absolute top-2 right-4 w-6 h-6 bg-orange-300 rounded-full shadow-md"></div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-green-300 rounded-full shadow-md"></div>
                  </div>
                  
                  {/* People sitting around table */}
                  <div className="grid grid-cols-4 gap-2">
                    {/* Person 1 - Female with reddish-orange hair */}
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                      </div>
                      <div className="w-3 h-4 bg-yellow-300 rounded-full mx-auto mb-1"></div>
                      <div className="w-4 h-2 bg-orange-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Person 2 - Male with dark hair */}
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                      </div>
                      <div className="w-3 h-4 bg-blue-300 rounded-full mx-auto mb-1"></div>
                      <div className="w-4 h-2 bg-gray-700 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Person 3 - Male with curly hair */}
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                      </div>
                      <div className="w-3 h-4 bg-orange-400 rounded-full mx-auto mb-1"></div>
                      <div className="w-4 h-2 bg-amber-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Person 4 - Female with long dark hair */}
                    <div className="text-center">
                      <div className="w-12 h-12 bg-amber-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <div className="w-8 h-8 bg-amber-400 rounded-full"></div>
                      </div>
                      <div className="w-3 h-4 bg-amber-200 rounded-full mx-auto mb-1"></div>
                      <div className="w-4 h-2 bg-blue-500 rounded-full mx-auto"></div>
                    </div>
                  </div>
                  
                  {/* Small decorative elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-800 rounded-full opacity-60"></div>
                  <div className="absolute -top-4 -left-2 w-3 h-3 bg-gray-800 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-2 -right-4 w-2 h-2 bg-gray-800 rounded-full opacity-60"></div>
                </div>
                
                {/* Bottom text */}
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600 font-medium">Delicious meals, happy people</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-yellow-200 rounded-full opacity-60 animate-pulse animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
