export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string; // Lucide icon identifier
  imageUrl: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  avatarUrl: string;
  rating: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ContactInquiry {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
