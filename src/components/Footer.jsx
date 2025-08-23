import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Clock,
  Shield,
  Truck,
  Heart,
  Mail,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed:", email);
    setEmail("");
  };

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#features" },
    { name: "Meal Plans", href: "#meal-plans" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Daily Meal Plans", icon: Clock, color: "text-green-600" },
    { name: "Quality Assurance", icon: Shield, color: "text-orange-600" },
    { name: "Fast Delivery", icon: Truck, color: "text-orange-600" },
    { name: "Healthy Options", icon: Heart, color: "text-green-600" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/16oUPtaFKG/",
      icon: Facebook,
    },
    {
      name: "Twitter",
      href: "https://x.com/meal_versity?t=T62Io8NyKmQAro2tXf1EdQ&s=08",
      icon: Twitter,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/mealversity.in?igsh=MWtwNHlsaGszemcyZA==",
      icon: Instagram,
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="footer" className="bg-gray-50">
      {/* Upper Section */}
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Information */}
            <div className="lg:col-span-1">
              <h3
                className="text-2xl font-bold text-[#044735] mb-4"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                MealVersity
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Fresh, healthy, and delicious meals delivered right to your
                doorstep. Your trusted partner for daily nutrition and
                convenience.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white border-2 border-orange-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200 group w-full text-left"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <div className="flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200 group">
                      <div className="w-8 h-8 bg-white border-2 border-orange-200 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-100 group-hover:border-orange-300 transition-colors duration-200 shadow-sm">
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
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Stay Updated
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Subscribe to get special offers, free giveaways, and updates on
                new menu items!
              </p>

              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white border-2 border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 pr-12 shadow-sm"
                    required
                  />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                </div>
               <button
  type="submit"
  className="w-full bg-gradient-to-r from-[#044735] to-[#0a7a5a] text-white py-3 px-6 rounded-lg font-semibold hover:from-[#033a2c] hover:to-[#09664b] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
>
  Subscribe Now
</button>

              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left - Made with love */}
            <div className="flex items-center space-x-2 text-white text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-orange-500 fill-current" />
              <span>by TechnoRapide</span>
            </div>

            {/* Center - Copyright */}
            <div className="text-white text-sm">
              © 2025 Mealversity. All rights reserved.
            </div>

            {/* Right - Legal Links */}
            <div className="flex space-x-6 text-white text-sm">
              <a
                href="#"
                className="hover:text-orange-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-orange-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
