"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const sections = [
  {
    id: "journey-map",
    title: "Journey Map",
    accent: "from-cyan-500/55 via-cyan-300/12 to-slate-950",
    border: "border-cyan-300/35",
    side: "left",
    overview:
      "A visual route through the moments, choices, and pressure points that shaped the path.",
    body: [
      "This chapter maps the movement from curiosity into direction. It is intentionally lighter now, with the focus shifted toward structure, responsiveness, and faster interaction.",
      "When your final media is ready, this panel can absorb it carefully instead of brute-forcing heavy assets into the first load.",
    ],
    bullets: ["early interest in building", "school phases and key turning points", "pressure, adjustment, and forward momentum"],
  },
  {
    id: "conversion-story",
    title: "Conversion Story",
    accent: "from-violet-500/55 via-fuchsia-300/12 to-slate-950",
    border: "border-violet-300/35",
    side: "right",
    overview:
      "The shift from excitement, to uncertainty, to a more grounded understanding of the future.",
    body: [
      "This section holds the emotional pivot, first creation, fear about changing technology, then a steadier way of seeing what matters.",
      "The structure is now intentionally lean, so the visual feel stays sharp without dragging the whole site down.",
    ],
    bullets: ["first build and first spark", "fear, confusion, and pressure", "discernment, realism, and clarity"],
  },
  {
    id: "passion-plan",
    title: "Passion Plan",
    accent: "from-amber-400/55 via-yellow-200/10 to-slate-950",
    border: "border-amber-200/35",
    side: "left",
    overview:
      "A future-facing chamber for values, mission, and the long-game career direction.",
    body: [
      "This panel works as a contained manifesto. It should feel intentional and strategic, not overloaded with decoration.",
      "The final version can layer your real plans on top of this lighter base without wrecking performance.",
    ],
    bullets: ["mission and identity", "career paths and skill growth", "stability, purpose, and contribution"],
  },
  {
    id: "about-me",
    title: "About Me",
    accent: "from-sky-400/55 via-indigo-300/12 to-slate-950",
    border: "border-sky-200/35",
    side: "right",
    overview:
      "A more personal chamber for who you are, what drives you, and the tone behind the work.",
    body: [
      "This is where the site becomes human instead of just visually aggressive. For now, the atmosphere is carried by typography and color rather than heavy image payloads.",
      "That gives you room to add your real media later in a controlled way.",
    ],
    bullets: ["identity and direction", "skills and style", "personal tone behind the portfolio"],
  },
] as const;

export default function Home() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeSection = useMemo(
    () => sections.find((section) => section.id === activeId) ?? null,
    [activeId],
  );

  return (
    <main className="relative h-screen overflow-hidden bg-[#030711] text-white">
      <Background />

      <div className="relative z-10 h-full w-full overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {activeSection ? (
            <SectionView
              key={activeSection.id}
              section={activeSection}
              onBack={() => setActiveId(null)}
            />
          ) : (
            <LandingGrid key="landing" onSelect={setActiveId} />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

function LandingGrid({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex h-full items-center justify-center px-4"
    >
      <div className="relative aspect-square w-[min(92vw,92vh)] max-w-[860px]">
        <motion.div
          initial={{ scale: 0.985 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="grid h-full w-full grid-cols-2 grid-rows-2 overflow-visible rounded-[2.2rem]"
        >
          {sections.map((section, index) => (
            <GridTile
              key={section.id}
              section={section}
              index={index}
              onClick={() => onSelect(section.id)}
            />
          ))}

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/6 shadow-[0_0_45px_rgba(255,255,255,0.08)]" />
        </motion.div>
      </div>
    </motion.section>
  );
}

function GridTile({
  section,
  index,
  onClick,
}: {
  section: (typeof sections)[number];
  index: number;
  onClick: () => void;
}) {
  const rounded = [
    "rounded-tl-[2rem]",
    "rounded-tr-[2rem]",
    "rounded-bl-[2rem]",
    "rounded-br-[2rem]",
  ][index];

  const pop = [
    { scaleX: 1.06, scaleY: 1.06, x: -16, y: -16 },
    { scaleX: 1.06, scaleY: 1.06, x: 16, y: -16 },
    { scaleX: 1.06, scaleY: 1.06, x: -16, y: 16 },
    { scaleX: 1.06, scaleY: 1.06, x: 16, y: 16 },
  ][index];

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={pop}
      whileTap={{ scaleX: 1.02, scaleY: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`group relative z-10 h-full w-full overflow-hidden border border-white/10 bg-slate-950 text-center ${rounded}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${section.accent} opacity-90`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_42%)] opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.34em] text-white/45">Node 0{index + 1}</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[0.04em] text-white md:text-4xl">
          {section.title}
        </h2>
      </div>
    </motion.button>
  );
}

function SectionView({
  section,
  onBack,
}: {
  section: (typeof sections)[number];
  onBack: () => void;
}) {
  const isLeft = section.side === "left";

  return (
    <motion.section
      initial={{ x: isLeft ? "-100%" : "100%", opacity: 0.9 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: isLeft ? "-100%" : "100%", opacity: 0.9 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0"
    >
      <div className="grid h-full w-full lg:grid-cols-[1fr_1fr]">
        <div className={`relative min-h-[40vh] bg-gradient-to-br ${section.accent}`}>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.2),rgba(2,6,23,0.96))]" />
          <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:80px_80px]" />
          <button
            type="button"
            onClick={onBack}
            className="absolute left-6 top-6 z-20 rounded-full border border-white/15 bg-slate-950/55 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/75 transition hover:border-white/30 hover:text-white"
          >
            Back
          </button>
          <div className="relative z-10 flex h-full items-end p-8 md:p-12">
            <div>
              <p className="text-xs uppercase tracking-[0.38em] text-white/45">{section.id.replaceAll("-", " ")}</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                {section.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="flex h-full min-h-0 items-center bg-[linear-gradient(180deg,rgba(4,8,20,0.95),rgba(2,6,23,1))] px-6 py-8 md:px-10 lg:px-14">
          <div className="mx-auto w-full max-w-2xl">
            <p className="max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              {section.overview}
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {section.bullets.map((bullet) => (
                <div key={bullet} className={`rounded-[1.2rem] border ${section.border} bg-white/4 p-4`}>
                  <p className="text-sm leading-7 text-slate-200">{bullet}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-5">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-8 text-slate-300 md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Background() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#020611_0%,#060a1a_50%,#02040b_100%)]" />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:88px_88px]" />
    </>
  );
}
