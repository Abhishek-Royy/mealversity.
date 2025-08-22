import React from 'react'
import { Users, Target, Heart, Shield, Star, Zap, Check, Truck, CreditCard } from 'lucide-react'

const Features = () => {
  return (
    <section id="features" className="pb-20 pt-30" style={{ backgroundColor: '#FFF5D5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Introduction Box */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-8 md:p-12 border-2 border-dashed border-teal-400 shadow-2xl transform hover:scale-105 transition-all duration-500">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 font-serif">
                MEALVERSITY
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-blue-900 leading-relaxed max-w-4xl mx-auto font-serif">
                MEALVERSITY GIVES YOU FRESH, SIMPLE, TASTY, AND HEALTHY MEALS EVERY SINGLE DAY—WITHOUT THE MESS. WHETHER YOU'RE A STUDENT, INTERN, OR OFFICE-GOER, YOU'LL LOVE OUR SERVICE.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features Grid - 2x2 Layout */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Common Food Challenges?
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              We understand your daily struggles with food. Here's how we solve them:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* Question Box 1 */}
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 border-2 border-teal-400 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    🍔
                  </div>
                  <p className="text-lg font-semibold text-gray-800">
                    Eating oily restaurant food every day?
                  </p>
                </div>
              </div>
            </div>

            {/* Question Box 2 */}
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 border-2 border-teal-400 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    🎈
                  </div>
                  <p className="text-lg font-semibold text-gray-800">
                    Mess food that's either late or tasteless?
                  </p>
                </div>
              </div>
            </div>

            {/* Question Box 3 */}
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 border-2 border-teal-400 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    ⏰
                  </div>
                  <p className="text-lg font-semibold text-gray-800">
                    No time to cook during classes or work?
                  </p>
                </div>
              </div>
            </div>

            {/* Question Box 4 */}
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 border-2 border-teal-400 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    💰
                  </div>
                  <p className="text-lg font-semibold text-gray-800">
                    Spending ₹5000-₹7000/month on unhealthy food?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              We provide comprehensive solutions to all your food challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-teal-100 to-mint-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Home-style meals made by trusted local kitchens
                </h3>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-orange-100 to-peach-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  On-time delivery by verified delivery agents
                </h3>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-yellow-100 to-gold-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Affordable weekly & monthly plans
                </h3>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Flexible payment via UPI, Wallet, or Cash
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                MealVersity is not just another food delivery service - it's a movement against boring food and kitchen stress. We run our own professional kitchen, where freshness, hygiene, and taste come first.
              </p>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 font-medium">Whether you're:</p>
                <ul className="space-y-3">
                  {[
                    "A family tired of daily cooking stress",
                    "A student surviving on instant noodles",
                    "A bachelor who can't cook (or won't)",
                    "A professional too busy to even think about cooking",
                    "Or a migrant worker missing home-style food"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-gray-700 font-semibold mt-4">
                  We've got a meal plan for you.
                </p>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in-right">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-orange-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                  {/* Table with people */}
                  <div className="relative">
                    {/* Table */}
                    <div className="w-full h-24 bg-gradient-to-r from-amber-200 to-orange-200 rounded-lg mb-4 relative animate-pulse">
                      {/* Food items on table */}
                      <div className="absolute top-2 left-4 w-8 h-8 bg-white rounded-full shadow-md animate-bounce"></div>
                      <div className="absolute top-2 right-4 w-6 h-6 bg-orange-300 rounded-full shadow-md animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-green-300 rounded-full shadow-md animate-bounce" style={{ animationDelay: '1s' }}></div>
                    </div>
                    
                    {/* People sitting around table */}
                    <div className="grid grid-cols-4 gap-2">
                      {/* Person 1 - Female with reddish-orange hair */}
                      <div className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        <div className="w-12 h-12 bg-orange-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                        </div>
                        <div className="w-3 h-4 bg-yellow-300 rounded-full mx-auto mb-1"></div>
                        <div className="w-4 h-2 bg-orange-600 rounded-full mx-auto"></div>
                      </div>
                      
                      {/* Person 2 - Male with dark hair */}
                      <div className="text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        <div className="w-12 h-12 bg-blue-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                        </div>
                        <div className="w-3 h-4 bg-blue-300 rounded-full mx-auto mb-1"></div>
                        <div className="w-4 h-2 bg-gray-700 rounded-full mx-auto"></div>
                      </div>
                      
                      {/* Person 3 - Male with curly hair */}
                      <div className="text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                        <div className="w-12 h-12 bg-orange-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                        </div>
                        <div className="w-3 h-4 bg-orange-400 rounded-full mx-auto mb-1"></div>
                        <div className="w-4 h-2 bg-amber-600 rounded-full mx-auto"></div>
                      </div>
                      
                      {/* Person 4 - Female with long dark hair */}
                      <div className="text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                        <div className="w-12 h-12 bg-amber-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <div className="w-8 h-8 bg-amber-400 rounded-full"></div>
                        </div>
                        <div className="w-3 h-4 bg-amber-200 rounded-full mx-auto mb-1"></div>
                        <div className="w-4 h-2 bg-blue-500 rounded-full mx-auto"></div>
                      </div>
                    </div>
                    
                    {/* Small decorative elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-800 rounded-full opacity-60 animate-ping"></div>
                    <div className="absolute -top-4 -left-2 w-3 h-3 bg-gray-800 rounded-full opacity-60 animate-ping" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute -bottom-2 -right-4 w-2 h-2 bg-gray-800 rounded-full opacity-60 animate-ping" style={{ animationDelay: '2s' }}></div>
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

        {/* Our Mission Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Illustration */}
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1 animate-fade-in-left">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                  {/* Three people behind computer */}
                  <div className="relative">
                    {/* Computer monitor */}
                    <div className="w-32 h-20 bg-blue-900 rounded-lg mx-auto mb-6 relative animate-pulse">
                      <div className="absolute inset-2 bg-blue-700 rounded"></div>
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
                    </div>
                    
                    {/* People */}
                    <div className="flex justify-center items-end space-x-4">
                      {/* Person 1 - Man with beard */}
                      <div className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        <div className="w-12 h-12 bg-blue-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                        </div>
                        <div className="w-3 h-4 bg-blue-200 rounded-full mx-auto mb-1"></div>
                        <div className="w-4 h-2 bg-blue-600 rounded-full mx-auto"></div>
                      </div>
                      
                      {/* Person 2 - Woman */}
                      <div className="text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        <div className="w-12 h-12 bg-blue-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                        </div>
                        <div className="w-3 h-4 bg-blue-200 rounded-full mx-auto mb-1"></div>
                        <div className="w-4 h-2 bg-blue-600 rounded-full mx-auto"></div>
                      </div>
                      
                      {/* Person 3 - Man with glasses */}
                      <div className="text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                        <div className="w-12 h-12 bg-blue-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                        </div>
                        <div className="w-3 h-4 bg-blue-200 rounded-full mx-auto mb-1"></div>
                        <div className="w-4 h-2 bg-blue-600 rounded-full mx-auto"></div>
                      </div>
                    </div>
                    
                    {/* Plant leaves */}
                    <div className="absolute -left-4 top-4 w-8 h-8 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute -right-4 top-6 w-6 h-6 bg-blue-200 rounded-full opacity-60 animate-pulse animation-delay-2000"></div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-300 rounded-full opacity-60 animate-ping"></div>
                    <div className="absolute top-1/2 -right-2 w-2 h-2 bg-blue-300 rounded-full opacity-60 animate-ping" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-300 rounded-full opacity-60 animate-ping" style={{ animationDelay: '2s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6 order-1 lg:order-2 animate-fade-in-right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                To serve delicious, healthy, and affordable meals that make life easier and happier – for <span className="font-bold text-blue-900">EVERYONE</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                Our Values
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Freshness First", description: "Cooked daily with love." },
                  { title: "Hygienic & Safe", description: "No shortcuts, no compromise." },
                  { title: "Affordable for All", description: "From budget meals to premium plans." },
                  { title: "Inclusive", description: "Food for all lifestyles, not just families." }
                ].map((value, index) => (
                  <div key={index} className="flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                      <p className="text-gray-700">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in-right">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-orange-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                  {/* Family around round table */}
                  <div className="relative">
                    {/* Round table */}
                    <div className="w-32 h-32 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full mx-auto mb-6 relative animate-pulse">
                      {/* Food items on table */}
                      <div className="absolute top-4 left-4 w-6 h-6 bg-red-600 rounded-full animate-bounce"></div>
                      <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
                    </div>
                    
                    {/* People around table */}
                    <div className="grid grid-cols-2 gap-8">
                      {/* Top row */}
                      <div className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        <div className="w-10 h-10 bg-blue-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                        </div>
                        <div className="w-2 h-3 bg-blue-200 rounded-full mx-auto mb-1"></div>
                        <div className="w-3 h-2 bg-blue-600 rounded-full mx-auto"></div>
                      </div>
                      <div className="text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        <div className="w-10 h-10 bg-pink-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
                        </div>
                        <div className="w-2 h-3 bg-pink-200 rounded-full mx-auto mb-1"></div>
                        <div className="w-3 h-2 bg-pink-600 rounded-full mx-auto"></div>
                      </div>
                      
                      {/* Bottom row */}
                      <div className="text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                        <div className="w-10 h-10 bg-blue-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                        </div>
                        <div className="w-2 h-3 bg-blue-200 rounded-full mx-auto mb-1"></div>
                        <div className="w-3 h-2 bg-blue-600 rounded-full mx-auto"></div>
                      </div>
                      <div className="text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                        <div className="w-10 h-10 bg-teal-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <div className="w-6 h-6 bg-teal-400 rounded-full"></div>
                        </div>
                        <div className="w-2 h-3 bg-teal-200 rounded-full mx-auto mb-1"></div>
                        <div className="w-3 h-2 bg-teal-600 rounded-full mx-auto"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom text */}
                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-600 font-medium">Family dining together</p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-200 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-yellow-200 rounded-full opacity-60 animate-pulse animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
