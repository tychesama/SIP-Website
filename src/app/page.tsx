"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const sections = [
  {
    id: "journey-map",
    title: "Journey Map",
    accent: "from-cyan-500/55 via-cyan-300/12 to-slate-950",
    border: "border-cyan-300/35",
    side: "left",
    heroImage: "/images/journey-map.png",
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
    heroImage: "/images/class-1.jpg",
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
    heroImage: "/images/school-1.jpg",
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
    heroImage: "/images/portrait-1.jpg",
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
      <div className="relative aspect-square w-[min(88vw,88vh)] max-w-[680px]">
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

          <motion.a
            href="https://joemidpan.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="pointer-events-auto absolute left-1/2 top-1/2 z-30 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full cursor-pointer"
          >
            <Image
              src="/images/logo.png"
              alt="School logo"
              width={240}
              height={240}
              className="h-full w-full object-contain"
            />
          </motion.a>
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
      className={`group relative z-10 h-full w-full cursor-pointer overflow-hidden border border-white/10 bg-slate-950 text-center ${rounded}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${section.accent} opacity-85 transition duration-300 group-hover:opacity-75`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_42%)] opacity-35 transition duration-300 group-hover:opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
      <div className="absolute inset-0 opacity-65 transition duration-300 group-hover:opacity-45">
        <Image
          src={section.heroImage}
          alt={section.title}
          fill
          sizes="50vw"
          className="object-cover transition duration-300 group-hover:scale-[1.04]"
          unoptimized={section.id === "about-me"}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.45),rgba(2,6,23,0.88))] transition duration-300 group-hover:opacity-80" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.34em] text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.95)]">Chapter {index + 1}</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[0.04em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)] md:text-4xl">
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
        {isLeft ? (
          <>
            <div className="flex h-full min-h-0 items-center bg-[linear-gradient(180deg,rgba(4,8,20,0.95),rgba(2,6,23,1))] px-6 py-8 md:px-10 lg:px-14">
              <div className="mx-auto w-full max-w-2xl text-left">
                <p className="max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                  {section.overview}
                </p>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {section.bullets.map((bullet) => (
                    <div key={bullet} className={`rounded-[1.2rem] border ${section.border} bg-white/4 p-4 text-left`}>
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

            <div className={`relative min-h-[40vh] overflow-hidden bg-gradient-to-br ${section.accent}`}>
              <div className="absolute inset-0 opacity-100">
                <HeroCollage seed={section.id} />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.34),rgba(2,6,23,0.92))]" />
              <button
                type="button"
                onClick={onBack}
                className="absolute right-6 top-6 z-20 cursor-pointer rounded-full border border-white/15 bg-slate-950/55 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/75 transition hover:border-white/30 hover:text-white"
              >
                Back
              </button>
              <div className="relative z-10 flex h-full items-end p-8 md:p-12">
                <div className={`${isLeft ? "ml-auto text-right" : "mr-auto text-left"} max-w-xl`}>
                  <p className="text-xs uppercase tracking-[0.38em] text-white/70">Chapter X</p>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                    {section.title}
                  </h1>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={`relative min-h-[40vh] overflow-hidden bg-gradient-to-br ${section.accent}`}>
              <div className="absolute inset-0 opacity-100">
                <HeroCollage seed={section.id} />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.34),rgba(2,6,23,0.92))]" />
              <button
                type="button"
                onClick={onBack}
                className="absolute left-6 top-6 z-20 cursor-pointer rounded-full border border-white/15 bg-slate-950/55 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/75 transition hover:border-white/30 hover:text-white"
              >
                Back
              </button>
              <div className="relative z-10 flex h-full items-end p-8 md:p-12">
                <div className={`${isLeft ? "ml-auto text-right" : "mr-auto text-left"} max-w-xl`}>
                  <p className="text-xs uppercase tracking-[0.38em] text-white/70">Chapter X</p>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                    {section.title}
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex h-full min-h-0 items-center bg-[linear-gradient(180deg,rgba(4,8,20,0.95),rgba(2,6,23,1))] px-6 py-8 md:px-10 lg:px-14">
              <div className={`mx-auto w-full max-w-2xl ${isLeft ? "text-left" : "text-right"}`}>
                <p className={`max-w-xl text-base leading-8 text-slate-300 md:text-lg ${isLeft ? "" : "ml-auto"}`}>
                  {section.overview}
                </p>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {section.bullets.map((bullet) => (
                    <div key={bullet} className={`rounded-[1.2rem] border ${section.border} bg-white/4 p-4 ${isLeft ? "text-left" : "text-right"}`}>
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
          </>
        )}
      </div>
    </motion.section>
  );
}

function HeroCollage({ seed }: { seed: string }) {
  const images = [
    `https://picsum.photos/seed/${seed}-a/900/700`,
    `https://picsum.photos/seed/${seed}-b/700/900`,
    `https://picsum.photos/seed/${seed}-c/600/420`,
    `https://picsum.photos/seed/${seed}-d/520/680`,
    `https://picsum.photos/seed/${seed}-e/640/640`,
    `https://picsum.photos/seed/${seed}-f/760/520`,
    `https://picsum.photos/seed/${seed}-g/540/760`,
    `https://picsum.photos/seed/${seed}-h/680/480`,
    `https://picsum.photos/seed/${seed}-i/620/620`,
    `https://picsum.photos/seed/${seed}-j/500/700`,
    `https://picsum.photos/seed/${seed}-k/720/540`,
    `https://picsum.photos/seed/${seed}-l/640/860`,
  ];

  const tiles = [
    { src: images[0], className: "left-[2%] top-[2%] h-[31%] w-[29%]" },
    { src: images[1], className: "left-[23%] top-[4%] h-[25%] w-[19%]" },
    { src: images[2], className: "left-[48%] top-[2%] h-[22%] w-[17%]" },
    { src: images[3], className: "right-[2%] top-[5%] h-[29%] w-[22%]" },
    { src: images[4], className: "left-[8%] top-[33%] h-[25%] w-[18%]" },
    { src: images[5], className: "left-[31%] top-[28%] h-[22%] w-[22%]" },
    { src: images[6], className: "right-[10%] top-[33%] h-[24%] w-[18%]" },
    { src: images[7], className: "left-[2%] bottom-[5%] h-[24%] w-[20%]" },
    { src: images[8], className: "left-[22%] bottom-[4%] h-[20%] w-[17%]" },
    { src: images[9], className: "right-[24%] bottom-[5%] h-[22%] w-[16%]" },
    { src: images[10], className: "right-[6%] bottom-[6%] h-[26%] w-[20%]" },
    { src: images[11], className: "left-[44%] top-[55%] h-[20%] w-[15%]" },
  ] as const;

  return (
    <div className="relative h-full w-full">
      {tiles.map((tile, idx) => (
        <div key={tile.src} className={`absolute overflow-hidden rounded-[1rem] border border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.32)] ${tile.className}`}>
          <Image src={tile.src} alt={`collage ${idx + 1}`} fill sizes="18vw" className="object-cover" unoptimized />
        </div>
      ))}
    </div>
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
