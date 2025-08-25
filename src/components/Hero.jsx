// import { RevealOnScroll } from "./RevealOnScroll";
import heroBg from "./../assets/img3.jpg";

const SoundWave = () => (
  <div className="flex items-end justify-center mb-8" style={{ height: "40px", gap: "2px" }}>
    {[0, 1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="w-1 rounded"
        style={{
          background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
          animation: `soundWave 1.2s ease-in-out infinite`,
          animationDelay: `${i * 0.1}s`,
          height: "10px",
        }}
      />
    ))}
    <style>{`
      @keyframes soundWave {
        0%, 100% { height: 10px; opacity: 0.4; }
        50% { height: 30px; opacity: 1; }
      }
    `}</style>
  </div>
);

const FloatingParticle = (position, size, color, delay) => (
  <div
    className="absolute rounded-full"
    style={{
      ...position,
      width: size,
      height: size,
      backgroundColor: color,
      animation: `floating 6s ease-in-out infinite`,
      animationDelay: delay,
    }}
  >
    <style>{`
      @keyframes floating {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
    `}</style>
  </div>
);

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Studio Background" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.9))",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.1'%3E%3Cpath d='M30 0l2 15 2-15h-4zm0 20l2 15 2-15h-4zm0 20l2 15 2-15h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10">
        <FloatingParticle
          position={{ top: "80px", left: "40px" }}
          size="8px"
          color="rgb(147, 51, 234)"
          delay="0s"
        />
        <FloatingParticle
          position={{ top: "160px", right: "80px" }}
          size="12px"
          color="rgb(6, 182, 212)"
          delay="2s"
        />
        <FloatingParticle
          position={{ bottom: "160px", left: "80px" }}
          size="8px"
          color="rgb(251, 191, 36)"
          delay="4s"
        />
        <FloatingParticle
          position={{ bottom: "240px", right: "40px" }}
          size="16px"
          color="rgba(244, 114, 182, 0.5)"
          delay="1s"
        />
      </div>

      {/* Main Content */}
      {/* <RevealOnScroll> */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <SoundWave />

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
          <span
            className="bg-clip-text text-transparent"
            style={{
              background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
              WebkitBackgroundClip: "text",
              backgroundSize: "400% 400%",
              animation: "gradientShift 8s ease infinite",
            }}
          >
            Hi, I'm Yeshak
          </span>
          <style>{`
              @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
            `}</style>
        </h1>

        <div className="relative">
          <p className="text-slate-400 text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
            Musician & Booking Coordinator | Live Bass & Artist Management"
          </p>
          <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Skilled bassist with extensive experience in live performance, studio recording, and
            creative collaboration with singers, producers, and innovative teams
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#music"
            className="px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group text-white"
            style={{
              background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
              boxShadow: "0 0 40px rgba(147, 51, 234, 0.3)",
            }}
          >
            <span className="flex items-center gap-3">
              View My Music
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group"
            style={{
              borderColor: "rgb(6, 182, 212)",
              color: "rgb(6, 182, 212)",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span className="flex items-center gap-3">
              Let's Collaborate
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
      {/* </RevealOnScroll> */}
    </section>
  );
};
