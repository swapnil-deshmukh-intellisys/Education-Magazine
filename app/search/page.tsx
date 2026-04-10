'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Clock, Eye, Calendar } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { articles } from '@/data/articles';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(query);

  // Filter articles based on search query
  const filteredArticles = useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerm = query.toLowerCase();
    return articles.filter(article => 
      article.title.toLowerCase().includes(searchTerm) ||
      article.excerpt.toLowerCase().includes(searchTerm) ||
      article.content.toLowerCase().includes(searchTerm) ||
      article.author.toLowerCase().includes(searchTerm) ||
      article.category.toLowerCase().includes(searchTerm)
    );
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Search Results
          </h1>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-400"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Search Results */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            {query.trim() && (
              <>
                Found {filteredArticles.length} results for "{query}"
              </>
            )}
          </p>
        </div>

        {/* Results Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/article/${article.slug}`}>
                  <div className="relative h-48">
                    <Image
                      src={article.featuredImage}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-red-500 text-white rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                </Link>
                
                <div className="p-6">
                  <Link href={`/article/${article.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-red-500 transition-colors">
                      {article.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
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
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          query.trim() && (
            <div className="text-center py-12">
              <div className="mb-4">
                <Search className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No results found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We couldn't find any articles matching "{query}"
              </p>
              <p className="text-gray-500 dark:text-gray-500">
                Try searching with different keywords or browse our categories.
              </p>
            </div>
          )
        )}
      </main>

      <Footer />
    </div>
  );
}
