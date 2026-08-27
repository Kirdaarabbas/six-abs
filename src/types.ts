export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export interface Supplement {
  id: string;
  name: string;
  price: string;
  image: string;
  tagline: string;
  category: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface JoinModalData {
  isOpen: boolean;
  prefilledPlan?: string;
  prefilledProduct?: string;
}
