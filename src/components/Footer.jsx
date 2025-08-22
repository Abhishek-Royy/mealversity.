import React, { useState } from 'react'
import { Facebook, Instagram, Twitter, Linkedin, Clock, Shield, Truck, Heart, Mail } from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribed:', email)
    setEmail('')
  }

  const quickLinks = [
    { name: "Menu", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "About Us", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Contact", href: "#" }
  ]

  const services = [
    { name: "Daily Meal Plans", icon: Clock, color: "text-teal-600" },
    { name: "Quality Assurance", icon: Shield, color: "text-orange-600" },
    { name: "Fast Delivery", icon: Truck, color: "text-orange-600" },
    { name: "Healthy Options", icon: Heart, color: "text-orange-600" }
  ]

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin }
  ]

  return (
    <footer id="footer" className="bg-gray-50">
      {/* Upper Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Information */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">
                Mealversity
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Fresh, healthy, and delicious meals delivered right to your doorstep. Your trusted partner for daily nutrition and convenience.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-teal-500 hover:text-white transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold text-teal-600 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center text-gray-600 hover:text-teal-600 transition-colors duration-200 group"
                    >
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold text-orange-600 mb-4">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <div className="flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200 group">
                      <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-100 transition-colors duration-200">
                        <service.icon className={`w-4 h-4 ${service.color}`} />
                      </div>
                      <span className="text-sm">{service.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stay Updated */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold text-orange-600 mb-4">
                Stay Updated
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Subscribe to get special offers, free giveaways, and updates on new menu items!
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent pr-12"
                    required
                  />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transform hover:scale-105 transition-all duration-300"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left - Made with love */}
            <div className="flex items-center space-x-2 text-white text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by TechnoRapide</span>
            </div>

            {/* Center - Copyright */}
            <div className="text-white text-sm">
              © 2025 Mealversity. All rights reserved.
            </div>

            {/* Right - Legal Links */}
            <div className="flex space-x-6 text-white text-sm">
              <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
