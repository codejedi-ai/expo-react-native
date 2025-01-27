'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gradient">
              STELLAR STUDIOS
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2">
                About
              </Link>
              <Link href="/films" className="text-gray-300 hover:text-white px-3 py-2">
                Films
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
