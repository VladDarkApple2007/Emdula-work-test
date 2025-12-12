import React from 'react'
import Logo from '../../img/Logo.png'

export default function Footer() {
  
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0a0e17] text-white pt-20 pb-10 px-4 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <h2 className="text-3xl md:text-5xl font-medium max-w-2xl leading-tight">
            Let’s talk about your operations — and how AI can improve them
          </h2>
          <a 
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-8 rounded-full transition-colors whitespace-nowrap"
          >
            Book a conversation
          </a>
        </div>

        <div className="border-t border-gray-800 my-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
          <div className="lg:col-span-3 space-y-8">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="" />
              <span className="text-2xl font-bold">Emdula</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We are a team of engineers and product builders creating AI-powered CRM and workflow systems for real-world businesses.
            </p>

            <div>
              <h4 className="font-bold mb-2">Contact us</h4>
              <a href="mailto:support@emdula.com" className="text-gray-400 hover:text-white transition-colors">
                support@emdula.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold text-lg mb-6">Menu</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#hero" onClick={(e) => handleScroll(e, '#hero')} className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">RealEcon</a></li>
              <li><a href="#solutions" onClick={(e) => handleScroll(e, '#solutions')} className="hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#faq" onClick={(e) => handleScroll(e, '#faq')} className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold text-lg mb-6">Social Media</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Linked In</a></li>
              <li><a href="#" className="hover:text-white transition-colors">X</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitLab</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © 2025 Emdula. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}