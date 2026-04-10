import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Eye, Calendar, Share2, Bookmark } from 'lucide-react';
import { articles } from '@/data/articles';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find(a => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          {/* Category */}
          <Link 
            href={`/category/${article.categorySlug}`}
            className="inline-block mb-4"
          >
            <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
              {article.category}
            </span>
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {article.author.charAt(0)}
                </span>
              </div>
              <span className="font-medium">{article.author}</span>
            </div>
            
            <div className="flex items-center space-x-1 text-sm">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} min read</span>
            </div>
            
            <div className="flex items-center space-x-1 text-sm">
              <Eye className="w-4 h-4" />
              <span>{article.views?.toLocaleString()} views</span>
            </div>
            
            <div className="flex items-center space-x-1 text-sm">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Bookmark className="w-4 h-4" />
              <span>Save</span>
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <div className="relative h-96 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-lg">Article Image</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {article.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="border-t border-gray-200 dark:border-gray-700 pt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/article/${relatedArticle.slug}`}
                  className="group"
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
                      <span>{relatedArticle.readTime} min read</span>
                      <span>{new Date(relatedArticle.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = articles.find(a => a.slug === params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}
