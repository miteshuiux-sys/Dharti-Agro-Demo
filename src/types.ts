export interface Product {
  id: string;
  name: string;
  category: 'cultivators' | 'tillers' | 'ploughs' | 'hydraulics';
  badge?: 'Top Seller' | 'New Arrival' | 'Heavy Duty' | 'Featured';
  badgeColor?: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  hpRequired: string;
  workingWidth: string;
  tinesOrBlades: string;
  weight: string;
  warranty: string;
  keyFeatures: string[];
  priceRange: string;
  specifications: { [key: string]: string };
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  location: string;
  state: string;
  rating: number;
  isVerified: boolean;
  implementUsed: string;
  quote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  alt: string;
}

export interface Dealer {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  pincode: string;
  rating: number;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  state: string;
  pincode: string;
  tractorHp: string;
  selectedProductId: string;
  farmSize: string;
  soilType: string;
  additionalNotes: string;
}
