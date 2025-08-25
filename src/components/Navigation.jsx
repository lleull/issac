import { useState, useEffect } from 'react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md border-b' : ''
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
        borderBottomColor: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="font-serif text-2xl font-bold bg-clip-text text-transparent"
            style={{
              background: 'linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212))',
              WebkitBackgroundClip: 'text'
            }}
          >
            Yeshak
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
              About
            </a>
            <a href="#music" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
              Music
            </a>
            <a href="#performances" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
              Performances
            </a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-slate-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};