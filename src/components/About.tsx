export default function About() {
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
          <div className="font-passionate text-[30px] text-secondary mb-1">About JoyfulHome</div>
          <h2 className="font-mali font-bold text-[clamp(28px,4vw,42px)] text-primary">Where professional excellence meets compassionate, whole-family care!</h2>
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
        <div className="mt-20 pt-16 border-t border-primary/10 grid grid-cols-1 md:grid-cols-2 gap-12 text-center relative">
          <div className="bg-primary/5 rounded-[32px] p-10 relative overflow-hidden group hover:bg-primary/10 transition-colors">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl group-hover:bg-secondary/30 transition-colors"></div>
            <div className="font-passionate text-[56px] text-secondary mb-2">99%</div>
            <h3 className="font-mali font-bold text-[22px] text-primary mb-2">Impactful Services</h3>
            <p className="text-text-dark/80 text-[15px] max-w-[280px] mx-auto">Of our families report a significant positive impact on their transition into parenthood.</p>
          </div>
          <div className="bg-primary/5 rounded-[32px] p-10 relative overflow-hidden group hover:bg-primary/10 transition-colors">
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-accent-warm/30 rounded-full blur-2xl group-hover:bg-accent-warm/40 transition-colors"></div>
            <div className="font-passionate text-[56px] text-accent-warm mb-2">95%</div>
            <h3 className="font-mali font-bold text-[22px] text-primary mb-2">Satisfaction Rate</h3>
            <p className="text-text-dark/80 text-[15px] max-w-[280px] mx-auto">Of our clients are highly satisfied with the quality of our care and professionalism.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
