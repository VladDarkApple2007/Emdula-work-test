import React from 'react'

export default function Works() {
  const steps = [
    {
      title: "AI-Powered Data Capture & Organization",
      description: "AI automatically processes calls, messages and notes, turning them into structured client profiles and actionable tasks — without manual typing.",
      points: [
        "Automatic speech-to-text for calls",
        "AI extraction of key client details",
        "Instant profile creation & updating",
        "Tasks and follow-ups generated automatically"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Intelligent Matching for Better Decisions",
      description: "The system analyzes client needs and instantly finds relevant offers without duplicates or noise, making every search fast and accurate.",
      points: [
        "AI-powered offer matching",
        "Duplicate elimination",
        "Relevant options only",
        "Works for properties and service businesses"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      title: "A Clean, Connected CRM for Real Teams",
      description: "A single platform replaces scattered tools with modern, stable workflows designed for daily operations across different industries.",
      points: [
        "Clear and intuitive interface",
        "Centralized client and asset management",
        "Smooth daily workflows",
        "Scalable foundation for growing teams"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-[#0a0e17] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-white mb-16">
          How Emdula works across your operations
        </h2>

        <div className="flex flex-col gap-10">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row bg-[#12F2C733] rounded-3xl overflow-hidden ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              
              <div className="w-full md:w-1/2 h-[300px] md:h-auto relative group overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-emerald-900/20 mix-blend-overlay"></div>
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {step.description}
                </p>

                <ul className="space-y-4">
                  {step.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-white/30 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white">
                          <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .207 1.012l-7.9 9.875a.75.75 0 0 1-1.15.02L6.13 10.36a.75.75 0 1 1 1.06-1.06l3.894 3.893 7.025-8.775a.75.75 0 0 1 1.012-.207Z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm md:text-base">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}