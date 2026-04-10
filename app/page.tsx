import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import EducationNowSection from '@/components/sections/EducationNowSection';
import TrendingArticles from '@/components/sections/TrendingArticles';
import LatestArticles from '@/components/sections/LatestArticles';
import CategoriesSection from '@/components/sections/CategoriesSection';
import FeaturedLeaders from '@/components/sections/FeaturedLeaders';
import NewsletterSection from '@/components/sections/NewsletterSection';
import Footer from '@/components/layout/Footer';
import { articles } from '@/data/articles';
import { categories } from '@/data/categories';
import { leaders } from '@/data/leaders';

export default function Home() {
  const featuredArticle = articles.find(article => article.featured) || articles[0];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main>
        <HeroSection />
        <EducationNowSection />
        <TrendingArticles articles={articles} />
        <LatestArticles articles={articles} />
        <CategoriesSection categories={categories} />
        <FeaturedLeaders leaders={leaders} />
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
}
