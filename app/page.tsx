import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
          alt="luxuria Interior"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Space <br />
            Into Something Extraordinary
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Premium interior design and event management services tailored to your unique style and needs.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link href="/services">Our Services</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Interior Design',
                description: 'Create stunning spaces that reflect your personality and lifestyle.',
                image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400',
              },
              {
                title: 'Event Planning',
                description: 'Seamless event management for memorable occasions.',
                image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=400',
              },
              {
                title: 'Custom Furniture',
                description: 'Bespoke furniture pieces designed for your space.',
                image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=400',
              },
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                  <Button variant="outline" asChild>
                    <Link href={`/services#${service.title.toLowerCase().replace(' ', '-')}`}>
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Modern Minimalist Home',
                location: 'New York City',
                image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800',
              },
              {
                title: 'luxuria Venue',
                location: 'The Hampton',
                image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800',
              },
            ].map((project, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <div className="relative h-[400px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-70" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-white/90">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to create something extraordinary. Contact us today for a consultation.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}