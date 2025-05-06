"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ProductPhotographyServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-[#1A365D]">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }} 
            className="text-6xl md:text-7xl font-extrabold mb-8 text-white drop-shadow-2xl"
          >
            Product Photography Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.9, delay: 0.2 }} 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-white/90 leading-relaxed"
          >
            Showcase your products with stunning, high-quality photography that drives sales and builds your brand.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-[#1A365D] font-bold rounded-full px-10 py-6 text-lg shadow-xl hover:bg-[#1A365D]/90 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <Link href="#contact">Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold mb-6 text-[#1A365D]">Why Professional Product Photography?</h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">High-quality product photos are essential for e-commerce, catalogs, and marketing. Our expert photographers ensure your products look their best, helping you stand out and increase conversions.</p>
            <ul className="space-y-4 text-gray-700">
              {[
                "Boosts sales and conversions",
                "Builds brand trust and credibility",
                "Perfect for online stores, catalogs, and ads",
                "Professional editing and retouching",
                "Fast turnaround and flexible packages"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-[#1A365D] text-xl">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-video rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/photography.jpg" 
                alt="Product Photography" 
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-center mb-16 text-[#1A365D]"
          >
            Our Process
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Consultation", desc: "We discuss your goals and product requirements to plan the perfect shoot." },
              { title: "Shooting", desc: "Our team captures your products in the best light, using professional equipment." },
              { title: "Editing", desc: "We retouch and enhance every image for a flawless, market-ready look." },
              { title: "Delivery", desc: "Receive your high-res images, ready for web, print, and social media." }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center flex flex-col items-center transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-[#1A365D] rounded-full flex items-center justify-center mb-6">
                  {idx === 0 && (
                    // Lightbulb SVG for Consultation
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a7 7 0 0 0-4 12.9V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3.1A7 7 0 0 0 12 2zm0 0v2m0 16v2m-4-4h8"/></svg>
                  )}
                  {idx === 1 && (
                    // Camera SVG for Shooting
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="white"><rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="2"/><circle cx="12" cy="13.5" r="3.5" strokeWidth="2"/><path strokeWidth="2" d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                  )}
                  {idx === 2 && (
                    // Pencil/Edit SVG for Editing
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.862 3.487a2.06 2.06 0 0 1 2.916 2.915l-9.193 9.193a2 2 0 0 1-.707.464l-4.243 1.415 1.415-4.243a2 2 0 0 1 .464-.707l9.193-9.193z"/></svg>
                  )}
                  {idx === 3 && (
                    // Truck/Delivery SVG for Delivery
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="white"><rect x="1" y="7" width="15" height="13" rx="2" strokeWidth="2"/><path strokeWidth="2" d="M16 17h2a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-2"/><circle cx="5.5" cy="19.5" r="1.5" strokeWidth="2"/><circle cx="18.5" cy="19.5" r="1.5" strokeWidth="2"/></svg>
                  )}
                </div>
                <h3 className="font-bold text-xl mb-4 text-[#1A365D]">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-center mb-16 text-[#1A365D]"
          >
            Sample Gallery
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["/gallery.jpg", "/ecommerce.jpg", "/retail.jpg", "/photography.jpg", "/custom3.jpg", "/product1.jpg"].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Image src={img} alt="Product Sample" fill className="object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Statistics Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold mb-16 text-[#1A365D]"
          >
            The Power of Great Product Photography
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { number: "93%", text: "of consumers say images are essential in purchasing decisions." },
              { number: "2.5x", text: "Higher engagement for listings with professional photos." },
              { number: "+40%", text: "Average sales increase with upgraded product images." },
              { number: "100%", text: "Satisfaction guarantee on all our shoots!" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl font-bold text-[#1A365D] mb-4">{stat.number}</div>
                <div className="text-gray-600">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Product Photography */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-center mb-16 text-[#1A365D]"
          >
            Types of Product Photography
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '📦', title: 'E-commerce (White Background)', desc: 'Clean, crisp images perfect for online stores and catalogs.' },
              { icon: '🌿', title: 'Lifestyle', desc: 'Show your product in real-life settings to inspire customers.' },
              { icon: '🔄', title: '360° Spin', desc: 'Interactive, rotating views for a complete product experience.' },
              { icon: '🔬', title: 'Macro/Detail', desc: 'Highlight fine details and craftsmanship.' },
              { icon: '👗', title: 'Apparel & Fashion', desc: 'Professional model and flat-lay shots for clothing and accessories.' },
              { icon: '🍔', title: 'Food & Beverage', desc: 'Mouth-watering images for menus, ads, and delivery apps.' }
            ].map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <span className="text-6xl mb-6">{type.icon}</span>
                <div className="font-bold text-xl mb-4 text-[#1A365D]">{type.title}</div>
                <div className="text-gray-600">{type.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Use Cases */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-center mb-16 text-[#1A365D]"
          >
            Creative Ways to Use Product Photos
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Online Stores & Marketplaces', desc: 'Boost your e-commerce sales with professional, high-converting images.' },
              { title: 'Social Media & Ads', desc: 'Stand out on Instagram, Facebook, and Google with scroll-stopping visuals.' },
              { title: 'Print Catalogs & Brochures', desc: 'Make your print materials pop with sharp, vibrant product shots.' },
              { title: 'Billboards & Packaging', desc: 'Create a premium brand image for packaging, banners, and more.' }
            ].map((useCase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-semibold text-xl mb-4 text-[#1A365D]">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Photographers */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-center mb-16 text-[#1A365D]"
          >
            Meet Our Photographers
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Adeel Khan', role: 'Lead Photographer', image: '/client1.png' },
              { name: 'Sara Malik', role: 'Studio Specialist', image: '/client2.png' },
              { name: 'Bilal Hussain', role: 'Retouching Expert', image: '/client3.png' },
              { name: 'Fatima Noor', role: 'Creative Director', image: '/client4.png' }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-32 h-32 mb-6">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="rounded-full object-cover border-4 border-[#1A365D]"
                  />
                </div>
                <div className="font-bold text-xl text-[#1A365D] mb-2">{member.name}</div>
                <div className="text-gray-600">{member.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-center mb-16 text-[#1A365D]"
          >
            Client Testimonials
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Ali Raza", company: "Raza Electronics", text: "Our products never looked better! The photos helped us boost our online sales." },
              { name: "Sara Khan", company: "Khan Fashion", text: "Professional, creative, and fast. Highly recommended for any e-commerce business." },
              { name: "Bilal Ahmed", company: "Ahmed Home Decor", text: "The team captured our products perfectly. The images are now the highlight of our website." },
              { name: "Ayesha Siddiqui", company: "Siddiqui Interiors", text: "The product shots are stunning! Our catalog looks so much more premium now." },
              { name: "Nadia Khan", company: "Khan Boutique", text: "We saw a clear increase in online inquiries after adding the new photos. Thank you for the great work!" },
              { name: "Imran Qureshi", company: "Qureshi Law Associates", text: "Excellent service and beautiful images. The product photography is a real asset for our business." }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 flex flex-col items-center text-center border-t-4 border-[#1A365D] shadow-md hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-8 h-8 text-[#1A365D] mb-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m2 0a2 2 0 01-2 2v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2a2 2 0 012-2h6zm-6-6h.01M15 7h.01" />
                </svg>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-[#1A365D]">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.company}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Blog Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-center mb-16 text-[#1A365D]"
          >
            Resources & Insights
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "How to Prepare Your Products for a Photoshoot", desc: "Tips to get the best results from your session.", link: "#" },
              { title: "The ROI of Professional Product Photography", desc: "Why investing in great images pays off.", link: "#" },
              { title: "Lighting Techniques for E-commerce", desc: "Behind the scenes of our studio process.", link: "#" }
            ].map((res, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 flex flex-col justify-between h-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div>
                  <h3 className="font-bold text-xl text-[#1A365D] mb-4">{res.title}</h3>
                  <p className="text-gray-600 mb-6">{res.desc}</p>
                </div>
                <Link 
                  href={res.link} 
                  className="text-[#1A365D] font-semibold hover:text-blue-700 transition-colors duration-300"
                >
                  Read More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-center mb-16 text-[#1A365D]"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-8">
            {[
              { question: "How long does a typical product shoot take?", answer: "Most shoots are completed in 1-3 days, depending on the number of products and complexity." },
              { question: "Can you shoot at our location?", answer: "Yes! We offer both in-studio and on-location product photography for your convenience." },
              { question: "Do you provide image editing and retouching?", answer: "Absolutely. All images are professionally edited and retouched for the best results." },
              { question: "What formats will I receive?", answer: "You'll receive high-res images optimized for web, print, and social media." }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="font-semibold text-xl text-[#1A365D] mb-4">{faq.question}</div>
                <div className="text-gray-600">{faq.answer}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="relative py-32 overflow-hidden bg-[#1A365D]">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-extrabold mb-6 text-white drop-shadow-2xl"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 text-xl text-white/90 max-w-2xl mx-auto"
          >
            Contact us today to discuss your product photography project and get a free quote.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-[#1A365D] font-bold rounded-full px-10 py-6 text-lg shadow-xl hover:bg-[#1A365D]/90 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}