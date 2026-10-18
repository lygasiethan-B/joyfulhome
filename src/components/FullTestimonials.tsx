'use client';

import { useEffect, useRef, useState } from 'react';
import { clientTestimonials } from '../content/clientTestimonials';

export default function FullTestimonials() {
  const [firstIndex, setFirstIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const total = clientTestimonials.length;

  useEffect(() => {
    if (openIndex !== null && !dialogRef.current?.open) dialogRef.current?.showModal();
  }, [openIndex]);

  const visible = [0, 1, 2].map((offset) => ({
    testimonial: clientTestimonials[(firstIndex + offset) % total],
    index: (firstIndex + offset) % total,
  }));
  const selected = openIndex === null ? null : clientTestimonials[openIndex];

  return (
    <section aria-labelledby="client-experiences-title" className="bg-neutral py-20 md:py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="font-passionate text-[34px] text-secondary mb-1">Client Experience</div>
          <h2 id="client-experiences-title" className="font-mali font-medium text-[clamp(28px,4vw,42px)] text-primary">In Their Own Words</h2>
          <p className="mt-3 text-primary/80 font-sans font-light text-[12px] md:text-[13.5px]">Professional Excellence. Compassionate Care. Confident Beginnings.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5" aria-label="Client experiences">
          {visible.map(({ testimonial, index }, position) => (
            <article
              key={testimonial.id}
              className={`${position > 0 ? 'hidden md:flex' : 'flex'} min-h-[270px] flex-col rounded-[32px] bg-white p-7 md:p-8 shadow-sm`}
            >
              <p className="font-mali italic text-text-dark/90 leading-relaxed text-[16px] flex-1">
                {testimonial.excerpt}
              </p>
              <div className="mt-7 border-t border-primary/10 pt-5">
                <p className="whitespace-pre-line font-sans text-[13px] leading-relaxed text-primary/80">
                  {testimonial.attribution}
                </p>
                <button
                  type="button"
                  onClick={(event) => {
                    triggerRef.current = event.currentTarget;
                    setOpenIndex(index);
                  }}
                  className="mt-5 text-primary font-sans font-semibold text-[13px] underline underline-offset-4 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary cursor-pointer"
                  aria-label={`Read full experience from ${testimonial.attribution.split('\n')[0].trim()}`}
                >
                  Read Full Experience
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => setFirstIndex((current) => (current - 1 + total) % total)}
            className="rounded-full border border-primary/25 px-5 py-2 text-primary text-sm hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
            aria-label="Previous client experience"
          >
            Previous
          </button>
          <span aria-live="polite" className="text-primary/80 text-sm tabular-nums">
            {firstIndex + 1} / {total}
          </span>
          <button
            type="button"
            onClick={() => setFirstIndex((current) => (current + 1) % total)}
            className="rounded-full border border-primary/25 px-5 py-2 text-primary text-sm hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
            aria-label="Next client experience"
          >
            Next
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="full-experience-title"
        aria-describedby="full-experience-text"
        onCancel={(event) => {
          event.preventDefault();
          dialogRef.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.preventDefault();
            dialogRef.current?.close();
          }
        }}
        onClose={() => {
          setOpenIndex(null);
          triggerRef.current?.focus();
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-[760px] max-h-[min(85vh,800px)] overflow-y-auto rounded-[32px] bg-white p-7 md:p-10 text-text-dark shadow-xl backdrop:bg-text-dark/60"
      >
        {selected && (
          <>
            <div className="flex items-start justify-between gap-5 mb-7">
              <h3 id="full-experience-title" className="font-mali text-2xl text-primary">Client Experience</h3>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="shrink-0 rounded-full border border-primary/25 px-4 py-2 text-sm text-primary hover:bg-neutral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
              >
                Close
              </button>
            </div>
            <p id="full-experience-text" className="whitespace-pre-line font-sans text-[15px] leading-[1.8]">
              {selected.fullText}
            </p>
            <p className="mt-8 border-t border-primary/10 pt-5 whitespace-pre-line font-sans text-sm leading-relaxed text-primary">
              {selected.attribution}
            </p>
          </>
        )}
      </dialog>
    </section>
  );
}
