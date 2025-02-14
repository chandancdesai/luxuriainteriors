'use client';

import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com', label: 'Youtube' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">luxuria Interiors</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Transform your space with our premium interior design and event management services.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">About Us</Link></li>
              <li><Link href="/services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Services</Link></li>
              <li><Link href="/portfolio" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Portfolio</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/interior-design" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Interior Design</Link></li>
              <li><Link href="/services/event-planning" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Event Planning</Link></li>
              <li><Link href="/services/consultation" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Consultation</Link></li>
              <li><Link href="/services/custom-furniture" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Custom Furniture</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 dark:text-gray-400">123 Design Street</li>
              <li className="text-sm text-gray-600 dark:text-gray-400">New York, NY 10001</li>
              <li className="text-sm text-gray-600 dark:text-gray-400">contact@luxuria.com</li>
              <li className="text-sm text-gray-600 dark:text-gray-400">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center flex-col sm:flex-row">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} luxuria Interiors. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}