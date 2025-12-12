import React, { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Emdula?",
      answer: "Emdula is an AI-powered operating system designed to streamline complex business workflows. We help companies automate data entry, organize client information, and improve decision-making through intelligent software."
    },
    {
      question: "What is RealEcon?",
      answer: "RealEcon is our specialized module for the real estate and economic sectors. It focuses on market analysis, property matching, and economic forecasting to give businesses a competitive edge."
    },
    {
      question: "Who are your solutions for?",
      answer: "Our solutions are built for service-based businesses, real estate agencies, sales teams, and operational departments that want to reduce manual work and scale efficiently using modern technology."
    },
    {
      question: "Do your systems integrate with our existing tools?",
      answer: "Yes. We understand that you already use other software. Emdula is designed to integrate smoothly with popular CRMs, email platforms, and calendar tools to ensure a unified workflow."
    },
    {
      question: "How do you use AI inside your products?",
      answer: "We use AI for practical tasks: transcribing calls, extracting data from messages, matching clients to offers, and automating routine follow-ups. We focus on utility, not just hype."
    },
    {
      question: "How can we get in touch with your team?",
      answer: "You can click the 'Contact' button in the navigation bar or email our support team directly. We usually respond within 24 hours to schedule a demo or answer specific questions."
    }
  ];

  return (
    <section className="bg-[#0a0e17] py-24 px-4">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-white mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-800">
              <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg text-white font-medium group-hover:text-emerald-400 transition-colors">
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}