'use client';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'What is the scope of your services?', a: 'Our services include a variety of offerings such as feeding assistance, diaper changing, bathing, umbilical cord care, monitoring vital signs, and offering guidance on newborn developmental milestones. Our caregivers are trained to support both the physical and emotional needs of your baby.' },
    { q: 'How are caregivers selected?', a: 'All caregivers undergo a meticulous selection process that includes background checks, interviews, licence verification and reference checks. They are trained in mother and newborn care best practices, including safe sleep techniques, infant CPR, and first aid.' },
    { q: 'Can I meet the caregiver before they start working with my family?', a: 'Yes, we encourage a pre-service meeting with the assigned caregiver to ensure compatibility and discuss your specific needs and expectations in your care plan.' },
    { q: 'How do you ensure the safety and security of my home and baby?', a: 'We are committed to maintaining the highest standards of safety and security. Our caregivers follow strict protocols, including frequent hand washing and sanitisation, to ensure a clean and safe environment. Additionally, we ensure confidentiality and respect for your home and family.' },
    { q: 'What are the qualifications of your caregivers?', a: 'Our caregivers are registered professionals with certifications in nursing and midwifery. Many have backgrounds in nursing or paediatric care and have completed specialised training in customer service.' },
    { q: 'What is the process for scheduling and canceling services?', a: 'You can schedule services by contacting our customer service team. We request for at the least 1 month\'s notice for booking and 48-72 hours\' notice for cancellations to accommodate scheduling changes and ensure the availability of our caregivers. An additional surcharge is charged for services required in under 72 hours.' },
    { q: 'Can I provide specific instructions or preferences for my care?', a: 'Absolutely. We encourage you to share any specific instructions or preferences through our \'customer needs assessment\' process. Our caregivers will tailor these needs and develop your individualised care plan.' },
    { q: 'What are your rates and payment options for care services?', a: 'Our rates depend on the level of care and hours of service required with bespoke daily, weekly and monthly packages. We offer flexible payment options including, flexipay, mobile money payments and direct bank transfers.' },
    { q: 'Is my home and family\'s data protected?', a: 'Yes, we are committed to protecting your privacy, all caregivers sign confidentiality agreements. We also follow strict protocols to ensure the security of your personal information.' },
    { q: 'How do I provide feedback about the service?', a: 'We welcome and value your feedback. Our team is available to address and resolve any issues promptly. You can provide feedback through our customer service line, email, reviews\' process, or during regular check-in meetings with our service coordinators. This helps us continually improve our services and ensure your satisfaction.' },
    { q: 'What supplies and equipment are provided as part of the care service?', a: 'Our service includes basic medical supplies such as gloves, hand sanitisers, first aid essentials and monitoring devices for tracking temperature and blood pressure. You are expected to provide all baby supplies and any prescribed medications. Our caregivers will assist with administering as per the instructions but will not supply medications directly.' },
    { q: 'Are caregivers required to wear specific types of clothing?', a: 'Yes, caregivers are required to wear uniforms provided to maintain consistency and professionalism.' },
    { q: 'How are caregivers accommodated during live-in services?', a: 'A comfortable sleeping space is required, such as a guest room or a separate area in the nursery.' },
    { q: 'Are meals for the caregiver included in the service package?', a: 'Meal arrangements depend on the duration of the service. Caregivers working for up to 8 hours are responsible for their own meals, however the client may provide at their discretion. You are expected to provide or facilitate meals for the caregiver working over 8 hours.' }
  ];

  return (
    <section id="faq" className="py-[96px] px-6 bg-neutral">
      <div className="max-w-[820px] mx-auto">
        <div className="text-center mb-12">
          <div className="font-passionate text-[34px] text-secondary mb-1">FAQs</div>
          <h2 className="font-mali font-medium text-[clamp(28px,4vw,42px)] text-primary">So I Was Wondering</h2>
          <p className="mt-3 text-primary/80 font-sans font-light text-[12px] md:text-[13.5px]">Professional Excellence. Compassionate Care. Confident Beginnings.</p>
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
