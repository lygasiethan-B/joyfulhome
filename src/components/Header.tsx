'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import logoImg from '../../public/assets/JoyfulHome Logo Smile.png';
import { useScrollSpy } from '../hooks/useScrollSpy';

const SECTION_IDS = ['hero', 'about', 'services', 'testimonials', 'faq', 'contact'];

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ',          href: '#faq' },
  { label: 'Contact',      href: '#contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);
  const router = useRouter();

  /** Smooth-scroll to a section ID, accounting for the sticky header height */
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // If we are on a different page (e.g. privacy policy), navigate back to the home page
      router.push(`/preview${href}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#E7ECE9]/90 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-[1240px] mx-auto px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Logo — scroll back to top */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="shrink-0"
        >
          <Image
            src={logoImg}
            alt="JoyfulHome"
            width={172}
            height={80}
            className="h-[56px] md:h-[80px] w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 flex-wrap justify-end">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeId === id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative font-sans font-semibold text-[15px] px-3.5 py-2 rounded-full transition-colors duration-200
                  ${isActive
                    ? 'text-secondary bg-primary/5'
                    : 'text-primary hover:text-secondary hover:bg-primary/5'
                  }`}
              >
                {link.label}
                {/* Active underline dot */}
                <span
                  className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-[3px] w-[3px] rounded-full bg-secondary transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </a>
            );
          })}
          <a
            href="https://wa.me/256700143143"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 bg-secondary text-white font-sans font-bold text-sm px-4.5 py-2.5 rounded-full hover:bg-[#128f84] transition-colors whitespace-nowrap"
          >
            WhatsApp Us
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg hover:bg-primary/5 transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`block w-6 h-[2px] bg-primary transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-primary transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-6 h-[2px] bg-primary transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#E7ECE9] border-b border-primary/10 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100 shadow-lg' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-4 gap-2">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeId === id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-sans font-semibold text-[16px] px-4 py-3 rounded-xl transition-colors block ${
                  isActive
                    ? 'text-secondary bg-primary/5'
                    : 'text-primary hover:text-secondary hover:bg-primary/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
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
