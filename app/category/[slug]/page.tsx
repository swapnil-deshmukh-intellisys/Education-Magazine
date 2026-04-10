import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Eye, Calendar } from 'lucide-react';
import { articles } from '@/data/articles';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { categories as allCategories } from '@/data/categories';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = allCategories.find(c => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  const categoryArticles = articles.filter(article => article.categorySlug === params.slug);
  const featuredArticle = categoryArticles.find(article => article.featured);
  const regularArticles = categoryArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Category Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${category.color}20` }}
            >
              <div 
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: category.color }}
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {category.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {category.articleCount} articles
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            {category.description}
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Article</h2>
            <Link href={`/article/${featuredArticle.slug}`}>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-2/5 h-64 md:h-auto">
                    <div className="relative h-full bg-gray-200 dark:bg-gray-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">Article Image</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-3/5 p-8">
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4" 
                          style={{ backgroundColor: `${category.color}20`, color: category.color }}>
                      {featuredArticle.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {featuredArticle.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {featuredArticle.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredArticle.readTime} min read</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{featuredArticle.views?.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(featuredArticle.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                          {featuredArticle.author.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {featuredArticle.author}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* All Articles */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            All Articles in {category.name}
          </h2>
          
          {regularArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article) => (
                <Link key={article.id} href={`/article/${article.slug}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">Article Image</span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-medium rounded-full" 
                              style={{ backgroundColor: `${category.color}20`, color: category.color }}>
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm">
                        {article.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime} min</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{article.views?.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(article.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>

                      {/* Author */}
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                            <span className="text-gray-700 dark:text-gray-300 font-medium text-xs">
                              {article.author.charAt(0)}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {article.author}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No articles found in this category yet.
              </p>
            </div>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return allCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = allCategories.find(c => c.slug === params.slug);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category.name} - Education Insights`,
    description: category.description,
    keywords: [category.name, 'education', 'articles'],
  };
}
