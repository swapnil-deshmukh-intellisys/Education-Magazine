import Image from 'next/image';
import Link from 'next/link';
import { Clock, Eye, Calendar, ArrowRight } from 'lucide-react';

export default function ArticlesSection() {
  const mainArticle = {
    id: 1,
    title: "The Future of Digital Learning in Higher Education",
    excerpt: "Universities worldwide are embracing digital transformation, creating hybrid learning models that combine the best of online and traditional education methods.",
    featuredImage: "/assets/article1.jpg",
    category: "Higher Education",
    date: "2024-04-10",
    readTime: 8,
    views: 15420,
    slug: "future-digital-learning-higher-education"
  };

  const sideArticles = [
    {
      id: 2,
      title: "AI-Powered Personalized Learning Paths",
      excerpt: "Machine learning algorithms are revolutionizing how students learn, creating customized educational experiences.",
      featuredImage: "/assets/article2.jpg",
      category: "Technology",
      date: "2024-04-09",
      readTime: 5,
      views: 12890,
      slug: "ai-powered-personalized-learning"
    },
    {
      id: 3,
      title: "Virtual Reality in Medical Education",
      excerpt: "Medical schools are using VR technology to train students in realistic surgical simulations.",
      featuredImage: "/assets/article3.jpeg",
      category: "Medical Education",
      date: "2024-04-08",
      readTime: 6,
      views: 11234,
      slug: "virtual-reality-medical-education"
    },
    {
      id: 4,
      title: "Sustainable Campus Initiatives",
      excerpt: "Educational institutions are leading the way in environmental sustainability with green campus programs.",
      featuredImage: "/assets/article4.avif",
      category: "Sustainability",
      date: "2024-04-07",
      readTime: 4,
      views: 9876,
      slug: "sustainable-campus-initiatives"
    },
    {
      id: 5,
      title: "Student Mental Health Support Systems",
      excerpt: "Comprehensive mental health programs are becoming essential parts of modern educational institutions.",
      featuredImage: "/assets/article5.jpeg",
      category: "Student Wellness",
      date: "2024-04-06",
      readTime: 7,
      views: 14567,
      slug: "student-mental-health-support"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Latest Articles
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Big Image Only */}
          <div className="lg:col-span-1">
            <Link href={`/news/${mainArticle.slug}`} className="block group cursor-pointer">
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <Image
                  src={mainArticle.featuredImage}
                  alt={mainArticle.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full bg-transparent group-hover:bg-gray-800 group-hover:bg-opacity-60 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-bold mb-2">{mainArticle.title}</h3>
                      <p className="text-sm mb-2 line-clamp-2">{mainArticle.excerpt}</p>
                      <div className="flex items-center space-x-3 text-xs">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {mainArticle.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {mainArticle.readTime} min
                        </span>
                        <span className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {mainArticle.views.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Side - Four Images in Block Layout */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {sideArticles.map((article) => (
                <Link key={article.id} href={`/news/${article.slug}`} className="block group cursor-pointer">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300">
                    <Image
                      src={article.featuredImage}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-end">
                      <div className="w-full bg-transparent group-hover:bg-gray-800 group-hover:bg-opacity-60 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                        <div className="p-3 text-white">
                          <h4 className="text-sm font-bold mb-1 line-clamp-2">{article.title}</h4>
                          <div className="flex items-center space-x-2 text-xs">
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {article.date}
                            </span>
                            <span className="flex items-center">
                              <Eye className="w-3 h-3 mr-1" />
                              {article.views.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
