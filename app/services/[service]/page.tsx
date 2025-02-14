import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Define the services data
const servicesData = {
  'interior-design': {
    title: 'Interior Design',
    description: 'Transform your space with our premium interior design services. We create stunning, functional interiors that reflect your style and meet your needs.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200',
    features: [
      'Custom furniture selection and placement',
      'Color scheme and material consultation',
      'Space planning and optimization',
      '3D visualization and mockups',
      'Lighting design and implementation',
      'Project management and coordination',
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'We meet to discuss your vision, requirements, and budget.',
      },
      {
        title: 'Design Concept',
        description: 'We create detailed design concepts based on your preferences.',
      },
      {
        title: 'Implementation',
        description: 'We oversee the entire implementation process.',
      },
      {
        title: 'Final Reveal',
        description: 'We present your beautifully transformed space.',
      },
    ],
  },
  'event-planning': {
    title: 'Event Planning',
    description: 'Create unforgettable events with our expert planning and management services. From corporate gatherings to weddings, we handle every detail.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200',
    features: [
      'Comprehensive event strategy',
      'Venue selection and management',
      'Vendor coordination',
      'Budget management',
      'On-site coordination',
      'Post-event evaluation',
    ],
    process: [
      {
        title: 'Discovery Meeting',
        description: 'We learn about your event vision and requirements.',
      },
      {
        title: 'Planning Phase',
        description: 'We develop detailed plans and timelines.',
      },
      {
        title: 'Coordination',
        description: 'We manage all vendors and logistics.',
      },
      {
        title: 'Execution',
        description: 'We ensure flawless event delivery.',
      },
    ],
  },
  'consultation': {
    title: 'Design Consultation',
    description: 'Get expert advice and guidance for your interior design projects. Our consultation services help you make informed decisions about your space.',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200',
    features: [
      'Professional space assessment',
      'Style and design guidance',
      'Color and material recommendations',
      'Furniture and decor advice',
      'Layout optimization tips',
      'Budget planning assistance',
    ],
    process: [
      {
        title: 'Initial Assessment',
        description: 'We evaluate your current space and needs.',
      },
      {
        title: 'Recommendations',
        description: 'We provide detailed design recommendations.',
      },
      {
        title: 'Planning',
        description: 'We help you create an action plan.',
      },
      {
        title: 'Follow-up',
        description: 'We ensure you have everything needed to proceed.',
      },
    ],
  },
  'custom-furniture': {
    title: 'Custom Furniture',
    description: 'Create unique, bespoke furniture pieces tailored to your space and style. Our craftsmen bring your vision to life with exceptional quality.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200',
    features: [
      'Custom design development',
      'Material selection guidance',
      'Expert craftsmanship',
      'Quality control',
      'Professional installation',
      'Lifetime support',
    ],
    process: [
      {
        title: 'Design Consultation',
        description: 'We discuss your furniture needs and preferences.',
      },
      {
        title: 'Design Development',
        description: 'We create detailed designs and specifications.',
      },
      {
        title: 'Crafting',
        description: 'Our artisans craft your custom piece.',
      },
      {
        title: 'Installation',
        description: 'We deliver and install your furniture.',
      },
    ],
  },
};

export async function generateStaticParams() {
  // Replace this with your logic to fetch all possible service values.
  const services = ["service1", "service2", "service3"];
  
  return services.map((service) => ({
    service,
  }));
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = servicesData[params.service as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            {service.description}
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
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
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and see how we can help bring your vision to life.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}