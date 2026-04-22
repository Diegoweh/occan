"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "./FadeIn";

const photos = [
  { label: "Main Terrace — Pacific View", tall: true, src: "/images/ocean-view.webp" },
  { label: "Open Living & Dining", tall: false, src: "/images/living-room.webp" },
  { label: "Private Balcony", tall: false, src: "/images/ocean-view-1.webp" },
  { label: "Fully Equipped Kitchen", tall: false, src: "/images/cook.webp" },
  { label: "Master Bedroom", tall: false, src: "/images/bedroom.webp" },
];

function GalleryItem({
  photo,
  delay,
}: {
  photo: (typeof photos)[0];
  delay: number;
}) {
  return (
    <motion.div
      className={`rounded-sm overflow-hidden relative bg-sand group ${
        photo.tall ? "row-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay, ease: "easeOut" }}
    >
      <div className="relative w-full h-full min-h-[200px] md:min-h-0 flex items-end">
        <Image
          src={photo.src}
          alt={photo.label}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="w-full px-[18px] py-3.5 bg-gradient-to-t from-black/68 to-transparent text-white/88 text-[10px] tracking-[.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {photo.label}
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-15">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-12">
          <FadeIn>
            <div className="inline-flex items-center gap-[11px] text-teal-deep text-[10px] tracking-[.3em] uppercase font-medium mb-3.5">
              <span className="block w-7 h-px bg-teal" />
              Inside the Property
            </div>
            <h2 className="font-[family-name:var(--font-montserrat)] font-light text-[clamp(36px,4.2vw,58px)] leading-[1.08] text-site-black">
              Every Room,
              <br />
              <em className="italic text-teal-deep">Thoughtfully Designed</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.14}>
            <a
              href="#contact"
              className="self-start inline-block bg-teal text-site-black px-[34px] py-[15px] text-[12px] font-medium tracking-[.1em] uppercase rounded-sm hover:bg-[#00d8e3] hover:-translate-y-0.5 transition-all duration-250"
            >
              Book Your Stay
            </a>
          </FadeIn>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr] grid-rows-[290px_290px] gap-[11px]">
          {photos.map((photo, i) => (
            <GalleryItem key={photo.label} photo={photo} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
