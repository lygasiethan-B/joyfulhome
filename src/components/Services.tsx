import Image from 'next/image';
import img2 from '../../public/assets/flat vector 2 joyfulhome staff taking care of children.svg';
import img3 from '../../public/assets/flat vector 3 care taker feeding.svg';
import premiumGiftBox from '../../public/assets/premium_gift_box.jpg';

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
          <div className="font-passionate text-[34px] text-secondary mb-1">What We Offer</div>
          <h2 className="font-mali font-medium text-[clamp(28px,4vw,42px)] text-primary">Our Services</h2>
          <p className="mt-3 text-primary/80 font-sans font-light text-[12px] md:text-[13.5px]">Professional Excellence. Compassionate Care. Confident Beginnings.</p>
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


        {/* Gifting Banner */}
        <div className="bg-primary text-white rounded-3xl p-8 mb-16 flex flex-col md:flex-row items-center gap-8 justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="relative z-10">
            <div className="w-20 h-20 mb-4 rounded-xl overflow-hidden shadow-xl border-2 border-white/20 relative">
              <Image src={premiumGiftBox} alt="Premium wrapped gift box" fill className="object-cover" />
            </div>
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
