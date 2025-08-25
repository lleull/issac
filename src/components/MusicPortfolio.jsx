// import { RevealOnScroll } from "./RevealOnScroll";

const ProjectCard = (project, index) => {
  const gradients = [
    "linear-gradient(to right, rgb(147, 51, 234), rgb(6, 182, 212))",
    "linear-gradient(to right, rgb(6, 182, 212), rgb(244, 114, 182))",
    "linear-gradient(to right, rgb(251, 191, 36), rgb(249, 115, 22))",
    "linear-gradient(to right, rgb(244, 114, 182), rgb(147, 51, 234))",
  ];

  return (
    <div
      className="backdrop-blur-sm border border-slate-700 rounded-2xl group hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(30, 41, 59, 0.8))",
        boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.8)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 0 40px rgba(147, 51, 234, 0.4), 0 25px 50px -12px rgba(15, 23, 42, 0.8)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(15, 23, 42, 0.8)";
      }}
    >
      <div className="h-2 w-full rounded-t-2xl" style={{ background: gradients[index] }} />

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors text-slate-100">
              {project.title}
            </h3>
            <p className="text-cyan-400 font-medium">{project.genre}</p>
          </div>
          <span className="text-sm text-slate-400 bg-slate-700 px-3 py-1 rounded-full">
            {project.year}
          </span>
        </div>

        <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 12a7.971 7.971 0 00-1.343-4.243 1 1 0 010-1.414z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M13.828 8.172a1 1 0 011.414 0A5.983 5.983 0 0117 12a5.983 5.983 0 01-1.758 3.828 1 1 0 01-1.414-1.414A3.987 3.987 0 0015 12a3.987 3.987 0 00-1.172-2.828 1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium text-slate-300">{project.tracks} tracks</span>
          </div>

          <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group">
            <span className="text-sm font-medium">Listen</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export const MusicPortfolio = () => {
  const projects = [
    {
      title: "Acoustic Sessions",
      genre: "Acoustic Rock",
      description:
        "Intimate acoustic performances showcasing the versatility of bass in stripped-down arrangements.",
      tracks: 8,
      year: "2023",
    },
    {
      title: "Studio Collaborations",
      genre: "Various Genres",
      description:
        "Professional studio recordings with diverse artists, featuring dynamic bass arrangements.",
      tracks: 12,
      year: "2023",
    },
    {
      title: "Live Performance Series",
      genre: "Live Rock",
      description: "Energetic live performances capturing the raw power and emotion of live music.",
      tracks: 10,
      year: "2022",
    },
    {
      title: "Experimental Sounds",
      genre: "Experimental",
      description:
        "Pushing creative boundaries with innovative bass techniques and unique soundscapes.",
      tracks: 6,
      year: "2022",
    },
  ];

  return (
    <section id="music" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* <RevealOnScroll> */}
        <div className="text-center mb-16">
          <h2
            className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent"
            style={{
              background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
              WebkitBackgroundClip: "text",
            }}
          >
            My Music
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Explore my musical journey through various projects, collaborations, and performances
          </p>
        </div>
        {/* </RevealOnScroll> */}

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* <RevealOnScroll delay={800}> */}
        <div className="text-center">
          <div
            className="inline-block backdrop-blur-sm border border-slate-700 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(30, 41, 59, 0.8))",
              boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.8)",
            }}
          >
            <div className="p-8">
              <h3
                className="text-2xl font-bold mb-4 bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
                  WebkitBackgroundClip: "text",
                }}
              >
                Want to Hear More?
              </h3>
              <p className="text-slate-300 mb-6 max-w-lg">
                These projects represent just a glimpse of my musical journey. Let's connect to
                discuss how we can create something amazing together.
              </p>
              <a
                href="#contact"
                className="px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 inline-block"
                style={{
                  background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
                  boxShadow: "0 0 40px rgba(147, 51, 234, 0.3)",
                  color: "white",
                }}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        {/* </RevealOnScroll> */}
      </div>
    </section>
  );
};
