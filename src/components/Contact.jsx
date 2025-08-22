import React, { useState } from 'react'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Send, User, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#FFF5D5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We'd love to hear from you! Reach out to us with any questions or feedback.
          </p>
        </div>

        {/* Contact Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Left Card - Get In Touch & Social Media */}
          <div className="bg-white rounded-2xl shadow-xl border-t-4 border-orange-500 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            
            {/* Get In Touch Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative">
                Get In Touch
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-orange-500 rounded-full"></div>
              </h3>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Address</p>
                    <p className="text-gray-600">MealVersity Kitchen Location</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Phone</p>
                    <p className="text-gray-600">8900099783</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Email</p>
                    <p className="text-gray-600">mealversityhelp@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative">
                Social Media
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-orange-500 rounded-full"></div>
              </h3>
              <p className="text-gray-700 mb-4">Connect With Us</p>
              
              <div className="grid grid-cols-3 gap-4">
                {/* Facebook */}
                <a href="#" className="group">
                  <div className="bg-white border-2 border-blue-500 rounded-lg p-4 text-center hover:bg-blue-50 transition-all duration-200 transform group-hover:scale-105">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Facebook className="w-5 h-5 text-white font-bold" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Facebook</span>
                  </div>
                </a>

                {/* Instagram */}
                <a href="#" className="group">
                  <div className="bg-white border-2 border-pink-500 rounded-lg p-4 text-center hover:bg-pink-50 transition-all duration-200 transform group-hover:scale-105">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Instagram</span>
                  </div>
                </a>

                {/* X (Twitter) */}
                <a href="#" className="group">
                  <div className="bg-white border-2 border-green-500 rounded-lg p-4 text-center hover:bg-green-50 transition-all duration-200 transform group-hover:scale-105">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Twitter className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">X (Twitter)</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl border-t-4 border-green-500 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative">
              Send Us a Message
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-green-500 rounded-full"></div>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="flex items-center space-x-2 mb-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <User className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="flex items-center space-x-2 mb-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="flex items-center space-x-2 mb-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Phone</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="flex items-center space-x-2 mb-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Message</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we help you?"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
