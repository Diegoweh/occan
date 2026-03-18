import Image from "next/image";

const exploreLinks = [
  { label: "The Property", href: "#about" },
  { label: "Units", href: "#units" },
  { label: "Amenities", href: "#amenities" },
  { label: "Floor Plan", href: "#floorplan" },
  { label: "For Owners", href: "#owners" },
];

const contactLinks = [
  { label: "WhatsApp", href: "https://wa.me/526690000000" },
  { label: "Email Us", href: "mailto:hello@occanproperties.com" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
];

export default function Footer() {
  return (
    <>
      <footer className="bg-site-black px-6 md:px-15 py-14 md:py-[56px] grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-9 md:gap-[56px] border-t border-white/7">
        {/* Brand */}
        <div>
          <div className="mb-[18px] h-11 flex items-center">
            <Image
              src="/logo-occan.png"
              alt="OCCAN Properties"
              width={110}
              height={44}
              className="object-contain"
            />
          </div>
          <p className="text-[13px] text-white/38 leading-[1.7] font-light">
            Premium vacation rentals and property management in Mazatlán,
            Sinaloa — curated for the North American market.
          </p>
          <p className="text-[13px] text-white/38 leading-[1.7] font-light mt-2.5">
            📍 Camino al Mar, Mazatlán, Sinaloa, México
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-[10px] tracking-[.2em] uppercase text-teal font-medium mb-[18px]">
            Explore
          </h4>
          <ul className="space-y-[9px]">
            {exploreLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-white/45 text-[13px] font-light hover:text-teal transition-colors duration-300 no-underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[10px] tracking-[.2em] uppercase text-teal font-medium mb-[18px]">
            Contact
          </h4>
          <ul className="space-y-[9px]">
            {contactLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-white/45 text-[13px] font-light hover:text-teal transition-colors duration-300 no-underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>

      <div className="bg-site-black border-t border-white/5 px-6 md:px-15 py-[18px] flex flex-col sm:flex-row justify-between gap-2">
        <p className="text-[11px] text-white/22 font-light">
          © 2025 OCCAN Properties. All rights reserved.
        </p>
        <p className="text-[11px] text-white/22 font-light">
          Managed with care by{" "}
          <a href="#" className="text-teal no-underline">
            OCCAN Properties
          </a>
        </p>
      </div>
    </>
  );
}
