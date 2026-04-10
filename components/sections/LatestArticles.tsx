'use client';

import Link from 'next/link';
import { Clock, Eye, Calendar } from 'lucide-react';
import { Article } from '@/types';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LatestArticlesProps {
  articles: Article[];
}

export default function LatestArticles({ articles }: LatestArticlesProps) {
  const latestArticles = articles.filter(article => !article.featured).slice(0, 6);

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay updated with the most recent insights and developments in education
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/article/${article.slug}`}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.featuredImage}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag) => (
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
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/category/all"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Articles
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
