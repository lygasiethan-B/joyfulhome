'use client';
import { useState } from 'react';

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          <div className="font-passionate text-[34px] text-secondary mb-1">About JoyfulHome</div>
          <h2 className="font-mali font-medium text-[clamp(28px,4vw,42px)] text-primary">Strengthening Families, One Home at a Time!</h2>
          <p className="mt-3 text-primary/80 font-sans tracking-widest text-[11px] md:text-[13px] uppercase font-bold">Professional Excellence. Compassionate Care. Confident Beginnings.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-[72px]">
          <div>
            <h3 className="font-mali font-medium text-2xl text-primary mb-3.5">Who We Are</h3>
            <p className="text-base leading-[1.7] text-text-dark mb-4">
              JoyfulHome exists to help families experience healthier beginnings, greater confidence, and lasting peace of mind through professional excellence, compassionate relationships, and holistic care.
            </p>
            <p className="text-base leading-[1.7] text-text-dark">
              We partner with families to provide exceptional in-home nursing and early parenthood support through professional care, compassionate service and personalised guidance. We are committed to nurturing the physical, emotional, and where welcomed by the family, spiritual wellbeing of mothers, babies, and caregivers, giving every family confidence, peace of mind, and support they need to thrive!
            </p>
          </div>
          <div>
            <h3 className="font-mali font-medium text-2xl text-primary mb-3.5">Our Why</h3>
            <p className="text-base leading-[1.7] text-text-dark mb-4">
              Every family is different; We listen first, understand your needs, and develop a bespoke care plan that supports your family's lifestyle, preferences, and needs. At JoyfulHome, we are honoured to walk alongside families every step of the way, empowering families to thrive.
            </p>
            <p className="text-base leading-[1.7] text-text-dark mb-4">
              Success for us is measured not only by the care we provide today, but by the confidence families carry into tomorrow. Our commitment is not only to care for mothers and babies but to strengthen families, one home at a time.
            </p>
            <p className="text-base leading-[1.7] text-text-dark">
              Families choose JoyfulHome because they want more than a caregiver, they want a trusted partner committed to helping them experience parenthood with confidence and joy!
            </p>
          </div>
        </div>

        <div className="max-w-[820px] mx-auto flex flex-col gap-3.5 mt-8">
          {values.map((val, i) => (
            <div key={val.title} className="bg-neutral rounded-2xl overflow-hidden border border-primary/5">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 bg-transparent border-none cursor-pointer p-5 px-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-[36px] h-[36px] shrink-0 rounded-full bg-primary text-white flex items-center justify-center font-mali font-bold text-lg">
                    {val.initial}
                  </div>
                  <span className="font-mali font-semibold text-[18px] text-primary">{val.title}</span>
                </div>
                <span className={`flex-none text-[22px] text-secondary transition-transform duration-250 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 pt-2 text-[15px] leading-[1.65] text-text-dark pl-[76px]">{val.desc}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
