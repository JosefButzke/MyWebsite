export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-3">Portfolio</p>
        <h1 className="text-5xl font-bold mb-3">Josef Stein Butzke</h1>
        <h2 className="text-2xl text-neutral-400 mb-6">Software Engineer</h2>
        <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
          <span>📍 Yokohama, Japan</span>
          <span>📞 070-9091-6757</span>
          <a href="mailto:josef-stein@hotmail.com" className="hover:text-foreground transition-colors">
            📧 josef-stein@hotmail.com
          </a>
          <a
            href="https://linkedin.com/in/josefsteinbutzke"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/JosefButzke"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 border-t border-neutral-800" />

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-neutral-400 leading-relaxed text-lg max-w-3xl">
          I love algorithms and new computation knowledge that guided me to study more and discover new
          ways to use coding — mobile apps, servers, games, IoT, data analysis, and more. My favorites are
          mobile apps and games because we can see our users literally touching our creations. I&apos;m always
          looking to increase code performance and UX.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 border-t border-neutral-800" />

      {/* Skills */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-8">Skills &amp; Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <SkillRow label="Languages" value="JavaScript (6 yrs), C# (2 yrs), C (1 yr)" />
          <SkillRow label="Frameworks" value="React Native, Next.js, Node.js, React, Unity, Prisma, GraphQL" />
          <SkillRow label="Databases" value="Postgres, MySQL, MongoDB" />
          <SkillRow label="Cloud" value="AWS, Digital Ocean" />
          <SkillRow label="Tools" value="Git, JIRA, Figma, Docker, Insomnia" />
          <SkillRow label="Methodology" value="Domain Driven Design, Clean Code, SOLID" />
          <SkillRow label="Human Languages" value="English (Business), Japanese (N3), Portuguese (Native)" />
          <SkillRow label="Certifications" value="JLPT N4 — studying N3" />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 border-t border-neutral-800" />

      {/* Experience */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-10">Work Experience</h3>

        <ExperienceItem
          title="Software Engineer"
          company="Travelience"
          location="Tokyo, Japan"
          period="Mar 2023 — Present"
          responsibilities={[
            "Implemented new features: Airport Transfer, ChatGPT app, UI Revamp",
            "Improved system code security and maintainability",
            "Increased SEO and overall system performance",
            "Reduced infrastructure costs",
            "Trained new team members",
          ]}
          achievements={[
            "Designed and implemented a new photo gallery with collage style",
            "Improved main search feature from ~3000ms to <100ms using pre-calculated columns and caching",
            "Reduced bad/low-quality links from 45% to 15% (LCP/CLS improvements)",
            "Led library upgrades to latest versions",
            "Built a new modal UI with fluid mobile/web animations",
            "Replaced spinner loading with shimmer clone effect",
            "Achieved SEO score of 100 on all public pages; boosted performance by 30%+",
            "Sped up the test pipeline by ~25%",
          ]}
        />

        <ExperienceItem
          title="Lead Software Engineer"
          company="Zazuu Startup"
          location="ES, Brazil"
          period="May 2020 — Feb 2023"
          responsibilities={[
            "Collaborated with stakeholders to plan sprints and features",
            "Managed deployments across server, mobile apps, and websites",
            "Defined code architecture with SOLID principles and unit tests",
            "Trained new engineers",
          ]}
          achievements={[
            "Designed system architecture and reusable web components",
            "Built a complex cart system handling multiple product types, discounts, coupons, and combos",
            "Implemented a referral system",
            "Built financial reports and appointment management system",
            "System supported 1,000+ orders per month",
          ]}
        />

        <ExperienceItem
          title="Internship"
          company="Court of Auditors of Espírito Santo"
          location="ES, Brazil"
          period="May 2020 — Feb 2023"
          responsibilities={[
            "Strong focus on React Native, Node.js, and databases",
            "Collaborated with stakeholders on sprint planning",
            "Managed full-stack deployments",
            "Built system architecture and web components",
          ]}
          achievements={[]}
          last
        />
      </section>

      <div className="max-w-4xl mx-auto px-6 border-t border-neutral-800" />

      {/* Projects */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-8">Personal Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProjectCard
            title="Greenhouse Automation"
            tech="React Native · Arduino · Bluetooth · SQLite"
            description="Mobile app to control a Bluetooth Arduino managing irrigation and ventilation of a mini greenhouse based on soil moisture, temperature, and humidity. Data is stored offline in SQLite and visualized in graphs."
            link="https://www.linkedin.com/pulse/sistema-de-automo%C3%A7%C3%A3o-estufa-com-react-native-josef-stein-butzke/"
            youtubeId="02F8CG98X3g"
          />
          <ProjectCard
            title="In The Dolmen"
            tech="Unity · C# · Procedural Generation"
            description="A 3D game featuring procedural terrain with Perlin noise, procedural animations, and original 3D modeling. An ongoing project exploring storytelling, visual effects, and game design."
            link="https://www.youtube.com/watch?v=RImUv4Nlw6M"
            youtubeId="RImUv4Nlw6M"
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 border-t border-neutral-800" />

      {/* Education */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-6">Education</h3>
        <div>
          <p className="font-semibold">Bachelor&apos;s Degree, Computer Science</p>
          <p className="text-neutral-400">University VilaVelha — Brazil, 2015–2020</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 border-t border-neutral-800" />

      {/* Soft Skills */}
      <section className="max-w-4xl mx-auto px-6 py-12 pb-24">
        <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-6">Soft Skills</h3>
        <ul className="space-y-3 text-neutral-400 list-none">
          <li className="flex gap-3">
            <span className="text-neutral-600 mt-1">—</span>
            <span>Excellent communication skills; keeps a friendly environment, mentors junior developers, and shares knowledge across teams.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-neutral-600 mt-1">—</span>
            <span>Creative problem-solver who believes simple solutions are better than marginally faster complex ones.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-neutral-600 mt-1">—</span>
            <span>Thrives on complex problems — loves tackling the challenges that others find hard to crack.</span>
          </li>
        </ul>
      </section>

      {/* Easter egg */}
      <a
        href="/no-click"
        className="fixed right-8 bottom-8 p-4 bg-background text-red-600 hover:scale-110 hover:bg-red-600 hover:border-white hover:text-white font-bold border-2 border-red-600 transition-all duration-300 cursor-pointer text-sm"
      >
        do not click
      </a>
    </main>
  );
}

function SkillRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">{label}</p>
      <p className="text-sm">{value}</p>
    </div>
  );
}

function ExperienceItem({
  title,
  company,
  location,
  period,
  responsibilities,
  achievements,
  last = false,
}: {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
  last?: boolean;
}) {
  return (
    <div className={`flex gap-6 ${!last ? "mb-12" : ""}`}>
      <div className="flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-neutral-400 mt-2 shrink-0" />
        {!last && <div className="w-px flex-1 bg-neutral-800 mt-2" />}
      </div>
      <div className="pb-2 w-full">
        <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
          <div>
            <span className="font-semibold">{title}</span>
            <span className="text-neutral-500"> · {company}</span>
            <span className="text-neutral-600 text-sm"> · {location}</span>
          </div>
          <span className="text-xs text-neutral-500 whitespace-nowrap">{period}</span>
        </div>
        <ul className="mt-3 space-y-1">
          {responsibilities.map((r, i) => (
            <li key={i} className="text-sm text-neutral-400 flex gap-2">
              <span className="text-neutral-600 shrink-0">·</span>
              {r}
            </li>
          ))}
        </ul>
        {achievements.length > 0 && (
          <>
            <p className="text-xs uppercase tracking-wide text-neutral-600 mt-4 mb-2">Key Achievements</p>
            <ul className="space-y-1">
              {achievements.map((a, i) => (
                <li key={i} className="text-sm text-neutral-400 flex gap-2">
                  <span className="text-neutral-600 shrink-0">✦</span>
                  {a}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  tech,
  description,
  link,
  youtubeId,
}: {
  title: string;
  tech: string;
  description: string;
  link: string;
  youtubeId?: string;
}) {
  if (youtubeId) {
    return (
      <div className="border border-neutral-800 hover:border-neutral-500 transition-colors rounded-sm overflow-hidden group">
        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <div className="p-5">
          <a href={link} target="_blank" rel="noopener noreferrer" className="font-semibold group-hover:underline mb-1 block">
            {title}
          </a>
          <p className="text-xs text-neutral-500 mb-3">{tech}</p>
          <p className="text-sm text-neutral-400 leading-relaxed">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-neutral-800 p-5 hover:border-neutral-500 transition-colors rounded-sm group"
    >
      <p className="font-semibold group-hover:underline mb-1">{title}</p>
      <p className="text-xs text-neutral-500 mb-3">{tech}</p>
      <p className="text-sm text-neutral-400 leading-relaxed">{description}</p>
    </a>
  );
}
