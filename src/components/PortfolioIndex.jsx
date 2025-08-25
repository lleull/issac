import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { MusicPortfolio } from "../components/MusicPortfolio";
import { Performances } from "../components/Performances";
import { Contact } from "../components/Contact";

const PortfolioIndex = () => {
  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <MusicPortfolio />
        <Performances />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-slate-700 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div 
              className="font-serif text-xl font-bold mb-4 md:mb-0 bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))',
                WebkitBackgroundClip: 'text'
              }}
            >
              Yeshak
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#home" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                About
              </a>
              <a href="#music" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                Music
              </a>
              <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                Contact
              </a>
            </div>
            
            <div className="text-sm text-slate-400 mt-4 md:mt-0">
              © 2024 Yeshak. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioIndex;