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

  return (
    <section id="testimonials" className="py-[96px] bg-white">
      <div className="max-w-[1120px] mx-auto px-6 mb-12 text-center">
        <div className="font-passionate text-[30px] text-secondary mb-1">Real families, real joy</div>
        <h2 className="font-mali font-bold text-[clamp(28px,4vw,42px)] text-primary">Testimonials</h2>
      </div>
      <div className="flex gap-5 overflow-x-auto px-6 pb-6 snap-x snap-mandatory">
        {testimonials.map((t, idx) => (
          <div key={idx} className="flex-none snap-start w-[min(340px,80vw)] bg-neutral rounded-[20px] p-6.5 flex flex-col gap-3.5">
            <div className="text-secondary text-lg tracking-widest">★★★★★</div>
            <p className="text-[15px] leading-[1.6] text-text-dark m-0 flex-1">“{t.quote}”</p>
            <div className="font-mali font-bold text-sm text-primary">{t.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
