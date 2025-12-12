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
      {/* Добавляем CSS анимацию левитации */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) scale(1.1); }
          50% { transform: translateY(-20px) scale(1.1); }
          100% { transform: translateY(0px) scale(1.1); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <div className="bg-gray-100 py-16 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 max-w-5xl mx-auto leading-tight">
          There are two types of businesses: those <span className="text-emerald-500">that use AI</span> — and those that are out of business
        </h2>
      </div>

      <div className="bg-[#0a0e17] py-24 px-4 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-24 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How Emdula Builds Modern CRM Solutions
            </h2>
            <p className="text-gray-400 text-lg">
              Practical, intelligent and built around real business needs.
            </p>
          </div>

          <div className="relative flex items-center justify-center">
            
            <div className="w-full lg:w-[65%] bg-gradient-to-br from-[#0F3A3A]/90 to-[#052020]/90 backdrop-blur-sm rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white/10 relative z-20 lg:right-[100px]">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                {steps.map((step) => (
                  <div key={step.id} className="flex flex-col items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-emerald-500/30">
                      {step.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-sm opacity-90">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 w-[50%] max-w-[700px] z-10 pointer-events-none">
              {/* Добавил класс animate-float и убрал scale-110 из className (он теперь внутри анимации) */}
              <img 
                src={Illustation}
                alt="Cute 3D Robot" 
                className="w-full h-auto object-contain drop-shadow-2xl animate-float" 
              />
            </div>

            <div className="lg:hidden w-full flex justify-center mt-10">
                <img src={Illustation} alt="Robot" className="w-64 h-auto drop-shadow-xl" />
            </div>

          </div>

          <div className="text-center mt-20 relative z-10">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-12 rounded-full transition-colors text-lg shadow-lg shadow-emerald-500/20 hover:scale-105 transform duration-200">
              Get started
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}