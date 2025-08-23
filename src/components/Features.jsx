import React from 'react'
import { Users, Target, Heart, Shield, Star, Zap, Check, Truck, CreditCard, Sparkles, Award, Clock, DollarSign } from 'lucide-react'

const Features = () => {
  return (
    <section id="features" className="relative overflow-hidden pt-20 pb-1 lg:pt-32 lg:pb-2" style={{ backgroundColor: '#FFF5D5' }}>



      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who We Are Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6 shadow-lg">
                <Users className="w-5 h-5" />
                Who We Are
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1A365D] via-blue-800 to-[#1A365D] bg-clip-text text-transparent leading-tight">
                Not just another food delivery service
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                MealVersity is a movement against boring food and kitchen stress. We run our own professional kitchen, where freshness, hygiene, and taste come first.
              </p>
              <div className="space-y-6">
                <p className="text-xl text-gray-700 font-semibold">Whether you're:</p>
                <ul className="space-y-4">
                  {[
                    "A family tired of daily cooking stress",
                    "A student surviving on instant noodles",
                    "A bachelor who can't cook (or won't)",
                    "A professional too busy to even think about cooking",
                    "Or a migrant worker missing home-style food"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                      <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0 shadow-lg animate-pulse"></div>
                      <span className="text-lg text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-6 border border-orange-200">
                  <p className="text-xl text-gray-800 font-bold text-center">
                    We've got a meal plan for you.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in-right">
              <div className="relative w-full max-w-lg">
                <div className="relative">
                  {/* Who We Are Image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src="/whoweare1.png" 
                      alt="Who We Are - MealVersity team and community" 
                      className="w-full h-auto object-cover rounded-2xl"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Bottom text */}
                  <div className="text-center mt-6">
                    <p className="text-lg text-gray-700 font-semibold">Delicious meals, happy people</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Illustration */}
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1 animate-fade-in-left">
              <div className="relative w-full max-w-lg">
                <div className="relative">
                  {/* Mission Image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src="/mission.png" 
                      alt="Our Mission - MealVersity mission and values" 
                      className="w-full h-auto object-cover rounded-2xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 order-1 lg:order-2 animate-fade-in-right">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6 shadow-lg">
                <Target className="w-5 h-5" />
                Our Mission
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1A365D] via-blue-800 to-[#1A365D] bg-clip-text text-transparent leading-tight">
                To serve delicious, healthy, and affordable meals
              </h2>
              <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl p-8 border border-green-200">
                <p className="text-2xl text-gray-800 leading-relaxed font-semibold">
                  That make life easier and happier – for <span className="font-bold text-blue-900">EVERYONE</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6 shadow-lg">
                <Heart className="w-5 h-5" />
                Our Values
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1A365D] via-blue-800 to-[#1A365D] bg-clip-text text-transparent leading-tight">
                What drives us forward
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Freshness First", description: "Cooked daily with love.", icon: "🌱" },
                  { title: "Hygienic & Safe", description: "No shortcuts, no compromise.", icon: "🛡️" },
                  { title: "Affordable for All", description: "From budget meals to premium plans.", icon: "💰" },
                  { title: "Inclusive", description: "Food for all lifestyles, not just families.", icon: "🤝" }
                ].map((value, index) => (
                  <div key={index} className="flex items-start space-x-4 animate-fade-in-up bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="text-3xl">{value.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-700 font-medium">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

                        {/* Right Illustration */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in-right">
              <div className="relative w-full max-w-lg">
                <div className="relative">
                  {/* Dining Image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src="/dining-img.png" 
                      alt="Our Values - Family dining together" 
                      className="w-full h-auto object-cover rounded-2xl"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Bottom text */}
                  <div className="text-center mt-6">
                    <p className="text-lg text-gray-700 font-semibold">Family dining together</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Grid - 2x2 Layout */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6 shadow-lg">
              <Target className="w-5 h-5" />
              Common Food Challenges?
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
              We understand your daily struggles with food
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Here's how we solve them with our innovative approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {/* Question Box 1 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                  <div className="flex-1">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      🍔
                    </div>
                    <p className="text-xl font-semibold text-gray-800 leading-relaxed">
                      Eating oily restaurant food every day?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Question Box 2 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                  <div className="flex-1">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      🎈
                    </div>
                    <p className="text-xl font-semibold text-gray-800 leading-relaxed">
                      Mess food that's either late or tasteless?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Question Box 3 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                  <div className="flex-1">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      ⏰
                    </div>
                    <p className="text-xl font-semibold text-gray-800 leading-relaxed">
                      No time to cook during classes or work?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Question Box 4 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-teal-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                  <div className="flex-1">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      💰
                    </div>
                    <p className="text-xl font-semibold text-gray-800 leading-relaxed">
                      Spending ₹5000-₹7000/month on unhealthy food?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Features Grid */}
        <div className="mb-16 lg:mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6 shadow-lg">
              <Award className="w-5 h-5" />
              Our Solutions
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
              Comprehensive solutions to all your food challenges
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We provide innovative solutions that make healthy eating effortless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 h-full">
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Check className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 leading-relaxed">
                    Home-style meals made by trusted local kitchens
                  </h3>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 h-full">
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Truck className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                      <Clock className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 leading-relaxed">
                    On-time delivery by verified delivery agents
                  </h3>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 h-full">
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <CreditCard className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                      <DollarSign className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 leading-relaxed">
                    Affordable weekly & monthly plans
                  </h3>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 h-full">
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Star className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                      <Heart className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 leading-relaxed">
                    Flexible payment via UPI, Wallet, or Cash
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>







      </div>
    </section>
  )
}

export default Features
