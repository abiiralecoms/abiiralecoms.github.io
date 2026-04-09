export interface PortfolioItem {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  videoUrl?: string;
  category: 'static' | 'video';
  tags: string[];
}

export interface ThemeConfig {
  colors: {
    primary: string;
    bg: string;
    ink: string;
    muted: string;
  };
  fonts: {
    sans: string;
    display: string;
  };
}
