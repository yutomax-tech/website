import { ButtonLink } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Container } from '@/components/ui/container';
import { heroContent } from '@/content/hero';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-7 pb-20 md:pt-10 md:pb-28 lg:pt-12 lg:pb-36">
      {/* Background ambient radial glow spots */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-radial from-brand-600/18 via-brand-500/5 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 right-0 w-[450px] h-[450px] bg-gradient-radial from-indigo-500/10 via-transparent to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      {/* Subtle background tech grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px] -z-10"
        aria-hidden="true"
      />

      <Container wide>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-300 text-xs font-mono mb-6 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span>Full-Lifecycle Product & Software Engineering</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight text-content-primary leading-[1.1] mb-6">
              We Engineer{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-300 to-indigo-200">
                Software
              </span>{' '}
              That Scales
            </h1>

            {/* Subheadline */}
            <p className="text-body-lg text-content-secondary max-w-xl mb-10 leading-relaxed">
              {heroContent.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <ButtonLink
                href={heroContent.primaryCTA.href}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <span>{heroContent.primaryCTA.label}</span>
                <Icon name="arrow-right" size={16} />
              </ButtonLink>
              <ButtonLink
                href={heroContent.secondaryCTA.href}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <span>{heroContent.secondaryCTA.label}</span>
              </ButtonLink>
            </div>

            {/* Key trust badges */}
            <div className="grid grid-cols-2 xs:grid-cols-3 gap-4 xs:gap-6 pt-10 mt-10 border-t border-surface-border/60 w-full max-w-lg">
              <div>
                <div className="text-lg xs:text-xl md:text-2xl font-bold font-mono text-content-primary">
                  100%
                </div>
                <div className="text-xs text-content-tertiary">
                  Type-Safe & Scalable
                </div>
              </div>
              <div>
                <div className="text-lg xs:text-xl md:text-2xl font-bold font-mono text-content-primary">
                  &lt; 50ms
                </div>
                <div className="text-xs text-content-tertiary">
                  P99 Target Latency
                </div>
              </div>
              <div className="col-span-2 xs:col-span-1">
                <div className="text-lg xs:text-xl md:text-2xl font-bold font-mono text-content-primary">
                  0-Lockin
                </div>
                <div className="text-xs text-content-tertiary">
                  Clean Architecture
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Architecture Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-none relative">
              {/* Card Window Container */}
              <div className="relative rounded-2xl border border-surface-border bg-surface-secondary/80 backdrop-blur-xl shadow-2xl p-5 md:p-6 overflow-hidden">
                {/* Window header */}
                <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-surface-border/60 flex-wrap">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 shrink-0" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 shrink-0" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 shrink-0" />
                    <span className="ml-2 font-mono text-xs text-content-tertiary truncate">
                      yutomax-core.pipeline.ts
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/20 shrink-0">
                    Active Node
                  </span>
                </div>

                {/* SVG Visual Circuit / Architecture Diagram */}
                <div className="relative py-2">
                  <svg
                    viewBox="0 0 400 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                  >
                    {/* Connection lines */}
                    <path
                      d="M60 60 L180 60 L180 120 L320 120"
                      stroke="url(#gradient-line-1)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="opacity-70"
                    />
                    <path
                      d="M60 180 L180 180 L180 120"
                      stroke="url(#gradient-line-2)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="opacity-70"
                    />
                    <path
                      d="M180 120 L320 60"
                      stroke="rgba(99, 102, 241, 0.4)"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M180 120 L320 180"
                      stroke="rgba(99, 102, 241, 0.4)"
                      strokeWidth="1.5"
                    />

                    {/* Left Node: Client / API */}
                    <g transform="translate(20, 36)">
                      <rect
                        width="80"
                        height="48"
                        rx="8"
                        fill="#0c0c18"
                        stroke="#6366f1"
                        strokeWidth="1.5"
                      />
                      <text
                        x="40"
                        y="22"
                        textAnchor="middle"
                        fill="#f0f0f8"
                        fontSize="10"
                        fontWeight="600"
                        fontFamily="var(--font-mono)"
                      >
                        Web / App
                      </text>
                      <text
                        x="40"
                        y="36"
                        textAnchor="middle"
                        fill="#818cf8"
                        fontSize="8"
                        fontFamily="var(--font-mono)"
                      >
                        Next.js 16
                      </text>
                    </g>

                    {/* Left Node 2: Sensor / AI Input */}
                    <g transform="translate(20, 156)">
                      <rect
                        width="80"
                        height="48"
                        rx="8"
                        fill="#0c0c18"
                        stroke="#312e81"
                        strokeWidth="1.5"
                      />
                      <text
                        x="40"
                        y="22"
                        textAnchor="middle"
                        fill="#f0f0f8"
                        fontSize="10"
                        fontWeight="600"
                        fontFamily="var(--font-mono)"
                      >
                        AI Models
                      </text>
                      <text
                        x="40"
                        y="36"
                        textAnchor="middle"
                        fill="#9898b0"
                        fontSize="8"
                        fontFamily="var(--font-mono)"
                      >
                        LLM / Vision
                      </text>
                    </g>

                    {/* Central Hub: YUTOMAX Service Fabric */}
                    <g transform="translate(140, 92)">
                      <rect
                        width="80"
                        height="56"
                        rx="10"
                        fill="#141428"
                        stroke="#818cf8"
                        strokeWidth="2"
                      />
                      <text
                        x="40"
                        y="24"
                        textAnchor="middle"
                        fill="#818cf8"
                        fontSize="11"
                        fontWeight="bold"
                        fontFamily="var(--font-mono)"
                      >
                        YUTOMAX API
                      </text>
                      <text
                        x="40"
                        y="40"
                        textAnchor="middle"
                        fill="#f0f0f8"
                        fontSize="9"
                        fontFamily="var(--font-mono)"
                      >
                        Core Engine
                      </text>
                      {/* Pulse circle */}
                      <circle cx="72" cy="12" r="3" fill="#10b981" />
                    </g>

                    {/* Right Output 1: Multi-tenant Database */}
                    <g transform="translate(280, 36)">
                      <rect
                        width="90"
                        height="48"
                        rx="8"
                        fill="#0c0c18"
                        stroke="#312e81"
                        strokeWidth="1.5"
                      />
                      <text
                        x="45"
                        y="22"
                        textAnchor="middle"
                        fill="#f0f0f8"
                        fontSize="10"
                        fontWeight="600"
                        fontFamily="var(--font-mono)"
                      >
                        Data Fabric
                      </text>
                      <text
                        x="45"
                        y="36"
                        textAnchor="middle"
                        fill="#9898b0"
                        fontSize="8"
                        fontFamily="var(--font-mono)"
                      >
                        PostgreSQL
                      </text>
                    </g>

                    {/* Right Output 2: Cloud / Edge */}
                    <g transform="translate(280, 156)">
                      <rect
                        width="90"
                        height="48"
                        rx="8"
                        fill="#0c0c18"
                        stroke="#6366f1"
                        strokeWidth="1.5"
                      />
                      <text
                        x="45"
                        y="22"
                        textAnchor="middle"
                        fill="#f0f0f8"
                        fontSize="10"
                        fontWeight="600"
                        fontFamily="var(--font-mono)"
                      >
                        Cloud Edge
                      </text>
                      <text
                        x="45"
                        y="36"
                        textAnchor="middle"
                        fill="#818cf8"
                        fontSize="8"
                        fontFamily="var(--font-mono)"
                      >
                        AWS / Vercel
                      </text>
                    </g>

                    {/* Gradient definitions */}
                    <defs>
                      <linearGradient
                        id="gradient-line-1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#818cf8" stopOpacity="0.4" />
                      </linearGradient>
                      <linearGradient
                        id="gradient-line-2"
                        x1="0%"
                        y1="100%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#818cf8" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Bottom code snippet terminal bar */}
                <div className="mt-3 p-3 rounded-lg bg-surface-primary/90 border border-surface-border/40 font-mono text-xs text-content-secondary space-y-1 overflow-x-auto scrollbar-hide">
                  <div className="flex items-center justify-between text-[11px] text-content-tertiary">
                    <span>{'// High-concurrency architecture'}</span>
                    <span className="text-emerald-400 flex items-center gap-1 shrink-0 ml-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Healthy
                    </span>
                  </div>
                  <div className="text-content-primary whitespace-nowrap">
                    <span className="text-brand-400">const</span>{' '}
                    <span>system</span> ={' '}
                    <span className="text-indigo-300">createEngine</span>
                    {'({ '}
                    <span className="text-amber-300">tier</span>: &apos;enterprise&apos;,{' '}
                    <span className="text-amber-300">ai</span>: true {'})'};
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
