const items = [
  "Professionally Managed",
  "Ocean-Front Tower",
  "Fully Furnished & Equipped",
  "Concierge Services",
  "USD Pricing Available",
];

export default function TrustBar() {
  return (
    <div className="bg-site-black px-6 md:px-15 py-[18px] flex flex-wrap items-center justify-center gap-5 md:gap-[52px]">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-center gap-[9px] text-white/55 text-[11px] tracking-[.12em] uppercase"
        >
          <span className="text-teal text-sm">✦</span>
          {item}
        </div>
      ))}
    </div>
  );
}
