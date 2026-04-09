import { Header, Hero, Footer } from './components/Layout';
import PortfolioSection from './components/PortfolioSection';
import AdStrategySection from './components/AdStrategySection';
import ProcessSection from './components/ProcessSection';
import { STATIC_ADS, VIDEO_ADS, BRIEFS } from './constants';
import { motion, useScroll, useSpring } from 'motion/react';
import { FileText, Layout as LayoutIcon } from 'lucide-react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Header />
      
      <main>
        <Hero />
        
        {/* Static Ad Ideations Section */}
        <section id="static" className="bg-white/50">
          <PortfolioSection 
            id="static-ads" 
            title="Static Ad Ideation" 
            items={STATIC_ADS} 
            aspectRatio="square"
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href={BRIEFS.static[0].url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 group"
              >
                <FileText size={20} className="group-hover:scale-110 transition-transform" />
                Static Ad Brief
              </a>
              <a 
                href="https://www.behance.net/gallery/205119135/Ecommerce-Static-Ads-Designs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 group"
              >
                <LayoutIcon size={20} className="group-hover:scale-110 transition-transform" />
                Static Ad Portfolio
              </a>
            </div>
          </PortfolioSection>
        </section>

        {/* Video Ideations Section */}
        <section id="video" className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              Video Ideation
            </motion.h2>
          </div>

          {/* Video Ad Brief Section */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden bg-ink text-white p-8 md:p-24 flex flex-col items-center text-center"
            >
              <div className="relative z-10 max-w-2xl w-full">
                <h3 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">Video Ad Brief</h3>
                <p className="text-lg md:text-2xl text-white/60 mb-8 md:mb-12 leading-relaxed font-medium">
                  Video brief for creators and editors
                </p>
                <a 
                  href={BRIEFS.video[0].url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-6 py-4 md:px-12 md:py-6 bg-primary text-white rounded-2xl font-bold hover:bg-primary-dark transition-all shadow-xl shadow-primary/30 group text-base md:text-lg"
                >
                  <FileText size={24} className="md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
                  Video Ad Brief
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/*<ProcessSection />*/}

        {/* Ad Strategy Section */}
        <AdStrategySection />

        {/* Intro / About Section - Brief and Impactful */}
        <section className="py-32 px-6 md:px-12 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              "Creative Strategy isn't just a plan — it's the engine behind every brand that scales."
            </motion.h2>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
