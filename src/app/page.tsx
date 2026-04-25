"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const sections = [
  {
    id: "journey-map",
    title: "Journey Map",
    number: "1",
    accent: "from-cyan-500/55 via-cyan-300/12 to-slate-950",
    border: "border-cyan-300/35",
    side: "left",
    heroImage: "/images/journey-map.png",
    overview:
      "The path that I walked",
    body: [
      "(Journey Map Image)",
      "My journey in Ateneo has been a gradual process of growth, learning, and self-discovery. During my first year, online classes taught me how to adapt to college life independently and stay focused on completing my responsibilities.In my second year, returning to campus allowed me to meet new people and face more challenging subjects that helped me grow academically and personally.By my third year, meaningful subjects like SAD and Thesis gave me clearer insights into my future career path and encouraged deeper reflection.In my fourth year, guided by the spirit of Magis, I became more intentional by joining organizations, working on side projects, and learning from friends and mentors.My summer on - the - job training further strengthened my gratitude for the people who shared the experience with me, making my school journey both memorable and meaningful."
    ]
  },
  {
    id: "conversion-story",
    title: "Conversion Story",
    number: "2",
    accent: "from-violet-500/55 via-fuchsia-300/12 to-slate-950",
    border: "border-violet-300/35",
    side: "right",
    heroImage: "/images/class-1.jpg",
    overview:
      "How I Changed",
    body: [
      "One of the first moments that truly changed me was when I started learning how to code in Java and created my first game, Infinity Tower. It was not just a project to me. It was the first time I felt that I could build something from nothing, and that feeling made me genuinely happy. That simple joy became important because it showed me that my future could be shaped by work I create with my own hands. It was a small beginning, but it stirred a deeper sense of purpose in me.",
      "Another moment that changed me was when AI started rising and I became confused and stressed about my future. I wondered if the path I was taking would still matter, and I struggled with fear about what would happen to people like me who wanted to become developers. That season of uncertainty forced me to face my anxieties honestly. Over time, I began to see AI differently. Instead of treating it as something to fear, I now see it as a tool. Human judgment, creativity, and discernment are still needed, and people cannot be easily replaced. That realization gave me more peace.",
      "I wrestled with confusion, pressure, and the desire to know what my life would look like after college. I was not only thinking about school, but also about whether I would be ready for the real job market. There were moments of desolation when I felt overwhelmed by change, especially because technology moves so fast. At the same time, there were consoling moments when I remembered why I started in the first place, to learn, to build, and to grow.",
      "This struggle helped me see that discernment is not about having everything figured out. It is about being honest with reality while still moving forward. In that process, I have learned a kind of cura personalis, because I had to pay attention not only to my skills, but also to my own heart, fears, and limitations. I also began to understand magis more clearly, not as perfection, but as choosing the better path with intention and discipline.",
      "Now I feel more full, happier, and clearer-minded. I have become more accepting of facts and truths, and more realistic about how the job market works and what opportunities are actually open to me. I no longer see that realism as discouraging. I see it as grounding. It helps me prepare better for the future I want, which is to become a computer science graduate and eventually work as a developer.",
      "What changed most in me is not just my opinion about AI or careers. It is my way of seeing. I am more grounded, more discerning, and more aligned with the person I hope to become. I still want to grow, learn, and do more, but now with a clearer heart and a steadier mind. That, to me, is part of the path I am meant to walk.",
    ]
  },
  {
    id: "passion-plan",
    title: "Passion Plan",
    number: "3",
    accent: "from-amber-400/55 via-yellow-200/10 to-slate-950",
    border: "border-amber-200/35",
    side: "left",
    heroImage: "/images/img (13).jpg",
    overview:
      "What I want to do",
    body: [
      "Personal Mission Statement (this should be a subheader)",
      "I am becoming a realistic, hardworking man who is developed, yet still growing. I want to keep improving myself without losing sight of who I am and what matters. What drives me is success, because I want to build a stable life through discipline, patience, and honest effort.",
      "I want to live by values that keep me grounded and purposeful. For me, this includes magis, cura personalis, and ad majorem Dei gloriam. These values remind me to do more than the minimum, to care for both myself and others, and to offer my work for something greater than myself. The impact I hope to make is simple but meaningful, joy to my family and close friends, and a life they can be proud of.",
      "Prayer for My Future Self (this should be a subheader)",
      "Lord, I pray that my hopes and dreams do not stay only with me, but also become real for other people through the hard work they give to their own lives. May no effort be wasted, and may every struggle lead to growth, wisdom, and purpose.",
      "I pray that my growth never stops, and that as I live my life, I continue to improve in character, skill, and faith. In my lows and highs, I ask that You remain with me, guiding me when I am confused, strengthening me when I am weak, and reminding me to keep going when the path feels heavy.",
      "10 to 20 Year Passion Plan (this should be a subheader)",
      "My long-term path is to become a computer developer, business analyst, or workflow engineer. I want to build a career that gives me stability, growth, and a place where I can keep learning while contributing real value. My goal is to earn a job, grow into it, and eventually gain job security in a company while also earning friends along the way.",
      "I will pursue this path by continuing to strengthen my technical skills, improving my problem-solving ability, and learning how real systems and workflows work in practice. I want to keep choosing the values of magis, cura personalis, and ad majorem Dei gloriam so that my work stays disciplined, caring, and meaningful.",
      "In 10 to 20 years, I hope to have a life marked by giving and success, one where I can support myself and others, avoid unnecessary hardship, and build something steady and good. I want my career to be more than survival. I want it to be a path of purpose, integrity, and growth."
    ],
    bullets: ["mission and identity", "career paths and skill growth", "stability, purpose, and contribution"],
  },
  {
    id: "about-me",
    title: "About Me",
    number: "4",
    accent: "from-sky-400/55 via-indigo-300/12 to-slate-950",
    border: "border-sky-200/35",
    side: "right",
    heroImage: "/images/portrait.png",
    overview:
      "Jose Emmanuel Idpan",
    body: [
      "(Portrait Image)",
      "I am someone who values growth, consistency, and living with intention. I believe success comes from discipline, patience, and honest effort rather than quick results. I try to stay realistic about life while still keeping space for ambition, learning, and self-improvement. Guided by values like magis and cura personalis, I aim to do more than what is expected while also staying mindful of my well-being and the people around me. More than achievements, I want to build a life that brings joy to my family and makes the people close to me proud.",
      "Through school and personal experiences, I’ve learned to face uncertainty with a clearer and steadier mindset. Challenges, especially in thinking about the future, taught me that growth is not about having everything figured out, but about continuing to move forward with purpose. I’ve become more grounded, more accepting of reality, and more focused on building a meaningful path instead of chasing perfection. I value simple things good friendships, quiet progress, and work that feels honest and worthwhile. At the end of the day, I want to become someone known not just for skill, but for consistency, humility, and the way I treat others.",
    ],
    bullets: ["Link to Github", "Link to Gmail", "Linkedin"],
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
      <div className="relative aspect-square w-[min(88vw,88vh)] max-w-[620px]">
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
          unoptimized
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
            <div className="flex h-full min-h-0 items-center bg-[linear-gradient(180deg,rgba(4,8,20,0.95),rgba(2,6,23,1))] px-6 py-8 md:px-10 lg:px-12">
              <div className="mx-auto w-full max-w-[48rem] text-left">
                {section.overview ? (
                  <h2 className="mt-3 text-center text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {section.overview}
                  </h2>
                ) : null}

                <div className="mt-6 space-y-3">
                  {section.body.map((paragraph) => {
                    const imageMatch = /^\((.+ Image)\)$/.exec(paragraph);
                    if (imageMatch) {
                      const altText = imageMatch[1].replace(/\s*Image$/, "");
                      return (
                        <div key={paragraph} className="relative my-4 aspect-[16/10] overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
                          <Image
                            src={section.heroImage}
                            alt={altText}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            loading={section.id === "journey-map" ? "eager" : "lazy"}
                            priority={section.id === "journey-map"}
                            unoptimized
                          />
                        </div>
                      );
                    }

                    const isSubheader = /should be a subheader/i.test(paragraph);
                    if (isSubheader) {
                      return (
                        <h3 key={paragraph} className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-white/75 md:text-[0.9rem]">
                          {paragraph.replace(/\s*\(this should be a subheader\)/i, "")}
                        </h3>
                      );
                    }

                    return (
                      <p key={paragraph} className="text-[0.88rem] leading-5 text-justify text-slate-300 md:text-[0.93rem] md:leading-6">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className={`relative min-h-[28vh] overflow-hidden bg-gradient-to-br ${section.accent}`}>
              <div className="absolute inset-0 h-full w-full opacity-95">
                <HeroCollage seed={section.id} />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.34),rgba(2,6,23,0.92))]" />
              <button
                type="button"
                onClick={onBack}
                className="absolute right-6 top-6 z-20 cursor-pointer rounded-full border border-white/15 bg-slate-950/70 px-4 py-2 text-[0.65rem] uppercase tracking-[0.28em] text-white/75 transition hover:border-white/30 hover:text-white"
              >
                Back
              </button>
              <div className="relative z-10 flex h-full items-end p-8 md:p-12">
                <div className="ml-auto max-w-xl text-right">
                  <p className="text-xs uppercase tracking-[0.38em] text-white/45">Chapter {section.number}</p>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                    {section.title}
                  </h1>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={`relative min-h-[28vh] overflow-hidden bg-gradient-to-br ${section.accent}`}>
              <div className="absolute inset-0 h-full w-full opacity-95">
                <HeroCollage seed={section.id} />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.34),rgba(2,6,23,0.92))]" />
              <button
                type="button"
                onClick={onBack}
                className="absolute left-6 top-6 z-20 cursor-pointer rounded-full border border-white/15 bg-slate-950/70 px-4 py-2 text-[0.65rem] uppercase tracking-[0.28em] text-white/75 transition hover:border-white/30 hover:text-white"
              >
                Back
              </button>
              <div className="relative z-10 flex h-full items-end p-8 md:p-12">
                <div className={`${isLeft ? "ml-auto text-right" : "mr-auto text-left"} max-w-xl`}>
                  <p className="text-xs uppercase tracking-[0.38em] text-white/45">Chapter {section.number}</p>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                    {section.title}
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex h-full min-h-0 items-stretch bg-[linear-gradient(180deg,rgba(4,8,20,0.95),rgba(2,6,23,1))] px-6 py-8 md:px-10 lg:px-12">
              <div className={`mx-auto flex w-full max-w-[48rem] flex-col justify-center ${isLeft ? "text-left" : "text-right"}`}>
                {section.overview ? (
                  <h2 className="mt-3 text-center text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {section.overview}
                  </h2>
                ) : null}

                <div className="mt-6 space-y-3">
                  {section.body.map((paragraph) => {
                    const imageMatch = /^\((.+ Image)\)$/.exec(paragraph);
                    if (imageMatch) {
                      const altText = imageMatch[1].replace(/\s*Image$/, "");
                      return (
                        <div
                          key={paragraph}
                          className="relative mx-auto my-4 aspect-[9/10] w-full max-w-sm overflow-hidden rounded-[0.8rem] border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.22)]"
                        >
                          <Image
                            src={section.heroImage}
                            alt={altText}
                            fill
                            sizes="(max-width: 720px) 90vw, 24rem"
                            className="object-cover object-top"
                            loading={section.id === "about-me" ? "eager" : "lazy"}
                            priority={section.id === "about-me"}
                            unoptimized
                          />
                        </div>
                      );
                    }
                    return (
                      <p
                        key={paragraph}
                        className="text-[0.88rem] leading-5 text-justify text-slate-300 md:text-[0.93rem] md:leading-6"
                      >
                        {paragraph}
                      </p>
                    );
                  })}
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
  const heroImages = [
    "/images/class-1.jpg",
    "/images/class-2.jpg",
    "/images/school-1.jpg",
    "/images/img (1).jpg",
    "/images/img (18).jpg",
    "/images/img (14).jpg",
    "/images/Ruru-Gaiser.jpg",
    "/images/img (5).jpg",
    "/images/img (6).jpg",
    "/images/school-2.jpg",
    "/images/class-3.jpg",
    "/images/img (10).jpg",
    "/images/img (11).jpg",
    "/images/img (12).jpg",
    "/images/img (13).jpg",
    "/images/img (3).jpg",
    "/images/img (15).jpg",
    "/images/img (16).jpg",
    "/images/img (17).jpg",
    "/images/school-1.jpg",
    "/images/school-2.jpg",
    "/images/school-3.jpg",
    "/images/school-2.jpg",
    "/images/school-3.jpg",
    "/images/portrait.png",
  ];
  const images = heroImages.filter((src) => src && !src.endsWith("logo.png") && !src.endsWith("journey-map.png"));
  const tiles = [
    { src: images[0], col: "col-span-2 row-span-3" },
    { src: images[1] ?? images[0], col: "col-span-1 row-span-2" },
    { src: images[2] ?? images[0], col: "col-span-1 row-span-1" },
    { src: images[3] ?? images[0], col: "col-span-1 row-span-1" },
    { src: images[4] ?? images[0], col: "col-span-2 row-span-1" },
    { src: images[5] ?? images[0], col: "col-span-2 row-span-1" },
    { src: images[6] ?? images[0], col: "col-span-1 row-span-1" },
    { src: images[7] ?? images[0], col: "col-span-1 row-span-2" },
    { src: images[8] ?? images[0], col: "col-span-1 row-span-1" },
    { src: images[9] ?? images[0], col: "col-span-2 row-span-1" },
    { src: images[10] ?? images[0], col: "col-span-2 row-span-1" },
    { src: images[11] ?? images[0], col: "col-span-2 row-span-2" },
    { src: images[12] ?? images[0], col: "col-span-1 row-span-2" },
    { src: images[13] ?? images[0], col: "col-span-1 row-span-1" },
    { src: images[14] ?? images[0], col: "col-span-2 row-span-1" },
    { src: images[15] ?? images[0], col: "col-span-1 row-span-1" },
    { src: images[16] ?? images[0], col: "col-span-1 row-span-1" },
    { src: images[17] ?? images[0], col: "col-span-2 row-span-1" },
  ] as const;

  return (
    <div className="grid h-full w-full min-h-0 grid-cols-4 grid-rows-8 gap-0.5 p-0.5 md:gap-1 md:p-1">
      {tiles.map((tile, idx) => (
        <div key={tile.src} className={`relative min-h-0 overflow-hidden rounded-[0.6rem] border border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.25)] ${tile.col}`}>
          <Image src={tile.src} alt={`collage ${idx + 1}`} fill sizes="16vw" className="object-cover" unoptimized />
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
