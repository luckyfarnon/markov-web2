"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// This is a client component for dynamic routes in Next.js
export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
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