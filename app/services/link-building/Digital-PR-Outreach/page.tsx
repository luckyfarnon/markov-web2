"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const primaryColor = '#8A2D3B';
const accentColor = '#BE5B50';
const secondaryColor = '#F59E1B';

const stats = [
  { value: 500, label: 'Media Placements' },
  { value: 98, label: 'Client Satisfaction (%)' },
  { value: 120, label: 'Top-Tier Publications' },
  { value: 10, label: 'Years Experience' },
];

const testimonials = [
  {
    quote: 'Our online presence skyrocketed after working with this team. We were featured in top publications and saw a real boost in traffic and leads.',
    author: 'Ayesha, E-commerce Brand',
  },
  {
    quote: 'The PR outreach process was smooth and results-driven. Highly recommended for any business looking to grow authority.',
    author: 'Bilal, SaaS Startup',
  },
  {
    quote: 'We landed features in major media and built lasting relationships with journalists. Fantastic experience!',
    author: 'Sara, Marketing Director',
  },
];

const faqs = [
  {
    q: 'What is Digital PR Outreach?',
    a: 'Digital PR Outreach is the process of building relationships with online journalists, bloggers, and influencers to promote your brand, content, or products and secure valuable media coverage and backlinks.'
  },
  {
    q: 'How long does it take to see results?',
    a: 'You can start seeing results within a few weeks, but the best outcomes are achieved with ongoing campaigns and relationship building.'
  },
  {
    q: 'Do you guarantee media placements?',
    a: 'While we cannot guarantee specific placements, our proven process and strong media relationships maximize your chances of high-quality coverage.'
  },
  {
    q: 'Is Digital PR Outreach suitable for small businesses?',
    a: 'Absolutely! Digital PR Outreach is effective for businesses of all sizes looking to boost their online presence and authority.'
  },
];

const processSteps = [
  { icon: '🔍', title: 'Research', desc: 'We identify the best media opportunities and target publications for your brand.' },
  { icon: '✍️', title: 'Content Creation', desc: 'Our team crafts compelling pitches and press materials tailored to each outlet.' },
  { icon: '📤', title: 'Outreach', desc: 'We connect with journalists, bloggers, and influencers to secure coverage.' },
  { icon: '📈', title: 'Reporting', desc: 'You receive transparent, detailed reports on placements and results.' },
];

const mediaLogos = [
  '/media/nyt.svg', '/media/forbes.svg', '/media/bbc.svg', '/media/guardian.svg', '/media/techcrunch.svg', '/media/entrepreneur.svg'
];

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const step = Math.ceil(end / (duration * 60));
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [end, duration]);
  return <span>{count}{typeof end === 'number' && end < 100 ? '%' : ''}</span>;
}

export default function DigitalPROutreachPage() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="bg-gradient-to-b from-[#F6FAF9] to-white min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="relative py-40 px-4 text-center bg-gradient-to-br from-[#8A2D3B] via-[#BE5B50] to-[#F59E1B] text-white overflow-hidden">
        {/* Enhanced animated floating shapes */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ 
            opacity: [0.1, 0.15, 0.1],
            scale: [0.8, 1, 0.8],
            y: [0, 20, 0]
          }} 
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} 
          className="absolute left-20 top-16 w-40 h-40 rounded-full bg-white/10 blur-2xl" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ 
            opacity: [0.08, 0.12, 0.08],
            scale: [0.8, 1, 0.8],
            y: [0, -20, 0]
          }} 
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }} 
          className="absolute right-32 top-32 w-56 h-56 rounded-full bg-white/10 blur-2xl" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
            scale: [0.8, 1, 0.8],
            y: [0, 15, 0]
          }} 
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }} 
          className="absolute left-1/2 bottom-20 w-48 h-48 rounded-full bg-white/10 blur-2xl" 
        />
        
        {/* Modern Megaphone SVG with enhanced glow */}
        <div className="flex flex-col items-center justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" className="mb-8 drop-shadow-[0_8px_32px_rgba(186,45,59,0.35)]">
              <g filter="url(#glow)">
                <rect x="16" y="36" width="48" height="24" rx="12" fill="#fff" />
                <rect x="64" y="40" width="24" height="12" rx="6" fill={accentColor} />
                <rect x="20" y="40" width="12" height="12" rx="6" fill={primaryColor} />
                <rect x="80" y="44" width="8" height="8" rx="4" fill="#fff" />
                <rect x="8" y="44" width="8" height="8" rx="4" fill={accentColor} />
              </g>
              <defs>
                <filter id="glow" x="0" y="28" width="96" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feGaussianBlur stdDeviation="12" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight"
            style={{ 
              textShadow: '0 4px 24px rgba(0,0,0,0.18)',
              background: 'linear-gradient(to right, #fff, #f3f4f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Digital PR Outreach
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 text-2xl md:text-3xl max-w-2xl mx-auto text-white/95 font-medium leading-relaxed"
          >
            Grow Your Brand Authority with Powerful Media Coverage
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 text-xl max-w-xl mx-auto text-white/85 leading-relaxed"
          >
            Your Gateway to Greater Online Visibility and Brand Recognition
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl shadow-2xl px-10 py-10 flex flex-col md:flex-row items-center gap-6 w-full max-w-2xl mx-auto" 
              style={{ 
                boxShadow: '0 8px 32px 0 rgba(186,45,59,0.15)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
              }}
            >
              <input 
                type="text" 
                placeholder="Enter Website Address" 
                className="border-none rounded-xl px-6 py-4 w-full md:w-96 text-gray-800 focus:ring-2 focus:ring-[#BE5B50] bg-white/95 text-lg placeholder-gray-500" 
              />
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#F59E1B] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#BE5B50] transition-all text-lg shadow-lg w-full md:w-auto flex items-center justify-center gap-3"
              >
                GET MY FREE PROPOSAL
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transform group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Enhanced decorative SVG Wave */}
        <svg className="absolute bottom-0 left-0 w-full" height="80" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h1440v40c-120 20-360 40-720 40S120 60 0 40V0z" fill="#fff" fillOpacity="0.9"/>
        </svg>
      </section>

      {/* Trust/Testimonials Section */}
      <section className="py-20 px-4 bg-white text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
          style={{ 
            color: primaryColor,
            background: 'linear-gradient(to right, #8A2D3B, #BE5B50)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Trusted by Leading Brands & Featured In
        </motion.h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 mb-16">
          {mediaLogos.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img src={logo} alt="media logo" className="h-12 w-auto" />
            </motion.div>
          ))}
        </div>

        {/* Enhanced Testimonial slider */}
        <div className="max-w-3xl mx-auto relative">
          <motion.div
            key={testimonialIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-[#F6FAF9] to-white rounded-2xl shadow-xl p-12 relative"
            style={{ boxShadow: '0 8px 32px 0 rgba(186,45,59,0.08)' }}
          >
            <svg className="absolute top-8 left-8 w-8 h-8 text-[#8A2D3B]/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <motion.blockquote className="italic text-xl text-gray-700 min-h-[120px] leading-relaxed">
              "{testimonials[testimonialIdx].quote}"
            </motion.blockquote>
            <div className="mt-6 font-bold text-[#8A2D3B] text-lg">
              — {testimonials[testimonialIdx].author}
            </div>
          </motion.div>
          
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setTestimonialIdx(idx)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all ${
                  testimonialIdx === idx 
                    ? 'bg-[#8A2D3B] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Animated Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#F6FAF9]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all"
              style={{ boxShadow: '0 8px 32px 0 rgba(186,45,59,0.08)' }}
            >
              <span className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#8A2D3B] to-[#BE5B50] bg-clip-text text-transparent">
                <CountUp end={stat.value} />
              </span>
              <span className="text-gray-700 text-lg font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced Step-by-Step Process Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.03 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#8A2D3B] blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.03 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-[#BE5B50] blur-3xl"
          />
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ 
            background: 'linear-gradient(to right, #8A2D3B, #BE5B50)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          How Our Digital PR Outreach Works
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto relative">
          {processSteps.map((step, idx) => (
            <React.Fragment key={step.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all min-w-[280px] mx-2 z-10 relative"
                style={{ boxShadow: '0 8px 32px 0 rgba(186,45,59,0.08)' }}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-[#8A2D3B] to-[#BE5B50] rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                  {step.icon}
                </div>
                <h3 className="font-bold mb-4 text-xl mt-8" style={{ color: primaryColor }}>{step.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed">{step.desc}</p>
              </motion.div>
              {idx < processSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="hidden md:block w-16 h-1 bg-gradient-to-r from-[#8A2D3B] to-[#BE5B50] mx-2 rounded-full relative"
                  style={{ alignSelf: 'center' }}
                >
                  <motion.div
                    animate={{ x: [0, 16, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute -top-1 w-3 h-3 rounded-full bg-[#F59E1B]"
                  />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Enhanced Outreach Solutions Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#F6FAF9] to-white">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          style={{ 
            background: 'linear-gradient(to right, #8A2D3B, #BE5B50)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Digital PR Outreach Solutions
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16 text-xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed"
        >
          Establish brand authority and improve organic search performance with custom, strategic digital public relations (PR) services. With a network of connections in top-tier publications, our agency helps you secure online media coverage that drives referral traffic and earns valuable links for your business.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col gap-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-12 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8A2D3B]/5 to-[#BE5B50]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="text-8xl transform group-hover:scale-110 transition-transform duration-500">🌐</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1 text-left max-w-xl"
          >
            <ul className="space-y-6">
              {[
                'Build relationships with online journalists and bloggers to promote your brand, content, or products.',
                'Craft compelling pitches and distribute them to relevant publications to secure media coverage and backlinks.',
                'Drive referral traffic and earn valuable links for your business.',
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 text-lg text-gray-700"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8A2D3B]/10 flex items-center justify-center text-[#8A2D3B] font-bold">
                    {idx + 1}
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Traditional vs Digital PR Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.03 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#8A2D3B] blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.03 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-[#BE5B50] blur-3xl"
          />
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ 
            background: 'linear-gradient(to right, #8A2D3B, #BE5B50)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Traditional PR vs. Digital PR Outreach
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 justify-center max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-xl p-10 flex-1 max-w-md relative overflow-hidden group"
            style={{ boxShadow: '0 8px 32px 0 rgba(186,45,59,0.08)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8A2D3B]/5 to-[#BE5B50]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="font-bold text-2xl mb-6" style={{ color: primaryColor }}>Traditional PR Outreach</h3>
            <ul className="space-y-4">
              {[
                'Uses traditional media outlets such as newspapers, magazines, TV and radio',
                'Less space for creativity since stories need to be tailored for specific media outlets',
                'Targets a broad audience as traditional media has a wide reach',
                'May involve paid placements in publications or on-air segments',
                'Results take longer to see due to print deadlines and production schedules'
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8A2D3B]/10 flex items-center justify-center text-[#8A2D3B] text-sm">
                    ✓
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-xl p-10 flex-1 max-w-md relative overflow-hidden group"
            style={{ boxShadow: '0 8px 32px 0 rgba(186,45,59,0.08)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8A2D3B]/5 to-[#BE5B50]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="font-bold text-2xl mb-6" style={{ color: primaryColor }}>Digital PR Outreach</h3>
            <ul className="space-y-4">
              {[
                'Uses digital media outlets such as online publications, websites and social media',
                'Targets a specific audience through niche publishers',
                'Does not involve paid placements but can involve sponsored content',
                'Results are faster as digital media has faster turnaround times',
                'More room for creativity and experimentation with content'
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8A2D3B]/10 flex items-center justify-center text-[#8A2D3B] text-sm">
                    ✓
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Types of Digital PR Outreach Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-[#F6FAF9]">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ 
            background: 'linear-gradient(to right, #8A2D3B, #BE5B50)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Types of Digital PR Outreach
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { 
              icon: '📱', 
              title: 'Social Media PR', 
              desc: 'Pitches and promotions are directly sent to journalists, bloggers or influencers through social media platforms. A PR and social media agency will research and target relevant influencers on social media, craft personalized pitches that align with their content and audience, and reach out to them through direct messages or mentions.' 
            },
            { 
              icon: '🤝', 
              title: 'Influencer/Blogger PR', 
              desc: "Influencers and bloggers have hundreds to millions of followers and can help extend your brand's reach by sharing your content or products with their audience. Outreach to influencers involves building relationships by engaging with their content, offering value and collaborating on sponsored posts or product reviews." 
            },
            { 
              icon: '📰', 
              title: 'Press Release/Editorial Outreach', 
              desc: 'Sharing company news, acquiring mentions in big publications or creating thought leadership pieces are ways to secure press release coverage. This type of outreach involves crafting a well-written press release and sending it out to targeted media outlets, hoping for a pick-up and publication.' 
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all relative overflow-hidden group"
              style={{ boxShadow: '0 8px 32px 0 rgba(186,45,59,0.08)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8A2D3B]/5 to-[#BE5B50]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#8A2D3B] to-[#BE5B50] flex items-center justify-center text-white text-4xl mb-8 shadow-lg">
                {item.icon}
              </div>
              <h3 className="font-bold mb-4 text-2xl" style={{ color: primaryColor }}>{item.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#8A2D3B] to-[#BE5B50] text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            REQUEST A FREE QUOTE
          </motion.button>
        </motion.div>
      </section>

      {/* Why Your Business Needs Online PR Services Section */}
      <section className="py-20 px-4 bg-[#F6FAF9]">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: primaryColor }}>Why Your Business Needs Online PR Services</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: '💡', title: 'Demonstrate Expertise', desc: "Highlight your company's expertise with share-worthy research articles, infographics and videos that showcase your unique selling points (USPs). Engage your audience with compelling content that leaves a lasting and profitable impression." },
            { icon: '🤝', title: 'Build Relationships', desc: 'Building lasting relationships with journalists, bloggers, influencers and online media is a gift that keeps giving. Ongoing email, social media or direct messaging communication can result in repeat coverage and mutually beneficial collaborations.' },
            { icon: '🔒', title: 'Hard To Copy/Dilute', desc: 'Quality backlinks from high-authority sources are hard to come by and cannot be easily replicated or diluted. You become a trusted source of information and an industry leader, making attracting new leads and customers easier than ever.' },
            { icon: '🚀', title: 'Organic Traffic Boost', desc: 'When your content secures a feature in a digital publication, you benefit from its existing audience and reach. The more backlinks you earn, the higher your rank in the search results, leading to increased organic traffic and brand awareness.' },
            { icon: '💸', title: 'Cost-Effective', desc: 'Since it doesn\'t involve paid placements, online PR is a cost-effective strategy for driving traffic. You can reach a wider and more targeted audience at a fraction of the price, making it an excellent option for businesses with smaller budgets.' },
            { icon: '🛡️', title: 'Mitigate Crisis', desc: 'In a reputation crisis, a digital PR agency manages negative press, crafting strategic responses and engaging with the media on your behalf. Protect your online reputation with proactive PR and take negative brand sentiment head-on.' },
          ].map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: idx * 0.1 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all">
              <span className="text-5xl mb-4">{item.icon}</span>
              <h3 className="font-bold mb-2 text-xl" style={{ color: primaryColor }}>{item.title}</h3>
              <p className="text-gray-700 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <motion.button whileHover={{ scale: 1.05 }} className="bg-[#F59E1B] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-700 transition">SPEAK TO A PR EXPERT</motion.button>
        </div>
      </section>

      {/* Best PR Agency Section */}
      <section className="py-20 px-4 bg-white">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: primaryColor }}>The Best PR Agency for Boosting Your Brand's Reach</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-8 text-lg text-gray-700">Connections, creativity and collaboration make us the best PR agency to work with. Our PR and digital marketing experts bring years of experience successfully executing PR campaigns for clients across industries. We focus on building long-term relationships with media contacts, maintaining a positive brand image and ensuring measurable results for our clients.</motion.p>
      </section>

      {/* Thrive's Digital PR Services Section */}
      <section className="py-20 px-4 bg-[#F6FAF9]">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: primaryColor }}>Our Digital PR Services</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: '🤝', title: 'Manual Outreach Service', desc: 'We help you nurture your database of referring domains and maintain consistent communication with them. We identify credible websites with the same target audience, determine your target markets and evaluate the SEO performance of publishing websites to develop a successful backlink strategy for your brand.' },
            { icon: '🔍', title: 'PR SEO Services', desc: 'Benefit from online PR services fully integrated into SEO campaigns. We identify high-value keywords, develop content strategies and implement link-building tactics that boost your organic search performance. On-page and off-page PR SEO services amplify your brand\'s message across channels.' },
            { icon: '🔗', title: 'Link Building', desc: 'Build a strong backlink profile to attract quality traffic and improve your website\'s indexability. We follow ethical link building practices, ensuring your brand is mentioned in relevant publications.' },
            { icon: '📝', title: 'Content Marketing', desc: 'Quality content is key to securing media coverage and backlinks. We craft compelling multimedia assets that resonate with your target audience and align with your brand\'s message.' },
            { icon: '📰', title: 'Guest Posts', desc: 'How you present your brand is crucial in building authority and winning trust. We help you get featured in reputable publications through irresistible guest post offers.' },
            { icon: '📑', title: 'Niche Edits', desc: 'We include requesting link placements on existing blog posts to gain visibility. We contact reputable websites, proposing the addition of authoritative, relevant backlinks to their content.' },
            { icon: '🏷️', title: 'Brand Mentions', desc: 'Convert brand mentions to backlinks to boost your website\'s referral traffic. We conduct detailed research to find unlinked brand mentions and persuade authors to link to your target page.' },
            { icon: '🤝', title: 'Sponsorship Campaigns', desc: 'Sponsorships offer unique opportunities to connect with local online communities and broaden your reach. We leverage native ads to increase brand mentions and pursue strategic influencer partnerships.' },
            { icon: '👥', title: 'White Label Blogger Outreach', desc: 'Nearly 50% of consumers rely on influencers for product recommendations. We build relations with industry bloggers and social influencers to ensure your content reaches the right audience.' },
          ].map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: idx * 0.1 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all">
              <span className="text-5xl mb-4">{item.icon}</span>
              <h3 className="font-bold mb-2 text-xl" style={{ color: primaryColor }}>{item.title}</h3>
              <p className="text-gray-700 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <motion.button whileHover={{ scale: 1.05 }} className="bg-[#F59E1B] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-700 transition">DRIVE REFERRAL TRAFFIC NOW</motion.button>
        </div>
      </section>

      {/* PR Formula/Process Section */}
      <section className="py-20 px-4 bg-white">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: primaryColor }}>Our Tried-and-Tested Digital PR Formula</motion.h2>
        <div className="max-w-3xl mx-auto">
          <ol className="list-decimal pl-6 space-y-4 text-lg">
            <li><span className="font-bold" style={{ color: primaryColor }}>Target Research and Analysis:</span> Identify key target markets and understand their interests, preferences and online behaviors to create a tailored digital PR outreach plan.</li>
            <li><span className="font-bold" style={{ color: primaryColor }}>Campaign Development:</span> Create a comprehensive campaign plan that outlines objectives, timelines and strategies to reach your target audience.</li>
            <li><span className="font-bold" style={{ color: primaryColor }}>Content Creation:</span> Craft engaging and relevant content that resonates with your target audience, including infographics, videos or social media posts.</li>
            <li><span className="font-bold" style={{ color: primaryColor }}>Influencer Outreach and Partnership:</span> Pinpoint the most relevant media outlets and influencers, and draft personalized pitches to secure placements and mentions.</li>
            <li><span className="font-bold" style={{ color: primaryColor }}>Response Monitoring and Follow-Up:</span> Monitor responses and conduct timely follow-ups to address any queries or opportunities.</li>
            <li><span className="font-bold" style={{ color: primaryColor }}>Tracking of Link Placements and Mentions:</span> Use advanced tools and analytics to track where your brand is being linked and mentioned across the web.</li>
            <li><span className="font-bold" style={{ color: primaryColor }}>Measurement and Reporting:</span> Provide detailed reports on campaign performance, including reach, engagement and conversion metrics.</li>
          </ol>
        </div>
        <div className="flex justify-center mt-12">
          <motion.button whileHover={{ scale: 1.05 }} className="bg-[#F59E1B] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-700 transition">BUILD A CUSTOM CAMPAIGN</motion.button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[#F6FAF9]">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: primaryColor }}>Frequently Asked Questions</motion.h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {faqs.map((faq, idx) => (
            <motion.div key={faq.q} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: idx * 0.1 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-xl p-8 cursor-pointer" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
              <div className="font-bold text-lg mb-2 text-[#8A2D3B] flex items-center justify-between">
                {faq.q}
                <span className="ml-2 text-2xl">{openFaq === idx ? '−' : '+'}</span>
              </div>
              {openFaq === idx && <div className="text-gray-700 text-base mt-2">{faq.a}</div>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#8A2D3B] to-[#BE5B50] text-white text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-6">Ready to Amplify Your Brand?</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }} className="mb-8 text-lg max-w-2xl mx-auto text-white/90">Contact us today to discuss your Digital PR Outreach campaign and get a custom proposal from our experts.</motion.p>
        <motion.button whileHover={{ scale: 1.05 }} className="bg-[#F59E1B] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-white hover:text-[#8A2D3B] transition">GET STARTED</motion.button>
      </section>
    </div>
  );
}