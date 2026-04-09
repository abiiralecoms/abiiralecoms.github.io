import { motion } from 'motion/react';
import { Search, Users, Target, Zap, PenTool, FileText } from 'lucide-react';

const PROCESS_STEPS = [
  {
    icon: <Search size={24} />,
    title: "Product Deep-Dive",
    description: "I start by dissecting the product to understand its core mechanics, unique selling points, and the 'why' behind its existence."
  },
  {
    icon: <Users size={24} />,
    title: "Avatar Profiling",
    description: "Defining the target audience isn't just about demographics; it's about understanding their pain points, desires, and psychological triggers."
  },
  {
    icon: <Target size={24} />,
    title: "Competitive Intel",
    description: "I analyze competitors to identify their winning angles, creative hooks, and positioning strategies to see what's already working."
  },
  {
    icon: <Zap size={24} />,
    title: "Market Gap Analysis",
    description: "Finding the 'Blue Ocean'. I look for untapped opportunities and angles that competitors are ignoring to give your brand a unique edge."
  },
  {
    icon: <PenTool size={24} />,
    title: "Creative Strategy",
    description: "This is where the research turns into action. I craft high-converting ad copies and strategic concepts that stop the scroll."
  },
  {
    icon: <FileText size={24} />,
    title: "Briefing & Execution",
    description: "I provide detailed briefs for designers and video editors, ensuring the strategic vision is translated perfectly into visual assets."
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-line/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="text-primary font-display font-medium text-sm uppercase tracking-widest mb-4 block">
          Workflow
        </span>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          My Working Process
        </h2>
        <p className="text-muted mt-6 max-w-2xl text-lg">
          My process bridges the gap between rigorous, data-backed research and high-impact, scroll-stopping creative.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROCESS_STEPS.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-3xl bg-muted/5 border border-line hover:border-primary/30 hover:bg-white transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
            <p className="text-muted leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
