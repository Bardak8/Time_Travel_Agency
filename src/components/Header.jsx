import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/95 backdrop-blur-md shadow-lg shadow-gold-500/10' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center space-x-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
            <span className="text-2xl">⏳</span>
          </div>
          <div>
            <h1 className="text-xl font-display font-bold text-gradient">TimeTravel</h1>
            <p className="text-xs text-gold-500">AGENCY</p>
          </div>
        </motion.div>

        <ul className="hidden md:flex space-x-8 items-center">
          {[
            { name: 'Accueil', id: 'hero' },
            { name: 'Destinations', id: 'destinations' },
            { name: 'À propos', id: 'about' },
          ].map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer"
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-zinc-300 hover:text-gold-400 transition-colors font-medium"
              >
                {item.name}
              </button>
            </motion.li>
          ))}
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button className="px-6 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-zinc-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-gold-500/50 transition-all">
              Réserver
            </button>
          </motion.li>
        </ul>

        <button className="md:hidden text-gold-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </motion.header>
  );
};

export default Header;
