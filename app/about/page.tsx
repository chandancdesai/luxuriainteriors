import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
          alt="About Us Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About luxuria Interiors
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Creating exceptional spaces and memorable events since 2010
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Founded in 2010, luxuria Interiors has been at the forefront of innovative interior design and event management. Our journey began with a simple vision: to create spaces and experiences that inspire and delight.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Over the years, we&apos;ve grown into a full-service design firm, handling everything from residential and commercial interior design to comprehensive event planning and management.
              </p>
              <Button asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200"
                alt="Our Team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for excellence in every project, paying attention to the smallest details.',
              },
              {
                title: 'Innovation',
                description: 'We embrace new ideas and technologies to deliver cutting-edge design solutions.',
              },
              {
                title: 'Sustainability',
                description: 'We are committed to eco-friendly practices and sustainable design principles.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Principal Designer',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400',
              },
              {
                name: 'Michael Chen',
                role: 'Event Director',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
              },
              {
                name: 'Emily Williams',
                role: 'Interior Architect',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400',
              },
              {
                name: 'David Thompson',
                role: 'Project Manager',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400',
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}