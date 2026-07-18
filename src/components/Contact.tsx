'use client';
import { useState } from 'react';
import Image from 'next/image';
import qrImg from '../../public/assets/QR Code.png';
import logoImg from '../../public/assets/JoyfulHome Logo Smile.png';

export default function Contact() {

  return (
    <>
      <section id="contact" className="relative bg-[#186C78] pt-[100px] px-8 pb-[100px] text-white overflow-hidden">
        <div className="absolute -top-[140px] -right-[160px] w-[500px] h-[500px] bg-[#14B8AA] opacity-15 rounded-full z-0"></div>

        <div className="relative z-10 max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div>
            <div className="font-passionate text-[42px] text-[#D8C3A5] mb-2">Get in Touch</div>
            <h2 className="font-mali font-medium text-[clamp(32px,4vw,44px)] leading-[1.2] mb-5 text-white tracking-wide">
              Let’s partner with your family.
            </h2>
            <p className="mt-[-8px] mb-6 text-white/80 font-sans tracking-widest text-[11px] md:text-[13px] uppercase font-bold">Professional Excellence. Compassionate Care. Confident Beginnings.</p>
            <p className="text-[16px] leading-[1.65] text-[#E7ECE9]/90 mb-10 max-w-[46ch] font-light">
              We are honoured to walk alongside you, send us a message and our team will respond within 24-48 hours.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a 
                href="https://forms.gle/Qu3ajZfwPAPoJxCP8" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-[#186C78] font-sans font-bold text-[15px] px-8 py-4 rounded-full hover:bg-[#E7ECE9] transition-colors shadow-lg"
              >
                Fill Contact Form
              </a>
              <a 
                href="https://wa.me/256700143143"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#21B55B] text-white font-sans font-bold text-[15px] px-8 py-4 rounded-full hover:bg-[#1CA04F] transition-colors shadow-lg"
              >
                Chat With Us
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-8 px-8 flex flex-col gap-7 relative">
            <a href="tel:+256700143143" className="flex items-center gap-5 text-white hover:opacity-85 transition-opacity">
              <span className="flex-none w-[42px] h-[42px] rounded-full bg-white/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              <span className="font-mali font-medium tracking-wide text-[16px]">+256 700 143 143</span>
            </a>
            <a href="mailto:joyfulhome718@gmail.com" className="flex items-center gap-5 text-white hover:opacity-85 transition-opacity">
              <span className="flex-none w-[42px] h-[42px] rounded-full bg-white/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              <span className="font-mali font-medium tracking-wide text-[16px]">joyfulhome718@gmail.com</span>
            </a>
            <a href="https://wa.me/256700143143" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 text-white hover:opacity-85 transition-opacity text-left">
              <span className="flex-none w-[42px] h-[42px] rounded-full bg-white/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 6.32A8.86 8.86 0 0 0 12.05 4 8.94 8.94 0 0 0 3.11 15.9L2 20l4.2-1.1a8.9 8.9 0 0 0 4.27 1.09h.01a8.94 8.94 0 0 0 8.94-8.94c0-2.4-.94-4.65-2.62-6.32ZM12.05 18.4h-.01a7.4 7.4 0 0 1-3.77-1.03l-.27-.16-2.8.74.75-2.73-.18-.28a7.44 7.44 0 0 1 11.6-9.2 7.4 7.4 0 0 1 2.18 5.26 7.44 7.44 0 0 1-7.5 7.4Zm4.08-5.56c-.22-.11-1.32-.65-1.52-.73-.2-.07-.35-.11-.5.11-.15.22-.57.73-.7.88-.13.15-.26.16-.48.06-.22-.11-.94-.35-1.79-1.11-.66-.59-1.11-1.32-1.24-1.54-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38h-.43c-.15 0-.39.06-.59.28-.2.22-.77.75-.77 1.83s.79 2.12.9 2.27c.11.15 1.55 2.37 3.76 3.32.53.23.94.36 1.26.47.53.17 1.01.14 1.39.09.42-.06 1.32-.54 1.51-1.06.19-.52.19-.96.13-1.06-.06-.1-.2-.15-.42-.26Z"></path></svg>
              </span>
              <span className="font-mali font-medium tracking-wide text-[16px]">WhatsApp</span>
            </a>
            
            <div className="mt-4 pt-6 border-t border-white/20 flex flex-col items-center">
              <div className="text-[12px] text-white/80 mb-3 font-sans uppercase tracking-widest font-bold">Or Scan to Chat</div>
              <div className="bg-white p-2.5 rounded-xl shadow-lg w-[120px] h-[120px] relative">
                <Image src={qrImg} alt="WhatsApp QR code" fill className="object-contain p-1.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
