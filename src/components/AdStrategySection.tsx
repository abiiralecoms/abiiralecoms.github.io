import { motion } from 'motion/react';
import { CLIENT_LOGOS } from '../constants';

export default function AdStrategySection() {
  return (
    <section id="ad-strategy" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-line/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="text-primary font-display font-medium text-sm uppercase tracking-widest mb-4 block">
          Ad Strategy
        </span>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Brands I've Worked With
        </h2>
        {/*<p className="text-muted mt-6 max-w-2xl text-lg">
          Helping global brands cut through the noise with data-driven creative strategies and high-impact visual storytelling.
        </p>*/}
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        {CLIENT_LOGOS.map((client, index) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full max-w-[120px] h-16 flex items-center justify-center"
          >
            <img 
              src={client.logo} 
              alt={client.name} 
              className="max-w-full max-h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
