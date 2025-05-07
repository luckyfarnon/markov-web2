import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Explore our latest blog posts'
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gray-50 min-h-screen">
      {children}
    </div>
  )
} 