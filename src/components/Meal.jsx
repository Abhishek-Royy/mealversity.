import React from 'react'
import { Check, Calendar, Clock, DollarSign } from 'lucide-react'

const HowItWorks = () => {
  const plans = [
    {
      id: 1,
      title: "Daily Plan",
      description: "Perfect for trying out our service",
      price: "₹99",
      period: "per day",
      features: [
        "1 meal per day",
        "Fresh ingredients",
        "Free delivery",
        "Flexible timing"
      ],
      popular: false,
      color: "from-orange-400 to-yellow-400",
      bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50",
      borderColor: "border-orange-200"
    },
    {
      id: 2,
      title: "Weekly Plan",
      description: "Most popular choice for students",
      price: "₹599",
      period: "per week",
      features: [
        "7 meals per week",
        "Fresh ingredients",
        "Free delivery",
        "Flexible timing",
        "Priority support"
      ],
      popular: true,
      color: "from-green-400 to-blue-400",
      bgColor: "bg-gradient-to-br from-green-50 to-blue-50",
      borderColor: "border-green-200"
    },
    {
      id: 3,
      title: "Monthly Plan",
      description: "Best value for long-term commitment",
      price: "₹1999",
      period: "per month",
      features: [
        "30 meals per month",
        "Fresh ingredients",
        "Free delivery",
        "Flexible timing",
        "Priority support",
        "Custom menu options"
      ],
      popular: false,
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    },
    {
      id: 4,
      title: "Family Plan",
      description: "Perfect for families and groups",
      price: "₹3499",
      period: "per month",
      features: [
        "60 meals per month",
        "Fresh ingredients",
        "Free delivery",
        "Flexible timing",
        "Priority support",
        "Custom menu options",
        "Family-sized portions"
      ],
      popular: false,
      color: "from-red-400 to-orange-400",
      bgColor: "bg-gradient-to-br from-red-50 to-orange-50",
      borderColor: "border-red-200"
    }
  ]

  return (
    <section id="how-it-works" className="py-20" style={{ backgroundColor: '#FFF5D5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Select the perfect meal plan that fits your lifestyle and budget. All plans include fresh, healthy meals delivered right to your doorstep.
          </p>
        </div>

        {/* Plans Container with Horizontal Scroll on Mobile */}
        <div className="relative">
          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative ${plan.bgColor} rounded-2xl p-6 border-2 ${plan.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 group-hover:shadow-xl`}>
                  Choose Plan
                </button>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '0.1s' }}></div>
              </div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll Layout */}
          <div className="lg:hidden">
            <div className="flex space-x-4 overflow-x-auto pb-6 scrollbar-hide">
              {plans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`relative ${plan.bgColor} rounded-2xl p-6 border-2 ${plan.borderColor} shadow-lg min-w-[280px] max-w-[320px] flex-shrink-0 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                    Choose Plan
                  </button>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
                </div>
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {plans.map((_, index) => (
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
                  <h4 className="font-semibold text-gray-900">Fresh & Healthy</h4>
                  <p className="text-sm text-gray-600">Made with fresh ingredients daily</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Flexible Timing</h4>
                  <p className="text-sm text-gray-600">Choose your delivery time</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Customizable</h4>
                  <p className="text-sm text-gray-600">Tailored to your preferences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
