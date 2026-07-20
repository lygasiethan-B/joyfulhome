'use client';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    { quote: 'Great service!', author: 'Client Family' },
    { quote: 'Service is remarkable I wish I could do this even daily. We love our Caregiver she is the perfect fit for our little girl.', author: 'Client Family' },
    { quote: 'If you are pregnant please save for such services, it is a life saver!', author: 'Expectant Mother' },
    { quote: 'Please give them all your money, Tested and Approved 👍', author: 'Client Family' },
    { quote: 'Came in the right time we needed the service.', author: 'Client Family' },
    { quote: 'It was soo good... I was able to rest and have learnt so much from our Caregiver.', author: 'First-time Parent' },
    { quote: 'Such a good experience and was so much helpful.', author: 'Client Family' },
    { quote: 'Just amazing!', author: 'Client Family' },
    { quote: 'Caregiver is knowledgeable about my baby’s specific needs and provided personalised care.', author: 'Client Family' },
    { quote: 'I’m extremely satisfied with the safety and hygiene compliance demonstrated by the Caregiver.', author: 'New Mother' },
    { quote: 'Our Caregiver’s attention to detail and commitment to following protocols ensured our baby’s safety and well-being at all times.', author: 'Client Family' },
    { quote: 'I am confident that these exceptional services will continue to make a positive difference in the lives of others.', author: 'Client Family' },
    { quote: 'I now know how to shower my baby better with ease and comfort for her.', author: 'Client Family' },
    { quote: 'Can\'t wait to work with you again.', author: 'Client Family' },
    { quote: 'Thank you for this tremendous experience... Every mother needs to know about JoyfulHome!', author: 'Client Family' },
    { quote: 'I loved everything, the caregivers were so caring and lovely.', author: 'Client Family' },
    { quote: 'The fact that the caregivers are Christians is reassuring.', author: 'Client Family' },
    { quote: 'Your company is awesome, God bless you guys. We are especially grateful for the Christian touch!', author: 'Client Family' },
    { quote: 'Thank you so much for your services, these weeks have made my recovery enjoyable being a first time parent! I look forward to using your services again and recommending you to other mothers.', author: 'First-time Parent' },
    { quote: 'I want to take this opportunity to extend my appreciation for the support rendered to us when our child was brought home. Your care made the journey smooth and we are really grateful for your services. Thank you 🙏', author: 'Client Family' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-[96px] bg-white">
      <div className="max-w-[1120px] mx-auto px-6 mb-12 text-center">
        <div className="font-passionate text-[34px] text-secondary mb-1">The JoyfulHome Experience</div>
        <h2 className="font-mali font-medium text-[clamp(28px,4vw,42px)] text-primary">Reviews</h2>
        <p className="mt-3 text-primary/80 font-sans font-light text-[12px] md:text-[13.5px]">Professional Excellence. Compassionate Care. Confident Beginnings.</p>
      </div>
      
      <div className="max-w-[800px] mx-auto px-6 relative">
        <div className="bg-neutral rounded-[32px] p-10 md:p-14 flex flex-col items-center text-center gap-6 shadow-sm min-h-[300px] justify-center transition-opacity duration-500">
          <div className="text-secondary text-2xl tracking-widest">★★★★★</div>
          <p className="text-[18px] md:text-[22px] leading-[1.6] text-text-dark/90 font-mali italic">
            “{testimonials[currentIndex].quote}”
          </p>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'bg-secondary w-8' : 'bg-primary/20 hover:bg-primary/40'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
