import React from 'react'
import { Linkedin, Twitter, Instagram, Github, Mail, Heart, Target, Zap } from 'lucide-react'

const TeamMember = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Tarik Anowar ",
      role: "Founder & CEO",
      image: "/tarikh.enc",
      description: "Passionate about bringing healthy, delicious meals to everyone. 10+ years in food industry.",
      social: {
        linkedin: "#",
        email: "ceo.mealversity@gmail.com"
      },
      expertise: ["Food Safety", "Business Strategy", "Customer Experience"]
    },
    {
      id: 2,
      name: "Afreen Sarkar",
      role: "Co-Founder & CMO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Award-winning chef with expertise in creating nutritious and flavorful meals for all dietary needs.",
      social: {
        linkedin: "#",
        email: "cmo.mealversity@gmail.com"
      },
      expertise: ["Nutrition", "Menu Development", "Quality Control"]
    },
    {
      id: 3,
      name: "Asif Ahmed ",
      role: "Co-Founder & COO",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Ensuring smooth operations and exceptional customer service across all our locations.",
      social: {
        linkedin: "#",
        email: "coo.mealversity@gmail.com "
      },
      expertise: ["Operations", "Customer Service", "Logistics"]
    },
    {
      id: 4,
      name: "Muklesur Rahaman",
      role: "Co-Founder & CFO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Building innovative technology solutions to enhance the meal delivery experience.",
      social: {
        linkedin: "#",
   
        email: "cfo.mealversity@gmail.com"
      },
      expertise: ["Software Development", "AI/ML", "System Architecture"]
    },
    
  ]

  return (
    <section id="testimonials" className="py-20" style={{ backgroundColor: '#FFF5D5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The passionate individuals behind MealVersity who work tirelessly to bring you fresh, healthy, and delicious meals every day.
          </p>
        </div>

        {/* Team Members Grid - Smaller Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Member Image */}
              <div className="relative overflow-hidden">
                <div className="aspect-square w-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Member Info */}
              <div className="relative p-4">
                {/* Name and Role */}
                <div className="text-center mb-3">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-semibold text-sm">{member.role}</p>
                </div>

                {/* Description */}
                {/* <p className="text-gray-600 text-xs leading-relaxed mb-3 text-center">
                  {member.description}
                </p> */}

                {/* Expertise Tags */}
                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full group-hover:bg-orange-200 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-2">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-blue-400 hover:text-blue-500 transition-colors duration-200">
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  
                  {member.social.instagram && (
                    <a href={member.social.instagram} className="text-pink-600 hover:text-pink-700 transition-colors duration-200">
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  
                  {member.social.github && (
                    <a href={member.social.github} className="text-gray-800 hover:text-gray-900 transition-colors duration-200">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="text-red-600 hover:text-red-700 transition-colors duration-200">
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transitionDelay: '0.1s' }}></div>
            </div>
          ))}
        </div>

        {/* Team Values Section */}
        <div className="mt-16">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 text-center mb-6">
              Our Team Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="text-base font-semibold text-gray-900 mb-2">Passion</h4>
                <p className="text-gray-600 text-sm">We're passionate about food and committed to delivering excellence in every meal.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-base font-semibold text-gray-900 mb-2">Quality</h4>
                <p className="text-gray-600 text-sm">We maintain the highest standards of quality and safety in everything we do.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-base font-semibold text-gray-900 mb-2">Innovation</h4>
                <p className="text-gray-600 text-sm">We continuously innovate to provide better solutions and experiences for our customers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamMember
