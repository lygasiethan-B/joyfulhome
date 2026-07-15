import os

services = """import Image from 'next/image';

export default function Services() {
  const services = [
    { title: 'HomeCare', photo: '/assets/image_2.png', photoLabel: 'Caregiver with mother and newborn at home', desc: 'Premium care provided in the comfort of the home for expectant mothers, new mothers, newborns and young families. We partner with families to develop bespoke care plans that prioritise comfort, safety and wellbeing.' },
    { title: 'Corporate Care', photo: '/assets/image_3.png', photoLabel: 'Caregivers minding a group of children at an event', desc: 'Premium care for settings with a number of newborns, infants and children, for families, companies or organisations: retreats, birthdays, seminars, workshops, conferences, prayer meetings, vacations and playdates.' }
  ];

  const rates = [
    { service: 'HomeCare', range: '50,000 – 500,000' },
    { service: 'Corporate Care', range: '200,000 – 5,000,000' }
  ];

  return (
    <section id="services" className="relative py-[96px] px-6 bg-neutral overflow-hidden">
      <div className="absolute -top-[40px] -right-[120px] w-[360px] h-[360px] bg-secondary opacity-15 rounded-[55%_45%_60%_40%/45%_55%_40%_60%] animate-jhFloatSlow z-0"></div>
      <div className="absolute -bottom-[100px] -left-[100px] w-[300px] h-[300px] bg-accent-warm opacity-30 rounded-[60%_40%_50%_50%/40%_60%_40%_60%] animate-jhFloat z-0"></div>

      <div className="relative z-10 max-w-[1120px] mx-auto">
        <div className="text-center mb-14">
          <div className="font-brittany text-[30px] text-secondary mb-1">What we offer</div>
          <h2 className="font-mali font-bold text-[clamp(28px,4vw,42px)] text-primary">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-14">
          {services.map(svc => (
            <div key={svc.title} className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_40px_-24px_rgba(20,107,120,0.25)]">
              <div className="aspect-video relative">
                <Image src={svc.photo} alt={svc.photoLabel} fill className="object-cover" />
              </div>
              <div className="p-7">
                <h3 className="font-mali font-bold text-[22px] text-primary mb-2.5">{svc.title}</h3>
                <p className="text-[15px] leading-[1.65] text-text-dark m-0">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 mb-14 overflow-x-auto">
          <h3 className="font-mali font-bold text-xl text-primary mb-4.5">Daily Rates (UGX)</h3>
          <table className="w-full border-collapse min-w-[420px]">
            <thead>
              <tr>
                <th className="text-left py-3 px-2.5 font-sans font-bold text-[13px] tracking-wider uppercase text-primary border-b-2 border-neutral">Service</th>
                <th className="text-right py-3 px-2.5 font-sans font-bold text-[13px] tracking-wider uppercase text-primary border-b-2 border-neutral">Price Range / Day</th>
              </tr>
            </thead>
            <tbody>
              {rates.map(rate => (
                <tr key={rate.service}>
                  <td className="py-4 px-2.5 text-base font-semibold text-text-dark border-b border-neutral">{rate.service}</td>
                  <td className="py-4 px-2.5 text-base text-text-dark border-b border-neutral text-right">{rate.range} UGX</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-xs text-primary mt-3.5 opacity-75">Terms &amp; Conditions Apply. Flexible daily, weekly and monthly packages available.</div>
        </div>
      </div>
    </section>
  );
}
"""

testimonials = """export default function Testimonials() {
  const testimonials = [
    { quote: 'Service is remarkable I wish I could do this even daily. We love our Caregiver, she is the perfect fit for our little girl.', author: 'New Mother, Kampala' },
    { quote: 'If you are pregnant please save for such services, it is a life saver!', author: 'Expectant Mother' },
    { quote: 'It was soo good... I was able to rest and have learnt so much from our Caregiver.', author: 'First-time Parent' },
    { quote: 'Caregiver is knowledgeable about my baby’s specific needs and provided personalised care.', author: 'Client Family' },
    { quote: 'I’m extremely satisfied with the safety and hygiene compliance demonstrated by the Caregiver.', author: 'New Mother' },
    { quote: 'Thank you for this tremendous experience... Every mother needs to know about JoyfulHome!', author: 'Client Family' },
    { quote: 'Your care made the journey smooth and we are really grateful for your services.', author: 'New Parent, Kampala' }
  ];

  return (
    <section id="testimonials" className="py-[96px] bg-white">
      <div className="max-w-[1120px] mx-auto px-6 mb-12 text-center">
        <div className="font-brittany text-[30px] text-secondary mb-1">Real families, real joy</div>
        <h2 className="font-mali font-bold text-[clamp(28px,4vw,42px)] text-primary">Testimonials</h2>
      </div>
      <div className="flex gap-5 overflow-x-auto px-6 pb-6 snap-x snap-mandatory">
        {testimonials.map((t, idx) => (
          <div key={idx} className="flex-none snap-start w-[min(340px,80vw)] bg-neutral rounded-[20px] p-6.5 flex flex-col gap-3.5">
            <div className="text-secondary text-lg tracking-widest">★★★★★</div>
            <p className="text-[15px] leading-[1.6] text-text-dark m-0 flex-1">“{t.quote}”</p>
            <div className="font-mali font-bold text-sm text-primary">{t.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
"""

faq = """'use client';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'What is the scope of your services?', a: 'Our HomeCare services include a variety of offerings such as feeding assistance, diaper changing, bathing, umbilical cord care, monitoring vital signs, and offering guidance on newborn developmental milestones. Our caregivers are trained to support both the physical and emotional needs of your baby.' },
    { q: 'How are caregivers selected?', a: 'All caregivers undergo a meticulous selection process that includes background checks, interviews, licence verification and reference checks. They are trained in newborn care best practices, including safe sleep techniques, infant CPR, and first aid.' },
    { q: 'Can I meet the caregiver before they start working with my family?', a: 'Yes, we encourage a pre-service meeting with the assigned caregiver to ensure compatibility and discuss your specific needs and expectations in your care plan.' },
    { q: 'How do you ensure the safety and security of my home and baby?', a: 'We are committed to maintaining the highest standards of safety and security. Our caregivers follow strict protocols, including frequent hand washing and sanitisation. We ensure confidentiality and respect for your home and family.' },
    { q: 'What are the qualifications of your caregivers?', a: 'Our caregivers are registered professionals with certifications in nursing and midwifery. Many have backgrounds in nursing or paediatric care and have completed specialised training in customer service.' },
    { q: 'What is the process for scheduling and canceling services?', a: 'You can schedule services by contacting our customer service team. We request at least 1 month’s notice for booking and 48–72 hours’ notice for cancellations to accommodate scheduling changes and ensure caregiver availability.' },
    { q: 'What are your rates and payment options?', a: 'Our rates depend on the level of care and hours of service required, with daily, weekly and monthly packages. We offer flexible payment options including flexipay, mobile money payments and direct bank transfers.' }
  ];

  return (
    <section id="faq" className="py-[96px] px-6 bg-neutral">
      <div className="max-w-[820px] mx-auto">
        <div className="text-center mb-12">
          <div className="font-brittany text-[30px] text-secondary mb-1">So, I was wondering...</div>
          <h2 className="font-mali font-bold text-[clamp(28px,4vw,42px)] text-primary">Frequently Asked Questions</h2>
        </div>
        <div className="flex flex-col gap-3.5">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 bg-transparent border-none cursor-pointer p-5 px-6 text-left font-mali font-semibold text-[17px] text-primary"
              >
                <span>{faq.q}</span>
                <span className={`flex-none text-[22px] text-secondary transition-transform duration-250 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5.5 text-[15px] leading-[1.65] text-text-dark">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"""

contact = """import Image from 'next/image';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-primary pt-[100px] px-6 pb-[72px] text-white overflow-hidden">
      <div className="absolute -top-[140px] -right-[160px] w-[420px] h-[420px] bg-secondary opacity-25 rounded-[55%_45%_60%_40%/45%_55%_40%_60%] animate-jhFloatSlow z-0"></div>

      <div className="relative z-10 max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div>
          <div className="font-brittany text-[34px] text-accent-soft mb-2">Get in Touch</div>
          <h2 className="font-mali font-bold text-[clamp(28px,4vw,44px)] mb-4.5 text-white">Let's start your care plan today.</h2>
          <p className="text-base leading-[1.7] text-accent-soft mb-8 max-w-[44ch]">
            Reach out on WhatsApp for the fastest response, or call and email us directly. We'll walk you through our Customer Needs Assessment and put together a care plan built around your family.
          </p>
          <a 
            href="https://wa.me/256700143143" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2.5 bg-secondary text-white font-sans font-bold text-base px-7.5 py-4 rounded-full hover:bg-[#0f9d90] transition-colors"
          >
            Message us on WhatsApp
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 flex flex-col gap-4.5">
          <a href="tel:+256700143143" className="flex items-center gap-4 text-white hover:opacity-85 transition-opacity">
            <span className="flex-none w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-xl">📞</span>
            <span className="font-mali font-bold text-lg">+256 700 143 143</span>
          </a>
          <a href="mailto:joyfulhome718@gmail.com" className="flex items-center gap-4 text-white hover:opacity-85 transition-opacity">
            <span className="flex-none w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-xl">✉️</span>
            <span className="font-mali font-bold text-lg">joyfulhome718@gmail.com</span>
          </a>
          <a href="https://wa.me/256700143143" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:opacity-85 transition-opacity">
            <span className="flex-none w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-xl">💬</span>
            <span className="font-mali font-bold text-lg">WhatsApp Business</span>
          </a>
          <div className="flex items-center gap-4 mt-1 pt-4.5 border-t border-white/20">
            <div className="relative w-[72px] h-[72px] rounded-xl flex-none bg-white p-1">
              <Image src="/assets/QR Code.png" alt="WhatsApp QR code" fill className="object-cover p-1" />
            </div>
            <span className="text-[13px] leading-[1.5] text-accent-soft">Or scan this code to open a WhatsApp chat with us directly.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
"""

footer = """export default function Footer() {
  return (
    <footer className="bg-[#0F4650] py-8 px-6 flex items-center justify-between gap-4 flex-wrap">
      <div className="font-mali font-bold text-xl text-white">JoyfulHome</div>
      <div className="text-sm text-accent-soft opacity-85 text-right">
        Professional Excellence. Compassionate Care. Confident Beginnings. © {new Date().getFullYear()} JoyfulHome
      </div>
    </footer>
  );
}
"""

floating = """export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/256700143143" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 z-[200] w-[60px] h-[60px] rounded-full bg-secondary flex items-center justify-center shadow-[0_12px_28px_-8px_rgba(20,107,120,0.55)] hover:bg-[#128f84] transition-colors"
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M17.6 6.32A8.86 8.86 0 0 0 12.05 4 8.94 8.94 0 0 0 3.11 15.9L2 20l4.2-1.1a8.9 8.9 0 0 0 4.27 1.09h.01a8.94 8.94 0 0 0 8.94-8.94c0-2.4-.94-4.65-2.62-6.32ZM12.05 18.4h-.01a7.4 7.4 0 0 1-3.77-1.03l-.27-.16-2.8.74.75-2.73-.18-.28a7.44 7.44 0 0 1 11.6-9.2 7.4 7.4 0 0 1 2.18 5.26 7.44 7.44 0 0 1-7.5 7.4Zm4.08-5.56c-.22-.11-1.32-.65-1.52-.73-.2-.07-.35-.11-.5.11-.15.22-.57.73-.7.88-.13.15-.26.16-.48.06-.22-.11-.94-.35-1.79-1.11-.66-.59-1.11-1.32-1.24-1.54-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38h-.43c-.15 0-.39.06-.59.28-.2.22-.77.75-.77 1.83s.79 2.12.9 2.27c.11.15 1.55 2.37 3.76 3.32.53.23.94.36 1.26.47.53.17 1.01.14 1.39.09.42-.06 1.32-.54 1.51-1.06.19-.52.19-.96.13-1.06-.06-.1-.2-.15-.42-.26Z" fill="#fff"></path>
      </svg>
    </a>
  );
}
"""

with open('src/components/Services.tsx', 'w') as f: f.write(services)
with open('src/components/Testimonials.tsx', 'w') as f: f.write(testimonials)
with open('src/components/FAQ.tsx', 'w') as f: f.write(faq)
with open('src/components/Contact.tsx', 'w') as f: f.write(contact)
with open('src/components/Footer.tsx', 'w') as f: f.write(footer)
with open('src/components/FloatingWhatsApp.tsx', 'w') as f: f.write(floating)
