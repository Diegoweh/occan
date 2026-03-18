import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-warm text-center">
      <div className="max-w-[1200px] mx-auto px-6 md:px-15">
        <FadeIn>
          <div className="inline-flex items-center gap-[11px] justify-center text-teal-deep text-[10px] tracking-[.3em] uppercase font-medium mb-3.5">
            <span className="block w-7 h-px bg-teal" />
            Ready to Book
          </div>
          <h2 className="font-[family-name:var(--font-montserrat)] font-light text-[clamp(36px,4.2vw,58px)] leading-[1.08] text-site-black max-w-[680px] mx-auto mb-[18px]">
            Your Ocean Escape
            <br />
            Starts <em className="italic text-teal-deep">Here.</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.14}>
          <p className="text-[16px] text-muted font-light leading-[1.72] max-w-[520px] mx-auto mb-9">
            Whether you're planning a family vacation, romantic getaway, or
            extended stay in Mazatlán — OCCAN Properties has the perfect space
            waiting for you.
          </p>
        </FadeIn>

        <FadeIn delay={0.28}>
          <div className="flex flex-wrap gap-3.5 justify-center">
            <a
              href="https://wa.me/526690000000"
              className="inline-block bg-teal text-site-black px-[34px] py-[15px] text-[12px] font-medium tracking-[.1em] uppercase rounded-sm hover:bg-[#00d8e3] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,194,204,.35)] transition-all duration-250"
            >
              WhatsApp Us
            </a>
            <a
              href="mailto:hello@occanproperties.com"
              className="inline-block bg-site-black text-white px-[34px] py-[15px] text-[12px] font-medium tracking-[.1em] uppercase rounded-sm hover:bg-teal-dark hover:-translate-y-0.5 transition-all duration-250"
            >
              Send an Email
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.42}>
          <p className="mt-[22px] text-[12px] text-muted">
            Available in English &nbsp;·&nbsp; Se habla Español &nbsp;·&nbsp;
            Disponible en USD y MXN
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
