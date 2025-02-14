import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PortfolioPage() {
  const projects = [
    {
      id: 'modern-living-room',
      title: 'Modern Living Room',
      description: 'A sleek and modern living room design with minimalist aesthetics.',
      features: [
        'Open space layout',
        'Neutral color palette',
        'Contemporary furniture',
        'Ambient lighting design',
      ],
      image: 'https://tse4.mm.bing.net/th?id=OIP.UW7PnuxpSXJTBPKN0YpXxwHaE7',
    },
    {
      id: 'rustic-kitchen',
      title: 'Rustic Kitchen',
      description: 'A warm and inviting rustic kitchen with natural wood finishes.',
      features: [
        'Reclaimed wood cabinets',
        'Stone countertops',
        'Vintage lighting fixtures',
        'Open shelving concept',
      ],
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
    },
    {
      id: 'luxury-bedroom',
      title: 'Luxury Bedroom',
      description: 'An elegant bedroom with luxurious finishes and plush decor.',
      features: [
        'Velvet upholstered bed',
        'Soft, layered textiles',
        'Gold accent details',
        'Custom lighting design',
      ],
      image: 'https://tse3.mm.bing.net/th?id=OIP.n135Fzsj1-Z2_rj4mGJ3LAHaDt',
    },
    {
      id: 'outdoor-lounge',
      title: 'Outdoor Lounge',
      description: 'A cozy outdoor lounge area perfect for entertaining guests.',
      features: [
        'Weather-resistant furniture',
        'Fire pit centerpiece',
        'Ambient outdoor lighting',
        'Lush green landscaping',
      ],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Portfolio Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Discover our diverse range of completed projects showcasing creativity and style.
          </p>
        </div>
      </section>

      {/* Portfolio List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                id={project.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="relative h-[400px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link href="/contact">Get a Quote</Link>
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
