import React from 'react'
import Icon5 from '../../img/icon-5.png'
import Icon6 from '../../img/icon-6.png'
import Icon7 from '../../img/icon-7.png'
import Icon8 from '../../img/icon-8.png'
import Icon9 from '../../img/icon-9.png'
import Icon10 from '../../img/icon-10.png'

export default function WhyTrust() {
  const features = [
    {
      title: "Built with industry teams",
      description: "Our systems are built with real operators, ensuring every feature solves a true operational need.",
      iconSrc: Icon5 
    },
    {
      title: "Modern, scalable foundation",
      description: "We invest in stable, long-term architecture instead of patching legacy workflows or rushing features.",
      iconSrc: Icon6
    },
    {
      title: "Purposeful AI automation",
      description: "We use AI only where it removes manual work and creates real efficiency gains.",
      iconSrc: Icon7
    },
    {
      title: "Clear, intuitive interface",
      description: "The platform is clear, intuitive and easy to use even for non-technical staff.",
      iconSrc: Icon8
    },
    {
      title: "Adapts to your workflows",
      description: "We integrate with your current tools so you can transition smoothly without disruption.",
      iconSrc: Icon9
    },
    {
      title: "Continuous, real-world improvement",
      description: "We refine the system using real-world feedback, keeping your operations modern and aligned.",
      iconSrc: Icon10
    },
  ];

  return (
    <section className="bg-[#dce0e6] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-gray-900 mb-16">
          Why teams trust Emdula
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-[#f0f2f5] p-8 rounded-xl flex flex-col items-start transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-400/20 cursor-default border border-transparent hover:border-gray-100"
            >
              <div className="mb-6 bg-white rounded-full p-3 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                <img 
                  src={feature.iconSrc} 
                  alt="" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}