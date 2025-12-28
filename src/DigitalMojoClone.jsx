import React from "react";

export default function DigitalMojoClone() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 text-sm font-semibold tracking-tight">
              DM
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Digital Mojo
              </p>
              <p className="text-xs text-slate-400">
                Branding & Digital Marketing
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <button className="hover:text-white">Services</button>
            <button className="hover:text-white">Work</button>
            <button className="hover:text-white">Industries</button>
            <button className="hover:text-white">About</button>
            <button className="hover:text-white">Blogs</button>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden text-xs font-medium text-slate-300 hover:text-white md:inline">
              Call: +91 99083 98763
            </button>
            <button className="rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-sky-500/30 hover:brightness-[1.07]">
              Get Strategy Call
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 md:pt-16">
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          {/* Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              #1 Digital Marketing Agency in India
            </div>

            <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Integrated{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                digital strategies
              </span>{" "}
              that turn clicks into compounding growth.
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              From SEO and performance marketing to social campaigns and
              conversion-focused landing pages, we blend creativity with
              data to help brands dominate every digital touchpoint.
            </p>

            <div className="grid gap-4 text-xs text-slate-200 sm:grid-cols-2">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>Performance-first SEO & search ads</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>Scroll-stopping social media campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>Marketing websites engineered to convert</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Real-time reporting & growth dashboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Branding, creatives & video production</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="rounded-full bg-slate-50 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-xl shadow-slate-900/50 hover:bg-slate-200">
                Let&apos;s Get Started
              </button>
              <button className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 hover:text-white">
                View Case Studies
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-xs text-slate-300">
              <div>
                <p className="text-sm font-semibold text-white">120+</p>
                <p className="text-[11px] uppercase tracking-[0.15em] text-slate-400">
                  Brands Elevated
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">15+</p>
                <p className="text-[11px] uppercase tracking-[0.15em] text-slate-400">
                  Sectors Served
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">₹50Cr+</p>
                <p className="text-[11px] uppercase tracking-[0.15em] text-slate-400">
                  Ad Spend Managed
                </p>
              </div>
            </div>
          </div>

          {/* Right: dashboard-ish card */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-indigo-500/10 to-emerald-400/10 blur-3xl" />
            <div className="space-y-3 rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-sky-900/40">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-200">
                  Live Campaign Overview
                </p>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                  +42% ROAS
                </span>
              </div>

              <div className="grid gap-3 text-xs sm:grid-cols-3">
                <div className="rounded-xl border border-slate-700/60 bg-slate-900/80 p-3">
                  <p className="text-[11px] text-slate-400">Search Ads</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    3.8x
                  </p>
                  <p className="text-[11px] text-emerald-300">
                    +27% conversions
                  </p>
                </div>
                <div className="rounded-xl border border-slate-700/60 bg-slate-900/80 p-3">
                  <p className="text-[11px] text-slate-400">Social</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    1.9M
                  </p>
                  <p className="text-[11px] text-sky-300">
                    monthly impressions
                  </p>
                </div>
                <div className="rounded-xl border border-slate-700/60 bg-slate-900/80 p-3">
                  <p className="text-[11px] text-slate-400">SEO</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    +74
                  </p>
                  <p className="text-[11px] text-emerald-300">
                    avg rank gain
                  </p>
                </div>
              </div>

              {/* Services mini-grid */}
              <div className="mt-4 space-y-2">
                <p className="text-xs font-medium text-slate-200">
                  Core Services
                </p>
                <div className="grid gap-2 text-[11px] text-slate-300 sm:grid-cols-2">
                  <div className="flex items-center justify-between rounded-lg border border-slate-800/80 bg-slate-900/80 px-3 py-2">
                    <span>Marketing Strategy</span>
                    <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-sky-300">
                      18 projects
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-slate-800/80 bg-slate-900/80 px-3 py-2">
                    <span>Performance Marketing</span>
                    <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-sky-300">
                      26 projects
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-slate-800/80 bg-slate-900/80 px-3 py-2">
                    <span>SEO Growth Playbook</span>
                    <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-sky-300">
                      34 sites
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-slate-800/80 bg-slate-900/80 px-3 py-2">
                    <span>Web Development</span>
                    <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-sky-300">
                      40+ builds
                    </span>
                  </div>
                </div>
              </div>

              {/* Awards / partners strip */}
              <div className="mt-4 border-t border-slate-800/80 pt-3">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Trusted By
                </p>
                <div className="mt-1 flex flex-wrap gap-3 text-[10px] text-slate-300">
                  <span className="rounded-full border border-slate-700 px-2 py-0.5">
                    Google Partner
                  </span>
                  <span className="rounded-full border border-slate-700 px-2 py-0.5">
                    GoodFirms Rated
                  </span>
                  <span className="rounded-full border border-slate-700 px-2 py-0.5">
                    Sortlist Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="mt-16 space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                Services
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl">
                Full-funnel growth for digital-first brands.
              </h2>
            </div>
            <button className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 hover:text-white">
              View All Services
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Marketing Strategy",
                desc: "Go-to-market, positioning and performance-led roadmaps tailored for your industry.",
              },
              {
                title: "SEO & Organic",
                desc: "Technical audits, content architecture and authority building to win high-intent keywords.",
              },
              {
                title: "Performance Ads",
                desc: "Search, social, display and remarketing campaigns built for measurable revenue.",
              },
              {
                title: "Social Media",
                desc: "Platform-native content, reels and community growth for brand love and recall.",
              },
              {
                title: "Web Development",
                desc: "Conversion-focused websites with clean UX, blazing speed and marketing analytics baked in.",
              },
              {
                title: "Branding & Creatives",
                desc: "Identity systems, brand guidelines and campaign creatives that stand out in crowded feeds.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition-transform hover:-translate-y-1 hover:border-sky-500/60"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 group-hover:text-sky-400">
                    {card.title}
                  </p>
                  <p className="mt-3 text-sm text-slate-300">{card.desc}</p>
                </div>
                <button className="mt-4 inline-flex items-center text-xs font-semibold text-sky-300 group-hover:text-sky-200">
                  Learn more
                  <span className="ml-1 text-[14px]">↗</span>
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS / CTA */}
        <section className="mt-16 grid gap-8 border border-sky-500/20 bg-sky-500/5 px-5 py-6 md:grid-cols-[1.4fr_minmax(0,1fr)] md:rounded-3xl">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              Client Stories
            </p>
            <p className="text-sm text-slate-100 sm:text-base">
              “Digital Mojo didn&apos;t just increase our traffic, they rebuilt
              the entire acquisition machine. Within 90 days we saw a 68%
              uplift in qualified leads with lower CAC.”
            </p>
            <p className="text-xs font-medium text-slate-300">
              Kiran • Director, KMG Dairy
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Ready for a strategy call?
            </p>
            <p className="text-sm text-slate-200">
              Share a few details about your brand and we&apos;ll map your next
              90 days of digital growth.
            </p>
            <button className="w-full rounded-full bg-slate-50 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 hover:bg-slate-200">
              Book Free Strategy Session
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-14 border-t border-slate-800 pt-5 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Digital Mojo · Hyderabad, India</p>
            <div className="flex gap-4">
              <button className="hover:text-slate-300">Privacy</button>
              <button className="hover:text-slate-300">Terms</button>
              <button className="hover:text-slate-300">Contact</button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
