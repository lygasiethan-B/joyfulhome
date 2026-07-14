import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#E7ECE9]/90 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-[1240px] mx-auto px-6 py-3.5 flex items-center justify-between gap-4 flex-wrap">
        <Link href="#">
          <Image 
            src="/assets/JoyfulHome Logo Smile.png" 
            alt="JoyfulHome" 
            width={140} 
            height={52} 
            className="h-[52px] w-auto object-contain"
          />
        </Link>
        <nav className="flex items-center gap-1.5 flex-wrap justify-end">
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
      </div>
    </header>
  );
}
