'use client';
import { useState } from 'react';
import Image from 'next/image';
import qrImg from '../../public/assets/QR Code.svg';
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
              Let’s partner with your family!
            </h2>

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

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-12 px-8 flex flex-col items-center justify-center relative min-h-[300px]">
            <div className="flex flex-col items-center">
              <div className="text-[12px] text-white/80 mb-3 font-sans uppercase tracking-widest font-bold">Or Scan to Chat</div>
              <div className="bg-white rounded-xl shadow-lg w-[140px] h-[140px] relative flex items-center justify-center p-2">
                <Image src={qrImg} alt="WhatsApp QR code" fill className="object-contain p-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
