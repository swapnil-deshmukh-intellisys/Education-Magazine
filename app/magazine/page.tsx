import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function MagazinePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education Magazine
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your source for educational insights and news
          </p>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4">Featured Stories</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Welcome to our magazine page. Here you'll find the latest educational stories, 
              insights, and news from around the world. Our team of expert writers and 
              educators bring you comprehensive coverage of topics that matter to students, 
              teachers, and lifelong learners.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Explore our featured articles, interviews with educational leaders, and 
              in-depth analysis of current trends in education. Stay informed about the 
              latest developments in teaching methodologies, educational technology, and 
              policy changes that affect learners everywhere.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4">Latest Edition</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This month's edition focuses on innovative teaching methods and the future 
              of digital learning. We feature exclusive interviews with educational 
              pioneers and practical tips for implementing new technologies in the classroom.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Don't miss our special section on career development in education, with 
              insights from industry leaders and success stories from educators who have 
              transformed their teaching approaches.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Subscribe</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Stay updated with the latest educational content by subscribing to our 
              newsletter. Get weekly updates on new articles, exclusive interviews, and 
              special features delivered straight to your inbox.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
