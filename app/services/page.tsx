import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 'interior-design',
      title: 'Interior Design',
      description: 'Transform your space with our premium interior design services.',
      features: [
        'Custom furniture selection',
        'Color consultation',
        'Space planning',
        '3D visualization',
      ],
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200',
    },
    {
      id: 'event-planning',
      title: 'Event Planning',
      description: 'Create unforgettable events with our expert planning services.',
      features: [
        'Venue selection',
        'Vendor management',
        'Theme development',
        'On-site coordination',
      ],
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200',
    },
    {
      id: 'consultation',
      title: 'Design Consultation',
      description: 'Get expert advice for your interior design projects.',
      features: [
        'Professional assessment',
        'Style guidance',
        'Budget planning',
        'Material selection',
      ],
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200',
    },
    {
      id: 'custom-furniture',
      title: 'Custom Furniture',
      description: 'Create unique pieces tailored to your space and style.',
      features: [
        'Custom design',
        'Material selection',
        'Professional craftsmanship',
        'Installation service',
      ],
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
          alt="Services Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Comprehensive design and event management solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="relative h-[400px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link href="/contact">Book a Consultation</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}