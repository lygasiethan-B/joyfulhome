import os

os.makedirs('src/components', exist_ok=True)

header = """import Image from 'next/image';
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
"""

hero = """import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-[72px] px-6 pb-[96px] overflow-hidden">
      <div className="absolute -top-[60px] -left-[80px] w-[340px] h-[340px] bg-accent-warm opacity-35 rounded-[62%_38%_55%_45%/45%_55%_45%_55%] animate-jhFloat z-0"></div>
      <div className="absolute top-[120px] -right-[100px] w-[400px] h-[400px] bg-secondary opacity-15 rounded-[40%_60%_65%_35%/55%_45%_55%_45%] animate-jhFloatSlow z-0"></div>
      <div className="absolute -bottom-[120px] left-[30%] w-[280px] h-[280px] bg-accent-soft opacity-50 rounded-[50%_50%_35%_65%/55%_45%_60%_40%] animate-jhFloat z-0"></div>

      <div className="relative z-10 max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-[minmax(280px,1.1fr)_minmax(260px,0.9fr)] gap-12 items-center">
        <div className="animate-fadeUp">
          <div className="font-brittany text-[32px] text-secondary mb-1.5">Your trusted premium care partner</div>
          <h1 className="font-mali font-bold text-[clamp(34px,5vw,58px)] leading-[1.08] text-primary mb-5">
            Helping Families Begin with Confidence
          </h1>
          <p className="text-[clamp(16px,1.6vw,19px)] leading-[1.6] text-text-dark max-w-[52ch] mb-8">
            Professional in-home nursing and newborn care that supports mothers, babies and families through pregnancy, postpartum recovery and early parenthood, because every family deserves a healthy, confident and joyful beginning.
          </p>
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
            src="/assets/image_1.png" 
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
"""

about = """export default function About() {
  const values = [
    { initial: 'T', title: 'Truth', desc: 'We act with honesty, integrity and transparency in every interaction.' },
    { initial: 'T', title: 'Timeliness', desc: 'We respect every family’s time by being punctual, responsive and dependable.' },
    { initial: 'T', title: 'Thoughtfulness', desc: 'We anticipate needs before they are expressed, with empathy and attention to detail.' },
    { initial: 'T', title: 'Trust', desc: 'We build confidence through reliability, professionalism and confidentiality.' },
    { initial: 'T', title: 'Transformational', desc: 'We pursue excellence that creates a positive and lasting impact for every family.' }
  ];

  return (
    <section id="about" className="py-[96px] px-6 bg-white">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center mb-14">
          <div className="font-brittany text-[30px] text-secondary mb-1">About JoyfulHome</div>
          <h2 className="font-mali font-bold text-[clamp(28px,4vw,42px)] text-primary">Where professional excellence meets compassionate care</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-[72px]">
          <div>
            <h3 className="font-mali font-bold text-2xl text-primary mb-3.5">Who We Are</h3>
            <p className="text-base leading-[1.7] text-text-dark">
              HomeCare by JoyfulHome is dedicated to providing premium in-home nursing and newborn care services that help mothers, babies, and families thrive during pregnancy, after childbirth, and throughout the early months of parenthood. Our caregivers are English-speaking, registered and licensed professionals with qualifications in nursing, midwifery and paediatric care.
            </p>
          </div>
          <div>
            <h3 className="font-mali font-bold text-2xl text-primary mb-3.5">Our Why</h3>
            <p className="text-base leading-[1.7] text-text-dark">
              We believe every family deserves a healthy, confident and joyful beginning. Beyond meeting the physical needs of mothers and babies, we intentionally nurture emotional wellbeing and, where welcomed by the family, offer faith-informed encouragement. We don't simply care for mothers and babies; we strengthen families, one home at a time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {values.map(val => (
            <div key={val.title} className="bg-neutral rounded-[20px] p-6 text-center">
              <div className="w-[52px] h-[52px] mx-auto mb-3.5 rounded-full bg-primary text-white flex items-center justify-center font-mali font-bold text-xl">
                {val.initial}
              </div>
              <div className="font-mali font-bold text-lg text-primary mb-2">{val.title}</div>
              <div className="text-sm leading-[1.55] text-text-dark">{val.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"""

with open('src/components/Header.tsx', 'w') as f: f.write(header)
with open('src/components/Hero.tsx', 'w') as f: f.write(hero)
with open('src/components/About.tsx', 'w') as f: f.write(about)

print("Created components Part 1")
