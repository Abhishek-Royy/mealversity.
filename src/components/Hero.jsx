import React, { useState } from "react";
import { ArrowRight, Check, X, Home, Info, UtensilsCrossed, Users, Mail, Briefcase } from "lucide-react";
import AppLaunch from "../components/AppLaunch";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isLunchboxOpen, setIsLunchboxOpen] = useState(false);
  
  const handleDoubleTap = () => {
    setIsLunchboxOpen(!isLunchboxOpen);
  };

  const navItems = [
    { name: "Home", path: "/", icon: Home, color: "from-blue-400 to-blue-600" },
    { name: "About", path: "/about", icon: Info, color: "from-purple-400 to-purple-600" },
    { name: "Meal Plans", path: "/meal-plans", icon: UtensilsCrossed, color: "from-green-400 to-green-600" },
    { name: "Team", path: "/team", icon: Users, color: "from-orange-400 to-orange-600" },
    { name: "Contact", path: "/contact", icon: Mail, color: "from-pink-400 to-pink-600" },
    { name: "Career", path: "/career", icon: Briefcase, color: "from-indigo-400 to-indigo-600" }
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-16 lg:pt-20 pb-16 lg:pb-24"
      style={{ background: "linear-gradient(135deg, #1a2a1a 0%, #2c3c2c 100%)" }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-100 rounded-full opacity-30 blur-xl"></div>
        <div className="absolute top-1/3 -left-20 w-48 h-48 bg-green-100 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-yellow-100 rounded-full opacity-20 blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 z-10">
            {/* Tagline */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-orange-100">
                <span className="text-sm font-semibold text-orange-600 tracking-wide">
                  MealVersity - The Smarter Choice
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#fefefe] via-gray-200 to-[#fefefe] bg-clip-text text-transparent leading-tight">
                You Deserve Fresh, Healthy & Affordable Meals
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                  {" "}Your Schedule Demands It
                </span>
              </h1>
              
              <p className="text-lg md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium" style={{ fontFamily: 'sans-serif' }}>
                Invest in your well-being — not just your wallet. We deliver mom-quality healthy meals 
                for students, professionals, families, and hardworking migrants — all made with love, 
                priced with respect. Because you shouldn't have to choose between feeling cared for and staying within budget.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              {["Chef-prepared meals","Budget-friendly","Flexible delivery","Nutritionist approved"].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/meal-plans">
                <button className="group bg-gradient-to-r from-[#044735] to-[#0a7a5a] hover:from-[#033a2c] hover:to-[#09664b] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto">
                  Start Eating Better
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Hero Image - Interactive Lunchbox */}
          <div className="relative flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-md lg:max-w-2xl">
              <div className="relative">
                <div className="rounded-3xl">
                  <div 
                    className="relative overflow-hidden rounded-2xl cursor-pointer group"
                    onDoubleClick={handleDoubleTap}
                  >
                    <img
                      src="/hero-img.png"
                      alt="Fresh and healthy meals for everyone"
                      className={`w-full h-auto object-cover rounded-2xl transition-all duration-700 ${isLunchboxOpen ? 'scale-110 brightness-110' : 'group-hover:scale-105'}`}
                      loading="eager"
                    />
                    
                    {/* Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-orange-400/20 rounded-2xl transition-opacity duration-500 ${isLunchboxOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></div>
                    
                    {/* Sparkles */}
                    <div className={`absolute inset-0 ${isLunchboxOpen ? 'animate-pulse' : ''}`}>
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                      <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
                    </div>
                    
                    {/* Tap Hint */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                      <div className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm transition-all duration-300 group-hover:bg-black/80">
                        {isLunchboxOpen ? "🎁 Double tap to close the mystery box" : "🎁 Double tap to open the mystery box"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Popup */}
      {isLunchboxOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="relative bg-gradient-to-br from-white via-orange-50 to-yellow-50 rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl animate-scaleIn border-4 border-gradient-to-r from-orange-200 to-yellow-200">
            <button 
              onClick={() => setIsLunchboxOpen(false)}
              className="absolute top-4 right-4 z-10 bg-red-100 hover:bg-red-200 rounded-full p-3 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <X className="w-6 h-6 text-red-600 group-hover:rotate-90 transition-transform duration-300" />
            </button>
            
            <div className="p-6 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  🎁 Mystery Box Opened!
                </h2>
                <p className="text-lg text-gray-600 italic">Choose your adventure at MealVersity</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Link 
                      key={index} 
                      to={item.path}
                      className="block"
                      onClick={() => setIsLunchboxOpen(false)}
                    >
                      <div 
                        className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-center text-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 transform cursor-pointer group animate-slideInUp border border-white/20 backdrop-blur-sm`}
                        style={{ 
                          animationDelay: `${index * 0.2}s`,
                          animationFillMode: 'both'
                        }}
                      >
                        <div className="mb-3 flex justify-center">
                          <div className="bg-white/20 rounded-full p-3 group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-12">
                            <IconComponent className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>
                        <div className="text-lg font-bold mb-1 group-hover:text-yellow-100 transition-colors duration-300">
                          {item.name}
                        </div>
                        <div className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                          Explore {item.name.toLowerCase()}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <AppLaunch/>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.8) rotate(-5deg); }
          50% { transform: scale(1.05) rotate(2deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes slideInUp {
          0% { opacity: 0; transform: translateY(50px) scale(0.8) rotateX(-20deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotateX(0deg); }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.6s cubic-bezier(0.175,0.885,0.32,1.275); }
        .animate-slideInUp { animation: slideInUp 0.6s cubic-bezier(0.175,0.885,0.32,1.275); }
      `}</style>
    </section>
  );
};

export default Hero;
