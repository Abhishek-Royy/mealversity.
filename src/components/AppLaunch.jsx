import React, { useState, useEffect } from 'react'
import { Lock, Package, Smartphone, Download, Calendar, Truck, CalendarX, MessageCircle, Check } from 'lucide-react'

const AppLaunch = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Launch date: September 10, 2025
  const launchDate = new Date('2025-09-10T00:00:00').getTime()

  useEffect(() => {
    setIsVisible(true)
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate - now

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [launchDate])

  const features = [
    {
      icon: (
        <Lock className="w-6 h-6" />
      ),
      title: "Track orders",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: (
        <CalendarX className="w-6 h-6" />
      ),
      title: "Skip meals",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: (
        <MessageCircle className="w-6 h-6" />
      ),
      title: "Chat with delivery agent",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: (
        <Check className="w-6 h-6" />
      ),
      title: "And much more",
      color: "bg-green-100 text-green-600"
    }
  ]

  return (
    <section id="app-launch" className="pt-30  pb-20  lg:pt-52" style={{ background: "linear-gradient(135deg, #1a2a1a 0%, #2c3c2c 100%)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Container */}
        <div className={`relative bg-gradient-to-r from-yellow-50 to-blue-50 rounded-3xl border-2 border-dashed border-teal-400 p-8 md:p-12 shadow-2xl transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -top-8 -right-4 w-6 h-6 bg-orange-200 rounded-full opacity-60 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-4 -left-8 w-4 h-4 bg-blue-200 rounded-full opacity-60 animate-pulse animation-delay-4000"></div>
            <div className="absolute -bottom-8 -right-8 w-10 h-10 bg-green-200 rounded-full opacity-60 animate-pulse"></div>
          </div>

          {/* Header Section */}
          <div className="relative text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mr-4 animate-bounce">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800">
                App Coming Soon
              </h1>
            </div>

            {/* Download Text */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-3">
                <Package className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg md:text-xl text-gray-700 font-medium">
                Download App on:
              </p>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="relative flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            {/* Google Play Button */}
            <div className="group transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </button>
            </div>

            {/* App Store Button */}
            <div className="group transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </button>
            </div>
          </div>

          {/* Launch Date Button */}
          {/* <div className="relative text-center mb-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center mx-auto space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Calendar className="w-6 h-6 text-white" />
              <span>Available 10 Sept 2025</span>
            </button>
          </div> */}

          {/* Countdown Timer */}
          {/* <div className="relative mb-12 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <div className="flex justify-center space-x-2 md:space-x-8">
              {Object.entries(countdown).map(([unit, value], index) => (
                <div key={unit} className="text-center">
                  <div className="bg-white rounded-xl p-2.5 shadow-lg border border-gray-200">
                    <div className="text-2xl md:text-3xl font-bold text-orange-600">{value}</div>
                    <div className="text-sm text-gray-600 capitalize">{unit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Features Grid */}
          <div className="relative mb-12 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center group transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${1200 + index * 100}ms` }}
                >
                  <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <p className="text-sm md:text-base font-medium text-gray-700">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="relative text-center animate-fade-in-up" style={{ animationDelay: '1600ms' }}>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Get ready for the ultimate meal ordering experience with real-time tracking, flexible meal management, and direct communication with your delivery team.
            </p>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-300 rounded-full opacity-60 animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-teal-300 rounded-full opacity-60 animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-300 rounded-full opacity-60 animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  )
}

export default AppLaunch
