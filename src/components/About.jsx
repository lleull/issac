import musicianPortrait from "../assets/img5.jpg";
import bassGuitar from "../assets/bass-guitar.jpg";

const SkillBar = ({ name, level, color }) => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <span className="font-medium text-slate-200">{name}</span>
      <span className="text-sm text-slate-400">{level}%</span>
    </div>
    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
      <div
        className="h-full transition-all duration-1000 ease-out rounded-full"
        style={{
          width: `${level}%`,
          backgroundColor: color,
        }}
      />
    </div>
  </div>
);

const ExperienceCard = ({ exp }) => (
  <div
    className="backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
    style={{
      background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(30, 41, 59, 0.8))",
      boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.8)",
    }}
  >
    <div className="flex items-start gap-4">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
        }}
      >
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-1 text-slate-100">{exp.title}</h4>
        <p className="text-cyan-400 font-medium mb-2">{exp.company}</p>
        <p className="text-sm text-slate-400 mb-3">{exp.period}</p>
        <p className="text-slate-300">{exp.description}</p>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project }) => (
  <div
    className="backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
    style={{
      background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(30, 41, 59, 0.8))",
    }}
  >
    <div className="flex items-start gap-4">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl"
        style={{
          background: "linear-gradient(135deg, rgb(251, 191, 36), rgb(249, 115, 22))",
        }}
      >
        {project.emoji}
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-semibold mb-2 text-slate-100">{project.title}</h4>
        <p className="text-cyan-400 font-medium mb-2">Role: {project.role}</p>
        <p className="text-slate-300 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-sm"
              style={{
                backgroundColor: "rgba(147, 51, 234, 0.2)",
                color: "rgb(147, 51, 234)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const About = () => {
  const skills = [
    { name: "Artist Booking & Coordination", level: 95, color: "rgb(147, 51, 234)" },
    { name: "Live Bass Guitar Performance", level: 98, color: "rgb(6, 182, 212)" },
    { name: "Music Research & Artist Scouting", level: 90, color: "rgb(251, 191, 36)" },
    { name: "Event & Studio Scheduling", level: 92, color: "rgb(244, 114, 182)" },
    { name: "Venue & Client Communication", level: 94, color: "rgb(34, 197, 94)" },
    { name: "Artist Package Development", level: 95, color: "rgb(249, 115, 22)" },
  ];

  const experiences = [
    {
      title: "Freelance Musician & Booking Coordinator",
      company: "Independent Professional",
      period: "2021 - 2022",
      description:
        "Performing bass guitar, coordinating artist bookings, and supporting live shows in Addis Ababa and beyond. Specializing in connecting African and European music markets.",
    },
    {
      title: "Music Coordinator & Bassist",
      company: "Various Hotels & Venues",
      period: "2022 - 2023",
      description:
        "Managed live music sessions, artist bookings, and performance coordination while delivering professional bass guitar performances for diverse audiences.",
    },
    {
      title: "Artist Support Coordinator",
      company: "Music Industry Projects",
      period: "2023 - 2024",
      description:
        "Developed artist materials, coordinated collaborations, and provided support for professional musicians and creative teams.",
    },
  ];

  const projects = [
    {
      emoji: "🎤",
      title: "Live Music Coordination – Hotel Session",
      role: "Music Coordinator & Bassist",
      description:
        "Coordinated and performed in a live music session at a leading hotel in Addis Ababa. Managed bookings, prepared artist one-pagers, and ensured smooth communication with venue staff. Also played bass guitar during the live set, receiving strong audience feedback.",
      skills: [
        "Artist Booking",
        "Live Performance",
        "Coordination",
        "Venue Communication",
        "Artist Materials",
      ],
    },
    {
      emoji: "🎸",
      title: "Bass Recording Collaboration with Producer",
      role: "Musician – Bass Guitar",
      description:
        "Recorded basslines for a producer-led studio project. Brought original melodies and groove to the recording, ensuring a soulful and dynamic feel. This collaboration allowed me to explore creative synergy while meeting professional studio deadlines.",
      skills: [
        "Live Bass Guitar",
        "Recording",
        "Collaboration",
        "Studio Workflow",
        "Music Creativity",
      ],
    },
    {
      emoji: "📂",
      title: "Artist Materials Development – Bio & Decks",
      role: "Artist Support Coordinator",
      description:
        "Developed and maintained updated artist one-pagers, biographies, and visual decks. Organized materials for presentation to venues and clients, ensuring artists had professional, market-ready profiles.",
      skills: [
        "Artist Decks",
        "Writing & Editing",
        "Coordination",
        "Design Support",
        "Communication",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent"
            style={{
              background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
              WebkitBackgroundClip: "text",
            }}
          >
            About Me
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Professional Musician Coordinator & Bass Guitarist with expertise in artist booking,
            event coordination, and live performance across international music markets
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-30"
              style={{
                background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
                animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
            />
            <img
              src={musicianPortrait}
              alt="Yeshak - Professional Musician & Coordinator"
              className="relative rounded-3xl w-full max-w-lg mx-auto"
              style={{
                boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.8)",
              }}
            />
          </div>

          <div className="space-y-8">
            <div>
              <h3
                className="text-3xl font-bold mb-4 bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
                  WebkitBackgroundClip: "text",
                }}
              >
                Dual Expertise in Music
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I bring a unique combination of live performance skills as a bass guitarist and
                professional coordination expertise in artist booking and event management. My
                experience spans both African and European music markets, enabling effective
                cross-cultural collaboration and international project coordination.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Whether I'm on stage delivering powerful bass lines or behind the scenes
                coordinating complex music events, I'm dedicated to creating exceptional musical
                experiences that connect artists, venues, and audiences.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6 text-cyan-400">Professional Skills</h4>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3
              className="text-3xl font-bold mb-8 bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
                WebkitBackgroundClip: "text",
              }}
            >
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-30"
              style={{
                background: "linear-gradient(135deg, rgb(251, 191, 36), rgb(249, 115, 22))",
                animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite 1s",
              }}
            />
            <img
              src={bassGuitar}
              alt="Professional Bass Guitar & Coordination Tools"
              className="relative rounded-3xl w-full"
              style={{
                boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.8)",
              }}
            />
          </div>
        </div>

        <div className="mb-16">
          <h3
            className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent"
            style={{
              background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
              WebkitBackgroundClip: "text",
            }}
          >
            Portfolio Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3
              className="text-2xl font-bold mb-6 bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
                WebkitBackgroundClip: "text",
              }}
            >
              Education & Development
            </h3>
            <div
              className="backdrop-blur-sm border border-slate-700 rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(30, 41, 59, 0.8))",
              }}
            >
              <p className="text-slate-300 mb-4">
                <strong className="text-cyan-400">Self-Taught Professional Musician</strong> with
                ongoing training in:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 pl-4">
                <li>Live Performance Techniques</li>
                <li>Sound Engineering & Production</li>
                <li>Artist Collaboration & Management</li>
                <li>Music Business & Coordination</li>
              </ul>
            </div>
          </div>

          <div>
            <h3
              className="text-2xl font-bold mb-6 bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
                WebkitBackgroundClip: "text",
              }}
            >
              Languages
            </h3>
            <div
              className="backdrop-blur-sm border border-slate-700 rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(30, 41, 59, 0.8))",
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-cyan-400 font-medium">English</p>
                  <p className="text-slate-300">Fluent</p>
                </div>
                <div>
                  <p className="text-cyan-400 font-medium">Amharic</p>
                  <p className="text-slate-300">Native</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
