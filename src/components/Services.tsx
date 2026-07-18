import Image from 'next/image';
import img2 from '../../public/assets/image_4_updated.svg';
import img3 from '../../public/assets/image_3_updated.svg';

export default function Services() {
  const services = [
    { title: 'HomeCare', photo: img2, photoLabel: 'Caregiver with mother and newborn at home', desc: 'We partner with families to develop bespoke care plans that prioritise their comfort, safety, and well-being. Premium in-home nursing care that nurtures the physical, emotional and for families who desire it faith-informed encouragement through prayer, worship, and age-appropriate Bible stories.' },
    { title: 'Corporate Care', photo: img3, photoLabel: 'Caregivers minding a group of children at an event', desc: 'We partner with families and event organisers to provide premium care for settings that include a number of newborns, infants and children for families, companies or organisations e.g retreats, events such as birthdays, seminars, thanksgivings, short or long trips, workshops, get togethers, getaways, conferences, prayer meetings, vacations, playdates etc.' }
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
          <div className="font-passionate text-[34px] text-secondary mb-1">What we offer</div>
          <h2 className="font-mali font-medium text-[clamp(28px,4vw,42px)] text-primary">Our Services</h2>
          <p className="mt-3 text-primary/80 font-sans tracking-widest text-[11px] md:text-[13px] uppercase font-bold">Professional Excellence. Compassionate Care. Confident Beginnings.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-14">
          {services.map(svc => (
            <div key={svc.title} className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_40px_-24px_rgba(20,107,120,0.25)]">
              <div className="aspect-video relative">
                <Image src={svc.photo} alt={svc.photoLabel} fill className="object-cover" />
              </div>
              <div className="p-7">
                <h3 className="font-mali font-medium text-[22px] text-primary mb-2.5">{svc.title}</h3>
                <p className="text-[15px] leading-[1.65] text-text-dark m-0">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 mb-14 overflow-x-auto">
          <h3 className="font-mali font-medium text-xl text-primary mb-4.5">Daily Rates (UGX)</h3>
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
          <div className="text-xs text-primary mt-3.5 opacity-75">Terms &amp; Conditions Apply.</div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center relative mb-16">
          <div className="bg-primary/5 rounded-[32px] p-10 relative overflow-hidden group hover:bg-primary/10 transition-colors">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl group-hover:bg-secondary/30 transition-colors"></div>
            <svg className="w-[52px] h-[52px] text-secondary mb-3 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 22.5l-2.062-8.355L1.5 12l5.438-2.145L9 1.5l2.062 8.355L16.5 12l-6.687 3.904z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25L22.5 4l-1.25 3m-4.5-1L18 4l-1.25 1.5M19.5 18.75L22.5 20l-1.25-3m-4.5 1L18 20l-1.25-1.5" />
            </svg>
            <div className="font-passionate text-[56px] text-secondary mb-2 leading-none">99%</div>
            <h3 className="font-mali font-medium text-[22px] text-primary mb-2">Impactful Services</h3>
            <p className="text-text-dark/80 text-[15px] max-w-[280px] mx-auto">Of our families report a significant positive impact on their transition into parenthood.</p>
          </div>
          <div className="bg-primary/5 rounded-[32px] p-10 relative overflow-hidden group hover:bg-primary/10 transition-colors">
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-accent-warm/30 rounded-full blur-2xl group-hover:bg-accent-warm/40 transition-colors"></div>
            <svg className="w-[52px] h-[52px] text-accent-warm mb-3 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <div className="font-passionate text-[56px] text-accent-warm mb-2 leading-none">95%</div>
            <h3 className="font-mali font-medium text-[22px] text-primary mb-2">Satisfaction Rate</h3>
            <p className="text-text-dark/80 text-[15px] max-w-[280px] mx-auto">Of our clients are highly satisfied with the quality of our care and professionalism.</p>
          </div>
        </div>

        {/* Gifting Banner */}
        <div className="bg-primary text-white rounded-3xl p-8 mb-16 flex flex-col md:flex-row items-center gap-8 justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="relative z-10">
            <svg className="w-8 h-8 mb-3 text-accent-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
            <h3 className="font-mali font-medium text-[24px] mb-2 text-accent-warm">Gift Our Services</h3>
            <p className="text-[15.5px] leading-[1.6] max-w-[50ch] text-white/90">
              Gift the peace of mind every mother-to-be deserves, one that truly makes a difference! Friends, family, and employers can sponsor premium care packages delivering essential professional, compassionate and holistic support during this life-changing transition.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <a href="https://forms.gle/Qu3ajZfwPAPoJxCP8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-primary font-sans font-bold text-[15px] px-8 py-3.5 rounded-full hover:bg-neutral transition-colors shadow-lg">
              I Want To Gift
            </a>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-8 pb-4">
          <h2 className="font-passionate text-[40px] md:text-[48px] text-primary">Experience Tranquility in Motherhood</h2>
        </div>
      </div>
    </section>
  );
}
