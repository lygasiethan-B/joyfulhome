import Image from 'next/image';
import logoLandscape from '../../public/assets/inverted logo joyfulhome landscape.png';

export default function Footer() {
  return (
    <footer className="bg-[#1D3B40] border-t border-[#122A2E]">
      <div className="max-w-[1120px] mx-auto pt-6 pb-6 px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo Container - Clipping vertical empty space */}
        <div className="w-[180px] h-[48px] flex items-center justify-center overflow-hidden opacity-90 relative">
          <Image 
            src={logoLandscape} 
            alt="JoyfulHome Logo" 
            className="w-[180px] h-[180px] max-w-none object-contain absolute top-1/2 left-0 -translate-y-1/2" 
          />
        </div>
        
        <div className="text-[12px] md:text-[13.5px] font-sans font-light text-[#A8C7CD] opacity-90 text-center md:text-right leading-relaxed">
          Professional Excellence. Compassionate Care. Confident Beginnings. <br className="hidden md:block" />
          © {new Date().getFullYear()} JoyfulHome
        </div>
      </div>
    </footer>
  );
}
