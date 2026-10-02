import SectionLabel from "./components/SectionLabel";
import TeamCard from "./components/TeamCard";
import TerminalCard from "./components/TerminalCard";
import maikImage from "./assets/teams/maik.webp";
import kevinImage from "./assets/teams/kevin.webp";
import pauliusImage from "./assets/teams/paulius.webp";
import sadikImage from "./assets/teams/sadik.webp";

// Edit team information here. Optional photos, descriptions, and GitHub links stay hidden.
const participants = [
  {
    number: "01",
    image: maikImage,
    name: "Maik H. Olsen",
    role: "Front-end Development",
    linkedin: "https://www.linkedin.com/in/maik-h-olsen-246338294/",
  },
  {
    number: "02",
    image: kevinImage,
    name: "Kevin Kristensen",
    role: "Interaction Design",
    linkedin: "https://www.linkedin.com/in/kevinkris/",
  },
  {
    number: "03",
    image: pauliusImage,
    name: "Paulius Pacerzinskas",
    role: "Back-end Development",
    linkedin: "https://www.linkedin.com/in/paulius-pacerzinskas-b7b733242/",
  },
  {
    number: "04",
    image: sadikImage,
    name: "Sadik Partalko",
    role: "Back-end Development",
    linkedin: "https://www.linkedin.com/in/sadik-partalko-a33003339/",
  },
];

// Set this to the team's email address to enable the contact link.
const contactEmail = "itsmaik@icloud.com";

const collaboration = [
  [
    "A real problem",
    "Something that matters to your team, your business, or the people you serve.",
  ],
  [
    "Room to explore",
    "Space to ask questions, test ideas, and discover the right solution together.",
  ],
  [
    "People to learn from",
    "Access to people who can share insight, context and feedback along the way.",
  ],
  [
    "A collaborative partner",
    "A company interested in sharing knowledge and building something useful with us.",
  ],
];

const buttonClass =
  "inline-flex items-center justify-center gap-8 rounded-lg bg-ink px-6 py-4 text-sm font-medium text-white hover:bg-slate-700";

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:rounded focus:bg-white focus:p-4"
      >
        Skip to content
      </a>
      <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-8 sm:px-10 lg:px-16">
        <a
          href="#"
          aria-label="Bachelor Project home"
          className="text-sm font-semibold tracking-tight"
        >
          Bachelor Project{" "}
          <span className="ml-1 font-mono font-normal text-muted">/ 2027</span>
        </a>
        <nav
          aria-label="Main navigation"
          className="flex gap-6 text-xs text-muted sm:gap-8"
        >
          {["About", "Team", "Project", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-ink"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main id="main" className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <section
          aria-labelledby="hero-title"
          className="grid items-center gap-14 pb-24 pt-16 sm:pb-32 sm:pt-24 lg:min-h-[690px] lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-36"
        >
          <div>
            <p className="mb-7 flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-[#648774]" /> Open
              for collaboration · 2027
            </p>
            <h1
              id="hero-title"
              className="max-w-xl text-[clamp(2.75rem,4.6vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.055em]"
            >
              We're looking for our Bachelor Project{" "}
              <span className="text-[#627d93]">partner.</span>
            </h1>
            <p className="mt-7 max-w-sm text-base leading-7 text-muted">
              Four students. One project.
              <br />
              Let's build something meaningful.
            </p>
            <a href="#contact" className={`${buttonClass} mt-9`}>
              Work with us <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="lg:translate-y-6">
            <TerminalCard />
            <p className="mt-5 text-center font-mono text-[10px] tracking-wide text-muted">
              sudo find partner --motivated
            </p>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-title"
          className="section-space grid gap-4 border-t border-line lg:grid-cols-[1fr_2fr] lg:gap-16"
        >
          <SectionLabel>01 / ABOUT</SectionLabel>
          <div className="max-w-2xl">
            <h2 id="about-title" className="section-heading">
              Four minds.
              <br />
              One shared ambition.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted">
              We are four students from Kristiania with backgrounds in
              front-end, back-end and interaction design. For our bachelor
              project in 2027, we're looking for a company that wants to explore
              and solve a real challenge together with us. After years of
              building our skills and knowledge, we’re now ready to bring all
              that into the real world!
            </p>
            <p className="mt-4 text-base leading-8 text-muted">
              We're curious, ready to learn, and excited to turn an idea into
              something useful. We’re ready for the next chapter, and you can be
              part of it.
            </p>
          </div>
        </section>

        <section
          id="team"
          aria-labelledby="team-title"
          className="section-space border-t border-line"
        >
          <SectionLabel>02 / TEAM</SectionLabel>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 id="team-title" className="section-heading">
              The people behind the project.
            </h2>
            <p className="font-mono text-[11px] text-muted">
              4 students / one team
            </p>
          </div>
          <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {participants.map((participant) => (
              <TeamCard key={participant.number} {...participant} />
            ))}
          </div>
        </section>

        <section
          id="project"
          aria-labelledby="project-title"
          className="section-space border-t border-line"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-24">
            <div>
              <SectionLabel>03 / COLLABORATION</SectionLabel>
              <h2 id="project-title" className="section-heading">
                How can we build a great project together?
              </h2>
              <p className="mt-6 max-w-sm text-base leading-8 text-muted">
                For our bachelor project in partnership with Kristiania, you
                bring the challenge, and we bring skills, design thinking, and a
                lot of enthusiasm to explore, build and test a solution in close
                collaboration with your team throughout the semester.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted">
                  What makes a great collaboration
                </p>

                <div className="h-px flex-1 bg-slate-300" />
              </div>
            </div>
            <div>
              {collaboration.map(([title, description], index) => (
                <div
                  key={title}
                  className="flex gap-5 border-b border-line py-6 first:pt-0 last:border-0 last:pb-0"
                >
                  <span className="pt-1 font-mono text-xs text-muted">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-slate-300 pt-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              For full details
            </p>

            <a
              href="https://www.kristiania.no/bachelorprosjekt/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block font-medium text-slate-800 underline underline-offset-4"
            >
              Read Kristiania's bachelor project requirements ↗
            </a>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-title"
          className="mb-16 rounded-2xl bg-terminal px-7 py-14 text-center text-white shadow-[0_16px_40px_-24px_rgba(24,39,54,0.3)] sm:px-12 sm:py-20"
        >
          <SectionLabel light>04 / CONTACT</SectionLabel>
          <h2
            id="contact-title"
            className="text-3xl font-semibold tracking-[-0.04em] sm:text-5xl"
          >
            Have a problem worth solving?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-400">
            Let's talk about your idea and what we could build together.
          </p>
          {contactEmail ? (
            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                "Bachelor Project Collaboration 2027",
              )}`}
              className="mt-8 inline-flex items-center gap-8 rounded-lg bg-[#dce6ed] px-6 py-4 text-sm font-medium text-ink hover:bg-white"
            >
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <>
              <button
                type="button"
                disabled
                aria-describedby="contact-placeholder"
                className="mt-8 inline-flex cursor-not-allowed items-center gap-8 rounded-lg bg-[#dce6ed] px-6 py-4 text-sm font-medium text-ink"
              >
                Start a conversation <span aria-hidden="true">↗</span>
              </button>
              <p
                id="contact-placeholder"
                className="mt-4 font-mono text-[10px] text-slate-400"
              >
                Or email us at itsmaik@icloud.com
              </p>
            </>
          )}
        </section>
      </main>

      <footer className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 pb-8 font-mono text-[10px] text-muted sm:px-10 lg:px-16">
        <p>Bachelor Project / 2027</p>
        <p>
          builtWith:{" "}
          <span className="text-[#566e83]">["React", "Vite", "Tailwind"]</span>
        </p>
        <p>
          assistedBy: <span className="text-[#566e83]">["Codex"]</span>
        </p>
      </footer>
    </>
  );
}

export default App;
