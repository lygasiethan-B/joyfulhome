'use client';

import { useRef, useEffect, useState } from 'react';

const steps = [
  {
    c: 'C1',
    title: 'Contact Us',
    desc: 'Reach out via WhatsApp, call, or email. We respond quickly and warmly to every family that gets in touch.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M40 8H8a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h8l8 8 8-8h8a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"/>
        <path d="M16 20h16M16 26h8"/>
      </svg>
    ),
  },
  {
    c: 'C2',
    title: 'Customer Needs Assessment',
    desc: "We take time to understand your family's unique situation — your health, schedule, preferences, and care goals.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="10" y="6" width="28" height="36" rx="3"/>
        <path d="M18 6v4h12V6M16 22h16M16 29h10"/>
        <circle cx="34" cy="34" r="7" fill="white" stroke="currentColor" strokeWidth="2"/>
        <path d="M31 34l2 2 4-4"/>
      </svg>
    ),
  },
  {
    c: 'C3',
    title: 'Care Plan',
    desc: 'We design a bespoke care plan tailored specifically to your family — covering services, schedule, and caregiver match.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M24 4C16 4 10 10 10 18c0 10 14 26 14 26s14-16 14-26c0-8-6-14-14-14Z"/>
        <circle cx="24" cy="18" r="5"/>
      </svg>
    ),
  },
  {
    c: 'C4',
    title: 'Contract',
    desc: 'We formalise our agreement with a clear, transparent contract — no hidden fees, no surprises. Just trust and clarity.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M32 4H16a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Z"/>
        <path d="M20 16h8M20 22h8M20 28h5"/>
        <path d="M30 32l3 3 6-6" strokeWidth="2.5"/>
      </svg>
    ),
  },
  {
    c: 'C5',
    title: 'Customer Service Delivery',
    desc: 'Your dedicated caregiver arrives, and exceptional, compassionate care begins — in the comfort of your own home.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M24 10c-4 0-7 3-7 7 0 5 7 12 7 12s7-7 7-12c0-4-3-7-7-7Z"/>
        <path d="M10 38c0-6 6-10 14-10s14 4 14 10"/>
      </svg>
    ),
  },
];

function TimelineStep({ step, index, total }: { step: typeof steps[0]; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isLast = index === total - 1;

  return (
    <div
      ref={ref}
      className="relative flex gap-6 md:gap-10"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 120}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 120}ms`,
      }}
    >
      {/* Left: icon + connecting line */}
      <div className="flex flex-col items-center shrink-0">
        {/* Icon circle */}
        <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-md z-10 shrink-0">
          {step.icon}
        </div>
        {/* Connecting dotted line */}
        {!isLast && (
          <div
            className="w-[2px] flex-1 mt-1"
            style={{
              backgroundImage: 'repeating-linear-gradient(to bottom, #146B78 0px, #146B78 6px, transparent 6px, transparent 14px)',
              minHeight: '48px',
            }}
          />
        )}
      </div>

      {/* Right: content */}
      <div className={`pb-10 ${isLast ? 'pb-0' : ''}`}>
        <div className="text-xs font-sans font-bold text-secondary tracking-widest uppercase mb-1">{step.c}</div>
        <h3 className="font-mali font-medium text-[20px] text-primary mb-2 leading-snug">{step.title}</h3>
        <p className="text-[15px] leading-[1.7] text-text-dark max-w-[44ch]">{step.desc}</p>
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="py-[96px] px-6 bg-white">
      <div className="max-w-[1120px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="font-passionate text-[34px] text-secondary mb-1">What to expect</div>
          <h2 className="font-mali font-medium text-[clamp(28px,4vw,42px)] text-primary">Customer Care Journey</h2>
          <p className="mt-3 text-primary/80 font-sans tracking-widest text-[11px] md:text-[13px] uppercase font-bold">Professional Excellence. Compassionate Care. Confident Beginnings.</p>
          <p className="mt-4 text-[15px] leading-[1.7] text-text-dark max-w-[52ch] mx-auto">
            From your first message to the moment care begins, here is exactly what every JoyfulHome family can expect.
          </p>
        </div>

        {/* Desktop: two-column (intro left, timeline right). Mobile: stacked */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-14 md:gap-20 items-start">
          {/* Left panel */}
          <div className="md:sticky md:top-[104px]">
            <div className="bg-primary/5 rounded-[28px] p-8">
              <div className="font-passionate text-[28px] text-primary mb-3">Simple. Clear. Caring.</div>
              <p className="text-[15px] leading-[1.8] text-text-dark">
                We designed our process to remove all the guesswork for families. Every step is built around trust, transparency, and your family's wellbeing — from that very first message to every day of care that follows.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {steps.map(s => (
                  <a
                    key={s.c}
                    href={`#journey`}
                    className="flex items-center gap-3 text-sm font-semibold text-primary/70 hover:text-primary transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[11px] font-bold text-primary shrink-0">
                      {s.c.replace('C', '')}
                    </span>
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: timeline */}
          <div>
            {steps.map((step, i) => (
              <TimelineStep key={step.c} step={step} index={i} total={steps.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
