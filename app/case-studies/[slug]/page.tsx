import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Building, Tag, User, Clock, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CaseStudyContent from './case-study-content'

// Server component with correct params typing for Next.js 15
export default async function CaseStudyPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  // Await the params to get the slug
  const { slug } = await params;

  // This would normally be fetched from an API or database
  // For now, we're using a simple object to simulate fetched data
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-6">Case Study Not Found</h1>
        <p className="mb-8">The case study you are looking for could not be found.</p>
        <Button>
          <Link href="/case-studies">Return to Case Studies</Link>
        </Button>
      </div>
    )
  }

  // Pass the data to a client component that can use framer-motion
  return <CaseStudyContent caseStudy={caseStudy} />
}

// Helper function to fetch case study data
function getCaseStudyBySlug(slug: string) {
  // Mock data - in a real app, this would come from an API or database
  const caseStudies = {
    'bpo-healthcare-provider': {
      title: 'BPO Solutions for Global Healthcare Provider',
      client: 'HealthCare International',
      summary: 'We implemented a comprehensive BPO solution for a leading healthcare provider, resulting in 40% cost reduction and improved customer satisfaction.',
      overview: 'HealthCare International, a leading global healthcare provider, was struggling with inefficient back-office operations and high customer service costs. They approached Markov International to streamline their operations and reduce costs while maintaining high quality standards.',
      challenge: 'The client faced multiple challenges including high operational costs, inconsistent customer service quality, inefficient data management, and difficulty scaling operations during peak times. They needed a solution that could address all these issues while ensuring compliance with healthcare regulations.',
      solution: 'We implemented a comprehensive BPO solution that included dedicated customer support teams, medical billing services, claims processing, and data management. Our solution involved setting up a specialized healthcare team, implementing advanced CRM systems, establishing clear quality metrics, and developing custom workflows.',
      results: [
        '40% reduction in operational costs within first 12 months',
        'Customer satisfaction score improved from 72% to 91%',
        'Average call handling time reduced by 35%',
        'Claims processing time reduced by 50%',
        'Successful scaling during seasonal peaks without quality degradation'
      ],
      image: '/BPO_healthcare.png',
      category: 'BPO',
      industry: 'Healthcare',
      date: 'January 2023',
      duration: '8 months',
      services: ['Customer Support', 'Medical Billing', 'Claims Processing', 'Data Management'],
      testimonial: {
        quote: 'The Markov team delivered exceptional results that exceeded our expectations. Their healthcare expertise and process efficiency improvements have transformed our operations.',
        name: 'Dr. Sarah Johnson',
        position: 'Chief Operations Officer',
        company: 'HealthCare International',
        image: '/BPO_healthcare.png'
      },
      relatedCaseStudies: [
        {
          title: 'Call Center Implementation for Educational Institute',
          summary: 'We established a multi-channel call center solution that enhanced student support services and increased response rates by 60%.',
          image: '/placeholder.svg?height=200&width=300&text=Education+Call+Center',
          slug: 'call-center-education'
        },
        {
          title: 'BPO Services for Financial Institution',
          summary: 'Our BPO services streamlined back-office operations, resulting in 35% cost savings and improved processing times for a leading financial institution.',
          image: '/placeholder.svg?height=200&width=300&text=BPO+Finance',
          slug: 'bpo-financial-institution'
        },
        {
          title: 'Telecommunication Network for Healthcare System',
          summary: 'Our team designed and deployed a reliable telecommunication network that connected multiple healthcare facilities and improved patient care coordination.',
          image: '/placeholder.svg?height=200&width=300&text=Healthcare+Telecom',
          slug: 'telecommunication-healthcare'
        }
      ]
    },
    'ecommerce-retail-giant': {
      title: 'E-Commerce Management for Retail Giant',
      client: 'Global Retail Co.',
      summary: 'Our e-commerce management services helped a retail company increase online sales by 75% and streamline their order processing system.',
      overview: 'Global Retail Co., a major retail chain with over 200 physical stores, wanted to expand their online presence and improve their e-commerce operations to meet growing customer demand for online shopping.',
      challenge: 'The client had an outdated e-commerce platform with poor user experience, inefficient inventory management, slow order processing, and limited integration with their physical stores. They needed a comprehensive solution to revamp their entire online retail operation.',
      solution: 'We implemented a complete e-commerce management solution including platform migration to a modern architecture, inventory synchronization across channels, streamlined order fulfillment processes, and an integrated omnichannel approach connecting online and offline experiences.',
      results: [
        '75% increase in online sales within 6 months',
        'Order processing time reduced from 48 hours to 4 hours',
        'Cart abandonment rate decreased by 45%',
        'Mobile conversions increased by 120%',
        'Successful implementation of click-and-collect service across all store locations'
      ],
      image: '/placeholder.svg?height=450&width=800&text=E-commerce+Retail+Case+Study',
      category: 'E-commerce',
      industry: 'Retail',
      date: 'March 2023',
      duration: '12 months',
      services: ['Platform Migration', 'Inventory Management', 'Order Processing', 'Omnichannel Integration'],
      testimonial: {
        quote: 'Markov International transformed our digital retail experience. Their expertise in e-commerce and innovative approach has been instrumental in our online growth.',
        name: 'Michael Chen',
        position: 'VP of Digital Commerce',
        company: 'Global Retail Co.',
        image: '/placeholder.svg?height=48&width=48&text=MC'
      },
      relatedCaseStudies: [
        {
          title: 'Digital Marketing Campaign for Entertainment Brand',
          summary: 'We developed and executed a digital marketing strategy that increased brand engagement by 120% and drove a 45% increase in conversions.',
          image: '/placeholder.svg?height=200&width=300&text=Digital+Marketing',
          slug: 'digital-marketing-entertainment'
        },
        {
          title: 'E-Commerce Platform for Fashion Retailer',
          summary: 'We developed a customized e-commerce platform that increased mobile conversions by 85% and enhanced the overall shopping experience.',
          image: '/placeholder.svg?height=200&width=300&text=Fashion+E-commerce',
          slug: 'ecommerce-fashion-retailer'
        },
        {
          title: 'IT Infrastructure Upgrade for Finance Institution',
          summary: 'Our team implemented a secure and scalable IT infrastructure solution that improved system reliability and reduced downtime by 95%.',
          image: '/placeholder.svg?height=200&width=300&text=Finance+IT',
          slug: 'it-solutions-finance'
        }
      ]
    },
    // Add more case studies as needed
  }

  return caseStudies[slug as keyof typeof caseStudies]
} 