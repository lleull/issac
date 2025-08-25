// import { RevealOnScroll } from "./RevealOnScroll";
import livePerformance from "../assets/img2.jpg";

const PerformanceCard = ({ performance }) => (
  <div
    className="backdrop-blur-sm border border-slate-700 rounded-2xl p-6 group transition-all duration-300"
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
    <div className="flex items-start gap-4">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
        style={{
          background: "linear-gradient(135deg, rgb(251, 191, 36), rgb(249, 115, 22))",
        }}
      >
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
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
      </div>

      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <h4 className="text-xl font-bold group-hover:text-cyan-400 transition-colors text-slate-100">
            {performance.venue}
          </h4>
          <span className="text-sm text-slate-400 bg-slate-700 px-2 py-1 rounded">
            {performance.date}
          </span>
        </div>

        <p className="text-cyan-400 font-medium mb-1">{performance.location}</p>

        <div className="flex items-center gap-4 mb-3 text-sm">
          <span className="flex items-center gap-1 text-slate-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            {performance.type}
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            {performance.audience}
          </span>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed">{performance.description}</p>
      </div>
    </div>
  </div>
);

const GenreTag = ({ children, color }) => (
  <span
    className="px-4 py-2 rounded-full text-sm font-medium"
    style={{
      backgroundColor: `${color}20`,
      color: color,
    }}
  >
    {children}
  </span>
);

export const Performances = () => {
  const performances = [
    {
      venue: "The Blue Note Club",
      location: "Downtown Music District",
      date: "March 2024",
      type: "Live Concert",
      audience: "500+",
      description:
        "Headlined an evening of contemporary rock with a full band setup, delivering powerful bass lines that energized the crowd.",
    },
    {
      venue: "Studio Sessions Live",
      location: "Recording Complex",
      date: "January 2024",
      type: "Studio Performance",
      audience: "Livestream",
      description:
        "Intimate acoustic session broadcasted live, showcasing the subtle dynamics of bass in stripped-down arrangements.",
    },
    {
      venue: "Music Festival 2025",
      location: "City Park Amphitheater",
      date: "August 2025",
      type: "Festival Performance",
      audience: "2000+",
      description:
        "Main stage performance at the annual music festival, collaborating with multiple artists in a dynamic showcase.",
    },
    {
      venue: "Jazz Corner",
      location: "Arts Quarter",
      date: "June 2025",
      type: "Jazz Session",
      audience: "200+",
      description:
        "Improvisational jazz session featuring complex bass arrangements and spontaneous musical conversations.",
    },
  ];

  return (
    <section id="performances" className="py-20 relative">
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
            Live Performances
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Experience the energy and passion of live music through my performances across various
            venues and settings
          </p>
        </div>
        {/* </RevealOnScroll> */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* <RevealOnScroll delay={200}> */}
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-40"
              style={{
                background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
                animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
            />
            <img
              src={livePerformance}
              alt="Live Performance"
              className="relative rounded-3xl w-full"
              style={{
                boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.8)",
              }}
            />

            {/* Performance stats overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div
                className="backdrop-blur-sm border border-slate-700 rounded-2xl p-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.9))",
                }}
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div
                      className="text-2xl font-bold bg-clip-text text-transparent"
                      style={{
                        background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
                        WebkitBackgroundClip: "text",
                      }}
                    >
                      50+
                    </div>
                    <div className="text-sm text-slate-400">Live Shows</div>
                  </div>
                  <div>
                    <div
                      className="text-2xl font-bold bg-clip-text text-transparent"
                      style={{
                        background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
                        WebkitBackgroundClip: "text",
                      }}
                    >
                      15+
                    </div>
                    <div className="text-sm text-slate-400">Venues</div>
                  </div>
                  <div>
                    <div
                      className="text-2xl font-bold bg-clip-text text-transparent"
                      style={{
                        background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
                        WebkitBackgroundClip: "text",
                      }}
                    >
                      5K+
                    </div>
                    <div className="text-sm text-slate-400">Audience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </RevealOnScroll> */}

          {/* <RevealOnScroll delay={400}> */}
          <div className="space-y-8">
            <div>
              <h3
                className="text-3xl font-bold mb-4 bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
                  WebkitBackgroundClip: "text",
                }}
              >
                On Stage Excellence
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Live performance is where music truly comes alive. Every show is an opportunity to
                connect with the audience, create unforgettable moments, and showcase the power of
                live bass guitar in its full glory.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                From intimate jazz clubs to large festival stages, I bring the same level of
                passion, precision, and professionalism to every performance, ensuring each audience
                leaves with a lasting musical memory.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <GenreTag color="rgb(147, 51, 234)">Rock Concerts</GenreTag>
              <GenreTag color="rgb(6, 182, 212)">Jazz Sessions</GenreTag>
              <GenreTag color="rgb(251, 191, 36)">Festival Shows</GenreTag>
              <GenreTag color="rgb(244, 114, 182)">Studio Live</GenreTag>
            </div>
          </div>
          {/* </RevealOnScroll> */}
        </div>

        {/* <RevealOnScroll delay={600}> */}
        <div>
          <h3
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent"
            style={{
              background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
              WebkitBackgroundClip: "text",
            }}
          >
            Recent Performances
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {performances.map((performance, index) => (
              <PerformanceCard key={index} performance={performance} />
            ))}
          </div>
        </div>
        {/* </RevealOnScroll> */}
      </div>
    </section>
  );
};
