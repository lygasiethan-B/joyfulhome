import Image from 'next/image';
import bareFootBlue from '../../public/assets/bare_foot_blue.webp';
import bareFootBrown from '../../public/assets/bare_foot_brown.webp';

const touchpoints = [
  { id: 1, title: 'Contact Us', x: 100, y: 250, pos: 'bottom' },
  { id: 2, title: 'Client Needs Assessment', x: 300, y: 150, pos: 'top' },
  { id: 3, title: 'Care Plan', x: 500, y: 250, pos: 'bottom' },
  { id: 4, title: 'Contract', x: 700, y: 150, pos: 'top' },
  { id: 5, title: 'Client Service Delivery', x: 900, y: 250, pos: 'bottom' },
];

const smallDots = [
  { id: 1, x: 200, y: 200, img: bareFootBlue, alt: 'Blue barefoot icon', direction: 'up' },
  { id: 2, x: 400, y: 200, img: bareFootBrown, alt: 'Brown barefoot icon', direction: 'down' },
  { id: 3, x: 600, y: 200, img: bareFootBlue, alt: 'Blue barefoot icon', direction: 'up' },
  { id: 4, x: 800, y: 200, img: bareFootBrown, alt: 'Brown barefoot icon', direction: 'down' },
];

export default function Journey() {
  return (
    <section id="journey" className="py-[96px] px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="font-passionate text-[34px] text-secondary mb-1">What To Expect</div>
          <h2 className="font-mali font-medium text-[clamp(28px,4vw,42px)] text-primary">Your Journey With Us</h2>
          <p className="mt-3 text-primary/80 font-sans font-light text-[12px] md:text-[13.5px]">Professional Excellence. Compassionate Care. Confident Beginnings.</p>
        </div>

        {/* Desktop Graphic Container */}
        <div className="hidden md:block w-full bg-[#FAF7F5] rounded-[40px] p-8 md:p-12 overflow-x-auto overflow-y-hidden shadow-sm border border-primary/5">
          <div className="min-w-[1000px] h-[400px] relative mx-auto font-sans">
            
            <style>{`
              @keyframes flowDash {
                from { stroke-dashoffset: 24; }
                to { stroke-dashoffset: 0; }
              }
              .animate-flow {
                animation: flowDash 1.5s linear infinite;
              }
              @keyframes footStepPulseUp {
                0%, 100% {
                  transform: rotate(55deg) scale(1);
                  opacity: 0.9;
                }
                50% {
                  transform: rotate(55deg) scale(1.15);
                  opacity: 1;
                }
              }
              @keyframes footStepPulseDown {
                0%, 100% {
                  transform: rotate(130deg) scale(1);
                  opacity: 0.9;
                }
                50% {
                  transform: rotate(130deg) scale(1.15);
                  opacity: 1;
                }
              }
              .animate-foot-step-up {
                animation: footStepPulseUp 3s ease-in-out infinite;
              }
              .animate-foot-step-down {
                animation: footStepPulseDown 3s ease-in-out infinite;
              }
            `}</style>

            {/* SVG Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400">
              {/* Wavy Line with animated dash to guide the eye */}
              <path 
                d="M 0 200 C 50 200, 50 250, 100 250 C 200 250, 200 150, 300 150 C 400 150, 400 250, 500 250 C 600 250, 600 150, 700 150 C 800 150, 800 250, 900 250 C 950 250, 950 200, 1000 200" 
                fill="none" 
                stroke="#2B5A5F" 
                strokeWidth="1.5"
                strokeDasharray="12 12"
                className="animate-flow opacity-60"
              />
              
              {/* Vertical Connection Lines */}
              {touchpoints.map((tp) => (
                <line 
                  key={`line-${tp.id}`}
                  x1={tp.x} 
                  y1={tp.y} 
                  x2={tp.x} 
                  y2={tp.pos === 'top' ? tp.y - 45 : tp.y + 45} 
                  stroke="#2B5A5F" 
                  strokeWidth="1.5"
                />
              ))}
            </svg>

            {/* Barefoot Icons with directional path rotation & minimalist animation */}
            {smallDots.map((dot) => (
              <div 
                key={`sdot-${dot.id}`}
                className={`absolute w-7 h-7 -ml-[14px] -mt-[14px] flex items-center justify-center pointer-events-none ${
                  dot.direction === 'up' ? 'animate-foot-step-up' : 'animate-foot-step-down'
                }`}
                style={{ 
                  left: dot.x, 
                  top: dot.y,
                  animationDelay: `${dot.id * 0.45}s`
                }}
              >
                <Image 
                  src={dot.img} 
                  alt={dot.alt} 
                  width={28} 
                  height={28} 
                  className="w-full h-full object-contain"
                />
              </div>
            ))}

            {/* Main Touchpoint Dots with Numbers to guide the eye */}
            {touchpoints.map((tp, index) => (
              <div 
                key={`dot-${tp.id}`}
                className="absolute w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-mali font-bold text-[14px] -ml-[16px] -mt-[16px] shadow-md border-[3px] border-[#FAF7F5] z-10"
                style={{ left: tp.x, top: tp.y }}
              >
                {index + 1}
              </div>
            ))}

            {/* Text Labels */}
            {touchpoints.map((tp) => (
              <div 
                key={`txt-${tp.id}`}
                className="absolute w-[180px] -ml-[90px] text-center flex flex-col justify-end"
                style={{ 
                  left: tp.x, 
                  top: tp.pos === 'top' ? tp.y - 100 : tp.y + 55,
                  height: tp.pos === 'top' ? '45px' : 'auto'
                }}
              >
                <span className="font-mali font-semibold text-[15px] text-primary leading-[1.3]">{tp.title}</span>
              </div>
            ))}
            
          </div>
        </div>

        {/* Mobile Top-to-Bottom Vertical Timeline Container */}
        <div className="block md:hidden w-full bg-[#FAF7F5] rounded-[32px] p-6 sm:p-8 shadow-sm border border-primary/5 font-sans">
          <div className="flex flex-col gap-6 relative px-1">
            {touchpoints.map((tp, index) => {
              const footIcon = index % 2 === 0 ? bareFootBlue : bareFootBrown;
              const isLast = index === touchpoints.length - 1;
              return (
                <div key={`m-tp-${tp.id}`} className="relative flex items-center gap-4 py-2">
                  {/* Step Number Circle */}
                  <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-primary text-white font-mali font-bold text-[15px] shadow-md border-[3px] border-[#FAF7F5] z-10">
                    {index + 1}
                  </div>

                  {/* Step Title */}
                  <div className="font-mali font-semibold text-[16px] text-primary leading-[1.35]">
                    {tp.title}
                  </div>

                  {/* Vertical Dotted Line & Footprint between steps */}
                  {!isLast && (
                    <div className="absolute left-[17px] top-[38px] bottom-[-24px] flex flex-col items-center justify-between z-0 pointer-events-none">
                      <div className="w-[1.5px] h-[calc(50%-14px)] bg-[#2B5A5F]/40 border-l border-dashed border-[#2B5A5F]"></div>
                      <div className="w-7 h-7 bg-[#FAF7F5] rounded-full flex items-center justify-center z-10 border border-[#2B5A5F]/15 shadow-sm">
                        <Image 
                          src={footIcon} 
                          alt="Footprint icon" 
                          width={20} 
                          height={20} 
                          className="w-full h-full object-contain rotate-180 animate-pulse opacity-90" 
                        />
                      </div>
                      <div className="w-[1.5px] h-[calc(50%-14px)] bg-[#2B5A5F]/40 border-l border-dashed border-[#2B5A5F]"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
