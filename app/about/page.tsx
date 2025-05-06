"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Users, Trophy, Target, Clock, Calendar, Building, Award, Shield, ArrowRight, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About Markov International</h1>
                <p className="text-lg text-teal-100 mb-6 max-w-3xl">
                  We are a global leader in Business Process Outsourcing and technology solutions, dedicated to helping businesses transform, scale, and succeed in the digital age.
                </p>
                <Building className="w-12 h-12 text-teal-300 mb-6" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">Our Company</span>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Transforming Businesses Since 2010</h2>
                <p className="text-gray-600 mb-6">
                  Markov International was founded with a vision to help businesses leverage technology and outsourcing to achieve operational excellence. Over the years, we've grown from a small team of passionate professionals to a global organization serving clients across industries.
                </p>
                <p className="text-gray-600 mb-6">
                  Today, we operate in multiple countries with a diverse team of over 500 professionals dedicated to delivering exceptional service and innovative solutions. Our comprehensive suite of services includes BPO, IT solutions, telecommunication, digital marketing, e-commerce management, and call center solutions.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                      <Users className="w-6 h-6 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">500+</h3>
                      <p className="text-sm text-gray-600">Team Members</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                      <Building className="w-6 h-6 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">6</h3>
                      <p className="text-sm text-gray-600">Global Offices</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">20+</h3>
                      <p className="text-sm text-gray-600">Industry Awards</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">13+</h3>
                      <p className="text-sm text-gray-600">Years of Excellence</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/office1.png"
                    alt="Markov Office"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl"
                  />
                  <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-2xl -z-10"></div>
                </div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/markov.png"
                    alt="Team Working Together"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">Our Foundation</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What Drives Us Forward</h2>
              <p className="text-gray-600">
                Our mission, vision, and core values form the foundation of everything we do at Markov International.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses through innovative technology solutions and exceptional services that drive efficiency, growth, and competitive advantage.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted global partner for digital transformation, setting new standards of excellence in business process outsourcing and technology services.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Our Values</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Excellence in everything we do</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Integrity and transparency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Innovation and continuous improvement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Client-centric approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Teamwork and collaboration</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">Our Leadership</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">The Team Behind Our Success</h2>
              <p className="text-gray-600">
                Meet our experienced leadership team driving innovation and excellence at Markov International.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ml-80">
  {[
    {
      name: "Imran Ali Chaudary ",
      position: "CEO",
      image: "/client1.webp",
      bio: "With over 20 years of industry experience, Alex leads our company vision and global strategy.",
    },
    {
      name: "Arshad Ali ",
      position: "Director Operation",
      image: "/client3.webp",
      bio: "Sarah drives technological innovation and oversees all technical aspects of our operations.",
    },
    {
      name: "Danish Awan",
      position: "Director Business Development",
      image: "/client2.webp",
      bio: "Michael ensures operational excellence and continuous improvement across all service lines.",
    },
  ].map((member, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="text-center"
    >
      <div className="relative w-64 h-64 mx-auto mb-6 rounded-xl overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl"
        />
      </div>
      <h3 className="text-xl font-bold mb-1 text-gray-800">{member.name}</h3>
      <p className="text-teal-600 font-medium mb-2">{member.position}</p>
      <p className="text-gray-600 max-w-xs mx-auto">{member.bio}</p>
    </motion.div>
  ))}
</div>

          </div>
        </section>

        {/* Company Timeline Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">Our Journey</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Milestones That Shaped Us</h2>
              <p className="text-gray-600">
                From our humble beginnings to becoming a global leader, here's the story of our growth and evolution.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {[
                {
                  year: "2010",
                  title: "Company Founded",
                  description: "Markov International was established with a small team of 10 professionals focused on BPO services.",
                },
                {
                  year: "2013",
                  title: "First International Office",
                  description: "Expanded operations by opening our first international office in Singapore, serving clients across Asia.",
                },
                {
                  year: "2015",
                  title: "Technology Division Launch",
                  description: "Launched our IT Solutions division to offer comprehensive technology services alongside BPO offerings.",
                },
                {
                  year: "2017",
                  title: "Digital Transformation",
                  description: "Integrated AI and machine learning capabilities into our service offerings, enhancing efficiency and accuracy.",
                },
                {
                  year: "2020",
                  title: "Global Expansion",
                  description: "Reached the milestone of 500 employees with offices in 6 countries serving clients globally.",
                },
                {
                  year: "2023",
                  title: "Innovation Center",
                  description: "Opened a state-of-the-art innovation center focused on developing cutting-edge solutions for our clients.",
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex mb-12 last:mb-0"
                >
                  <div className="flex-shrink-0 mr-8">
                    <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center">
                      <Calendar className="w-8 h-8" />
                    </div>
                    <div className="w-0.5 h-16 bg-teal-600 mx-auto mt-4 last:hidden"></div>
                  </div>
                  <div className="pt-3">
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold text-gray-800">{milestone.year}</h3>
                      <div className="w-8 h-0.5 bg-teal-600 mx-4"></div>
                      <h4 className="text-lg font-semibold text-teal-700">{milestone.title}</h4>
                    </div>
                    <p className="text-gray-600 mt-2">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner With Us?</h2>
              <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful businesses that have transformed their operations with Markov International. Let's discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-white hover:bg-gray-100 text-teal-800 border-none">
                  Contact Our Team
                </Button>
                <Button className="border-white text-white hover:bg-white/10 border">
                  Explore Our Services
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
} 