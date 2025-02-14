import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: '10 Interior Design Trends for 2025',
      excerpt: 'Discover the latest trends that are shaping modern interior design...',
      date: 'March 15, 2025',
      author: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800',
      category: 'Interior Design',
    },
    {
      id: 2,
      title: 'How to Plan the Perfect Corporate Event',
      excerpt: 'Essential tips for organizing successful corporate events...',
      date: 'March 12, 2025',
      author: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800',
      category: 'Event Planning',
    },
    {
      id: 3,
      title: 'Sustainable Design: The Future of Interiors',
      excerpt: 'Exploring eco-friendly materials and sustainable design practices...',
      date: 'March 10, 2025',
      author: 'Emily Williams',
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800',
      category: 'Sustainability',
    },
    {
      id: 4,
      title: 'Color Psychology in Interior Design',
      excerpt: 'Understanding how colors affect mood and behavior in spaces...',
      date: 'March 8, 2025',
      author: 'David Thompson',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800',
      category: 'Design Tips',
    },
    {
      id: 5,
      title: 'Small Space Solutions: Maximizing Your Home',
      excerpt: 'Creative ideas for making the most of limited living spaces...',
      date: 'March 5, 2025',
      author: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1617104666298-550a8cdf9a39?q=80&w=800',
      category: 'Interior Design',
    },
    {
      id: 6,
      title: 'Wedding Trends: What&apos;s Hot in 2025',
      excerpt: 'The latest trends in wedding design and planning...',
      date: 'March 3, 2025',
      author: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800',
      category: 'Event Planning',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000"
          alt="Blog Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Insights, tips, and trends in interior design and event management
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-primary">{post.category}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">By {post.author}</span>
                    <Button variant="outline" asChild>
                      <Link href={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}