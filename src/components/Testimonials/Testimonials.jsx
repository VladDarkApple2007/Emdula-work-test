import React from 'react';

const testimonialsData = [
  {
    text: "Emdula has completely transformed how we manage our client data. The AI features are not just gimmicks; they actually save us hours of manual entry every week.",
    name: "Sarah Jenkins",
    role: "Operations Manager"
  },
  {
    text: "The ability to integrate with our existing tools was a dealbreaker for us. Emdula handled it seamlessly. We were up and running in days, not months.",
    name: "Michael Ross",
    role: "CTO at TechFlow"
  },
  {
    text: "I was skeptical about AI automation, but the accuracy of the data capture is impressive. It catches details our team used to miss during busy calls.",
    name: "Elena Rodriguez",
    role: "Sales Director"
  },
  {
    text: "Finally, a CRM that doesn't feel like a spreadsheet from the 90s. The interface is clean, fast, and the intelligent matching suggests deals we hadn't even thought of.",
    name: "David Chen",
    role: "Real Estate Agent"
  },
  {
    text: "Support is top-notch. Whenever we have a question about a new feature, the team is responsive and actually listens to our feedback for future updates.",
    name: "Amanda Lowery",
    role: "Customer Success Lead"
  },
  {
    text: "We scaled from 10 to 50 employees, and Emdula scaled with us. The permissions system and team workflows are robust enough for a much larger company.",
    name: "James Wilson",
    role: "Founder & CEO"
  },
  {
    text: "The reporting tools give us clarity we never had before. We can see exactly where our bottlenecks are and adjust our strategy in real-time.",
    name: "Olivia Martinez",
    role: "Business Analyst"
  },
  {
    text: "It just works. The mobile experience is great for our field agents, and the desktop version is powerful for the office staff. Highly recommended.",
    name: "Robert Taylor",
    role: "Field Operations"
  },
  {
    text: "RealEcon module helped us predict market shifts before our competitors. It gave us a significant advantage in Q4 last year.",
    name: "Sophia Kim",
    role: "Investment Strategist"
  }
];

const TestimonialCard = ({ data }) => (
  <figure className="
    bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6 break-inside-avoid 
    cursor-pointer
    transition-all duration-500 ease-in-out
    group-hover/list:opacity-40 
    group-hover/list:scale-95 
    group-hover/list:blur-[2px]
    group-hover/list:grayscale
    hover:!opacity-100 
    hover:!scale-105 
    hover:!blur-0 
    hover:!grayscale-0
    hover:shadow-2xl 
    hover:border-emerald-200
    hover:z-20
    relative
  ">
    <blockquote className="text-gray-600 text-sm leading-relaxed mb-6">
      "{data.text}"
    </blockquote>
    <figcaption className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white shrink-0">
        <span className="font-bold text-xs">{data.name.charAt(0)}</span>
      </div>
      <div>
        <div className="text-gray-900 font-bold text-sm">{data.name}</div>
        <div className="text-gray-400 text-xs">{data.role}</div>
      </div>
    </figcaption>
  </figure>
);

const ReviewColumn = ({ reviews, className = "", duration = "40s" }) => (
  <div className={`relative h-full overflow-hidden hover-pause px-2 ${className}`}>
    <div 
      className={className.includes('reverse') ? 'animate-scroll-down' : 'animate-scroll-up'} 
      style={{ animationDuration: duration }}
    >
      {reviews.map((review, i) => (
        <TestimonialCard key={`orig-${i}`} data={review} />
      ))}
      <div aria-hidden="true">
        {reviews.map((review, i) => (
          <TestimonialCard key={`dup1-${i}`} data={review} />
        ))}
      </div>
      <div aria-hidden="true">
        {reviews.map((review, i) => (
          <TestimonialCard key={`dup2-${i}`} data={review} />
        ))}
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const col1 = testimonialsData.slice(0, 3);
  const col2 = testimonialsData.slice(3, 6);
  const col3 = testimonialsData.slice(6, 9);

  return (
    <section className="bg-[#dce0e6] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
            Loved by fast-moving teams
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            See what our customers have to say about working with Emdula.
          </p>
        </div>

        <div className="group/list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[600px] overflow-hidden relative mask-gradient">
          
          <ReviewColumn reviews={col1} duration="45s" />
          <ReviewColumn reviews={col2} className="hidden md:block reverse" duration="50s" />
          <ReviewColumn reviews={col3} className="hidden lg:block" duration="48s" />

          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#dce0e6] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#dce0e6] to-transparent z-10 pointer-events-none"></div>

        </div>
      </div>
    </section>
  );
}