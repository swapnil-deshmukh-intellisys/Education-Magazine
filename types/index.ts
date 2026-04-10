export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  categorySlug: string;
  author: string;
  authorAvatar?: string;
  date: string;
  readTime: number;
  featuredImage: string;
  tags: string[];
  trending?: boolean;
  featured?: boolean;
  views?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon?: string;
  articleCount: number;
}

export interface Author {
  id: string;
  name: string;
  slug: string;
  bio: string;
  avatar: string;
  role: string;
  expertise: string[];
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface Leader {
  id: string;
  name: string;
  title: string;
  organization: string;
  avatar: string;
  bio: string;
  featured: boolean;
  category: string;
  interviewLink?: string;
}

export interface Newsletter {
  email: string;
  subscribedAt: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  logo: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    youtube: string;
    pinterest: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}
