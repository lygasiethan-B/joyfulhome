export default function Footer() {
  return (
    <footer className="bg-[#1D3B40] pt-7 pb-8 px-10 flex items-center justify-between gap-4 flex-wrap border-t border-[#122A2E]">
      <div className="font-mali font-bold text-[22px] text-white tracking-wide">JoyfulHome</div>
      <div className="text-[13.5px] font-sans font-light text-[#A8C7CD] opacity-90 text-right mr-16">
        Professional Excellence. Compassionate Care. Confident Beginnings. © {new Date().getFullYear()} JoyfulHome
      </div>
    </footer>
  );
}
