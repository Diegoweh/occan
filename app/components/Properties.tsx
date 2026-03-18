import Image from "next/image";
import FadeIn from "./FadeIn";

const properties = [
  {
    code: "CAM 2204",
    title: "Beachfront Condo",
    summary:
      "High-floor Camino al Mar residence with direct Pacific views and a polished resort-style stay.",
    href: "https://occanproperties.com/detailed-property-listing-occan-properties/10-camino-al-mar-2204---beachfront-condo/",
    image: "/images/cam-2204.webp",
  },
  {
    code: "CAM 2206",
    title: "Beachfront Condo",
    summary:
      "Another premium Camino al Mar beachfront option for guests who want oceanfront comfort in the Golden Zone.",
    href: "https://occanproperties.com/detailed-property-listing-occan-properties/11-camino-al-mar-2206---beachfront-condo/",
    image: "/images/ocean-view.webp",
  },
  {
    code: "CAM 503",
    title: "Sandy Shores Beachfront Escape",
    summary:
      "A Camino al Mar stay positioned for easy beach access, pool time, and walkable Golden Zone dining.",
    href: "https://occanproperties.com/detailed-property-listing-occan-properties/24-sandy-shores-beachfront-escape---camino-al-mar-503/",
    image: "/images/cam-503.webp",
  },
  {
    code: "CAM 504",
    title: "Blue Haven Beachfront Escape",
    summary:
      "A bright beachfront unit curated for guests who want a clean, elevated base with ocean views.",
    href: "https://occanproperties.com/detailed-property-listing-occan-properties/31-blue-haven-beachfront-escape---camino-al-mar-504/",
    image: "/images/cam-504.webp",
  },

];

export default function Properties() {
  return (
    <section id="units" className="py-24 bg-site-black">
      <div className="max-w-[1200px] mx-auto px-6 md:px-15">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-end mb-12">
          <FadeIn>
            <div className="inline-flex items-center gap-[11px] text-white/60 text-[10px] tracking-[.3em] uppercase font-medium mb-3.5">
              <span className="block w-7 h-px bg-white/45" />
              Available Units
            </div>
            <h2 className="font-[family-name:var(--font-montserrat)] font-light text-[clamp(36px,4.2vw,58px)] leading-[1.08] text-white">
              Explore Camino al Mar
              <br />
              <em className="italic text-teal">Listings by OCCAN</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="max-w-[420px] text-white/55 text-[15px] leading-[1.72] font-light">
              Compare currently featured Camino al Mar residences and jump
              directly to each OCCAN listing for details and availability.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[14px]">
          {properties.map((property, i) => (
            <FadeIn key={property.code} delay={i * 0.08}>
              <article className="h-full rounded-sm overflow-hidden border border-white/8 bg-white/4 hover:bg-white/[0.06] transition-colors duration-300">
                <div className="relative h-[230px]">
                  <Image
                    src={property.image}
                    alt={`${property.code} at Camino al Mar`}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute left-4 bottom-4">
                    <span className="inline-flex items-center rounded-sm bg-teal px-3 py-2 text-[10px] tracking-[.18em] uppercase font-medium text-site-black">
                      {property.code}
                    </span>
                  </div>
                </div>

                <div className="px-5 py-5">
                  <h3 className="font-[family-name:var(--font-montserrat)] text-[28px] leading-none font-light text-white">
                    {property.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.72] text-white/52 font-light">
                    {property.summary}
                  </p>
                  <a
                    href={property.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-5 text-teal text-[11px] tracking-[.16em] uppercase font-medium no-underline hover:text-white transition-colors duration-250"
                  >
                    View Listing
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
