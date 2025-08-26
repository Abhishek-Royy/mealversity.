import React from "react";
import { 
  Users, 
  Truck, 
  ChefHat, 
  Heart, 
  Shield, 
  DollarSign, 
  Clock, 
  Phone,
  Mail,
  MapPin,
  Upload,
  FileText
} from "lucide-react";


import {Link} from "react-router-dom"

function Career() {
  return (
    <div id="career" className="relative overflow-hidden pt-30 pb-16 lg:pt-52 lg:pb-24" style={{ backgroundColor: "#FFF5D5" }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6 shadow-lg">
            <Users className="w-5 h-5" />
            Join Our Team
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A365D] mb-6">
            Join the MealVersity Family
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Be part of our mission to deliver delicious, healthy meals while building opportunities for our community.
          </p>
        </div>

        {/* Career Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {/* Delivery Partners Card */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 h-full">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg mb-6">
                  <Truck className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#1A365D] mb-4">Delivery Partners</h2>
                <p className="text-gray-700">Join our growing logistics network and be the face of MealVersity to our customers.</p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#1A365D]">Why join as a delivery partner?</h3>
                <ul className="space-y-3">
                  {[
                    "Flexible working hours that fit your schedule",
                    "Competitive earnings with daily payments",
                    "Supportive team and clear communication",
                    "Grow with a company that values your contribution"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
               <Link to="/contact"> <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Apply Now
                </button></Link>
              </div>
            </div>
          </div>

          {/* Women Entrepreneurs Card */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 h-full">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg mb-6">
                  <ChefHat className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#1A365D] mb-4">Women Entrepreneurs</h2>
                <p className="text-gray-700">Start your own cloud kitchen with our full support and guidance.</p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#1A365D]">What we offer:</h3>
                <ul className="space-y-3">
                  {[
                    "Complete setup support for your cloud kitchen",
                    "Training on food safety and quality standards",
                    "Marketing and customer acquisition assistance",
                    "Ongoing operational support and guidance"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Work With Us Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6 shadow-lg">
              <Heart className="w-5 h-5" />
              Why Work With Us
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A365D] mb-6">
              More Than Just a Job
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At MealVersity, we're building a community that supports and grows together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Shield className="w-8 h-8 text-white" />,
                title: "Safe Work Environment",
                description: "We prioritize the safety and well-being of all our team members.",
                gradient: "from-blue-500 to-purple-500"
              },
              {
                icon: <DollarSign className="w-8 h-8 text-white" />,
                title: "Competitive Earnings",
                description: "Get paid fairly for your hard work with transparent payment structures.",
                gradient: "from-green-500 to-teal-500"
              },
              {
                icon: <Clock className="w-8 h-8 text-white" />,
                title: "Flexible Schedules",
                description: "Choose hours that work for your lifestyle and commitments.",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: <Users className="w-8 h-8 text-white" />,
                title: "Supportive Community",
                description: "Join a team that values collaboration and mutual growth.",
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500`}></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#1A365D] text-center mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form Section */}
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 md:p-12 border border-blue-200 shadow-lg mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A365D] mb-6">Apply for a Position</h2>
              <p className="text-lg text-gray-700 mb-6">
                Ready to join the MealVersity family? Fill out the application form and we'll get back to you soon.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Call Us</p>
                    <p className="text-lg text-[#1A365D] font-semibold">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Email Us</p>
                    <p className="text-lg text-[#1A365D] font-semibold">careers@mealversity.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Visit Us</p>
                    <p className="text-lg text-[#1A365D] font-semibold">123 Food Street, Mealville</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#1A365D] mb-6 text-center">Application Form</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    id="fullName"
                    type="text" 
                    placeholder="Enter your full name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    id="email"
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    id="phone"
                    type="tel" 
                    placeholder="Enter your phone number" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Select Position</label>
                  <select 
                    id="position"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">Select a position</option>
                    <option value="delivery-partner">Delivery Partner</option>
                    <option value="cloud-kitchen">Cloud Kitchen Entrepreneur</option>
                    <option value="chef">Chef/Cook</option>
                    <option value="operations">Operations Staff</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
                  <div className="flex items-center justify-center w-full">
                    <label htmlFor="resume" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors duration-300">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 5MB)</p>
                      </div>
                      <input id="resume" type="file" className="hidden" accept=".pdf,.doc,.docx" />
                    </label>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">Additional Skills</label>
                  <textarea 
                    id="skills"
                    placeholder="List any additional skills or experience relevant to the position"
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;