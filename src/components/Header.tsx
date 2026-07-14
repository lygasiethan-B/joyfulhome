'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logoImg from '../../public/assets/JoyfulHome Logo Smile.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#E7ECE9]/90 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-[1240px] mx-auto px-6 py-3.5 flex items-center justify-between gap-4">
        <Link href="#">
          <Image 
            src={logoImg} 
            alt="JoyfulHome" 
            width={140} 
            height={52} 
            className="h-[52px] w-auto object-contain"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 flex-wrap justify-end">
          {navLinks.map((link) => (
            <Link 
              key={link.label}
              href={link.href} 
              className="font-sans font-semibold text-[15px] text-primary hover:text-secondary hover:bg-primary/5 px-3.5 py-2 rounded-full transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a 
            href="https://wa.me/256700143143" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-2 inline-flex items-center gap-2 bg-secondary text-white font-sans font-bold text-sm px-4.5 py-2.5 rounded-full hover:bg-[#128f84] transition-colors whitespace-nowrap"
          >
            WhatsApp Us
          </a>
        </nav>

        {/* Mobile Hamburger Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg hover:bg-primary/5 transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-[2px] bg-primary transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-primary transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-[2px] bg-primary transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-[#E7ECE9] border-b border-primary/10 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100 shadow-lg' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-4 gap-2">
          {navLinks.map((link) => (
            <Link 
              key={link.label}
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-sans font-semibold text-[16px] text-primary hover:text-secondary hover:bg-primary/5 px-4 py-3 rounded-xl transition-colors block"
            >
              {link.label}
            </Link>
          ))}
          <a 
            href="https://wa.me/256700143143" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 text-center inline-flex justify-center items-center gap-2 bg-secondary text-white font-sans font-bold text-[16px] px-6 py-3.5 rounded-xl hover:bg-[#128f84] transition-colors"
          >
            WhatsApp Us
          </a>
        </nav>
      </div>
    </header>
  );
}
