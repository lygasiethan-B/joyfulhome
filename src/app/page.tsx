import Image from 'next/image';

export default function ComingSoon() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#E7ECE9] flex items-center justify-center font-sans">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-[#14B8AA] opacity-20 blur-[80px] md:blur-[120px] animate-jhFloat" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-[#D8C3A5] opacity-30 blur-[100px] md:blur-[150px] animate-jhFloatSlow" />
      <div className="absolute top-[20%] right-[10%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-[#146B78] opacity-10 blur-[60px] md:blur-[100px] animate-jhFloat" />

      {/* Glassmorphism Container */}
      <div className="relative z-10 w-[90%] max-w-2xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl p-10 md:p-16 text-center transform transition-all duration-700 hover:scale-[1.02]">
        
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image 
            src="/assets/JoyfulHome Logo_Landscape.png" 
            alt="Joyful Home Logo" 
            width={400} 
            height={133}
            className="drop-shadow-sm h-auto w-auto max-h-28 object-contain"
            priority
          />
        </div>

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#1F2A2E] tracking-tight mb-6">
          Something Joyful is Coming
        </h1>
        <p className="text-lg md:text-xl text-[#1F2A2E]/80 mb-10 max-w-xl mx-auto leading-relaxed">
          We are currently crafting a beautiful new digital home for Joyful Home. 
          Stay tuned for something amazing as we finalize the website.
        </p>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-[#14B8AA]/40"></div>
          <div className="w-2 h-2 rounded-full bg-[#14B8AA]"></div>
          <div className="h-px w-16 bg-[#14B8AA]/40"></div>
        </div>

        {/* Contact/Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="mailto:hello@joyfulhome.ug"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#146B78] text-white font-semibold shadow-lg shadow-[#146B78]/30 hover:bg-[#14B8AA] transition-colors duration-300 transform hover:-translate-y-1"
          >
            Contact Us
          </a>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-6 w-full text-center text-sm text-[#1F2A2E]/60 z-10">
        &copy; {new Date().getFullYear()} Joyful Home. All rights reserved.
      </div>
    </div>
  );
}
