import Image from 'next/image';
import heroSmall from '../../public/assets/joyfulhome-hero-960.webp';
import heroMedium from '../../public/assets/joyfulhome-hero-1600.webp';
import heroLarge from '../../public/assets/joyfulhome-hero-3200.webp';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <picture className="absolute inset-0 block">
          <source
            type="image/webp"
            srcSet={`${heroSmall.src} 960w, ${heroMedium.src} 1600w, ${heroLarge.src} 3200w`}
            sizes="100vw"
          />
          <Image
            src={heroLarge}
            alt="Mother cradling her newborn at home"
            fill
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
            placeholder="blur"
            className="object-cover object-center opacity-80"
          />
        </picture>
      </div>

      {/* Dark gradient overlay for text readability, mimicking the reference */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/80 via-black/50 to-transparent"
      ></div>

      <div className="relative z-20 max-w-[1240px] mx-auto w-full px-6 pt-[120px] pb-[80px] md:pt-[72px] md:pb-[96px] flex">
        {/* Content Container */}
        <div className="w-full md:w-1/2 md:pr-12 animate-fadeUp">
          <div className="font-passionate text-[clamp(14px,1.6vw,22px)] text-white/90 mb-2">Your Trusted Premium Care Partner</div>
          <h1 className="font-mali font-medium text-[clamp(28px,3vw,42px)] leading-[1.25] text-white mb-9 max-w-[32ch]">
            We partner with families for confident, healthier beginnings through premium, personalised <span className="whitespace-nowrap">in-home nursing care</span> nurturing mothers and babies.
          </h1>
          <div className="flex gap-3.5 flex-wrap mb-9">
            <a 
              href="https://forms.gle/Qu3ajZfwPAPoJxCP8" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00D084] text-white font-sans font-bold text-base px-7.5 py-3.5 rounded-full hover:bg-[#00b371] transition-colors shadow-lg inline-block"
            >
              Get in Touch
            </a>
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
            {[
              { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Reviews', href: '#testimonials' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="font-sans font-semibold text-[13px] text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              >
                → {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
