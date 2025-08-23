import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Handle scroll effect and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      
      // Detect active section
      const sections = ['hero', 'features', 'meal-plans', 'contact']
      const scrollPosition = window.scrollY + 100 // Offset for navbar height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false) // Close mobile menu
  }

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'features' },
    { name: 'Meal Plan', id: 'meal-plans' },
    { name: 'Contact', id: 'contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Mealversity Logo" 
                className="h-8 w-auto lg:h-10"
              />
              <span className={`ml-3 text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-gray-900'
              }`}  style={{ fontFamily: '"Playfair Display", serif' }}>
                Mealversity
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-bold rounded-md transition-all duration-200 relative ${
                  activeSection === item.id
                    ? 'text-orange-600'
                    : isScrolled 
                      ? 'text-gray-700 hover:text-orange-600' 
                      : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                {item.name}
                {/* Active underline */}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full transform scale-x-100 transition-transform duration-300"></div>
                )}
                {/* Hover underline */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full transform transition-transform duration-300 ${
                  activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></div>
              </button>
            ))}
            
            {/* Download Button */}
            
            <a href="#app-launch"><button className="bg-gradient-to-r from-[#044735] to-[#0a7a5a]  hover:from-[#033a2c] hover:to-[#09664b] text-white px-6 py-2.5 rounded-full text-sm font-semibold  transform hover:scale-105 transition-all duration-200 shadow-lg">
              Download App
            </button></a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-orange-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-all duration-200 relative ${
                  activeSection === item.id
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {item.name}
                {/* Active indicator for mobile */}
                {activeSection === item.id && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-orange-600 rounded-r-full"></div>
                )}
              </button>
            ))}
            
            {/* Mobile Download Button */}
            <div className="pt-4 pb-3">
              <a href="#app-launch">
              <button className="w-full bg-gradient-to-r from-[#044735] to-[#0a7a5a]  hover:from-[#033a2c] hover:to-[#09664b] text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-200 shadow-lg">
                Download App
              </button></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
