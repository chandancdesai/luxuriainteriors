import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: 'Modern Lounge Chair',
      price: 599,
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=400',
      category: 'Furniture',
    },
    {
      id: 2,
      name: 'Minimalist Table Lamp',
      price: 129,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=400',
      category: 'Lighting',
    },
    {
      id: 3,
      name: 'Decorative Vase Set',
      price: 89,
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=400',
      category: 'Decor',
    },
    {
      id: 4,
      name: 'Artisan Wall Mirror',
      price: 299,
      image: 'https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=400',
      category: 'Mirrors',
    },
    {
      id: 5,
      name: 'Velvet Throw Pillows',
      price: 79,
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?q=80&w=400',
      category: 'Textiles',
    },
    {
      id: 6,
      name: 'Ceramic Plant Pot',
      price: 49,
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=400',
      category: 'Planters',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000"
          alt="Shop Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Shop Our Collection
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Curated furniture and decor pieces for your perfect space
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold mb-4">${product.price}</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}