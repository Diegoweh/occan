"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const benefits = [
  { num: "85%", label: "Occupancy High Season" },
  { num: "MXN", label: "Monthly Statements" },
  { num: "0", label: "Owner Headaches" },
  { num: "24/7", label: "Guest Support" },
];

export default function Owners() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    unit: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Handle form submission
  }

  const inputClass =
    "w-full px-[15px] py-[13px] border border-sand rounded-sm font-[family-name:var(--font-dm)] text-[13px] text-site-black bg-warm outline-none focus:border-teal focus:bg-white transition-colors duration-300";

  return (
    <section
      id="owners"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #055558 0%, #0A8A90 50%, #00bfc7 100%)",
      }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[72px] items-center">
          {/* Left: text + stats */}
          <FadeIn>
            <div className="inline-flex items-center gap-[11px] text-white/60 text-[10px] tracking-[.3em] uppercase font-medium mb-3.5">
              <span className="block w-7 h-px bg-white/45" />
              For Property Owners
            </div>
            <h2 className="font-[family-name:var(--font-montserrat)] font-light text-[clamp(36px,4.2vw,58px)] leading-[1.08] text-white">
              Turn Your Condo
              <br />
              Into Passive{" "}
              <em className="italic text-teal">Income.</em>
            </h2>
            <p className="text-white/78 text-[15px] leading-[1.78] font-light mt-[22px]">
              Do you own a unit at Camino al Mar? Let OCCAN Properties handle
              everything — from guest acquisition and professional photography
              to cleaning, check-in, and monthly revenue reporting. You earn;
              we manage.
            </p>
            <div className="grid grid-cols-2 gap-3.5 mt-9">
              {benefits.map((b) => (
                <div
                  key={b.label}
                  className="bg-white/10 border border-white/18 rounded-sm px-[18px] py-[18px] backdrop-blur-sm"
                >
                  <span className="font-[family-name:var(--font-montserrat)] text-[34px] font-light text-white leading-none block">
                    {b.num}
                  </span>
                  <span className="text-[10px] tracking-[.15em] uppercase text-white/55 mt-[3px] block">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={0.14}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-[4px] px-[44px] py-[44px] shadow-[0_28px_72px_rgba(0,0,0,.22)]"
            >
              <h3 className="font-[family-name:var(--font-montserrat)] text-[27px] font-normal text-site-black mb-1.5">
                Let's Talk Returns
              </h3>
              <p className="text-[13px] text-muted mb-7">
                Tell us about your unit — we'll send you a custom income
                projection.
              </p>

              <div className="grid grid-cols-2 gap-3.5 mb-4">
                <div>
                  <label className="block text-[10px] tracking-[.18em] uppercase text-muted font-medium mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="James"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[.18em] uppercase text-muted font-medium mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Miller"
                    className={inputClass}
                  />
                </div>
              </div>

              {[
                { name: "email", label: "Email Address", type: "email", placeholder: "james@email.com" },
                { name: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "+1 (555) 000-0000" },
                { name: "unit", label: "Unit / Floor (if known)", type: "text", placeholder: "e.g. Floor 18, Unit A" },
              ].map((f) => (
                <div key={f.name} className="mb-4">
                  <label className="block text-[10px] tracking-[.18em] uppercase text-muted font-medium mb-1.5">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    name={f.name}
                    value={form[f.name as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={f.placeholder}
                    className={inputClass}
                  />
                </div>
              ))}

              <div className="mb-4">
                <label className="block text-[10px] tracking-[.18em] uppercase text-muted font-medium mb-1.5">
                  Message (optional)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your property..."
                  className={`${inputClass} resize-none h-[76px]`}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal text-site-black py-[15px] rounded-sm font-[family-name:var(--font-dm)] text-[12px] font-medium tracking-[.12em] uppercase cursor-pointer hover:bg-[#00d8e3] hover:-translate-y-px transition-all duration-250 mt-1.5"
              >
                Get My Income Projection →
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
