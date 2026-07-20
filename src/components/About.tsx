'use client';
import Image from 'next/image';
import logoSmile from '../../public/assets/JoyfulHome Logo Smile.png';

const ValueCard = ({ title, desc }: { title: string, desc: string }) => (
  <div className="bg-[#F8FAFC]/80 backdrop-blur-sm border border-primary/10 rounded-[40px] p-7 px-8 text-center shadow-sm hover:shadow-lg transition-all duration-500 w-full max-w-[260px] hover:bg-white hover:border-primary/30 flex flex-col items-center justify-center relative z-20 group hover:-translate-y-1">
    <h4 className="font-mali font-bold text-[17px] tracking-widest uppercase text-secondary mb-3 group-hover:text-primary transition-colors">{title}</h4>
    <p className="text-[13px] leading-[1.6] text-text-dark/80">{desc}</p>
  </div>
);

export default function About() {

  return (
    <section id="about" className="py-[96px] px-6 bg-white">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center mb-14">
          <div className="font-passionate text-[34px] text-secondary mb-1">About JoyfulHome</div>
          <h2 className="font-mali font-medium text-[clamp(28px,4vw,42px)] text-primary">Strengthening Families, One Home At A Time!</h2>
          <p className="mt-3 text-primary/80 font-sans font-light text-[12px] md:text-[13.5px]">Professional Excellence. Compassionate Care. Confident Beginnings.</p>
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
              Every family is different; We listen first, understand your needs, and develop a bespoke care plan that supports your family&apos;s lifestyle, preferences, and needs. At JoyfulHome, we are honoured to walk alongside families every step of the way, empowering families to thrive.
            </p>
            <p className="text-base leading-[1.7] text-text-dark mb-4">
              Success for us is measured not only by the care we provide today, but by the confidence families carry into tomorrow. Our commitment is not only to care for mothers and babies but to strengthen families, one home at a time.
            </p>
            <p className="text-base leading-[1.7] text-text-dark">
              Families choose JoyfulHome because they want more than a caregiver, they want a trusted partner committed to helping them experience parenthood with confidence and joy!
            </p>
          </div>
        </div>

        <div className="text-center mt-24 mb-12">
          <h3 className="font-mali font-bold text-[clamp(26px,4vw,36px)] text-primary uppercase tracking-wide">OUR VALUES</h3>
        </div>

        {/* Desktop Grid Layout (matches the sketch) */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-x-8 gap-y-10 items-center justify-items-center max-w-[1000px] mx-auto relative">
          
          {/* Subtle background connecting lines */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border-[2px] border-dashed border-primary/10 rounded-full z-0 pointer-events-none"></div>

          {/* Top Row */}
          <div className="col-start-2 z-10">
            <ValueCard title="TRUTH" desc="We act with honesty, integrity and transparency in every interaction." />
          </div>
          
          {/* Middle Row */}
          <div className="col-start-1 row-start-2 justify-self-end mr-[-40px] z-10">
            <ValueCard title="TRANSFORMATION" desc="We pursue excellence that creates a positive and lasting impact for every family." />
          </div>
          <div className="col-start-2 row-start-2 mx-8 z-10">
            <Image src={logoSmile} alt="JoyfulHome Logo" width={240} height={240} className="w-[220px] h-[220px] object-contain drop-shadow-xl animate-jhFloat" />
          </div>
          <div className="col-start-3 row-start-2 justify-self-start ml-[-40px] z-10">
            <ValueCard title="TIMELINESS" desc="We respect every family’s time by being punctual, responsive and dependable." />
          </div>

          {/* Bottom Row */}
          <div className="col-start-1 row-start-3 justify-self-end mr-[-20px] z-10">
            <ValueCard title="TRUST" desc="We build confidence through reliability, professionalism and confidentiality." />
          </div>
          <div className="col-start-3 row-start-3 justify-self-start ml-[-20px] z-10">
            <ValueCard title="THOUGHTFULNESS" desc="We anticipate needs before they are expressed, with empathy and attention to detail." />
          </div>
        </div>

        {/* Mobile/Tablet Stacked Layout */}
        <div className="flex lg:hidden flex-col items-center gap-6 relative">
          <div className="mb-6 z-10">
            <Image src={logoSmile} alt="JoyfulHome Logo" width={180} height={180} className="w-[160px] h-[160px] object-contain drop-shadow-xl" />
          </div>
          <ValueCard title="TRUTH" desc="We act with honesty, integrity and transparency in every interaction." />
          <ValueCard title="TRANSFORMATION" desc="We pursue excellence that creates a positive and lasting impact for every family." />
          <ValueCard title="TIMELINESS" desc="We respect every family’s time by being punctual, responsive and dependable." />
          <ValueCard title="TRUST" desc="We build confidence through reliability, professionalism and confidentiality." />
          <ValueCard title="THOUGHTFULNESS" desc="We anticipate needs before they are expressed, with empathy and attention to detail." />
        </div>
      </div>
    </section>
  );
}
