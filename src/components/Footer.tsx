import Image from 'next/image';
import Link from 'next/link';
import logoLandscape from '../../public/assets/inverted logo joyfulhome landscape.png';

export default function Footer() {
  return (
    <footer className="bg-[#1D3B40] border-t border-[#122A2E] text-[#A8C7CD]">
      <div className="max-w-[1120px] mx-auto pt-16 pb-8 px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <div className="w-[180px] h-[48px] flex items-center overflow-hidden opacity-90 relative mb-4">
              <Image 
                src={logoLandscape} 
                alt="JoyfulHome Logo" 
                className="w-[180px] h-[180px] max-w-none object-contain absolute top-1/2 left-0 -translate-y-1/2" 
              />
            </div>
            <p className="text-[13px] font-sans font-light opacity-80 leading-relaxed max-w-[280px]">
              Professional Excellence. Compassionate Care. Confident Beginnings.
            </p>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="font-mali text-white text-[18px] mb-4">Reach Us</h4>
            <ul className="text-[13px] space-y-2 opacity-80 font-sans font-light">
              <li>Kampala, Uganda</li>
              <li>joyfulhome718@gmail.com</li>
              <li>+256 700 143 143</li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-mali text-white text-[18px] mb-4">Working Hours</h4>
            <ul className="text-[13px] space-y-2 opacity-80 font-sans font-light">
              <li>Mon–Fri: 8am–5pm</li>
              <li>Sat: 8am–12pm</li>
              <li>Sun: Closed</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-mali text-white text-[18px] mb-4">Legal</h4>
            <ul className="text-[13px] space-y-2 opacity-80 font-sans font-light">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/cookies" className="hover:text-white transition-colors">Cookies Policy</Link></li>
              <li><Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#A8C7CD]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[12px] opacity-70 font-sans font-light">
            © {new Date().getFullYear()} JoyfulHome. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
