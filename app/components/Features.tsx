import FadeIn from "./FadeIn";

const features = [
  {
    icon: "🌊",
    title: "Panoramic Ocean Views",
    desc: "Floor-to-ceiling windows and private terraces with unobstructed Pacific views from high above.",
  },
  {
    icon: "🍳",
    title: "Full Equipped Kitchen",
    desc: "Stainless appliances, gas stove, refrigerator, oven, and all cookware for home-style comfort.",
  },
  {
    icon: "❄️",
    title: "Central A/C & internet",
    desc: "Central air conditioning, ceiling fans, smart TV, and high-speed fiber internet throughout the unit.",
  },
  {
    icon: "🛏",
    title: "2 and 3 Bedrooms units",
    desc: "Sleeping arrangements for up to 6 guests across three private bedrooms, each with quality linens and dedicated closet space.",
  },
  {
    icon: "🤝",
    title: "Dedicated Concierge",
    desc: "OCCAN's bilingual team handles check-in, recommendations, excursions, and any request 7 days a week.",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    desc: "24-hour security and a trusted management team you can count on for every stay.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-site-black">
      <div className="max-w-[1200px] mx-auto px-6 md:px-15">
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[72px] items-end mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-[11px] text-white/60 text-[10px] tracking-[.3em] uppercase font-medium mb-3.5">
              <span className="block w-7 h-px bg-white/45" />
              What's Included
            </div>
            <h2 className="font-[family-name:var(--font-montserrat)] font-light text-[clamp(36px,4.2vw,58px)] leading-[1.08] text-white">
              Everything You
              <br />
              <em className="italic text-teal">Need. Nothing More.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-white/55 text-[15px] leading-[1.72] font-light">
              Every OCCAN property is fully furnished with premium appliances,
              high-speed internet, and all the comforts of home — so you can
              focus entirely on the Pacific horizon.
            </p>
          </FadeIn>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/7 border border-white/7 rounded-sm overflow-hidden">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.1}>
              <div className="bg-white/3 px-[34px] py-[38px] hover:bg-teal/8 transition-colors duration-300 h-full">
                <span className="text-2xl mb-[18px] block">{f.icon}</span>
                <h3 className="font-[family-name:var(--font-montserrat)] text-[21px] font-normal text-white mb-[9px]">
                  {f.title}
                </h3>
                <p className="text-[13px] leading-[1.65] text-white/48 font-light">
                  {f.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
