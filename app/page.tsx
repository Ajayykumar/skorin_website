import Image from "next/image";
import { AnimatedGradientText } from "@/components/aceternity/animated-gradient-text";
import { BackgroundDotsMasked } from "@/components/aceternity/background-dots-masked";
import { BackgroundSkewedLines } from "@/components/aceternity/background-skewed-lines";
import { BackgroundSkewedRectangles } from "@/components/aceternity/background-skewed-rectangles";
import { FloatingDock } from "@/components/aceternity/floating-dock";
import { HeroParallax } from "@/components/aceternity/hero-parallax";
import { LogoCloud } from "@/components/aceternity/logo-cloud";
import { NavbarWithChildren } from "@/components/aceternity/navbar-with-children";
import { Spotlight } from "@/components/aceternity/spotlight";
import { TextFlippingWords } from "@/components/aceternity/text-flipping-words";
import { LinkPreview } from "@/components/aceternity/link-preview";
import { TextRevealCard } from "@/components/aceternity/text-reveal-card";
import { HeroHighlight } from "@/components/aceternity/hero-highlight";
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect";
import { ColourfulText } from "@/components/aceternity/colourful-text";
import { FocusCards } from "@/components/aceternity/focus-cards";

export default function Home() {
  const dockItems = [
    {
      label: "Home",
      href: "/",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Services",
      href: "/services",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 6h16M4 12h16M4 18h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "Products",
      href: "/products",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 7h10v10H7V7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M7 3v4M17 3v4M7 17v4M17 17v4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "Contact",
      href: "/contact",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 6h16v12H4V6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="m4 7 8 6 8-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      external: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M17.5 6.5h.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      external: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6.5 9.5V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M6.5 6.5h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path
            d="M10.5 18v-4.5c0-2 1-3.5 3-3.5s3 1.5 3 3.5V18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M10.5 9.5V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M21 4.5v15A1.5 1.5 0 0 1 19.5 21h-15A1.5 1.5 0 0 1 3 19.5v-15A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Telegram",
      href: "https://t.me/",
      external: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21 5 3.8 11.7c-.8.3-.8 1.4 0 1.7l4.2 1.4 1.6 5.1c.2.6 1 .7 1.4.2l2.5-3.1 4.8 3.5c.5.3 1.2.1 1.3-.6L22 5.9c.1-.8-.6-1.4-1.3-.9Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M8 14.8 20.5 6.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <div className="relative">
        <BackgroundSkewedLines />
        <BackgroundDotsMasked className="opacity-80" />
        <Spotlight />

        <main className="relative mx-auto w-full max-w-6xl px-4 pb-28 sm:px-6">
          <section className="pt-14 sm:pt-20">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div className="flex flex-col gap-6">
                <div className="inline-flex w-fit items-center rounded-full border border-[#0B3C5D]/[.08] bg-white/70 px-4 py-2 text-sm font-semibold text-[#0B3C5D] shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-[#0B3C5D]/[.06] dark:text-white">
                  <AnimatedGradientText
                    text="Limited Availability • Premium IT Solutions • Proven Results"
                    className="font-semibold"
                  />
                </div>

                <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl">
                  <span className="block">
                    We build{" "}
                    <TextFlippingWords
                      words={["scalable systems", "automated workflows", "revenue-generating apps", "competitive advantages"]}
                      className="text-[#1F77B4] dark:text-[#17A2B8]"
                    />
                  </span>
                  <span className="block">that transform your business.</span>
                </h1>

                <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                  Trusted by startups, SMEs, and enterprises to deliver custom software solutions that drive efficiency, increase revenue, and create sustainable competitive advantages.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#1F77B4] px-6 text-base font-semibold text-white shadow-sm shadow-black/[.12] transition-opacity hover:opacity-95"
                  >
                    Start Your Project
                  </a>
                  <a
                    href="#process"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#0B3C5D]/[.08] bg-white/70 px-6 text-base font-semibold text-[#0B3C5D] shadow-sm backdrop-blur transition-opacity hover:opacity-95 dark:border-white/[.12] dark:bg-white/[.06] dark:text-white"
                  >
                    See How It Works
                  </a>
                </div>

                <div className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-[#17A2B8]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    98% On-Time Delivery
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-[#17A2B8]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Transparent Pricing
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-[#17A2B8]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Long-term Support
                  </div>
                </div>
              </div>

              <div className="relative">
                <BackgroundSkewedRectangles />
                <div className="relative overflow-hidden rounded-[28px] border border-[#0B3C5D]/[.08] bg-white/70 p-6 shadow-lg shadow-black/[.06] backdrop-blur dark:border-white/[.12] dark:bg-white/[.06]">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Business Impact</div>
                    <div className="flex items-center gap-1">
                      <svg className="h-4 w-4 text-[#17A2B8]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs font-medium text-[#17A2B8]">Verified Results</span>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-3">
                    <div className="rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 p-4 dark:border-white/[.12] dark:bg-black/20">
                      <div className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Revenue Growth</div>
                      <div className="mt-1 flex items-baseline gap-2">
                        <div className="text-2xl font-bold text-[#17A2B8]">+47%</div>
                        <div className="text-xs text-zinc-600 dark:text-zinc-400">average client increase</div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 p-4 dark:border-white/[.12] dark:bg-black/20">
                      <div className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Efficiency Gains</div>
                      <div className="mt-1 flex items-baseline gap-2">
                        <div className="text-2xl font-bold text-[#1F77B4]">-62%</div>
                        <div className="text-xs text-zinc-600 dark:text-zinc-400">operational costs reduced</div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 p-4 dark:border-white/[.12] dark:bg-black/20">
                      <div className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Time to Market</div>
                      <div className="mt-1 flex items-baseline gap-2">
                        <div className="text-2xl font-bold text-[#0B3C5D]">3x</div>
                        <div className="text-xs text-zinc-600 dark:text-zinc-400">faster delivery</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 rounded-xl bg-gradient-to-r from-[#1F77B4]/10 to-[#17A2B8]/10 p-3 dark:from-[#1F77B4]/20 dark:to-[#17A2B8]/20">
                    <div className="text-xs font-medium text-[#0B3C5D] dark:text-[#17A2B8]">
                      🎯 Currently onboarding limited new clients this quarter
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <HeroHighlight className="mt-16">
              <div className="rounded-[28px] border border-[#0B3C5D]/[.08] bg-gradient-to-br from-white/90 to-white/70 p-8 shadow-sm backdrop-blur dark:border-white/[.12] dark:from-black/30 dark:to-black/50">
                <div className="text-center">
                  <div className="inline-flex items-center rounded-full border border-[#0B3C5D]/[.08] bg-white/70 px-4 py-2 text-sm font-semibold text-[#0B3C5D] shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-white/[.06] dark:text-white">
                    <svg className="mr-2 h-4 w-4 text-[#1F77B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Our Services
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                    <TextGenerateEffect 
                      words={["Transform", "Your", "Business", "with", "Cutting-Edge", "Solutions"]} 
                      className="block"
                    />
                  </h2>
                  <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
                    From concept to deployment, we deliver <ColourfulText>exceptional digital experiences</ColourfulText> that drive growth and innovation.
                  </p>
                </div>

                <FocusCards className="mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {/* Web Development Service */}
                  <TextRevealCard 
                    revealText="Custom websites that convert visitors into customers"
                    className="group relative"
                  >
                    <div className="relative z-10">
                      <div className="mb-4 h-48 rounded-xl overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=200&fit=crop&crop=center" 
                          alt="Web Development"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#1F77B4] to-[#17A2B8] flex items-center justify-center">
                          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Web Development</h3>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
                        Responsive, fast, and secure web applications built with modern frameworks like React, Next.js, and Node.js.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-[#1F77B4]/10 text-[#1F77B4] dark:bg-[#1F77B4]/20">React</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-[#17A2B8]/10 text-[#17A2B8] dark:bg-[#17A2B8]/20">Next.js</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] dark:bg-[#0B3C5D]/20">Node.js</span>
                      </div>
                      <LinkPreview url="https://github.com" className="mt-4 inline-flex items-center text-sm font-semibold text-[#1F77B4] hover:text-[#17A2B8]">
                        View Portfolio →
                      </LinkPreview>
                    </div>
                  </TextRevealCard>

                  {/* Mobile App Development */}
                  <TextRevealCard 
                    revealText="Native and cross-platform mobile apps for iOS and Android"
                    className="group relative"
                  >
                    <div className="relative z-10">
                      <div className="mb-4 h-48 rounded-xl overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop&crop=center" 
                          alt="Mobile App Development"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#17A2B8] to-[#1F77B4] flex items-center justify-center">
                          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Mobile Apps</h3>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
                        High-performance mobile applications using React Native, Flutter, and native technologies for seamless user experiences.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-[#17A2B8]/10 text-[#17A2B8] dark:bg-[#17A2B8]/20">React Native</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-[#1F77B4]/10 text-[#1F77B4] dark:bg-[#1F77B4]/20">Flutter</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] dark:bg-[#0B3C5D]/20">iOS/Android</span>
                      </div>
                      <LinkPreview url="https://apps.apple.com" className="mt-4 inline-flex items-center text-sm font-semibold text-[#17A2B8] hover:text-[#1F77B4]">
                        View Apps →
                      </LinkPreview>
                    </div>
                  </TextRevealCard>

                  {/* UI/UX Design */}
                  <TextRevealCard 
                    revealText="Beautiful interfaces that users love to interact with"
                    className="group relative"
                  >
                    <div className="relative z-10">
                      <div className="mb-4 h-48 rounded-xl overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop&crop=center" 
                          alt="UI/UX Design"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">UI/UX Design</h3>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
                        User-centered design that creates intuitive, accessible, and visually stunning digital experiences.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500 dark:bg-purple-500/20">Figma</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-pink-500/10 text-pink-500 dark:bg-pink-500/20">Adobe XD</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20">Prototyping</span>
                      </div>
                      <LinkPreview url="https://www.figma.com" className="mt-4 inline-flex items-center text-sm font-semibold text-purple-500 hover:text-pink-500">
                        View Designs →
                      </LinkPreview>
                    </div>
                  </TextRevealCard>

                  {/* E-commerce Solutions */}
                  <TextRevealCard 
                    revealText="Powerful online stores that drive sales and growth"
                    className="group relative"
                  >
                    <div className="relative z-10">
                      <div className="mb-4 h-48 rounded-xl overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop&crop=center" 
                          alt="E-commerce"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">E-commerce</h3>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
                        Complete e-commerce solutions with secure payment processing, inventory management, and analytics.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-500 dark:bg-green-500/20">Shopify</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20">WooCommerce</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-teal-500/10 text-teal-500 dark:bg-teal-500/20">Custom</span>
                      </div>
                      <LinkPreview url="https://www.shopify.com" className="mt-4 inline-flex items-center text-sm font-semibold text-green-500 hover:text-emerald-500">
                        View Stores →
                      </LinkPreview>
                    </div>
                  </TextRevealCard>

                  {/* Cloud Solutions */}
                  <TextRevealCard 
                    revealText="Scalable cloud infrastructure for modern businesses"
                    className="group relative"
                  >
                    <div className="relative z-10">
                      <div className="mb-4 h-48 rounded-xl overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop&crop=center" 
                          alt="Cloud Solutions"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Cloud Solutions</h3>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
                        AWS, Azure, and Google Cloud deployment with auto-scaling, monitoring, and disaster recovery.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500 dark:bg-blue-500/20">AWS</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-500 dark:bg-cyan-500/20">Azure</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-sky-500/10 text-sky-500 dark:bg-sky-500/20">GCP</span>
                      </div>
                      <LinkPreview url="https://aws.amazon.com" className="mt-4 inline-flex items-center text-sm font-semibold text-blue-500 hover:text-cyan-500">
                        View Infrastructure →
                      </LinkPreview>
                    </div>
                  </TextRevealCard>

                  {/* AI & Automation */}
                  <TextRevealCard 
                    revealText="Intelligent automation that transforms your workflows"
                    className="group relative"
                  >
                    <div className="relative z-10">
                      <div className="mb-4 h-48 rounded-xl overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop&crop=center" 
                          alt="AI & Automation"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">AI & Automation</h3>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
                        Machine learning, chatbots, and workflow automation to streamline operations and enhance decision-making.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-orange-500/10 text-orange-500 dark:bg-orange-500/20">OpenAI</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-red-500/10 text-red-500 dark:bg-red-500/20">TensorFlow</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-500 dark:bg-yellow-500/20">ML</span>
                      </div>
                      <LinkPreview url="https://openai.com" className="mt-4 inline-flex items-center text-sm font-semibold text-orange-500 hover:text-red-500">
                        View AI Solutions →
                      </LinkPreview>
                    </div>
                  </TextRevealCard>
                </FocusCards>

                {/* CTA Section */}
                <div className="mt-12 text-center">
                  <div className="inline-flex items-center rounded-full border border-[#0B3C5D]/[.08] bg-white/70 px-6 py-3 shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-black/30">
                    <TextGenerateEffect 
                      words={["Ready", "to", "transform", "your", "business?"]} 
                      className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                      delay={50}
                    />
                  </div>
                  <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <LinkPreview url="/contact">
                      <a className="inline-flex h-12 items-center justify-center rounded-full bg-[#1F77B4] px-8 text-base font-semibold text-white shadow-lg transition-opacity hover:opacity-95">
                        Get Started Today
                      </a>
                    </LinkPreview>
                    <LinkPreview url="/portfolio">
                      <a className="inline-flex h-12 items-center justify-center rounded-full border border-[#0B3C5D]/[.08] bg-white/70 px-8 text-base font-semibold text-[#0B3C5D] shadow-sm backdrop-blur transition-opacity hover:opacity-95 dark:border-white/[.12] dark:bg-white/[.06] dark:text-white">
                        View Our Work
                      </a>
                    </LinkPreview>
                  </div>
                </div>
              </div>
            </HeroHighlight>

             {/* Trusted By Section */}
            <div className="mt-16 rounded-[28px] border border-[#0B3C5D]/[.08] bg-gradient-to-br from-white/90 to-white/70 p-8 shadow-sm backdrop-blur dark:border-white/[.12] dark:from-black/30 dark:to-black/50">
              <div className="text-center">
                <div className="inline-flex items-center rounded-full border border-[#0B3C5D]/[.08] bg-white/70 px-4 py-2 text-sm font-semibold text-[#0B3C5D] shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-white/[.06] dark:text-white">
                  <svg className="mr-2 h-4 w-4 text-[#1F77B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Trusted by leading companies
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
                  Partners in Innovation
                </h2>
                <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
                  From startups to Fortune 500s, industry leaders trust Skorin to deliver exceptional digital experiences.
                </p>
              </div>
              <div className="mt-8">
                <LogoCloud />
              </div>
            </div>

            {/* Social Proof Section */}
            <div className="mt-16 rounded-[28px] border border-[#0B3C5D]/[.08] bg-gradient-to-br from-white/90 to-white/70 p-8 shadow-sm backdrop-blur dark:border-white/[.12] dark:from-black/30 dark:to-black/50">
              <div className="text-center">
                <div className="inline-flex items-center rounded-full border border-[#0B3C5D]/[.08] bg-white/70 px-4 py-2 text-sm font-semibold text-[#0B3C5D] shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-white/[.06] dark:text-white">
                  <svg className="mr-2 h-4 w-4 text-[#17A2B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Client Success Stories
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                  Results That Speak for Themselves
                </h2>
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
                  Don't just take our word for it. Hear what our clients have to say about their transformation journey.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="group relative">
                  <div className="relative overflow-hidden rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-white/[.12] dark:bg-black/20">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1F77B4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <svg className="h-8 w-8 text-[#1F77B4]/20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      
                      {/* Client Info */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#1F77B4] to-[#1F77B4]/80 p-0.5">
                            <div className="h-full w-full rounded-full bg-white/90 dark:bg-black/80 flex items-center justify-center">
                              <span className="text-sm font-bold text-[#1F77B4]">SC</span>
                            </div>
                          </div>
                          <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white dark:border-black/20"></div>
                        </div>
                        <div>
                          <div className="font-bold text-zinc-900 dark:text-white">Sarah Chen</div>
                          <div className="text-sm text-zinc-600 dark:text-zinc-400">CEO, TechStart Inc.</div>
                        </div>
                      </div>
                      
                      {/* Testimonial */}
                      <div className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                        "Skorin transformed our operations. We've seen 47% revenue growth and cut operational costs by 62%. Their team delivers on time, every time."
                      </div>
                      
                      {/* Results Badge */}
                      <div className="inline-flex items-center rounded-full bg-[#1F77B4]/10 px-3 py-1 text-xs font-semibold text-[#1F77B4]">
                        <svg className="mr-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        47% Revenue Growth
                      </div>
                      
                      {/* Rating */}
                      <div className="mt-4 flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-2 text-xs text-zinc-600 dark:text-zinc-400">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="relative overflow-hidden rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-white/[.12] dark:bg-black/20">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#17A2B8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <svg className="h-8 w-8 text-[#17A2B8]/20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      
                      {/* Client Info */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#17A2B8] to-[#17A2B8]/80 p-0.5">
                            <div className="h-full w-full rounded-full bg-white/90 dark:bg-black/80 flex items-center justify-center">
                              <span className="text-sm font-bold text-[#17A2B8]">MR</span>
                            </div>
                          </div>
                          <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white dark:border-black/20"></div>
                        </div>
                        <div>
                          <div className="font-bold text-zinc-900 dark:text-white">Michael Rodriguez</div>
                          <div className="text-sm text-zinc-600 dark:text-zinc-400">CTO, Enterprise Solutions</div>
                        </div>
                      </div>
                      
                      {/* Testimonial */}
                      <div className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                        "The custom software Skorin built for us scaled to 1M+ users without a hitch. Their expertise in MERN and Spring Boot is unmatched."
                      </div>
                      
                      {/* Results Badge */}
                      <div className="inline-flex items-center rounded-full bg-[#17A2B8]/10 px-3 py-1 text-xs font-semibold text-[#17A2B8]">
                        <svg className="mr-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        1M+ Users Scaled
                      </div>
                      
                      {/* Rating */}
                      <div className="mt-4 flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-2 text-xs text-zinc-600 dark:text-zinc-400">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="relative overflow-hidden rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-white/[.12] dark:bg-black/20">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0B3C5D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <svg className="h-8 w-8 text-[#0B3C5D]/20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      
                      {/* Client Info */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0B3C5D] to-[#0B3C5D]/80 p-0.5">
                            <div className="h-full w-full rounded-full bg-white/90 dark:bg-black/80 flex items-center justify-center">
                              <span className="text-sm font-bold text-[#0B3C5D]">EW</span>
                            </div>
                          </div>
                          <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white dark:border-black/20"></div>
                        </div>
                        <div>
                          <div className="font-bold text-zinc-900 dark:text-white">Emily Watson</div>
                          <div className="text-sm text-zinc-600 dark:text-zinc-400">Founder, StartupScale</div>
                        </div>
                      </div>
                      
                      {/* Testimonial */}
                      <div className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                        "We went from concept to market in 8 weeks instead of 6 months. Skorin's automation solutions saved us 40+ hours per week."
                      </div>
                      
                      {/* Results Badge */}
                      <div className="inline-flex items-center rounded-full bg-[#0B3C5D]/10 px-3 py-1 text-xs font-semibold text-[#0B3C5D]">
                        <svg className="mr-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        8 Weeks to Market
                      </div>
                      
                      {/* Rating */}
                      <div className="mt-4 flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-2 text-xs text-zinc-600 dark:text-zinc-400">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overall Stats */}
              <div className="mt-12 text-center">
                <div className="inline-flex items-center rounded-full border border-[#0B3C5D]/[.08] bg-white/70 px-6 py-3 shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-black/30">
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#1F77B4]">4.9</div>
                      <div className="text-xs text-zinc-600 dark:text-zinc-400">Average Rating</div>
                    </div>
                    <div className="h-8 w-px bg-[#0B3C5D]/20"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#17A2B8]">50+</div>
                      <div className="text-xs text-zinc-600 dark:text-zinc-400">Happy Clients</div>
                    </div>
                    <div className="h-8 w-px bg-[#0B3C5D]/20"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#0B3C5D]">98%</div>
                      <div className="text-xs text-zinc-600 dark:text-zinc-400">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="mt-16 rounded-[28px] border border-[#0B3C5D]/[.08] bg-gradient-to-br from-white/90 to-white/70 p-8 shadow-sm backdrop-blur dark:border-white/[.12] dark:from-black/30 dark:to-black/50">
              <div className="text-center">
                <div className="inline-flex items-center rounded-full border border-[#0B3C5D]/[.08] bg-white/70 px-4 py-2 text-sm font-semibold text-[#0B3C5D] shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-white/[.06] dark:text-white">
                  <svg className="mr-2 h-4 w-4 text-[#1F77B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Our Tech Stack
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                  Technologies we build with
                </h2>
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
                  Modern tools and frameworks for scalable, enterprise-grade solutions
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {/* React */}
                <div className="group relative flex flex-col items-center justify-center p-4 rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-white/[.12] dark:bg-black/20">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#61DAFB]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="relative z-10">
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-2.902-.61-5.78.54-7.524 2.89a8.952 8.952 0 0 0-1.703 5.27c.062 1.4.4 2.76.99 3.98.59 1.23 1.44 2.32 2.49 3.19 1.05.87 2.28 1.51 3.59 1.85 1.31.34 2.68.38 4.01.12 1.33-.26 2.59-.84 3.66-1.68 1.07-.84 1.93-1.91 2.49-3.14.56-1.23.87-2.57.91-3.93.04-1.36-.19-2.71-.68-3.96a8.944 8.944 0 0 0-2.03-3.12c-.87-.88-1.91-1.54-3.05-1.93zm-1.28 16.12c-1.31.26-2.67.22-3.96-.12-1.29-.34-2.49-.96-3.51-1.8-1.02-.84-1.84-1.89-2.41-3.08a8.038 8.038 0 0 1-.89-3.54c-.04-1.22.19-2.43.68-3.54.49-1.11 1.22-2.09 2.14-2.87.92-.78 2-1.32 3.15-1.57 1.15-.25 2.34-.21 3.47.12 1.13.33 2.17.92 3.02 1.72.85.8 1.49 1.78 1.87 2.87.38 1.09.49 2.25.32 3.39-.17 1.14-.59 2.22-1.23 3.16-.64.94-1.48 1.71-2.46 2.26-.98.55-2.07.86-3.19.9z" fill="#61DAFB"/>
                  </svg>
                  <span className="mt-3 text-sm font-medium text-zinc-900 dark:text-white relative z-10">React</span>
                </div>

                {/* Next.js */}
                <div className="group relative flex flex-col items-center justify-center p-4 rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-white/[.12] dark:bg-black/20">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#000000]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="relative z-10">
                    <path d="M22.112 15.048c-.21.658-.507 1.289-.888 1.878a9.516 9.516 0 01-1.688 2.098 9.633 9.633 0 01-2.597 1.584c-1.032.414-2.22.641-3.539.641-1.318 0-2.506-.227-3.538-.641a9.626 9.626 0 01-2.597-1.584 9.516 9.516 0 01-1.688-2.098 9.58 9.58 0 01-.889-1.878c-.42-1.318-.657-2.506-.657-3.539 0-1.032.237-2.22.657-3.538.21-.658.507-1.289.888-1.878a9.516 9.516 0 011.688-2.098 9.633 9.633 0 012.597-1.584c1.032-.414 2.22-.641 3.538-.641 1.319 0 2.507.227 3.539.641a9.626 9.626 0 012.597 1.584 9.516 9.516 0 011.688 2.098c.381.589.678 1.22.888 1.878.42 1.318.658 2.506.658 3.538 0 1.033-.238 2.221-.658 3.538zm-10.112-1.269c.896 0 1.622-.726 1.622-1.622s-.726-1.622-1.622-1.622-1.622.726-1.622 1.622.726 1.622 1.622 1.622zm0-6.489c-.896 0-1.622-.726-1.622-1.622s.726-1.622 1.622-1.622 1.622.726 1.622 1.622-.726 1.622-1.622 1.622z" fill="#000000"/>
                  </svg>
                  <span className="mt-3 text-sm font-medium text-zinc-900 dark:text-white relative z-10">Next.js</span>
                </div>

                {/* React Native */}
                <div className="group relative flex flex-col items-center justify-center p-4 rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-white/[.12] dark:bg-black/20">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#61DAFB]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="relative z-10">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#61DAFB"/>
                  </svg>
                  <span className="mt-3 text-sm font-medium text-zinc-900 dark:text-white relative z-10">React Native</span>
                </div>

                {/* Node.js */}
                <div className="group relative flex flex-col items-center justify-center p-4 rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-white/[.12] dark:bg-black/20">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#83CD29]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="relative z-10">
                    <path d="M11.998 24c-.321 0-.642-.084-.929-.252l-2.96-1.749c-.442-.247-.226-.334-.08-.386.589-.203.708-.25 1.337-.604.066-.038.152-.023.22.018l2.276 1.351c.082.045.198.045.273 0l8.868-5.119c.082-.047.134-.14.134-.235V6.921c0-.098-.052-.19-.137-.239l-8.862-5.116c-.082-.047-.19-.047-.272 0L3.01 6.682c-.087.05-.139.14-.139.235v10.23c0 .094.052.184.139.23l2.429 1.403c1.316.658 2.123-.117 2.123-.896V7.787c0-.14.113-.25.254-.25h1.123c.137 0 .25.11.25.25v10.887c0 1.894-1.032 2.983-2.828 2.983-.552 0-.988 0-2.203-.598l-2.327-1.34c-.574-.332-.929-.953-.929-1.618V6.921c0-.665.355-1.286.929-1.618l8.868-5.123c.562-.319 1.307-.319 1.862 0l8.868 5.123c.574.332.929.95.929 1.618v10.23c0 .665-.355 1.283-.929 1.618l-8.868 5.119c-.287.168-.608.252-.929.252zm2.722-7.033c-3.883 0-4.698-1.782-4.698-3.278 0-.14.11-.25.25-.25h1.145c.123 0 .226.09.245.208.166 1.189.663 1.789 3.058 1.789 1.882 0 2.683-.426 2.683-1.426 0-.577-.229-1.006-3.155-1.293-2.447-.245-3.961-.793-3.961-2.779 0-1.831 1.543-2.923 4.132-2.923 2.904 0 4.279 1.008 4.45 3.179.006.07-.017.137-.063.19-.044.05-.108.08-.176.08h-1.152c-.114 0-.213-.082-.233-.194-.259-1.247-.88-1.645-2.826-1.645-2.078 0-2.321.724-2.321 1.266 0 .649.282.839 3.053 1.205 2.741.363 4.058.876 4.058 2.836 0 1.977-1.648 3.115-4.512 3.115z" fill="#83CD29"/>
                  </svg>
                  <span className="mt-3 text-sm font-medium text-zinc-900 dark:text-white relative z-10">Node.js</span>
                </div>

                {/* MongoDB */}
                <div className="group relative flex flex-col items-center justify-center p-4 rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-white/[.12] dark:bg-black/20">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#47A248]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="relative z-10">
                    <path d="M12 2.5C7.305 2.5 3.5 6.305 3.5 11c0 2.419 1.089 4.58 2.8 6.025.058.049.117.096.177.141.016.012.033.023.05.034.014.01.028.02.042.029.058.041.117.08.177.116.018.011.036.021.054.031.015.008.03.016.045.023.058.03.117.058.177.083.021.009.042.017.063.025.013.005.026.01.039.014.058.021.117.04.177.056.023.007.046.013.069.019.011.003.022.006.033.009.058.014.117.027.177.038.025.005.05.009.075.013.009.002.018.003.027.005.058.009.117.016.177.022.027.003.054.005.081.007.006.001.012.001.018.002.058.005.117.008.177.01.029.001.058.001.087.001.029 0 .058 0 .087-.001.06-.002.119-.005.177-.01.006-.001.012-.001.018-.002.027-.002.054-.004.081-.007.06-.006.119-.013.177-.022.009-.002.018-.003.027-.005.025-.004.05-.008.075-.013.06-.011.119-.024.177-.038.011-.003.022-.006.033-.009.023-.006.046-.012.069-.019.06-.016.119-.035.177-.056.013-.004.026-.009.039-.014.021-.008.042-.016.063-.025.06-.025.119-.053.177-.083.015-.007.03-.015.045-.023.018-.01.036-.02.054-.031.06-.036.119-.075.177-.116.014-.009.028-.019.042-.029.017-.011.034-.022.05-.034.06-.045.119-.092.177-.141 1.711-1.445 2.8-3.606 2.8-6.025 0-4.695-3.805-8.5-8.5-8.5z" fill="#47A248"/>
                  </svg>
                  <span className="mt-3 text-sm font-medium text-zinc-900 dark:text-white relative z-10">MongoDB</span>
                </div>

                {/* MySQL */}
                <div className="group relative flex flex-col items-center justify-center p-4 rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-white/[.12] dark:bg-black/20">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00758F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="relative z-10">
                    <path d="M12 2.5C7.305 2.5 3.5 6.305 3.5 11c0 2.419 1.089 4.58 2.8 6.025.058.049.117.096.177.141.016.012.033.023.05.034.014.01.028.02.042.029.058.041.117.08.177.116.018.011.036.021.054.031.015.008.03.016.045.023.058.03.117.058.177.083.021.009.042.017.063.025.013.005.026.01.039.014.058.021.117.04.177.056.023.007.046.013.069.019.011.003.022.006.033.009.058.014.117.027.177.038.025.005.05.009.075.013.009.002.018.003.027.005.058.009.117.016.177.022.027.003.054.005.081.007.006.001.012.001.018.002.058.005.117.008.177.01.029.001.058.001.087.001.029 0 .058 0 .087-.001.06-.002.119-.005.177-.01.006-.001.012-.001.018-.002.027-.002.054-.004.081-.007.06-.006.119-.013.177-.022.009-.002.018-.003.027-.005.025-.004.05-.008.075-.013.06-.011.119-.024.177-.038.011-.003.022-.006.033-.009.023-.006.046-.012.069-.019.06-.016.119-.035.177-.056.013-.004.026-.009.039-.014.021-.008.042-.016.063-.025.06-.025.119-.053.177-.083.015-.007.03-.015.045-.023.018-.01.036-.02.054-.031.06-.036.119-.075.177-.116.014-.009.028-.019.042-.029.017-.011.034-.022.05-.034.06-.045.119-.092.177-.141 1.711-1.445 2.8-3.606 2.8-6.025 0-4.695-3.805-8.5-8.5-8.5z" fill="#00758F"/>
                  </svg>
                  <span className="mt-3 text-sm font-medium text-zinc-900 dark:text-white relative z-10">MySQL</span>
                </div>

                {/* Spring Boot */}
                <div className="group relative flex flex-col items-center justify-center p-4 rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-white/[.12] dark:bg-black/20">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6DB33F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="relative z-10">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="#6DB33F"/>
                    <path d="M9.5 14.5l-2.5-2.5 1.41-1.41L9.5 11.67l3.59-3.59L14.5 9.5l-5 5z" fill="white"/>
                  </svg>
                  <span className="mt-3 text-sm font-medium text-zinc-900 dark:text-white relative z-10">Spring Boot</span>
                </div>

                {/* AWS */}
                <div className="group relative flex flex-col items-center justify-center p-4 rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-white/[.12] dark:bg-black/20">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF9900]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="relative z-10">
                    <path d="M9.5 9.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm5 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-2.5 4c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z" fill="#FF9900"/>
                  </svg>
                  <span className="mt-3 text-sm font-medium text-zinc-900 dark:text-white relative z-10">AWS</span>
                </div>

                {/* Google Cloud */}
                <div className="group relative flex flex-col items-center justify-center p-4 rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-white/[.12] dark:bg-black/20">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4285F4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="relative z-10">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="#4285F4"/>
                    <path d="M12 7l-5 3v4l5 3 5-3v-4l-5-3z" fill="white" opacity="0.9"/>
                  </svg>
                  <span className="mt-3 text-sm font-medium text-zinc-900 dark:text-white relative z-10">Google Cloud</span>
                </div>
              </div>

              {/* Tech Stack Categories */}
              <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-[#0B3C5D]/[.08] bg-white/60 p-6 backdrop-blur dark:border-white/[.12] dark:bg-black/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-[#1F77B4]/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-[#1F77B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">Frontend</h3>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">
                    React, Next.js, React Native for modern, responsive user interfaces
                  </p>
                </div>

                <div className="rounded-xl border border-[#0B3C5D]/[.08] bg-white/60 p-6 backdrop-blur dark:border-white/[.12] dark:bg-black/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-[#17A2B8]/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-[#17A2B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">Backend</h3>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">
                    Node.js, Spring Boot for scalable server-side architectures
                  </p>
                </div>

                <div className="rounded-xl border border-[#0B3C5D]/[.08] bg-white/60 p-6 backdrop-blur dark:border-white/[.12] dark:bg-black/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-[#0B3C5D]/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-[#0B3C5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">Database & Cloud</h3>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">
                    MongoDB, MySQL, AWS, Google Cloud for data management and infrastructure
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div id="process" className="mt-16 rounded-[28px] border border-[#0B3C5D]/[.08] bg-white/60 p-8 shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-black/20">
              <div className="text-center">
                <div className="inline-flex items-center rounded-full border border-[#0B3C5D]/[.08] bg-white/70 px-4 py-2 text-sm font-semibold text-[#0B3C5D] shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-white/[.06] dark:text-white">
                  <svg className="mr-2 h-4 w-4 text-[#1F77B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Our Proven Process
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                  From Vision to Value in Record Time
                </h2>
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
                  A systematic approach that guarantees results and minimizes risk, delivering your project with precision and speed.
                </p>
              </div>
              
              <div className="mt-12 relative">
                {/* Connection Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#1F77B4]/30 transform -translate-x-1/2 hidden md:block"></div>
                
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div className="relative group">
                    {/* Number Circle */}
                    <div className="absolute left-1/2 top-0 h-12 w-12 -translate-x-1/2 transform">
                      <div className="h-12 w-12 rounded-full bg-[#0B3C5D] text-white font-bold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        1
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="mt-16 rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 p-6 shadow-lg backdrop-blur dark:border-white/[.12] dark:bg-black/20 group-hover:shadow-xl transition-shadow">
                      <div className="text-center">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#17A2B8]/10 dark:bg-[#17A2B8]/20 mb-4">
                          <svg className="h-6 w-6 text-[#17A2B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Discovery & Strategy</h3>
                        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          Deep dive into your business goals, challenges, and opportunities. We create a technical roadmap aligned with your vision and ensure perfect project alignment.
                        </p>
                        <div className="mt-4 inline-flex items-center text-sm font-medium text-[#1F77B4] dark:text-[#17A2B8]">
                          <span>Business Analysis</span>
                          <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    {/* Number Circle */}
                    <div className="absolute left-1/2 top-0 h-12 w-12 -translate-x-1/2 transform">
                      <div className="h-12 w-12 rounded-full bg-[#0B3C5D] text-white font-bold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        2
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="mt-16 rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 p-6 shadow-lg backdrop-blur dark:border-white/[.12] dark:bg-black/20 group-hover:shadow-xl transition-shadow">
                      <div className="text-center">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#17A2B8]/10 dark:bg-[#17A2B8]/20 mb-4">
                          <svg className="h-6 w-6 text-[#17A2B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Agile Development</h3>
                        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          Rapid iterations with weekly demos. You see progress constantly and can adjust course as needed. Transparent communication throughout.
                        </p>
                        <div className="mt-4 inline-flex items-center text-sm font-medium text-[#1F77B4] dark:text-[#17A2B8]">
                          <span>Weekly Sprints</span>
                          <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    {/* Number Circle */}
                    <div className="absolute left-1/2 top-0 h-12 w-12 -translate-x-1/2 transform">
                      <div className="h-12 w-12 rounded-full bg-[#0B3C5D] text-white font-bold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        3
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="mt-16 rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 p-6 shadow-lg backdrop-blur dark:border-white/[.12] dark:bg-black/20 group-hover:shadow-xl transition-shadow">
                      <div className="text-center">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#17A2B8]/10 dark:bg-[#17A2B8]/20 mb-4">
                          <svg className="h-6 w-6 text-[#17A2B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Launch & Scale</h3>
                        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          Seamless deployment with comprehensive support. We ensure your solution performs at scale and drives sustainable business growth.
                        </p>
                        <div className="mt-4 inline-flex items-center text-sm font-medium text-[#1F77B4] dark:text-[#17A2B8]">
                          <span>Go Live</span>
                          <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Skorin Section */}
            <div className="mt-16 rounded-[28px] border border-[#0B3C5D]/[.08] bg-gradient-to-br from-white/90 to-white/70 p-8 shadow-sm backdrop-blur dark:border-white/[.12] dark:from-black/30 dark:to-black/50">
              <div className="text-center">
                <div className="inline-flex items-center rounded-full border border-[#0B3C5D]/[.08] bg-white/70 px-4 py-2 text-sm font-semibold text-[#0B3C5D] shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-white/[.06] dark:text-white">
                  <svg className="mr-2 h-4 w-4 text-[#1F77B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Why Choose Skorin
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                  The Skorin Advantage
                </h2>
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
                  We're not just developers. We're your strategic technology partners committed to your success.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="group relative">
                  <div className="relative overflow-hidden rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-white/[.12] dark:bg-black/20">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1F77B4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                      <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-[#1F77B4] to-[#1F77B4]/80 p-3 shadow-lg">
                        <svg className="h-full w-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-zinc-900 dark:text-white">Lightning Fast</h3>
                      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        3x faster delivery without compromising quality. Our agile process ensures rapid development and deployment.
                      </p>
                      <div className="mt-4 flex items-center text-sm font-semibold text-[#1F77B4]">
                        <span>Speed First</span>
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="relative overflow-hidden rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-white/[.12] dark:bg-black/20">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#17A2B8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                      <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-[#17A2B8] to-[#17A2B8]/80 p-3 shadow-lg">
                        <svg className="h-full w-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-zinc-900 dark:text-white">Proven Results</h3>
                      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        47% average revenue growth for our clients. Our track record speaks for itself with measurable success.
                      </p>
                      <div className="mt-4 flex items-center text-sm font-semibold text-[#17A2B8]">
                        <span>Results Driven</span>
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="relative overflow-hidden rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-white/[.12] dark:bg-black/20">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0B3C5D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                      <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-[#0B3C5D] to-[#0B3C5D]/80 p-3 shadow-lg">
                        <svg className="h-full w-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-zinc-900 dark:text-white">Secure & Scalable</h3>
                      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        Enterprise-grade security that scales with your growth. Your data and infrastructure are always protected.
                      </p>
                      <div className="mt-4 flex items-center text-sm font-semibold text-[#0B3C5D]">
                        <span>Enterprise Ready</span>
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="relative overflow-hidden rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-white/[.12] dark:bg-black/20">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1F77B4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                      <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-[#1F77B4] to-[#1F77B4]/80 p-3 shadow-lg">
                        <svg className="h-full w-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-zinc-900 dark:text-white">Dedicated Team</h3>
                      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        Expert developers focused exclusively on your success. Your team becomes our team.
                      </p>
                      <div className="mt-4 flex items-center text-sm font-semibold text-[#1F77B4]">
                        <span>Partner Focused</span>
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1F77B4] dark:text-[#17A2B8]">50+</div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#17A2B8] dark:text-[#1F77B4]">200+</div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0B3C5D] dark:text-white">47%</div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Avg. Revenue Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1F77B4] dark:text-[#17A2B8]">24/7</div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Support Available</div>
                </div>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="mt-16 rounded-[28px] border border-[#0B3C5D]/[.08] bg-gradient-to-br from-[#1F77B4]/90 to-[#0B3C5D]/90 p-8 shadow-lg backdrop-blur">
              <div className="text-center">
                <div className="text-xs font-semibold uppercase tracking-wide text-white/80">
                  Ready to Transform Your Business?
                </div>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Let's Build Something Amazing Together
                </h2>
                <p className="mt-4 text-lg text-white/90">
                  Join 50+ companies that have already transformed their operations with Skorin.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <a
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-semibold text-[#0B3C5D] shadow-lg transition-opacity hover:opacity-95"
                  >
                    Schedule Free Consultation
                  </a>
                  <a
                    href="#case-studies"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur transition-opacity hover:opacity-95"
                  >
                    View Case Studies
                  </a>
                </div>
                <div className="mt-6 text-sm text-white/80">
                  ⚡ Limited spots available this quarter - Book your free consultation now
                </div>
              </div>
            </div>
        </main>
      </div>

      <FloatingDock items={dockItems} />
    </div>
  );
}
