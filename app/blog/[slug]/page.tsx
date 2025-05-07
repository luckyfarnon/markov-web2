import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import BlogPostContent from './blog-post-content';

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
  return <BlogPostContent slug={params.slug} />;
} 