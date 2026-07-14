import Image from 'next/image';
import Link from 'next/link';
import heroImg from '../../public/assets/image_1.jpg';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-[72px] px-6 pb-[96px] overflow-hidden">
      <div className="absolute -top-[60px] -left-[80px] w-[340px] h-[340px] bg-accent-warm opacity-35 rounded-[62%_38%_55%_45%/45%_55%_45%_55%] animate-jhFloat z-0"></div>
      <div className="absolute top-[120px] -right-[100px] w-[400px] h-[400px] bg-secondary opacity-15 rounded-[40%_60%_65%_35%/55%_45%_55%_45%] animate-jhFloatSlow z-0"></div>
      <div className="absolute -bottom-[120px] left-[30%] w-[280px] h-[280px] bg-accent-soft opacity-50 rounded-[50%_50%_35%_65%/55%_45%_60%_40%] animate-jhFloat z-0"></div>

      <div className="relative z-10 max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-[minmax(280px,1.1fr)_minmax(260px,0.9fr)] gap-12 items-center">
        <div className="animate-fadeUp">
          <div className="font-passionate text-[32px] text-secondary mb-3">Your trusted premium care partner</div>
          <h1 className="font-mali font-bold text-[clamp(28px,3.8vw,46px)] leading-[1.25] text-primary mb-9 max-w-[24ch]">
            At JoyfulHome, we care for every family with professional excellence, compassionate hearts, and a commitment to nurturing the whole person.
          </h1>
          <div className="flex gap-3.5 flex-wrap mb-9">
            <Link 
              href="#contact" 
              className="bg-primary text-white font-sans font-bold text-base px-7.5 py-3.5 rounded-full hover:bg-[#0f545e] transition-colors"
            >
              Get in Touch
            </Link>
            <a 
              href="https://wa.me/256700143143" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-secondary border-2 border-secondary font-sans font-bold text-base px-7 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="flex gap-2.5 flex-wrap">
            {['About', 'Services', 'Testimonials', 'FAQ', 'Contact'].map(label => (
              <Link 
                key={label}
                href={`#${label.toLowerCase()}`}
                className="font-sans font-semibold text-[13px] text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-colors"
              >
                → {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] shadow-[0_30px_60px_-20px_rgba(20,107,120,0.35)] animate-fadeUp [animation-delay:150ms]">
          <Image 
            src={heroImg} 
            alt="Mother cradling her newborn at home" 
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
