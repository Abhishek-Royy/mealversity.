import React, { useState } from 'react'
import { Check, Calendar, Clock, DollarSign, Users, Utensils, Star,IndianRupee } from 'lucide-react'

const Meal = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const mealPlans = [
    // Lunch Category
    {
      id: 1,
      category: "Lunch",
      planName: "Power Lunch 7",
      code: "PL7MIX",
      details: "Weekly lunch (Veg + Non-Veg) - 7 meals",
      forWhom: "Office goers, Students needing variety",
      makingPrice: "",
      sellingPrice: "",
      popular: true,
      color: "from-orange-400 to-yellow-400",
      bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50",
      borderColor: "border-orange-200"
    },
    {
      id: 2,
      category: "Lunch",
      planName: "Green Feast 7",
      code: "GF7VEG",
      details: "Weekly vegetarian lunch - 7 meals",
      forWhom: "Pure veg lovers, Health-conscious",
      makingPrice: "",
      sellingPrice: "",
      popular: false,
      color: "from-green-400 to-emerald-400",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      id: 3,
      category: "Lunch",
      planName: "Power Lunch 28",
      code: "PL28MIX",
      details: "Monthly lunch (Veg + Non-Veg) - 28 meals",
      forWhom: "Busy professionals, Families",
      makingPrice: "",
      sellingPrice: "",
      popular: false,
      color: "from-blue-400 to-indigo-400",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      borderColor: "border-blue-200"
    },
    {
      id: 4,
      category: "Lunch",
      planName: "Green Feast 28",
      code: "GF28VEG",
      details: "Monthly vegetarian lunch - 28 meals",
      forWhom: "Vegetarian families, Elderly",
      makingPrice: "",
      sellingPrice: "",
      popular: false,
      color: "from-teal-400 to-cyan-400",
      bgColor: "bg-gradient-to-br from-teal-50 to-cyan-50",
      borderColor: "border-teal-200"
    },
    // Dinner Category
    {
      id: 5,
      category: "Dinner",
      planName: "Evening Power 7",
      code: "EP7MIX",
      details: "Weekly dinner (Veg + Non-Veg) - 7 meals",
      forWhom: "Working individuals, Hostellers",
      makingPrice: "",
      sellingPrice: "",
      popular: false,
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    },
    {
      id: 6,
      category: "Dinner",
      planName: "Veg Nights 7",
      code: "VN7VEG",
      details: "Weekly vegetarian dinner - 7 meals",
      forWhom: "Veg eaters, Diet-conscious",
      makingPrice: "",
      sellingPrice: "",
      popular: false,
      color: "from-emerald-400 to-green-400",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
      borderColor: "border-emerald-200"
    },
    {
      id: 7,
      category: "Dinner",
      planName: "Evening Power 28",
      code: "EP28MIX",
      details: "Monthly dinner (Veg + Non-Veg) - 28 meals",
      forWhom: "Families, Professionals",
      makingPrice: "",
      sellingPrice: "",
      popular: false,
      color: "from-indigo-400 to-purple-400",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200"
    },
    {
      id: 8,
      category: "Dinner",
      planName: "Veg Nights 28",
      code: "VN28VEG",
      details: "Monthly vegetarian dinner - 28 meals",
      forWhom: "Veg families, Seniors",
      makingPrice: "",
      sellingPrice: "",
      popular: false,
      color: "from-cyan-400 to-blue-400",
      bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
      borderColor: "border-cyan-200"
    },
    // Combo Category
    {
      id: 9,
      category: "Combo",
      planName: "Essential Duo 14",
      code: "ED14MIX",
      details: "Weekly lunch + dinner (Veg + Non-Veg) - 14 meals",
      forWhom: "Office goers, Couples",
      makingPrice: "",
      sellingPrice: "",
      popular: true,
      color: "from-red-400 to-orange-400",
      bgColor: "bg-gradient-to-br from-red-50 to-orange-50",
      borderColor: "border-red-200"
    },
    {
      id: 10,
      category: "Combo",
      planName: "Special Duo 14",
      code: "SD14MIX",
      details: "Premium weekly lunch + dinner (Veg + Non-Veg) - 14 meals",
      forWhom: "Foodies, Premium customers",
      makingPrice: "",
      sellingPrice: "",
      popular: false,
      color: "from-pink-400 to-rose-400",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      borderColor: "border-pink-200"
    },
    {
      id: 11,
      category: "Combo",
      planName: "Essential Duo 14 Veg",
      code: "ED14VEG",
      details: "Weekly lunch + dinner (Veg) - 14 meals",
      forWhom: "Veg couples, Health-conscious",
      makingPrice: "",
      sellingPrice: "",
      popular: false,
      color: "from-lime-400 to-green-400",
      bgColor: "bg-gradient-to-br from-lime-50 to-green-50",
      borderColor: "border-lime-200"
    },
    {
      id: 12,
      category: "Combo",
      planName: "Essential Duo 56",
      code: "ED56MIX",
      details: "Monthly lunch + dinner (Veg + Non-Veg) - 56 meals",
      forWhom: "Families, Busy households",
      makingPrice: "",
      sellingPrice: "",
      popular: false,
      color: "from-amber-400 to-orange-400",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-200"
    },
    {
      id: 13,
      category: "Combo",
      planName: "Special Duo 56",
      code: "SD56MIX",
      details: "Premium monthly lunch + dinner (Veg + Non-Veg) - 56 meals",
      forWhom: "Luxury lifestyle customers",
      makingPrice: "",
      sellingPrice: "",
      popular: false,
      color: "from-violet-400 to-purple-400",
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
      borderColor: "border-violet-200"
    },
    {
      id: 14,
      category: "Combo",
      planName: "Essential Duo 56 Veg",
      code: "ED56VEG",
      details: "Monthly lunch + dinner (Veg) - 56 meals",
      forWhom: "Vegetarian families, Wellness seekers",
      makingPrice: "",
      sellingPrice: "",
      popular: false,
      color: "from-sky-400 to-blue-400",
      bgColor: "bg-gradient-to-br from-sky-50 to-blue-50",
      borderColor: "border-sky-200"
    }
  ]

  const filteredPlans = selectedCategory === 'all' 
    ? mealPlans 
    : mealPlans.filter(plan => plan.category === selectedCategory)

  const categories = ['all', 'Lunch', 'Dinner', 'Combo']

  return (
    <section id="meal-plans" className="py-20" style={{ backgroundColor: '#FFF5D5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meal Plans
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Choose from our comprehensive range of meal plans designed for every lifestyle and preference. From weekly to monthly plans, we have something for everyone.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category === 'all' ? 'All Plans' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Container */}
        <div className="relative">
          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredPlans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative ${plan.bgColor} rounded-2xl p-6 border-2 ${plan.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      <Star className="w-4 h-4 inline mr-1" />
                      Popular
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`bg-gradient-to-r ${plan.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {plan.category}
                  </div>
                </div>

                {/* Plan Header */}
                <div className="text-center mb-6 pt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                    {plan.planName}
                  </h3>
                  <div className="bg-white/50 rounded-lg p-3 mb-4">
                    <p className="text-sm font-mono text-gray-600">Code: {plan.code}</p>
                  </div>
                </div>

                {/* Plan Details */}
                <div className="space-y-4 mb-6">
                  <div className="bg-white/50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Utensils className="w-4 h-4 mr-2" />
                      Plan Details
                    </h4>
                    <p className="text-sm text-gray-700">{plan.details}</p>
                  </div>
                  
                  <div className="bg-white/50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Perfect For
                    </h4>
                    <p className="text-sm text-gray-700">{plan.forWhom}</p>
                  </div>
                </div>

                {/* Price Section */}
                <div className="bg-white/50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <IndianRupee className="w-4 h-4 mr-2" />
                    Pricing
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Making Price:</p>
                      <p className="font-semibold text-gray-900">{plan.makingPrice || 'Coming Soon'}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Selling Price:</p>
                      <p className="font-semibold text-gray-900">{plan.sellingPrice || 'Coming Soon'}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 group-hover:shadow-xl`}>
                  Choose Plan
                </button>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-6 h-6 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '0.1s' }}></div>
              </div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll Layout */}
          <div className="lg:hidden">
            <div className="flex space-x-4 overflow-x-auto pb-6 scrollbar-hide">
              {filteredPlans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`relative ${plan.bgColor} rounded-2xl p-6 border-2 ${plan.borderColor} shadow-lg min-w-[320px] max-w-[360px] flex-shrink-0 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        <Star className="w-4 h-4 inline mr-1" />
                        Popular
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`bg-gradient-to-r ${plan.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                      {plan.category}
                    </div>
                  </div>

                  {/* Plan Header */}
                  <div className="text-center mb-6 pt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {plan.planName}
                    </h3>
                    <div className="bg-white/50 rounded-lg p-3 mb-4">
                      <p className="text-sm font-mono text-gray-600">Code: {plan.code}</p>
                    </div>
                  </div>

                  {/* Plan Details */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-white/50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Utensils className="w-4 h-4 mr-2" />
                        Plan Details
                      </h4>
                      <p className="text-sm text-gray-700">{plan.details}</p>
                    </div>
                    
                    <div className="bg-white/50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        Perfect For
                      </h4>
                      <p className="text-sm text-gray-700">{plan.forWhom}</p>
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="bg-white/50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Pricing
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Making Price:</p>
                        <p className="font-semibold text-gray-900">{plan.makingPrice || 'Coming Soon'}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Selling Price:</p>
                        <p className="font-semibold text-gray-900">{plan.sellingPrice || 'Coming Soon'}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                    Choose Plan
                  </button>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 bg-white/20 rounded-full"></div>
                </div>
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {filteredPlans.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 bg-gray-300 rounded-full transition-all duration-300"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Our Meal Plans?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Flexible Plans</h4>
                  <p className="text-sm text-gray-600">Weekly to monthly options</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fresh & Healthy</h4>
                  <p className="text-sm text-gray-600">Made with fresh ingredients</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">For Everyone</h4>
                  <p className="text-sm text-gray-600">Veg & non-veg options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Meal
