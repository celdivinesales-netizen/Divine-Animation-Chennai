export interface ServiceItem {
  id: string;
  name: string;
  category: 'video' | 'website' | 'marketing' | 'hardware';
  price: number;
  priceLabel: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
}

export interface VideoSample {
  id: string;
  title: string;
  category: string;
  tagline: string;
  type: 'With AI Presenter' | 'Motion Graphics' | 'Product Ad';
  price: string;
  duration: string;
  aspectRatio: string;
  accentColor: string;
  scriptSnippet: string;
  features: string[];
}

export interface WebsiteTemplate {
  id: string;
  title: string;
  category: string;
  startingPrice: string;
  turnaround: string;
  features: string[];
  previewType: 'store' | 'clinic' | 'services' | 'portfolio';
}

export interface ComputerService {
  id: string;
  title: string;
  description: string;
  turnaround: string;
  locationSupport: string;
  features: string[];
}
