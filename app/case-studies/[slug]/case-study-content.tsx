'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Building, Tag, User, Clock, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// This is a client component that can use client-side features like framer-motion
export default function CaseStudyContent({ caseStudy }: { caseStudy: any }) {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center mb-6 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all case studies
          </Link>
          <h1 className="text-4xl font-bold mb-3">{caseStudy.title}</h1>
          <p className="text-lg text-gray-300">{caseStudy.client}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center text-gray-300">
              <Building className="w-4 h-4 mr-2" />
              <span>{caseStudy.industry}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Tag className="w-4 h-4 mr-2" />
              <span>{caseStudy.category}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{caseStudy.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-10 rounded-xl overflow-hidden">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  width={800}
                  height={450}
                  className="w-full h-auto"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>Project Overview</h2>
                <p>{caseStudy.overview}</p>

                <h2>Challenge</h2>
                <p>{caseStudy.challenge}</p>

                <h2>Solution</h2>
                <p>{caseStudy.solution}</p>

                <h2>Results</h2>
                <ul>
                  {caseStudy.results.map((result: string, index: number) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>

                {caseStudy.testimonial && (
                  <div className="bg-gray-50 border-l-4 border-teal-500 p-6 my-8 rounded-r-md">
                    <p className="italic text-gray-700 mb-4">"{caseStudy.testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                        {caseStudy.testimonial.image && (
                          <Image
                            src={caseStudy.testimonial.image}
                            alt={caseStudy.testimonial.name}
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold">{caseStudy.testimonial.name}</p>
                        <p className="text-sm text-gray-500">{caseStudy.testimonial.position}, {caseStudy.testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-gray-50 p-6 rounded-xl sticky top-24">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Client</p>
                    <p className="font-semibold">{caseStudy.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Industry</p>
                    <p className="font-semibold">{caseStudy.industry}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Services Provided</p>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.services.map((service: string, index: number) => (
                        <span 
                          key={index}
                          className="inline-block px-3 py-1 text-xs bg-teal-100 text-teal-800 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Project Duration</p>
                    <p className="font-semibold">{caseStudy.duration}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold mb-4">Interested in similar results?</h4>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    Request a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Related Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudy.relatedCaseStudies.map((study: any, index: number) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/case-studies/${study.slug}`}>
                  <div className="relative h-48">
                    <Image 
                      src={study.image} 
                      alt={study.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 hover:text-teal-600 transition-colors">{study.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{study.summary}</p>
                    <div className="flex items-center text-teal-600 font-medium hover:text-teal-700">
                      View Case Study <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-900 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white border-none">
                Get Started
              </Button>
              <Button className="border-white text-white hover:bg-white/10 border">
                View More Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 