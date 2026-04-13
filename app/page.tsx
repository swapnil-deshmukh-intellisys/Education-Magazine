import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import EducationNowSection from '@/components/sections/EducationNowSection';
import ArticlesSection from '@/components/sections/ArticlesSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import FeaturedLeaders from '@/components/sections/FeaturedLeaders';
import NewsletterSection from '@/components/sections/NewsletterSection';
import Footer from '@/components/layout/Footer';
import { categories } from '@/data/categories';
import { leaders } from '@/data/leaders';

export default function Home() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main>
       
        <HeroSection />
        <EducationNowSection />
        <ArticlesSection />
        <CategoriesSection categories={categories} />
        <FeaturedLeaders leaders={leaders} />
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
}
