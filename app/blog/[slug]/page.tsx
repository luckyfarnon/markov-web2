import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

type BlogParams = {
  slug: string;
};

// Generate metadata for the page
export async function generateMetadata({ 
  params 
}: { 
  params: BlogParams 
}): Promise<Metadata> {
  return {
    title: `Blog Post: ${params.slug}`,
    description: 'Blog post details'
  };
}

// This is a server component for handling dynamic routes in Next.js 15
export default async function BlogPostPage({
  params,
}: {
  params: BlogParams;
}) {
  // Await a resolved promise to ensure it's treated as an async component
  await Promise.resolve();

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-6">Blog Post: {params.slug}</h1>
      <p className="mb-8">This is the content for {params.slug}</p>
      <Button asChild>
        <Link href="/blog">Back to blog</Link>
      </Button>
    </div>
  );
} 