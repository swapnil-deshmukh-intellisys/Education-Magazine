'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TrendingUp, Clock, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { Article } from '@/types';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TrendingArticlesProps {
  articles: Article[];
}

export default function TrendingArticles({ articles }: TrendingArticlesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const trendingArticles = articles.filter(article => article.trending);

  useEffect(() => {
    if (!isAutoPlaying || trendingArticles.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trendingArticles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, trendingArticles.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % trendingArticles.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + trendingArticles.length) % trendingArticles.length);
    setIsAutoPlaying(false);
  };

  if (trendingArticles.length === 0) return null;

  const currentArticle = trendingArticles[currentIndex];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <TrendingUp className="w-6 h-6 text-red-500" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Trending Articles
            </h2>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-lg bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              disabled={trendingArticles.length <= 1}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-lg bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              disabled={trendingArticles.length <= 1}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {trendingArticles.map((article, index) => (
                <div key={article.id} className="w-full flex-shrink-0">
                  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                      {/* Image */}
                      <div className="md:w-2/5 h-64 md:h-auto">
                        <div className="relative h-full">
                          <Image
                            src={article.featuredImage}
                            alt={article.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full">
                              Trending #{index + 1}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:w-3/5 p-8">
                        {/* Category */}
                        <Link
                          href={`/category/${article.categorySlug}`}
                          className="inline-block mb-3"
                        >
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                            {article.category}
                          </span>
                        </Link>

                        {/* Title */}
                        <Link href={`/article/${article.slug}`}>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                            {article.title}
                          </h3>
                        </Link>

                        {/* Excerpt */}
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime} min read</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{article.views?.toLocaleString()} views</span>
                          </div>
                          <span>
                            {new Date(article.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>

                        {/* Author and CTA */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                              <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                                {article.author.charAt(0)}
                              </span>
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {article.author}
                            </span>
                          </div>
                          <Link
                            href={`/article/${article.slug}`}
                            className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          {trendingArticles.length > 1 && (
            <div className="flex justify-center space-x-2 mt-6">
              {trendingArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-blue-600'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Auto-play Toggle */}
        {trendingArticles.length > 1 && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              {isAutoPlaying ? 'Pause' : 'Play'} slideshow
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
