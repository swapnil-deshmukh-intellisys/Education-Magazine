'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Leader } from '@/types';
import Image from 'next/image';

interface FeaturedLeadersProps {
  leaders: Leader[];
}

export default function FeaturedLeaders({ leaders }: FeaturedLeadersProps) {
  const featuredLeaders = leaders.filter(leader => leader.featured).slice(0, 4);

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Leaders
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meet the visionaries shaping the future of education through innovation and leadership
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredLeaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                {/* Avatar */}
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  {/* Featured Badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                {/* Name and Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {leader.name}
                </h3>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                  {leader.title}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {leader.organization}
                </p>

                {/* Bio */}
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {leader.bio}
                </p>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                    {leader.category}
                  </span>
                </div>

                {/* Interview Link */}
                {leader.interviewLink && (
                  <Link
                    href={leader.interviewLink}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm group"
                  >
                    Read Interview
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Leaders Button */}
        <div className="text-center mt-12">
          <Link
            href="/leaders"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Leaders
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
