// import { RevealOnScroll } from "./RevealOnScroll";

const ContactMethodCard = ({ method }) => {
  return (
    <a
      href={method.link}
      className="backdrop-blur-sm border border-slate-700 rounded-2xl p-6 group transition-all duration-300 block"
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
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform"
          style={{
            background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
          }}
        >
          {method.icon}
        </div>
        <div>
          <h4 className="font-semibold text-lg group-hover:text-cyan-400 transition-colors text-slate-100">
            {method.title}
          </h4>
          <p className="text-slate-400 text-sm mb-1">{method.description}</p>
          <p className="text-cyan-400 font-medium">{method.contact}</p>
        </div>
      </div>
    </a>
  );
};

const CollaborationItem = ({ type }) => (
  <div className="flex items-center gap-3">
    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
    <span className="text-slate-300">{type}</span>
  </div>
);

export const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      description: "Drop me a line anytime",
      contact: "yeshakaberham2@gmail.com",
      link: "mailto:yeshakaberham2@gmail.com",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone",
      description: "Let's talk music",
      contact: "+251941272214",
      link: "",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
        </svg>
      ),
      title: "Social Media",
      description: "Follow my journey",
      contact: "@YeshakMusic",
      link: "https://www.instagram.com/yeshakaberham2?utm_source=qr&igsh=dGllbmhtYjY5OW1h",
    },
  ];

  const collaborationTypes = [
    "Studio Recording Sessions",
    "Live Performance Collaborations",
    "Music Production Projects",
    "Creative Songwriting Sessions",
    "Educational Music Workshops",
    "Commercial Music Projects",
  ];

  return (
    <section id="contact" className="py-20 relative">
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
            Let's Create Together
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Ready to bring your musical vision to life? Let's collaborate and create something
            extraordinary
          </p>
        </div>
        {/* </RevealOnScroll> */}

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* <RevealOnScroll delay={200}> */}
          <div>
            <h3
              className="text-3xl font-bold mb-8 bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
                WebkitBackgroundClip: "text",
              }}
            >
              Get In Touch
            </h3>

            <div className="space-y-6 mb-10">
              {contactMethods?.map((method, index) => (
                <ContactMethodCard key={index} method={method} />
              ))}
            </div>

            <div
              className="backdrop-blur-sm border border-slate-700 rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(30, 41, 59, 0.8))",
                boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.8)",
              }}
            >
              <h4
                className="text-xl font-bold mb-4 bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
                  WebkitBackgroundClip: "text",
                }}
              >
                Available For
              </h4>
              <div className="space-y-3">
                {collaborationTypes?.map((type, index) => (
                  <CollaborationItem key={index} type={type} />
                ))}
              </div>
            </div>
          </div>
          {/* </RevealOnScroll> */}

          {/* <RevealOnScroll delay={400}> */}
          <div
            className="backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
            style={{
              background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(30, 41, 59, 0.8))",
              boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.8)",
            }}
          >
            <h3
              className="text-2xl font-bold mb-6 bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
                WebkitBackgroundClip: "text",
              }}
            >
              Send a Message
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-slate-100"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-slate-100"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2 text-slate-300">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-slate-100">
                  <option>Select project type...</option>
                  <option>Studio Recording</option>
                  <option>Live Performance</option>
                  <option>Music Production</option>
                  <option>Creative Collaboration</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors resize-none text-slate-100"
                  placeholder="Tell me about your project, timeline, and how we can collaborate..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))",
                  boxShadow: "0 0 40px rgba(147, 51, 234, 0.3)",
                  color: "white",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
          {/* </RevealOnScroll> */}
        </div>

        {/* <RevealOnScroll delay={600}> */}
        <div className="text-center mt-16">
          <div
            className="inline-block backdrop-blur-sm border border-slate-700 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(30, 41, 59, 0.8))",
              boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.8)",
            }}
          ></div>
        </div>
        {/* </RevealOnScroll> */}
      </div>
    </section>
  );
};
