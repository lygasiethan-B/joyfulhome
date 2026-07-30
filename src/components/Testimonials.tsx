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
    { quote: 'I want to take this opportunity to extend my appreciation for the support rendered to us when our child was brought home. Your care made the journey smooth and we are really grateful for your services. Thank you 🙏', author: 'Client Family' },
    { quote: 'Excellent service!', author: 'Client Family' },
    { quote: 'I was amazed how our Caregiver asked to give the baby some stomach relief medicine even when I was away.', author: 'Client Family' },
    { quote: 'The first week has been incredible. Growth in the baby and progress on milestones have been encouraging and comforting.', author: 'Client Family' },
    { quote: 'We are very impressed with the service especially the 12 hour shifts. It allows for freshness. The professionalism is also really good.', author: 'Client Family' },
    { quote: 'Thank you and may God bless JoyfulHome. We absolutely loved the aspect of singing to and praying with our baby. Thank you!', author: 'Client Family' },
    { quote: 'The attention to detail to client needs is Epic! Communication with client is very clear and professional.', author: 'Client Family' },
    { quote: 'This is an excellent service that every nursing mother needs to enable them get enough rest with confidence that the new born is well taken care of.', author: 'Client Family' },
    { quote: 'Loved our Caregiver’s professionalism and calmness! I was impressed by her ability to calm my baby. It was a welcome change to the chaos of my household.', author: 'Client Family' },
    { quote: 'I reached out in a state of emergency and even got responses from the Client Service Team past midnight!', author: 'Client Family' },
    { quote: 'The service has been excellent as this has allowed me to rest. Thank you for helping new mothers navigate this new life!', author: 'Client Family' },
    { quote: 'Thanks for creating a space that supports mothers.', author: 'Client Family' },
    { quote: 'It’s amazing how you encourage the Caregivers to go for Sunday service.', author: 'Client Family' },
    { quote: 'Loved the experience! I was at peace and not anxious at all. Gave me some much needed rest.', author: 'Client Family' },
    { quote: 'I like that there\'s a uniform for the Caregiver. I love the updates on how baby is doing...', author: 'Client Family' },
    { quote: 'The service is very good and calming... I have had a great experience!', author: 'Client Family' },
    { quote: 'Your team has been the best. I have really enjoyed and loved all the care that has been offered by the Caregiver.', author: 'Client Family' },
    { quote: 'My baby fell sick over the weekend and her care was excellent! I was so relieved to know that my baby was being handled by a nurse and I was able to attend to my family commitments without worrying about the baby at home too much.', author: 'Client Family' },
    { quote: 'You guys are top notch! I appreciate the attention to detail.', author: 'Client Family' },
    { quote: 'Our Caregivers were patient and excellent at their work. The quality of the service was excellent.', author: 'Client Family' },
    { quote: 'Our Caregiver encouraged us to take the baby to hospital when not well.', author: 'Client Family' },
    { quote: 'JoyfulHome is going places. Overall, super excellent services.', author: 'Client Family' },
    { quote: 'Service is worth it, with thoughtfulness to the mother!', author: 'Client Family' },
    { quote: 'I found that waking up to a baby bathed was relaxing and I was able to pump since I was well rested. Preparing my breakfast in bed was awesome as well, so that after I would just go back to sleep satisfied.', author: 'Client Family' },
    { quote: 'This was the greatest blessing and I wonder how I managed before with our first child.', author: 'Client Family' },
    { quote: 'Having a person who loves The Lord, loves my child as their own and is medically knowledgeable was the best part of it. I could handover my child and rest without fear of what will happen to my baby.', author: 'Client Family' },
    { quote: 'The service being Christian based is a good innovation and a blessing to both baby and entire family... I am grateful for the time spent!', author: 'Client Family' },
    { quote: 'Choosing JoyfulHome was one of the best decisions for our family. The warmth, attention, and genuine care you provided made a lasting difference!', author: 'Client Family' }
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
        <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-[90%] mx-auto">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'bg-secondary w-8' : 'bg-primary/20 hover:bg-primary/40'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
