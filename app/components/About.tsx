import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 bg-warm">
      <div className="max-w-[1200px] mx-auto px-6 md:px-15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[76px] items-center">
          {/* Text */}
          <FadeIn>
            <div className="inline-flex items-center gap-[11px] text-teal-deep text-[10px] tracking-[.3em] uppercase font-medium mb-3.5">
              <span className="block w-7 h-px bg-teal" />
              The Experience
            </div>
            <h2 className="font-[family-name:var(--font-montserrat)] font-light text-[clamp(36px,4.2vw,58px)] leading-[1.08] text-site-black tracking-[-0.01em]">
              A Different Kind of
              <br />
              <em className="italic text-teal-deep">Coastal Stay</em>
            </h2>
            <p className="text-[16px] leading-[1.78] text-body font-light mt-[26px]">
              Perched high above the Pacific in Mazatlán's most prestigious
              beachfront tower, these condominiums redefine what a vacation
              rental can be. Floor-to-ceiling glass, private terraces, and
              uninterrupted ocean horizon — this is not a hotel room.
            </p>
            <p className="text-[16px] leading-[1.78] text-body font-light mt-4">
              OCCAN Properties hand-selects and professionally manages every
              unit in the portfolio, ensuring a consistent, elevated experience
              for guests from North America and beyond.
            </p>
            <a
              href="#contact"
              className="inline-block mt-7 bg-teal text-site-black px-[34px] py-[15px] text-[12px] font-medium tracking-[.1em] uppercase rounded-sm hover:bg-[#00d8e3] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,194,204,.35)] transition-all duration-250"
            >
              Request More Info
            </a>
          </FadeIn>

          {/* Visual */}
          <FadeIn delay={0.14}>
            <div className="relative">
              <div className="relative rounded-sm overflow-hidden h-[470px]">
                <Image
                  src="/images/ocean-view-1.webp"
                  alt="Ocean view terrace at OCCAN in Mazatlan"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-[18px] -left-[18px] bg-teal text-site-black px-[26px] py-[22px] rounded-sm">
                <span className="font-[family-name:var(--font-montserrat)] text-[40px] font-light leading-none block">
                  4.9★
                </span>
                <span className="text-[10px] tracking-[.2em] uppercase font-medium block mt-[3px]">
                  Guest Rating
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
