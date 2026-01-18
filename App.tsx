
import React, { useState } from 'react';
import { 
  Check, 
  Shield, 
  DollarSign, 
  Phone, 
  ArrowRight,
  Menu,
  X,
  Zap,
  Globe,
  TrendingUp,
  CreditCard
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-3 group">
            {/* Logo Placeholder */}
            <div className="h-10 w-10 bg-[#004d2c] rounded-xl flex items-center justify-center text-white font-black text-xs group-hover:scale-105 transition-transform">
              WWM
            </div>
            <span className="font-extrabold text-xl md:text-2xl tracking-tight text-[#004d2c] leading-none" style={{ fontFamily: "'Manrope', sans-serif" }}>
              World Wide Marketing
            </span>
          </a>
        </div>

        <div className="hidden lg:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest text-gray-500">
          <a href="#services" className="hover:text-[#004d2c] transition-colors">Services</a>
          <a href="#about" className="hover:text-[#004d2c] transition-colors">Reliability</a>
          <a href="tel:8663672637" className="flex items-center text-[#004d2c] hover:opacity-80 transition-opacity">
            <Phone className="w-4 h-4 mr-2" /> (866) 367-2637
          </a>
          <a 
            href="#quote" 
            className="bg-[#D4EF70] text-[#004d2c] px-6 py-3 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95"
          >
            Get Free Quote
          </a>
        </div>

        <button className="lg:hidden text-[#004d2c]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>
      
      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b p-6 flex flex-col space-y-4 fade-in shadow-xl">
          <a href="#services" onClick={() => setIsOpen(false)} className="text-[#004d2c] font-bold text-lg">Services</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-[#004d2c] font-bold text-lg">Reliability</a>
          <a href="tel:8663672637" className="text-[#004d2c] font-bold flex items-center text-lg">
            <Phone className="w-5 h-5 mr-2" /> (866) 367-2637
          </a>
          <a href="#quote" onClick={() => setIsOpen(false)} className="bg-[#D4EF70] text-[#004d2c] py-4 rounded-xl text-center font-bold">
            Get Free Quote
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="meridian-hero-gradient pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-[60%] space-y-10 fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-8xl font-[800] leading-[1.1] text-[#004d2c] tracking-tight">
              Don't Lose Revenue<br />At Your Next Event
            </h1>
            <p className="text-xl md:text-3xl text-gray-600 font-medium max-w-xl">
              Professional ATM Rentals | 25 Years Serving Ontario
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#quote" 
              className="bg-[#D4EF70] text-[#004d2c] px-10 py-6 rounded-full text-lg font-bold hover:shadow-2xl transition-all text-center flex items-center justify-center group"
            >
              Get Free Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:8663672637" 
              className="bg-[#004d2c] text-white px-10 py-6 rounded-full text-lg font-bold hover:shadow-2xl transition-all text-center"
            >
              Call (866) 367-2637
            </a>
          </div>
        </div>

        {/* Right Content Placeholder */}
        <div className="w-full md:w-[40%] flex justify-center mt-20 md:mt-0 relative">
          <div className="relative z-10 w-72 h-72 md:w-[28rem] md:h-[28rem] soft-glow rounded-full flex items-center justify-center bg-white/30 backdrop-blur-sm border border-white/50 animate-[bounce_6s_infinite_ease-in-out]">
             <div className="text-center space-y-4">
                <CreditCard className="w-24 h-24 md:w-32 md:h-32 text-[#004d2c] mx-auto opacity-80" />
                <p className="text-[#004d2c] font-black tracking-widest text-sm uppercase">Secure Cash Access</p>
             </div>
             <div className="absolute inset-0 border-[2px] border-[#D4EF70]/20 rounded-full animate-pulse"></div>
             <div className="absolute inset-4 border-[1px] border-[#004d2c]/5 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueSection = () => {
  const values = [
    {
      icon: <Check className="w-8 h-8 text-[#004d2c]" />,
      title: "Zero Hassle Setup",
      text: "We deliver, set up, load cash, and provide support. You don't lift a finger."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#004d2c]" />,
      title: "25 Years of Reliability",
      text: "From music festivals to corporate events across Ontario. Never a breakdown."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#004d2c]" />,
      title: "Transparent Pricing",
      text: "Everything included: delivery, setup, cash loading, support, pickup."
    }
  ];

  return (
    <section id="about" className="bg-[#FDFBF7] py-24 md:py-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {values.map((v, i) => (
            <div key={i} className="space-y-6">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                {v.icon}
              </div>
              <h3 className="text-2xl font-bold">{v.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceBlock = ({ title, subhead, body, image, gradient, num, reverse = false }: any) => (
  <section className={`${gradient} py-24 md:py-40 border-b border-gray-50/10`}>
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
      <div className={`w-full md:w-1/2 space-y-8 ${reverse ? 'md:order-2 md:pl-20' : 'md:pr-20'}`}>
        <div className="flex items-center space-x-4">
          <span className="service-num text-5xl font-black">{num}</span>
          <div className="h-[2px] w-12 bg-[#004d2c]/20"></div>
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">{title}</h2>
          <h4 className="text-xl font-bold text-[#004d2c]/70 italic">{subhead}</h4>
        </div>
        <p className="text-xl text-gray-700 leading-relaxed">{body}</p>
      </div>
      <div className={`w-full md:w-1/2 mt-12 md:mt-0 ${reverse ? 'md:order-1' : ''}`}>
        <div className="aspect-[16/10] bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[30%] group-hover:grayscale-0" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#004d2c]/20 to-transparent"></div>
        </div>
      </div>
    </div>
  </section>
);

const SocialProof = () => {
  const clients = [
    "International Plowing Match",
    "Music In The Fields",
    "Woodstock Outdoor Farm Show",
    "Fergus Truck Show",
    "Holstein Rodeo",
    "Drayton Fair"
  ];

  return (
    <section className="bg-[#004d2c] py-32 md:py-40 text-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
             <h2 className="text-5xl md:text-7xl font-extrabold text-[#D4EF70]">Event Partners</h2>
             <p className="text-xl opacity-70">Major events across Ontario trust our infrastructure.</p>
          </div>
          <div className="bg-[#D4EF70] text-[#004d2c] px-8 py-4 rounded-2xl font-black text-xl md:text-2xl shadow-xl">
            25+ Years Experience
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {clients.map((c, i) => (
            <div key={i} className="border-b border-white/10 pb-8 hover:border-[#D4EF70] transition-colors group">
              <span className="text-2xl md:text-3xl font-bold opacity-60 group-hover:opacity-100 transition-opacity">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section id="quote" className="bg-[#FDFBF7] py-32 md:py-48">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6 mb-16">
          <h2 className="text-5xl md:text-7xl font-extrabold">Get Your Free Quote</h2>
          <p className="text-xl text-gray-500 font-medium">Ontario's most reliable ATM service is just a message away.</p>
        </div>
        
        <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl text-left border border-gray-100">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
              <input type="text" placeholder="Your Name" className="w-full bg-[#FDFBF7] border-none rounded-2xl p-6 focus:ring-2 focus:ring-[#D4EF70] transition-all outline-none text-lg" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
              <input type="email" placeholder="email@company.com" className="w-full bg-[#FDFBF7] border-none rounded-2xl p-6 focus:ring-2 focus:ring-[#D4EF70] transition-all outline-none text-lg" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Phone Number</label>
              <input type="tel" placeholder="(000) 000-0000" className="w-full bg-[#FDFBF7] border-none rounded-2xl p-6 focus:ring-2 focus:ring-[#D4EF70] transition-all outline-none text-lg" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Event Type</label>
              <input type="text" placeholder="e.g. Music Festival" className="w-full bg-[#FDFBF7] border-none rounded-2xl p-6 focus:ring-2 focus:ring-[#D4EF70] transition-all outline-none text-lg" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Event Date</label>
              <input type="text" placeholder="Expected Date" className="w-full bg-[#FDFBF7] border-none rounded-2xl p-6 focus:ring-2 focus:ring-[#D4EF70] transition-all outline-none text-lg" />
            </div>
            <div className="md:col-span-2 pt-4">
              <button className="w-full bg-[#D4EF70] text-[#004d2c] font-black text-2xl py-8 rounded-[2rem] hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95">
                Request Quote Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <main>
        <Hero />
        <ValueSection />
        
        <div id="services">
          <ServiceBlock 
            num="01"
            title="Event ATM Rentals"
            subhead="Festivals, Fairs, Markets, Corporate Events"
            body="Cash is still king at events. We place professional ATMs where your guests need them most - fully stocked, monitored, and serviced from setup to teardown. Your attendees get convenient cash access, you get peace of mind."
            image="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000"
            gradient="bg-gradient-to-br from-[#FDFBF7] to-[#E2F592]"
          />
          <ServiceBlock 
            num="02"
            title="Permanent Commercial Locations"
            subhead="Bars, Restaurants, Retail Locations"
            body="Generate passive income with zero work. We install, service, and maintain ATMs at your business location. You provide the space, we handle everything else and share the revenue."
            image="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000"
            gradient="bg-gradient-to-br from-[#F7F2FD] to-[#E2D4F5]"
            reverse
          />
          <ServiceBlock 
            num="03"
            title="White-Glove Turnkey Service"
            subhead="Delivery, Setup, Cash Loading, Monitoring, Removal"
            body="We're not just dropping off a machine. Every rental includes delivery, professional installation, cash loading, 24/7 monitoring, on-call support, and post-event removal. You focus on your event, we handle the ATM."
            image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000"
            gradient="bg-gradient-to-br from-[#F2FDFB] to-[#D4F5EC]"
          />
        </div>

        <SocialProof />
        <ContactForm />
      </main>
      
      <footer className="bg-[#FDFBF7] py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-gray-400 font-bold uppercase tracking-widest text-sm">
          <div className="flex items-center space-x-3 text-[#004d2c]">
            <div className="h-6 w-6 bg-[#004d2c] rounded-md"></div>
            <span className="font-extrabold text-[#004d2c] tracking-tight">World Wide Marketing</span>
          </div>
          <div className="flex space-x-12">
            <a href="#" className="hover:text-[#004d2c]">Privacy</a>
            <a href="#" className="hover:text-[#004d2c]">Terms</a>
            <a href="tel:8663672637" className="hover:text-[#004d2c]">Support</a>
          </div>
          <p className="text-xs">© 2024 Ontario, Canada</p>
        </div>
      </footer>
    </div>
  );
}
