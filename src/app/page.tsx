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
            href="https://wa.me/256700143143"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#25D366] text-white font-semibold shadow-lg shadow-[#25D366]/30 hover:bg-[#128C7E] transition-colors duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M17.6 6.32A8.86 8.86 0 0 0 12.05 4 8.94 8.94 0 0 0 3.11 15.9L2 20l4.2-1.1a8.9 8.9 0 0 0 4.27 1.09h.01a8.94 8.94 0 0 0 8.94-8.94c0-2.4-.94-4.65-2.62-6.32ZM12.05 18.4h-.01a7.4 7.4 0 0 1-3.77-1.03l-.27-.16-2.8.74.75-2.73-.18-.28a7.44 7.44 0 0 1 11.6-9.2 7.4 7.4 0 0 1 2.18 5.26 7.44 7.44 0 0 1-7.5 7.4Zm4.08-5.56c-.22-.11-1.32-.65-1.52-.73-.2-.07-.35-.11-.5.11-.15.22-.57.73-.7.88-.13.15-.26.16-.48.06-.22-.11-.94-.35-1.79-1.11-.66-.59-1.11-1.32-1.24-1.54-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38h-.43c-.15 0-.39.06-.59.28-.2.22-.77.75-.77 1.83s.79 2.12.9 2.27c.11.15 1.55 2.37 3.76 3.32.53.23.94.36 1.26.47.53.17 1.01.14 1.39.09.42-.06 1.32-.54 1.51-1.06.19-.52.19-.96.13-1.06-.06-.1-.2-.15-.42-.26Z" fill="#fff"></path>
            </svg>
            WhatsApp Us
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
