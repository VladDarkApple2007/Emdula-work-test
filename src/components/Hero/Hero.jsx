import React from 'react'
import Icon from '../../img/Icon.png'
import Icon2 from '../../img/Icon-2.png'
import Icon3 from '../../img/Icon-3.png'
import Icon4 from '../../img/Icon-4.png'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#0f151f] to-[#063A3A] text-white pt-16 pb-24 px-4 flex flex-col items-center">
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="text-emerald-500">Intelligent systems</span> <br />
          for real-world businesses
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          A new generation of AI-powered software for companies that are ready to move forward
        </p>

        <div className="flex gap-4 justify-center pt-4">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-full transition-colors">
            Get started
          </button>
          <button className="border border-emerald-500 text-emerald-500 hover:border-emerald-600 hover:text-emerald-600 font-semibold py-3 px-8 rounded-full transition-colors">
            Explore RealEcon
          </button>
        </div>
      </div>

      <div className="mt-20 w-full max-w-6xl bg-[#0AAE6C] rounded-t-[100px] rounded-b-[20px] py-10 px-8 md:px-12 text-center shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-medium mb-14 text-white">
          Benefit of improving your business
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white/25 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
              <img src={Icon} alt="Unified Workflows" className="w-10 h-10 brightness-0" />
            </div>
            <h3 className="font-normal text-white text-xl tracking-wide">
              Unified Workflows
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white/25 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
              <img src={Icon2} alt="Intelligent Automation" className="w-10 h-10 brightness-0" />
            </div>
            <h3 className="font-normal text-white text-xl tracking-wide">
              Intelligent Automation
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white/25 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
              <img src={Icon3} alt="Structured Data" className="w-10 h-10 brightness-0" />
            </div>
            <h3 className="font-normal text-white text-xl tracking-wide">
              Structured Data
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white/25 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
              <img src={Icon4} alt="Real-Time Efficiency" className="w-10 h-10 brightness-0" />
            </div>
            <h3 className="font-normal text-white text-xl tracking-wide">
              Real-Time Efficiency
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
