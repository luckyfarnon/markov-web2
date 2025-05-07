import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

// Define proper types for Next.js 15 dynamic routes
type BlogPostPageProps = {
  params: {
    slug: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
};

// Generate metadata for the page
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  return {
    title: `Blog Post: ${params.slug}`,
    description: 'Blog post details'
  };
}

// Server component without "use client" directive
export default function BlogPostPage({ params }: BlogPostPageProps) {
  // This would be replaced with actual data fetching in a real app
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
        <p className="mb-8">The blog post you are looking for could not be found.</p>
        <Button>
          <Link href="/blog">Return to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <Link 
          href="/blog" 
          className="inline-flex items-center mb-6 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all posts
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-600 mb-8">
          <span>{post.date} • {post.readTime}</span>
        </div>

        <div className="prose prose-lg max-w-none">
          {post.content}
        </div>
      </div>
    </div>
  );
}

// Mock function to get blog post by slug
function getBlogPostBySlug(slug: string) {
  // In a real app, this would fetch from an API or database
  const posts = {
    'future-of-bpo-2024': {
      title: 'The Future of Business Process Outsourcing in 2024',
      date: 'May 12, 2024',
      readTime: '8 min read',
      content: (
        <>
          <p>Discover how AI, automation, and hybrid work models are transforming BPO services and creating new opportunities for businesses worldwide.</p>
          <p>This is a placeholder for the full blog post content.</p>
        </>
      )
    },
    'cloud-migration-benefits': {
      title: '5 Ways Cloud Migration Enhances IT Infrastructure Resilience',
      date: 'May 5, 2024',
      readTime: '6 min read',
      content: (
        <>
          <p>Learn how migrating to cloud infrastructure can improve security, scalability, and disaster recovery capabilities for modern enterprises.</p>
          <p>This is a placeholder for the full blog post content.</p>
        </>
      )
    }
  };

  return posts[slug as keyof typeof posts];
} 