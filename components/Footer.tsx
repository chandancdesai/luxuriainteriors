'use client';

import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com', label: 'Youtube' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 border-t"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">luxuria Interiors</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Transform your space with our premium interior design and event management services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Portfolio', 'Contact'].map((label, index) => (
                <motion.li
                  key={label}
                  whileHover={{ scale: 1.05, color: '#6366f1' }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={`/${label.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Interior Design', 'Event Planning', 'Consultation', 'Custom Furniture'].map((service, index) => (
                <motion.li
                  key={service}
                  whileHover={{ scale: 1.05, color: '#6366f1' }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={`/services/${service.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 dark:text-gray-400">123 Design Street</li>
              <li className="text-sm text-gray-600 dark:text-gray-400">New York, NY 10001</li>
              <li className="text-sm text-gray-600 dark:text-gray-400">contact@luxuria.com</li>
              <li className="text-sm text-gray-600 dark:text-gray-400">+1 (555) 123-4567</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex justify-between items-center flex-col sm:flex-row">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} luxuria Interiors. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10, color: '#6366f1' }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
