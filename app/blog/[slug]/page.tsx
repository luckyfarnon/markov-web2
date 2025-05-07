import React from 'react';
import { Metadata } from 'next';
import BlogPostContent from './blog-post-content';

// Define proper types according to Next.js 15 requirements
interface PageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for the page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Blog Post: ${params.slug}`,
    description: 'Blog post details'
  };
}

// Make the page component async to match Next.js 15 API expectations
export default async function BlogPostPage({ params }: PageProps) {
  // If we needed to fetch data, we could do it here
  // const data = await fetchData(params.slug);
  
  return <BlogPostContent slug={params.slug} />;
} 