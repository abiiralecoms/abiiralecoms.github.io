import { motion } from 'motion/react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-bg/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <motion.a 
          href="#" 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">A</div>
          <span>ABII.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-ink" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-bg border-b border-line overflow-hidden"
        >
          <div className="flex flex-col p-8 gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-bold hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-24 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="col-span-1 lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 md:mb-6"
          >
            <span className="bg-primary/10 text-primary font-display font-bold text-[10px] md:text-sm uppercase tracking-widest px-3 py-1.5 rounded-md inline-block border border-primary/20">
              CREATIVE STRATEGIST
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tighter mb-6 md:mb-12"
          >
            CRAFTING <span className="text-primary italic">STRATEGIES</span> THAT SCALE.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl hidden lg:block"
          >
            <p className="text-xl lg:text-2xl text-muted leading-relaxed mb-10">
              I’m Abii, a creative strategist who has been in the DTC space for the past 3 years. I started out with static ad design. And now I have been doing creative strategy.
            </p>
            
            <div className="flex flex-wrap gap-6 items-center">
              <a 
                href="https://x.com/abiiralecoms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="col-span-1 lg:col-span-5 pt-[18px] md:pt-[42px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative aspect-[4/5] md:aspect-[3/4] bg-muted/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl"
          >
            <img 
              src={`${import.meta.env.BASE_URL}AbiiTwitterBrown.png`} 
              alt="Abii - Creative Strategist" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Subtle Orange Overlay */}
            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Mobile & Tablet bio and buttons */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-16 lg:hidden"
      >
        <p className="text-2xl md:text-4xl lg:text-5xl text-muted leading-relaxed mb-12 max-w-5xl">
          I’m Abii, a creative strategist who has been in the DTC space for the past 3 years. I started out with static ad design. And now I have been doing creative strategy.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <a 
            href="https://x.com/abiiralecoms" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto px-12 text-center py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="footer" className="bg-ink text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-24">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-12 leading-tight">
              Let’s Create <br />
              <span className="text-primary">Creatives that Convert</span>
            </h2>
            <a href="mailto:abiiralecoms@gmail.com" className="text-2xl md:text-3xl font-bold border-b-4 border-primary pb-2 hover:text-primary transition-colors break-all">
              abiiralecoms@gmail.com
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-primary font-mono text-xs uppercase tracking-widest mb-6">Socials</p>
              <ul className="flex flex-col gap-4">
                <li><a href="https://x.com/abiiralecoms" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="https://www.behance.net/gallery/205119135/Ecommerce-Static-Ads-Designs" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">Behance</a></li>
              </ul>
            </div>
            <div>
              <p className="text-primary font-mono text-xs uppercase tracking-widest mb-6">Navigation</p>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-lg hover:text-primary transition-colors">Home</a></li>
                <li><a href="#static" className="text-lg hover:text-primary transition-colors">Static Ads Ideation</a></li>
                <li><a href="#video" className="text-lg hover:text-primary transition-colors">Video Ideation</a></li>
                <li><a href="#footer" className="text-lg hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© 2026 ABII. Creative Strategist.</p>
        </div>
      </div>
    </footer>
  );
}
