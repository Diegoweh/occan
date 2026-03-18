import Image from "next/image";
import FadeIn from "./FadeIn";

const pills = [
  { icon: "🏊", label: "heated Pool" },
  { icon: "🏖", label: "Private Beach Access" },
  { icon: "🌴", label: "Beach Club & Bar" },
  { icon: "🅿️", label: "Secure Parking" },
  { icon: "🏋", label: "Fitness Center" },
  { icon: "🛎", label: "Concierge Lobby" },
  { icon: "🕹️", label: "Games Room" },
  { icon: "🔐", label: "24/7 Security" },
  { icon: "💻", label: "Business Center" },
  { icon: "💆", label: "Spa" },
];

const imgs = [
  { label: "Pool & Beach", tall: true, src: "/images/resort.webp" },
  { label: "Pool Aerial", tall: false, src: "/images/resort-1.webp" },
  { label: "Building", tall: false, src: "/images/resort-2.webp" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-off-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-15">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-14 md:gap-[56px] items-center">
          {/* Text & pills */}
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-[11px] text-teal-deep text-[10px] tracking-[.3em] uppercase font-medium mb-3.5">
                <span className="block w-7 h-px bg-teal" />
                Resort Amenities
              </div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-light text-[clamp(36px,4.2vw,58px)] leading-[1.08] text-site-black">
                Beachfront Living,
                <br />
                <em className="italic text-teal-deep">Elevated.</em>
              </h2>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="mt-[18px] text-[15px] leading-[1.78] font-light text-muted">
                The Camino al Mar tower sits directly on the beach, offering
                resort-class amenities steps from your front door.
              </p>
              <div className="grid grid-cols-2 gap-3.5 mt-7">
                {pills.map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center gap-[9px] px-3.5 py-[11px] bg-white border border-sand rounded-sm text-[13px] text-body"
                  >
                    <span className="text-[16px]">{p.icon}</span>
                    {p.label}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Images */}
          <FadeIn delay={0.14}>
            <div className="grid grid-cols-2 gap-[11px]">
              {imgs.map((img) => (
                <div
                  key={img.label}
                  className={`relative rounded-sm overflow-hidden bg-sand ${
                    img.tall ? "row-span-2 h-[401px]" : "h-[195px]"
                  }`}
                >
                  <div className="relative w-full h-full flex items-end p-3">
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    <span className="relative z-10 text-white/75 text-[10px] tracking-widest uppercase">
                      {img.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
