import React from 'react'

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
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-8 h-8 text-white"
              >
                <path d="M12 2a1 1 0 0 1 .89.55l.55 1.1c.36.72 1.44.72 1.8 0l.55-1.1A1 1 0 0 1 16.68 2h.04c.88 0 1.54.8 1.37 1.66l-.5 2.5a5 5 0 0 1-4.9 4.04H11.3a5 5 0 0 1-4.9-4.04l-.5-2.5C5.74 2.8 6.4 2 7.28 2h.04c.37 0 .7.2.89.55l.55 1.1c.36.72 1.44.72 1.8 0l.55-1.1A1 1 0 0 1 12 2Z" opacity="0.4"/>
                <path fillRule="evenodd" d="M6.53 9.47a6 6 0 0 1 5.38-4.47h.18a6 6 0 0 1 5.38 4.47l1.24 6.2a2 2 0 0 1-1.96 2.39H7.25a2 2 0 0 1-1.96-2.4l1.24-6.2ZM13.5 14a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" clipRule="evenodd" />
              </svg>
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