"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/ocean-view.webp"
        alt="Oceanfront view from OCCAN at Camino al Mar in Mazatlan"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/5 to-black/72" />

      {/* Content */}
      <motion.div
        className="relative z-10 px-6 md:px-15 pb-16 md:pb-20 max-w-[860px]"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-3 text-teal text-[11px] tracking-[.25em] uppercase font-medium mb-[18px]">
          <span className="block w-9 h-px bg-teal" />
          Mazatlán, Mexico &nbsp;·&nbsp; Camino al Mar
        </div>

        <h1 className="font-[family-name:var(--font-montserrat)] font-light text-[clamp(52px,7vw,92px)] leading-none text-white mb-[22px]">
          Wake Up to
          <br />
          <em className="italic text-teal">Infinite Ocean.</em>
        </h1>

        <p className="text-white/76 text-[17px] font-light leading-[1.65] max-w-[520px] mb-10">
          Fully-furnished luxury condominiums with panoramic Pacific views,
          curated by OCCAN Properties — your trusted partner for premium
          vacation experiences on Mexico's Gold Coast.
        </p>

        <div className="flex flex-wrap gap-3.5">
          <a
            href="#contact"
            className="inline-block bg-teal text-site-black px-[34px] py-[15px] text-[12px] font-medium tracking-[.1em] uppercase rounded-sm hover:bg-[#00d8e3] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,194,204,.35)] transition-all duration-250"
          >
            Check Availability
          </a>
          <a
            href="#about"
            className="inline-block bg-transparent text-white px-[34px] py-[15px] text-[12px] font-medium tracking-[.1em] uppercase rounded-sm border border-white/38 hover:border-teal hover:text-teal transition-all duration-250"
          >
            Explore the Property
          </a>
        </div>
      </motion.div>

      {/* Stats – desktop only */}
      {/* <motion.div
        className="hidden lg:flex absolute right-15 bottom-20 z-10 flex-col gap-[22px]"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
      >
        {[
          { num: "168m²", label: "Living Space" },
          { num: "3", label: "Bedrooms" },
          { num: "25+", label: "Floors Up" },
        ].map((s) => (
          <div key={s.label} className="text-right border-r-2 border-teal pr-[18px]">
            <div className="font-[family-name:var(--font-montserrat)] text-[36px] font-light text-white leading-none">
              {s.num}
            </div>
            <div className="text-[10px] tracking-[.2em] uppercase text-white/55">{s.label}</div>
          </div>
        ))}
      </motion.div> */}
    </section>
  );
}
