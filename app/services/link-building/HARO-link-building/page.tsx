"use client"

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const primaryColor = '#074799';
const accentColor = '#F59E1B';

export default function HAROLinkBuildingPage() {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-b from-[#F6FAF9] to-white min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-[#074799] to-[#0e5bb5] text-white overflow-hidden">
        <div className="animate-fade-in">
          <div className="flex flex-col items-center justify-center mb-8">
            <span className="text-6xl mb-4">🔗</span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">HARO Link Building</h1>
            <p className="mb-6 text-lg md:text-xl max-w-2xl mx-auto text-white/90">Build High-Quality Backlinks From Authority Sites with a Trusted HARO SEO Agency</p>
            <div className="flex justify-center mb-6">
              <input type="text" placeholder="Enter Website Address" className="border rounded-l px-4 py-3 w-64 text-gray-800" />
              <button 
                className="bg-[#F59E1B] text-white px-8 py-3 rounded-r font-bold hover:bg-yellow-700 transition-all text-lg shadow-lg"
                onClick={() => router.push('/contact?type=HARO')}
              >GET MY FREE PROPOSAL</button>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 opacity-80">
              <span className="text-3xl">🏢</span>
              <span className="text-3xl">💼</span>
              <span className="text-3xl">📰</span>
              <span className="text-3xl">🌐</span>
              <span className="text-3xl">📈</span>
              <span className="text-3xl">🛒</span>
              <span className="text-3xl">💡</span>
              <span className="text-3xl">🗞️</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is HARO Section */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: primaryColor }}>What Is HARO?</h2>
        <p className="mb-8 text-lg text-gray-700">The No. 1 Strategy You Need To Succeed</p>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="md:flex-1 flex justify-center">
            <div className="w-56 h-56 bg-[#F6FAF9] rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-7xl">🔗</span>
            </div>
          </div>
          <div className="md:flex-1 text-left max-w-xl">
            <p className="mb-2 text-lg">HARO stands for <b>Help a Reporter Out</b>. It is an online public relations (PR) platform that connects journalists with industry experts who can share content relevant to their queries. Today, <b>more than 75,000 journalists and bloggers</b> use Help a Reporter Out (HARO) to find credible guidance and sources of information for their stories. These include media outlets such as <i>The New York Times, Reuters, The Chicago Tribune, Fox News</i> and the <i>Wall Street Journal</i>.</p>
          </div>
        </div>
      </section>

      {/* How Does HARO Work Section */}
      <section className="py-20 px-4 bg-[#F6FAF9]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: primaryColor }}>How Does HARO Work?</h2>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
              <span className="text-6xl">🗣️</span>
            </div>
            <ol className="list-decimal pl-6 space-y-2 text-left text-lg">
              <li><b>Journalists</b> post their Help a Reporter Out queries on the site.</li>
              <li><b>Sources</b> (like you) can submit responses via email.</li>
              <li>Journalists choose the best information source(s) for their story and quote them in the article.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Why HARO Link Building Section */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: primaryColor }}>HARO and Link Building: What You Need To Know</h2>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-40 h-40 bg-[#F6FAF9] rounded-2xl flex items-center justify-center mb-4 shadow-md">
              <span className="text-6xl">🔗</span>
            </div>
            <p className="text-lg text-center max-w-md">Using HARO for link building is one of the safest, most cost-effective ways to build natural backlinks. HARO backlinks from credible media sources are some of the most authoritative and relevant links that boost search visibility.</p>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 px-4 bg-[#F6FAF9] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: primaryColor }}>Get Started With Your HARO Link Building SEO Campaign</h2>
        <p className="mb-8 text-lg text-gray-700">Take advantage of our fully-managed HARO services to learn more about the importance of HARO for SEO and how to use Help a Reporter Out to build great links.</p>
        <button 
          className="bg-[#F59E1B] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-700 transition hover:scale-105 transform"
          onClick={() => router.push('/contact?type=HARO')}
        >CONNECT WITH WEBMASTERS</button>
      </section>

      {/* Why Your Business Needs HARO Marketing Section */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: primaryColor }}>Why Your Business Needs HARO Marketing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: '🚀', title: 'Increased Brand Awareness', desc: 'Using HARO for SEO is an excellent way to get free publicity and boost your engine visibility. By sharing your expertise in an external space, SEO HARO marketing proves your credibility as an industry authority while simultaneously building links and brand awareness.' },
            { icon: '🏅', title: 'High DR Backlinks', desc: 'HARO marketing provides link opportunities that are difficult to get elsewhere. It connects you with the world\'s most respected websites actively soliciting your contributions, allowing you to consistently generate high-quality HARO backlinks and press mentions.' },
            { icon: '📈', title: 'Improved Search Performance', desc: 'Google considers backlinks as one of the most important ranking signals. A good HARO backlink from a highly-visited, niche-relevant website can move your link juice and increased referral traffic, leading to improved search rankings and more potential customers.' },
            { icon: '🤝', title: 'Stronger Industry Connections', desc: 'Strategic HARO outreach service streamlines your link building process and helps you build long-term relationships with key people in your industry, from journalists and webmasters to influencers.' },
            { icon: '🏆', title: 'Increased Domain Authority', desc: 'Building high-authority links is the ultimate way to boost your site\'s domain authority. The higher your DA, the higher your likelihood of ranking high in search engine results pages (SERPs).' },
            { icon: '💰', title: 'Broader Revenue Opportunities', desc: 'Backlinks effectively expose your website to new people. And signing up for HARO link building service positions your brand in front of a broader audience base.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all">
              <span className="text-5xl mb-4">{item.icon}</span>
              <h3 className="font-bold mb-2 text-xl" style={{ color: primaryColor }}>{item.title}</h3>
              <p className="text-gray-700 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button 
            className="bg-[#F59E1B] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-700 transition hover:scale-105 transform"
            onClick={() => router.push('/contact?type=HARO')}
          >BUILD EXECUTIVE AUTHORITY</button>
        </div>
      </section>

      {/* How To Use HARO for Backlinks Section */}
      <section className="py-20 px-4 bg-[#F6FAF9]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: primaryColor }}>How To Use HARO for Backlinks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { icon: '📋', title: '1. Get Familiar With The Rules', desc: "Familiarize yourself with HARO's Rules for Resources. Violators will only receive one warning, and a second offense will get you permanently banned from the platform. Never request or demand a backlink or link swap in exchange for your contribution." },
            { icon: '📝', title: '2. Create an Account', desc: 'Register as a source and set the plan you want to start receiving HARO emails. HARO sends out three daily emails at 5:35 AM, 12:35 PM and 5:35 PM Eastern Time. Choose categories relevant to your industry to which you feel most confident about contributing.' },
            { icon: '🔍', title: '3. Find Relevant Queries', desc: 'Keep an eye on your inbox for email queries. Respond only to those you\'re most likely to be accepted for. The best HARO link building services provider can help you monitor and select the right queries to respond to.' },
            { icon: '✉️', title: '4. Create Quality HARO Pitches', desc: 'Craft the perfect pitch to get your HARO SEO campaign rolling. Don\'t overdo the self-promotion. Focus on the value of your contribution to the journalist\'s content. Well-thought-out responses highlighting your expertise are key.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all">
              <span className="text-4xl mb-4">{item.icon}</span>
              <h3 className="font-bold mb-2 text-lg" style={{ color: primaryColor }}>{item.title}</h3>
              <p className="text-gray-700 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Deliverables Section */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: primaryColor }}>HARO Link Building Service Deliverables</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: '🎯', title: 'Focused HARO Link Building Tactic', desc: 'We focus on acquiring links from high-authority publications that drive increased SEO performance. Our HARO service team works closely with your team, so you stay on top of strategies we implement.' },
            { icon: '✍️', title: 'Outstanding Copy', desc: 'Our HARO backlinks service team boasts link building experts adept at creating unique HARO pitches that give you the best and most relevant links. We keep your HARO pitch concise and personal and respond fast to queries to increase your chances of getting published.' },
            { icon: '🧑‍💼', title: 'HARO Persona Templates', desc: 'We conduct extensive research to develop tailored HARO persona templates that streamline your process and increase your chances of getting featured on high-quality websites.' },
            { icon: '🏆', title: 'High DR HARO Backlinks', desc: 'Our HARO link building services team implements data-driven strategies to gain the high-quality backlinks you need to rank higher.' },
            { icon: '🔗', title: 'Links of Published Articles', desc: 'Once you sign up for our HARO service, you will get a complete list of published articles that we contributed to, including other websites that reposted these articles.' },
            { icon: '📊', title: 'Detailed Live Reports', desc: 'We provide detailed competitor analysis and monthly reports, so you know exactly where each investment goes. Our HARO service team will also keep communication with your project manager to keep you updated on your campaign development.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all">
              <span className="text-4xl mb-4">{item.icon}</span>
              <h3 className="font-bold mb-2 text-lg" style={{ color: primaryColor }}>{item.title}</h3>
              <p className="text-gray-700 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button 
            className="bg-[#F59E1B] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-700 transition hover:scale-105 transform"
            onClick={() => router.push('/contact?type=HARO')}
          >ENHANCE MY BRAND VISIBILITY</button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-[#F6FAF9]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: primaryColor }}>Why Choose Us For Your HARO Link Building</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: 'HARO Link Building Experts', desc: 'Our link building team boasts years of experience and expertise in digital marketing. We invest in continuous training and development and use an advanced HARO SEO tool to ensure we provide you with HARO services that deliver targeted results.' },
            { title: 'Focused HARO Pitching Process', desc: 'As a strategy-first digital marketing agency, we follow a proven growth formula to ensure HARO link building success. Our link building experts carefully assess each media opportunity based on our backlink qualification criteria to ensure it aligns with your persona and meets your requirements.' },
            { title: 'Consultative Approach', desc: 'We provide expert consultations before placing your first link order to help you understand the HARO link building process. Our strategies are tailored to your business and industry.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all">
              <h3 className="font-bold mb-2 text-xl" style={{ color: primaryColor }}>{item.title}</h3>
              <p className="text-gray-700 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}