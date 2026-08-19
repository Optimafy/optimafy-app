"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface SectionBackgroundProps {
  /** Color palette for the floating blobs — keeps the violet/blue/cyan brand identity. */
  variant?: "violet" | "blue" | "cyan";
  /** Renders a faint animated grid behind the blobs. */
  grid?: boolean;
  className?: string;
}

const palettes: Record<string, [string, string, string]> = {
  violet: ["from-violet-600/15", "from-purple-500/10", "from-blue-500/10"],
  blue: ["from-blue-500/15", "from-cyan-500/10", "from-violet-500/10"],
  cyan: ["from-cyan-500/15", "from-blue-500/10", "from-violet-600/10"],
};

export default function SectionBackground({
  variant = "violet",
  grid = false,
  className = "",
}: SectionBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const conditions = context.conditions as {
            isMobile: boolean;
            reduceMotion: boolean;
          };
          const blobs = blobRefs.current.filter(Boolean) as HTMLDivElement[];

          if (conditions.reduceMotion) {
            // Respect prefers-reduced-motion: show a static, subtle background only.
            gsap.set(blobs, { opacity: 0.6 });
            return;
          }

          // Fewer moving elements on mobile to keep things light.
          const activeBlobs = conditions.isMobile ? blobs.slice(0, 2) : blobs;

          activeBlobs.forEach((blob, i) => {
            gsap.to(blob, {
              x: gsap.utils.random(-30, 30),
              y: gsap.utils.random(-24, 24),
              duration: gsap.utils.random(7, 11),
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: i * 0.35,
            });
          });

          // Subtle scroll-linked parallax to tie the background to scroll position.
          gsap.to(containerRef.current, {
            y: conditions.isMobile ? -16 : -50,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      );

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  const [c1, c2, c3] = palettes[variant];

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden z-0 ${className}`}
    >
      {grid && (
        <div
          className="dark:hidden absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      )}
      {grid && (
        <div
          className="hidden dark:block absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      )}
      <div
        ref={(el) => { blobRefs.current[0] = el; }}
        className={`absolute -top-16 left-[-8%] w-[380px] h-[380px] rounded-full bg-gradient-radial ${c1} via-transparent to-transparent blur-3xl will-change-transform`}
      />
      <div
        ref={(el) => { blobRefs.current[1] = el; }}
        className={`absolute top-1/3 right-[-8%] w-[340px] h-[340px] rounded-full bg-gradient-radial ${c2} via-transparent to-transparent blur-3xl will-change-transform`}
      />
      <div
        ref={(el) => { blobRefs.current[2] = el; }}
        className={`absolute bottom-[-8%] left-1/3 w-[300px] h-[300px] rounded-full bg-gradient-radial ${c3} via-transparent to-transparent blur-3xl will-change-transform`}
      />
    </div>
  );
}
