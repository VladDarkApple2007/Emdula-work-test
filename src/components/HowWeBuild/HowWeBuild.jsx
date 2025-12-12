import React from 'react'
import Illustation from '../../img/illustration.png'


export default function HowWeBuild() {
  const steps = [
    {
      id: 1,
      title: "AI-first architecture",
      description: "We design every feature around automation rather than manual tasks, making daily work faster and error-free."
    },
    {
      id: 2,
      title: "Built from real workflows",
      description: "Our product is shaped by real business processes, not assumptions — everything reflects how teams actually operate."
    },
    {
      id: 3,
      title: "Clean and focused design",
      description: "We remove clutter and friction, keeping the interface clear and intuitive so teams can work confidently from day one."
    },
    {
      id: 4,
      title: "Flexible across industries",
      description: "The system adapts to real estate, service companies and sales teams without becoming overloaded or complicated."
    },
    {
      id: 5,
      title: "Fast, iterative development",
      description: "We ship updates quickly, improve continuously and avoid slow corporate processes that block innovation."
    },
    {
      id: 6,
      title: "Partnership, not just software",
      description: "We grow the system together with clients, using real usage data to refine and strengthen the entire platform."
    }
  ];

  return (
    <section>
      <div className="bg-gray-100 py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
          There are two types of businesses: those <span className="text-emerald-500">that use AI</span> — and those that are out of business
        </h2>
      </div>

      <div className="bg-[#0a0e17] py-24 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Emdula Builds Modern CRM Solutions
            </h2>
            <p className="text-gray-400 text-lg">
              Practical, intelligent and built around real business needs.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            <div className="w-full lg:w-2/3 bg-[#0d2a2a] rounded-[3rem] p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                {steps.map((step) => (
                  <div key={step.id} className="flex flex-col items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-xl font-bold text-white">
                      {step.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/3 flex justify-center">
              <img 
                src={Illustation}
                alt="Cute 3D Robot giving a thumbs up" 
                className="w-full max-w-sm lg:max-w-none h-auto object-contain drop-shadow-2xl"
              />
            </div>

          </div>

          <div className="text-center mt-16">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-10 rounded-full transition-colors text-lg">
              Get started
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}