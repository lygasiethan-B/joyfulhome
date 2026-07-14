import Image from 'next/image';
import Link from 'next/link';
import heroImg from '../../public/assets/hero_image.png';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={heroImg} 
          alt="Mother cradling her newborn at home" 
          fill
          className="object-cover object-center opacity-80"
          priority
        />
      </div>

      {/* Dark gradient overlay for text readability, mimicking the reference */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/80 via-black/50 to-transparent"
      ></div>

      <div className="relative z-20 max-w-[1240px] mx-auto w-full px-6 pt-[120px] pb-[80px] md:pt-[72px] md:pb-[96px] flex">
        {/* Content Container */}
        <div className="w-full md:w-1/2 md:pr-12 animate-fadeUp">
          <div className="font-passionate text-[32px] text-white/90 mb-3">Your trusted premium care partner</div>
          <h1 className="font-mali font-bold text-[clamp(28px,3.8vw,46px)] leading-[1.25] text-white mb-9 max-w-[24ch]">
            At JoyfulHome, we care for every family with professional excellence, compassionate hearts, and a commitment to nurturing the whole person.
          </h1>
          <div className="flex gap-3.5 flex-wrap mb-9">
            <Link 
              href="#contact" 
              className="bg-[#00D084] text-white font-sans font-bold text-base px-7.5 py-3.5 rounded-full hover:bg-[#00b371] transition-colors shadow-lg"
            >
              Get in Touch
            </Link>
            <a 
              href="https://wa.me/256700143143" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary text-white font-sans font-bold text-base px-7 py-3 rounded-full hover:bg-[#0f545e] transition-colors shadow-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="flex gap-2.5 flex-wrap">
            {['About', 'Services', 'Testimonials', 'FAQ', 'Contact'].map(label => (
              <Link 
                key={label}
                href={`#${label.toLowerCase()}`}
                className="font-sans font-semibold text-[13px] text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              >
                → {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
