import { motion } from 'motion/react';
import { PortfolioItem } from '../types';
import { ArrowUpRight, Play } from 'lucide-react';
import React, { useRef, useState, ReactNode, MouseEvent } from 'react';

interface PortfolioSectionProps {
  id: string;
  title: string;
  items: PortfolioItem[];
  aspectRatio?: 'square' | 'video';
  children?: ReactNode;
}

export default function PortfolioSection({ id, title, items, aspectRatio = 'video', children }: PortfolioSectionProps) {
  return (
    <section id={id} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="text-primary font-display font-medium text-sm uppercase tracking-widest mb-4 block">
          Portfolio
        </span>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          {title}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <VideoCard key={item.id} item={item} index={index} aspectRatio={aspectRatio} />
        ))}
      </div>

      {children && (
        <div className="mt-16">
          {children}
        </div>
      )}
    </section>
  );
}

interface VideoCardProps {
  item: PortfolioItem;
  index: number;
  aspectRatio: 'square' | 'video';
}

const VideoCard: React.FC<VideoCardProps> = ({ item, index, aspectRatio }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Autoplay prevented:", err));
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTogglePlay = (e: MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative overflow-hidden rounded-2xl mb-6 bg-muted/10 ${aspectRatio === 'square' ? 'aspect-square' : 'aspect-video'}`}>
        {item.videoUrl ? (
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              src={item.videoUrl}
              poster={item.imageUrl}
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors cursor-pointer flex items-center justify-center"
              onClick={handleTogglePlay}
            >
              {!isPlaying && (
                <div className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-xl backdrop-blur-sm transform group-hover:scale-110 transition-transform opacity-0 group-hover:opacity-100">
                  <Play size={32} fill="currentColor" />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <img
              src={item.imageUrl}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
      </div>
    </motion.div>
  );
}
