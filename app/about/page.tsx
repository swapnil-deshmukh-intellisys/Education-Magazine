import Link from 'next/link';
import { ArrowLeft, Users, Target, Award, Globe } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/data/site-config';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About {siteConfig.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {siteConfig.description}
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Target className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              At Education Insights, we are committed to providing educators, students, and lifelong learners 
              with high-quality, insightful content that inspires and informs. Our mission is to bridge the 
              gap between educational innovation and practical application, creating a comprehensive resource 
              for the global education community.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Community First
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Building a supportive community of educators and learners worldwide.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Delivering high-quality, well-researched educational content.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Global Perspective
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Sharing diverse educational insights from around the world.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Highlighting cutting-edge educational technologies and methods.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                In-Depth Articles
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Comprehensive articles covering the latest trends, research, and developments in education.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  K-12 Education insights
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Higher education trends
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Educational technology reviews
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Career development guidance
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Expert Interviews
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Exclusive interviews with educational leaders, innovators, and change-makers.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  University presidents
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  School administrators
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  EdTech entrepreneurs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  Policy makers
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                500K+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Monthly Readers
              </div>
            </div>
            <div className="text-center bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                1000+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Published Articles
              </div>
            </div>
            <div className="text-center bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                50+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Expert Contributors
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Team
          </h2>
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our dedicated team of educators, writers, and researchers work tirelessly to bring you 
              the most relevant and insightful educational content.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">ED</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Editorial Team
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Experienced educators and content creators
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">RS</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Research Staff
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Dedicated researchers and analysts
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">TC</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Technical Crew
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Web developers and digital specialists
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Stay updated with the latest educational insights and become part of our growing community 
            of learners and educators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Browse Articles
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export const metadata = {
  title: 'About Us - Education Insights',
  description: 'Learn about Education Insights and our mission to provide quality educational content to the global community.',
};
