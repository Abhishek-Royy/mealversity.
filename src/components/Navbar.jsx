import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Meal Plan', path: '/meal-plans' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
    { name: 'Career', path: '/career' },
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
  <Link to="/" className="flex items-center">
    <img 
      src="/logo.png" 
      alt="Mealversity Logo" 
      className={`h-8 w-auto lg:h-10 transition duration-300 ${
        isScrolled ? 'invert-0 brightness-100' : 'invert brightness-0 contrast-200'
      }`}
    />
    <span 
      className={`ml-3 text-xl lg:text-2xl font-bold transition-colors duration-300 ${
        isScrolled ? 'text-gray-900' : 'text-gray-200'
      }`}  
      style={{ fontFamily: '"Playfair Display", serif' }}
    >
      MealVersity
    </span>
  </Link>
</div>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-bold rounded-md transition-all duration-200 relative group ${
                  location.pathname === item.path
                    ? 'text-orange-600'
                    : isScrolled 
                      ? 'text-gray-700 hover:text-orange-600' 
                      : 'text-gray-200 hover:text-orange-600'
                }`}
              >
                {item.name}
                {/* Active underline */}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full transform scale-x-100 transition-transform duration-300"></div>
                )}
                {/* Hover underline */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full transform transition-transform duration-300 ${
                  location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></div>
              </Link>
            ))}
            
            {/* Download Button */}
            <Link to="/app-launch">
              <button className="bg-gradient-to-r from-[#044735] to-[#0a7a5a]  hover:from-[#033a2c] hover:to-[#09664b] text-white px-6 py-2.5 rounded-full text-sm font-semibold  transform hover:scale-105 transition-all duration-200 shadow-lg">
                Download App
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-200"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 mt-16"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden fixed top-16 left-0 right-0 z-50 transition-all duration-300 ease-in-out transform ${
        isOpen 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-4 opacity-0 pointer-events-none'
      }`}>
        <div className="bg-white/98 backdrop-blur-md border-t border-orange-100 shadow-xl mx-4 rounded-b-lg overflow-hidden">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 text-base font-medium rounded-md transition-all duration-200 relative ${
                  location.pathname === item.path
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {item.name}
                {/* Active indicator for mobile */}
                {location.pathname === item.path && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-orange-600 rounded-r-full"></div>
                )}
              </Link>
            ))}
            
            {/* Mobile Download Button */}
            <div className="px-2 pt-3 pb-2">
              <Link to="/app-launch" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-gradient-to-r from-[#044735] to-[#0a7a5a] hover:from-[#033a2c] hover:to-[#09664b] text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-200 shadow-lg active:scale-95">
                  Download App
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar