import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Post',
  description: 'Blog post details'
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white min-h-screen">
      {children}
    </div>
  );
} 