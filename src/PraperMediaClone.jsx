import React from "react";

export default function PraperMediaClone() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-xs font-semibold">
              PR
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">Praper Media</p>
              <p className="text-xs text-slate-400">
                Helping creators create.
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-xs font-medium text-slate-300 md:flex">
            <button className="hover:text-white">Services</button>
            <button className="hover:text-white">Work</button>
            <button className="hover:text-white">Academy</button>
            <button className="hover:text-white">About</button>
          </nav>

          <button className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 hover:border-sky-400">
            Get in touch
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 md:pt-16">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Post Production · Graphic Studio
            </p>
            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Built for{" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                creators who refuse
              </span>{" "}
              to ship boring videos.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              We edit long-form, short-form and thumbnails for top creators and
              brands – so they can focus on shooting while we handle retention,
              pacing and scroll-stopping visuals.
            </p>

            <div className="flex flex-wrap gap-3 text-xs text-slate-300">
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Long-form editing
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Shorts & Reels
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Thumbnail design
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Motion graphics
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="rounded-full bg-sky-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-sky-900/50 hover:bg-sky-400">
                Start a Project
              </button>
              <button className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 hover:text-white">
                View Showreel
              </button>
            </div>

            <div className="pt-3 text-xs text-slate-400">
              <p className="mb-1 uppercase tracking-[0.16em]">
                Trusted By
              </p>
              <div className="flex flex-wrap gap-4 text-[11px] text-slate-300">
                <span className="rounded border border-slate-700 px-2 py-1">
                  Top YouTube creators
                </span>
                <span className="rounded border border-slate-700 px-2 py-1">
                  Agencies & brands
                </span>
                <span className="rounded border border-slate-700 px-2 py-1">
                  Fast-growing startups
                </span>
              </div>
            </div>
          </div>

          {/* Right card: timeline / editor mock */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-cyan-400/10 to-emerald-400/10 blur-3xl" />
            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-slate-900/80">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2.5 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>
                <p className="text-[11px] text-slate-300">
                  Creator_Edit_Final_v7.prproj
                </p>
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">
                  4K • 24 FPS
                </span>
              </div>

              {/* Preview area */}
              <div className="border-b border-slate-800 bg-slate-900/80 p-4">
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-10 w-10 rounded-full border border-slate-700/80 bg-slate-900/80" />
                  </div>
                  <div className="absolute inset-x-6 bottom-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[11px] text-slate-200">
                      <div className="h-1.5 w-16 rounded-full bg-slate-700" />
                      <span>00:07 / 12:43</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-300">
                      <span className="rounded bg-slate-800 px-2 py-0.5">
                        CC
                      </span>
                      <span className="rounded bg-slate-800 px-2 py-0.5">
                        HD
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-2 bg-slate-950/80 px-4 py-3">
                <p className="text-[11px] text-slate-400">
                  Timeline – Hook • Value • CTA
                </p>
                <div className="h-16 rounded-xl border border-slate-800 bg-slate-900/80 p-1">
                  <div className="flex h-full gap-1">
                    <div className="flex-1 rounded bg-sky-500/50" />
                    <div className="flex-1 rounded bg-emerald-500/40" />
                    <div className="flex-1 rounded bg-sky-400/45" />
                    <div className="flex-1 rounded bg-amber-400/40" />
                  </div>
                </div>
                <div className="grid gap-2 text-[11px] text-slate-300 sm:grid-cols-3">
                  <div className="rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1.5">
                    Retention-first cuts
                  </div>
                  <div className="rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1.5">
                    Short-form repurposing
                  </div>
                  <div className="rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1.5">
                    Thumbnail iterations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="mt-16 space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                Services
              </p>
              <h2 className="mt-2 text-xl font-semibold sm:text-2xl">
                Editing systems that scale with your channel.
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                label: "Long-Form Video Editing",
                desc: "Retention-optimised storytelling for YouTube, podcasts and courses – from timeline to final export.",
                tag: "For weekly uploads",
              },
              {
                label: "Short-Form Vertical Editing",
                desc: "Shorts, Reels and TikToks that actually convert views into subscribers and buyers.",
                tag: "For daily posting",
              },
              {
                label: "Thumbnail Design",
                desc: "High-CTR thumbnails with strong concepts, typography and face treatments that fit your niche.",
                tag: "For higher CTR",
              },
            ].map((s) => (
              <article
                key={s.label}
                className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition-transform hover:-translate-y-1 hover:border-sky-500/70"
              >
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 group-hover:text-sky-400">
                    {s.label}
                  </p>
                  <p className="text-sm text-slate-300">{s.desc}</p>
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="rounded-full border border-slate-700 px-2 py-0.5">
                    {s.tag}
                  </span>
                  <button className="text-sky-300 group-hover:text-sky-200">
                    View details ↗
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ACADEMY / PROGRAM SECTION */}
        <section className="mt-16 grid gap-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 px-5 py-6 md:grid-cols-[1.4fr_minmax(0,1fr)]">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Academy
            </p>
            <h3 className="text-lg font-semibold text-slate-50 sm:text-xl">
              India&apos;s first agency-built editing program.
            </h3>
            <p className="text-sm text-slate-100">
              20 weeks of inside-the-agency training for editors who want to
              build careers with real client work, not just theory.
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-slate-100">
              <li>• Learn from working pros shipping daily client work</li>
              <li>• Edit real briefs from creators and agencies</li>
              <li>• Placement support with partner studios</li>
            </ul>
          </div>
          <div className="space-y-4 rounded-2xl border border-slate-700 bg-slate-950/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              Join the waitlist
            </p>
            <p className="text-xs text-slate-300">
              Drop your email and we&apos;ll send the next cohort dates and
              curriculum.
            </p>
            <div className="flex flex-col gap-2 text-xs sm:flex-row">
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
              <button className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 hover:bg-emerald-300">
                Notify Me
              </button>
            </div>
          </div>
        </section>

        {/* CONTACT STRIP */}
        <section className="mt-14 border border-slate-800 bg-slate-950/80 px-5 py-6 rounded-3xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Ready to offload your edits?
              </p>
              <p className="mt-1 text-sm text-slate-200">
                Tell us about your channel, upload frequency and budget. We’ll
                build a custom editing pod for you.
              </p>
            </div>
            <button className="rounded-full bg-slate-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 hover:bg-slate-200">
              Fill Project Form
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-10 border-t border-slate-800 pt-5 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Praper Media · India</p>
            <div className="flex gap-4">
              <button className="hover:text-slate-300">Instagram</button>
              <button className="hover:text-slate-300">YouTube</button>
              <button className="hover:text-slate-300">Careers</button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
