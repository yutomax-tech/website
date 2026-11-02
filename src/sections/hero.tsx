import type { CSSProperties } from 'react';
import { ButtonLink } from '@/components/ui/button';
import { Icon, type IconName } from '@/components/ui/icon';
import { Container } from '@/components/ui/container';
import { heroContent } from '@/content/hero';

/** Staggered entrance: `rise` keyframe with a per-element delay. */
const rise = (delayMs: number): CSSProperties => ({ animationDelay: `${delayMs}ms` });

const trustStats: { value: string; label: string; icon: IconName }[] = [
  { value: '100%', label: 'Type-Safe & Scalable', icon: 'shield-check' },
  { value: '< 50ms', label: 'P99 Target Latency', icon: 'zap' },
  { value: '0-Lockin', label: 'Clean Architecture', icon: 'layers' },
];

/* ── Architecture diagram geometry (viewBox 0 0 400 250) ── */
const flows = [
  { id: 'web', d: 'M100 56 C128 56 120 112 148 112', dur: '2.4s' },
  { id: 'ai', d: 'M100 194 C128 194 120 138 148 138', dur: '2.8s' },
  { id: 'data', d: 'M252 112 C280 112 272 56 300 56', dur: '2.2s' },
  { id: 'edge', d: 'M252 138 C280 138 272 194 300 194', dur: '2.6s' },
] as const;

const nodes = [
  { x: 20, y: 32, title: 'Web / App', sub: 'Next.js 16', accent: true },
  { x: 20, y: 170, title: 'AI Models', sub: 'LLM / Vision', accent: false },
  { x: 300, y: 32, title: 'Data Fabric', sub: 'PostgreSQL', accent: false },
  { x: 300, y: 170, title: 'Cloud Edge', sub: 'AWS / Vercel', accent: true },
] as const;

const throughputBars = [38, 52, 44, 68, 58, 76, 64, 88, 72, 94, 82, 100];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-10 pb-20 md:pt-14 md:pb-28 lg:pt-16 lg:pb-32">
      {/* ── Background ───────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {/* Aurora blobs */}
        <div className="absolute -top-48 left-[8%] h-[560px] w-[560px] rounded-full bg-brand-600/25 blur-[120px] animate-aurora" />
        <div className="absolute top-[10%] right-[-6%] h-[520px] w-[520px] rounded-full bg-fuchsia-600/15 blur-[130px] animate-aurora-slow" />
        <div className="absolute bottom-[-20%] left-[35%] h-[440px] w-[440px] rounded-full bg-cyan-500/10 blur-[120px] animate-aurora" />

        {/* Top spotlight beam */}
        <div className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(129,140,248,0.22),transparent_65%)]" />

        {/* Grid, faded out towards the edges */}
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />

        {/* Fade into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-surface-primary" />
      </div>

      <Container wide>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* ── Left: copy & CTAs ───────────────────────── */}
          <div className="flex flex-col items-start text-left lg:col-span-7">
            {/* Pill tag with gradient border */}
            <div
              className="mb-7 rounded-full bg-gradient-to-r from-brand-500/60 via-fuchsia-400/40 to-cyan-400/50 p-px animate-rise"
              style={rise(0)}
            >
              <div className="inline-flex items-center gap-2.5 rounded-full bg-[rgba(6,6,14,0.92)] px-4 py-1.5 font-mono text-xs text-brand-200 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping-slow" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span>Full-Lifecycle Product &amp; Software Engineering</span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className="mb-7 text-[2.6rem] font-bold leading-[1.05] tracking-tight text-content-primary xs:text-5xl sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] animate-rise"
              style={rise(80)}
            >
              We Engineer{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-brand-300 via-fuchsia-300 to-cyan-300 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
                  Software
                </span>
                {/* Hand-drawn underline */}
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-brand-400/80"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M2 9 C 50 2, 120 2, 198 7" stroke="url(#hero-underline)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="hero-underline" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="50%" stopColor="#f0abfc" />
                      <stop offset="100%" stopColor="#67e8f9" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              That Scales
            </h1>

            {/* Subheadline */}
            <p
              className="mb-10 max-w-xl text-body-lg leading-relaxed text-content-secondary animate-rise"
              style={rise(160)}
            >
              {heroContent.subheadline}
            </p>

            {/* CTAs */}
            <div
              className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center animate-rise"
              style={rise(240)}
            >
              <ButtonLink
                href={heroContent.primaryCTA.href}
                variant="primary"
                size="lg"
                className="group relative w-full overflow-hidden shadow-[0_0_0_1px_rgba(129,140,248,0.4),0_10px_40px_-8px_rgba(99,102,241,0.75)] hover:shadow-[0_0_0_1px_rgba(165,180,252,0.6),0_14px_50px_-6px_rgba(99,102,241,0.95)] sm:w-auto"
              >
                {/* Shine sweep */}
                <span
                  className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"
                  aria-hidden="true"
                />
                <span className="relative">{heroContent.primaryCTA.label}</span>
                <Icon name="arrow-right" size={16} className="relative transition-transform duration-300 group-hover:translate-x-1" />
              </ButtonLink>
              <ButtonLink
                href={heroContent.secondaryCTA.href}
                variant="secondary"
                size="lg"
                className="group w-full border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-brand-400/50 hover:bg-white/[0.06] sm:w-auto"
              >
                <span>{heroContent.secondaryCTA.label}</span>
                <Icon
                  name="chevron-down"
                  size={16}
                  className="text-content-tertiary transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-brand-300"
                />
              </ButtonLink>
            </div>

            {/* Trust stats */}
            <div
              className="mt-12 grid w-full max-w-xl grid-cols-3 gap-2 sm:gap-3 animate-rise"
              style={rise(320)}
            >
              {trustStats.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 sm:p-4 backdrop-blur-sm transition-colors duration-300 hover:border-brand-400/40 hover:bg-brand-500/[0.06]"
                >
                  <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-md bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/20">
                    <Icon name={stat.icon} size={14} />
                  </div>
                  <div className="bg-gradient-to-br from-white to-brand-200 bg-clip-text font-mono text-base font-bold text-transparent xs:text-xl md:text-2xl">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-[11px] leading-snug text-content-tertiary sm:text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: live architecture card ───────────── */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end animate-rise" style={rise(200)}>
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Rotating halo */}
              <div
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[conic-gradient(from_0deg,rgba(99,102,241,0.45),rgba(217,70,239,0.25),rgba(34,211,238,0.35),rgba(99,102,241,0.45))] opacity-35 blur-3xl animate-spin-slow"
                aria-hidden="true"
              />

              {/* Floating chips */}
              <div className="absolute -left-4 top-[42%] z-20 hidden items-center gap-2 rounded-lg border border-emerald-400/25 bg-[rgba(6,6,14,0.92)] px-3 py-2 text-xs font-medium text-emerald-300 shadow-xl backdrop-blur-md animate-float sm:flex lg:-left-10">
                <Icon name="check-circle" size={14} />
                <span>Tests passing</span>
              </div>
              <div
                className="absolute -right-3 bottom-24 z-20 hidden items-center gap-2 rounded-lg border border-fuchsia-400/25 bg-[rgba(6,6,14,0.92)] px-3 py-2 text-xs font-medium text-fuchsia-200 shadow-xl backdrop-blur-md animate-float sm:flex lg:-right-6"
                style={{ animationDelay: '-3s' }}
              >
                <Icon name="sparkles" size={14} />
                <span>AI-ready</span>
              </div>

              {/* Card with gradient border */}
              <div className="rounded-2xl bg-gradient-to-br from-brand-400/50 via-white/10 to-fuchsia-400/30 p-px shadow-[0_30px_80px_-20px_rgba(79,70,229,0.55)] animate-float [animation-duration:8s]">
                <div className="relative overflow-hidden rounded-2xl bg-[rgba(12,12,24,0.94)] p-5 backdrop-blur-xl md:p-6">
                  {/* Inner sheen */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.05] to-transparent" aria-hidden="true" />

                  {/* Window header */}
                  <div className="relative mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.07] pb-4">
                    <div className="flex min-w-0 items-center gap-2">
                      <span className="h-3 w-3 shrink-0 rounded-full bg-rose-500/80" />
                      <span className="h-3 w-3 shrink-0 rounded-full bg-amber-500/80" />
                      <span className="h-3 w-3 shrink-0 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 truncate font-mono text-xs text-content-tertiary">yutomax-core.pipeline.ts</span>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded border border-emerald-400/25 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </div>

                  {/* Architecture diagram */}
                  <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative h-auto w-full" role="img" aria-label="Architecture: web apps and AI models connect through the YUTOMAX API core engine to data and cloud edge services">
                    <defs>
                      <linearGradient id="hero-flow" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#c084fc" />
                      </linearGradient>
                      <linearGradient id="hero-hub" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#1e1b4b" />
                        <stop offset="100%" stopColor="#2e1065" />
                      </linearGradient>
                      <radialGradient id="hero-hub-glow">
                        <stop offset="0%" stopColor="#818cf8" stopOpacity="0.55" />
                        <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Hub glow */}
                    <circle cx="200" cy="125" r="90" fill="url(#hero-hub-glow)" className="animate-pulse-glow" />

                    {/* Connections: dim base + animated dashes + travelling packets */}
                    {flows.map((flow) => (
                      <g key={flow.id}>
                        <path d={flow.d} stroke="rgba(129,140,248,0.18)" strokeWidth="6" strokeLinecap="round" />
                        <path d={flow.d} stroke="url(#hero-flow)" strokeWidth="1.6" strokeDasharray="4 4" className="animate-dash-flow" />
                        <circle r="3" fill="#e0e7ff" className="motion-reduce:hidden">
                          <animateMotion dur={flow.dur} repeatCount="indefinite" path={flow.d} />
                        </circle>
                      </g>
                    ))}

                    {/* Edge nodes */}
                    {nodes.map((node) => (
                      <g key={node.title} transform={`translate(${node.x} ${node.y})`}>
                        <rect width="80" height="48" rx="10" fill="#0c0c18" stroke={node.accent ? '#818cf8' : '#4338ca'} strokeOpacity={node.accent ? 0.9 : 0.7} strokeWidth="1.5" />
                        <text x="40" y="21" textAnchor="middle" fill="#f0f0f8" fontSize="10" fontWeight="600" fontFamily="var(--font-mono)">
                          {node.title}
                        </text>
                        <text x="40" y="35" textAnchor="middle" fill={node.accent ? '#a5b4fc' : '#9898b0'} fontSize="8" fontFamily="var(--font-mono)">
                          {node.sub}
                        </text>
                      </g>
                    ))}

                    {/* Central hub */}
                    <g transform="translate(148 93)">
                      <rect x="-4" y="-4" width="112" height="72" rx="16" stroke="#818cf8" strokeOpacity="0.25" strokeDasharray="3 5" className="animate-dash-flow [animation-duration:3s]" />
                      <rect width="104" height="64" rx="12" fill="url(#hero-hub)" stroke="#a5b4fc" strokeWidth="1.8" />
                      <text x="52" y="28" textAnchor="middle" fill="#c7d2fe" fontSize="10.5" fontWeight="700" fontFamily="var(--font-mono)">
                        YUTOMAX API
                      </text>
                      <text x="52" y="44" textAnchor="middle" fill="#f0f0f8" fontSize="9" fontFamily="var(--font-mono)">
                        Core Engine
                      </text>
                      <circle cx="94" cy="10" r="3" fill="#34d399" />
                      <circle cx="94" cy="10" r="3" fill="#34d399" className="origin-[94px_10px] animate-ping-slow" />
                    </g>
                  </svg>

                  {/* Throughput sparkline */}
                  <div className="relative mt-2 flex items-end justify-between gap-4 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                    <div className="shrink-0">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-content-tertiary">Throughput</div>
                      <div className="mt-0.5 flex items-center gap-1 font-mono text-xs text-emerald-300">
                        <Icon name="trending-up" size={12} />
                        Scaling
                      </div>
                    </div>
                    <div className="flex h-9 flex-1 items-end justify-end gap-1" aria-hidden="true">
                      {throughputBars.map((h, i) => (
                        <span
                          key={i}
                          className="w-1.5 rounded-sm bg-gradient-to-t from-brand-600/40 to-brand-300 animate-pulse-glow"
                          style={{ height: `${h}%`, animationDelay: `${i * 120}ms` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Code terminal */}
                  <div className="relative mt-3 space-y-1 overflow-x-auto rounded-lg border border-white/[0.06] bg-[rgba(6,6,14,0.92)] p-3 font-mono text-xs text-content-secondary scrollbar-hide">
                    <div className="flex items-center justify-between text-[11px] text-content-tertiary">
                      <span>{'// High-concurrency architecture'}</span>
                      <span className="ml-2 flex shrink-0 items-center gap-1 text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Healthy
                      </span>
                    </div>
                    <div className="whitespace-nowrap text-content-primary">
                      <span className="text-brand-400">const</span> <span>system</span> ={' '}
                      <span className="text-indigo-300">createEngine</span>
                      {'({ '}
                      <span className="text-amber-300">tier</span>: <span className="text-emerald-300">&apos;enterprise&apos;</span>,{' '}
                      <span className="text-amber-300">ai</span>: <span className="text-fuchsia-300">true</span> {'})'};
                    </div>
                    <div className="whitespace-nowrap text-content-primary">
                      <span className="text-brand-400">await</span> system.
                      <span className="text-indigo-300">deploy</span>();
                      <span className="ml-0.5 inline-block h-3.5 w-[7px] translate-y-0.5 bg-brand-300 animate-blink" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
