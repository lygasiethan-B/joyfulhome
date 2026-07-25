'use client';

import { useSectionAnimate } from '../hooks/useSectionAnimate';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Journey from '../components/Journey';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  // Activates scroll-driven fade-slide-up entrance on all .section-animate elements
  useSectionAnimate();

  return (
    <div className="min-h-screen relative bg-neutral">
      <Header />
      {/* Hero is always visible — no entrance animation needed */}
      <Hero />
      <div className="section-animate"><About /></div>
      <div className="section-animate"><Services /></div>
      <div className="section-animate"><Journey /></div>
      <div className="section-animate"><Testimonials /></div>
      <div className="section-animate"><FAQ /></div>
      <div className="section-animate"><Contact /></div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
