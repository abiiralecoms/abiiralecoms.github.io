import { PortfolioItem } from './types';

export const STATIC_ADS: PortfolioItem[] = [
  {
    id: 'static-1',
    title: '',
    description: '',
    imageUrl: `${import.meta.env.BASE_URL}staticImages/simg1.jpg`,
    category: 'static',
    tags: []
  },
  {
    id: 'static-2',
    title: '',
    description: '',
    imageUrl: `${import.meta.env.BASE_URL}staticImages/simg2.png`,
    category: 'static',
    tags: []
  },
  {
    id: 'static-3',
    title: '',
    description: '',
    imageUrl: `${import.meta.env.BASE_URL}staticImages/simg3.jpg`,
    category: 'static',
    tags: []
  },
  {
    id: 'static-4',
    title: '',
    description: '',
    imageUrl: `${import.meta.env.BASE_URL}staticImages/simg4.jpeg`,
    category: 'static',
    tags: []
  },
  {
    id: 'static-5',
    title: '',
    description: '',
    imageUrl: `${import.meta.env.BASE_URL}staticImages/simg5.png`,
    category: 'static',
    tags: []
  },
  {
    id: 'static-6',
    title: '',
    description: '',
    imageUrl: `${import.meta.env.BASE_URL}staticImages/simg6.jpeg`,
    category: 'static',
    tags: []
  }
];

export const VIDEO_ADS: PortfolioItem[] = [
  {
    id: 'video-1',
    title: 'Kinetic Motion Series',
    imageUrl: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://player.vimeo.com/external/370331493.sd.mp4?s=338d35053401091b66e92c39304c3ca9d97f514e&profile_id=139&oauth2_token_id=57447761',
    category: 'video',
    tags: []
  },
  {
    id: 'video-2',
    title: 'Atmospheric Brand Film',
    imageUrl: 'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27db96a9f69551899142794f3254311e497a086&profile_id=139&oauth2_token_id=57447761',
    category: 'video',
    tags: []
  },
  {
    id: 'video-3',
    title: 'Social-First Micro-Ads',
    imageUrl: 'https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://player.vimeo.com/external/459389137.sd.mp4?s=964483423a9339e74133446059e0787e91543167&profile_id=139&oauth2_token_id=57447761',
    category: 'video',
    tags: []
  }
];

export const NAV_LINKS = [
  { label: 'Static Ads Ideation', href: '#static' },
  { label: 'Video Ideation', href: '#video' },
  { label: 'Contact', href: '#footer' },
];

export const BRIEFS = {
  static: [
    { title: 'Static Ad Brief', url: 'https://docs.google.com/document/d/1GDVbp8grGgQ69WJsWjHahm4IhBIVu4_EcGgsEr1gK_8/edit?usp=sharing' },
  ],
  video: [
    { title: 'Video Ad Brief', url: 'https://docs.google.com/document/d/1_rK0jn_5EYJ3FDP0hlLnAwo2FkmHvaTUEqSLi4aGDqM/edit?usp=sharing' },
  ]
};

export const CLIENT_LOGOS = [
  { name: 'kloudy', logo: `${import.meta.env.BASE_URL}brandLogos/kloudyLogo.png` },
  { name: 'Nathan', logo: `${import.meta.env.BASE_URL}brandLogos/NathanLogo.png` },
  { name: 'Psf', logo: `${import.meta.env.BASE_URL}brandLogos/PsfLogo.png` },
  { name: 'FlowBox', logo: `${import.meta.env.BASE_URL}brandLogos/FlowBoxLogo.png` },
  { name: 'Balquees', logo: `${import.meta.env.BASE_URL}brandLogos/BalqueesLogo.png` },
  { name: 'aug', logo: `${import.meta.env.BASE_URL}brandLogos/Aug11Logo.png` },
];
