import Image from "next/image";
import FadeIn from "./FadeIn";

const specs = [
  { label: "Total Area", value: "168 – 181 m²" },
  { label: "Bedrooms", value: "3 (Master + 2)" },
  { label: "Bathrooms", value: "1 Full + ½ Bath" },
  { label: "Main Terrace", value: "Included" },
  { label: "Master Suite", value: "Private bath + terrace" },
  { label: "Laundry Room", value: "In-unit" },
];

export default function FloorPlan() {
  return (
    <section id="floorplan" className="py-24 bg-warm">
      <div className="max-w-[1200px] mx-auto px-6 md:px-15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[76px] items-center">
          {/* Text & specs */}
          <FadeIn>
            <div className="inline-flex items-center gap-[11px] text-teal-deep text-[10px] tracking-[.3em] uppercase font-medium mb-3.5">
              <span className="block w-7 h-px bg-teal" />
              Floor Plan
            </div>
            <h2 className="font-[family-name:var(--font-montserrat)] font-light text-[clamp(36px,4.2vw,58px)] leading-[1.08] text-site-black">
              Condominios
              <br />
              <em className="italic text-teal-deep">A & F — Type</em>
            </h2>
            <p className="mt-[22px] text-[15px] leading-[1.78] font-light text-muted">
              A spacious, intelligently designed layout that separates living
              spaces from bedrooms, providing both family gathering areas and
              private retreats for every guest.
            </p>

            <ul className="mt-7 border-t border-sand">
              {specs.map((s) => (
                <li
                  key={s.label}
                  className="flex justify-between py-3.5 border-b border-sand text-[14px]"
                >
                  <span className="text-muted font-light">{s.label}</span>
                  <span className="text-site-black font-medium">{s.value}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Floor plan image */}
          <FadeIn delay={0.14}>
            <div className="bg-off-white border border-sand rounded-sm overflow-hidden">
              <div className="relative w-full h-[320px]">
                <Image
                  src="/images/plano-condo.webp"
                  alt="Floor plan for Condominios A and F"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain p-4"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
