import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Define the portfolio data
const portfolioData = {
  'modern-living-room': {
    title: 'Modern Living Room',
    description: 'A sleek, modern living room designed with minimalist aesthetics and comfort in mind.',
    image: 'https://images.unsplash.com/photo-1595526114820-3a6a9c6189dc?q=80&w=1200',
    features: [
      'Open space concept',
      'Minimalist furniture',
      'Neutral color palette',
      'Large windows for natural light',
      'Contemporary artwork',
      'Custom lighting design',
    ],
    process: [
      {
        title: 'Conceptualization',
        description: 'We developed a modern design concept tailored to the client\'s lifestyle.',
      },
      {
        title: 'Design & Planning',
        description: 'Detailed floor plans and 3D renderings were created for client approval.',
      },
      {
        title: 'Execution',
        description: 'Our team managed the entire execution process from start to finish.',
      },
      {
        title: 'Completion',
        description: 'The project was completed on time with exceptional attention to detail.',
      },
    ],
  },
  'elegant-wedding-event': {
    title: 'Elegant Wedding Event',
    description: 'An unforgettable wedding event with exquisite decor and seamless coordination.',
    image: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=1200',
    features: [
      'Beautiful venue setup',
      'Customized floral arrangements',
      'Premium catering services',
      'Live entertainment coordination',
      'Professional photography',
      'On-site event management',
    ],
    process: [
      {
        title: 'Planning & Coordination',
        description: 'We meticulously planned every detail for the perfect wedding.',
      },
      {
        title: 'Design & Decor',
        description: 'Custom decor was designed to match the couple\'s vision.',
      },
      {
        title: 'Event Execution',
        description: 'Our team coordinated all aspects of the event seamlessly.',
      },
      {
        title: 'Memorable Experience',
        description: 'Guests enjoyed an unforgettable and beautifully executed event.',
      },
    ],
  },
};

export async function generateStaticParams() {
  // Replace this with your logic to fetch all possible project values.
  const projects = ["modern-living-room", "elegant-wedding-event"];
  
  return projects.map((project) => ({
    project,
  }));
}

export default function PortfolioPage({ params }: { params: { project: string } }) {
  const project = portfolioData[params.project as keyof typeof portfolioData];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            {project.description}
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Inquire Now</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Project Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">{index + 1}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {project.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Inspired by Our Work?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and see how we can bring your vision to life.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">Back to Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
