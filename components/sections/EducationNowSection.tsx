import { TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function EducationNowSection() {
  const trendingItems = [
    {
      image: "/assets/Frame 1 tn.png",
      title: "Digital Learning Revolution",
      description: "How AI and machine learning are transforming traditional classroom experiences, creating personalized learning paths for students worldwide.",
      category: "Technology"
    },
    {
      image: "/assets/Frame 2 tn.png",
      title: "Student Mental Health Focus",
      description: "Educational institutions prioritize student wellbeing with new mental health programs and support systems integrated into curriculum.",
      category: "Wellness"
    },
    {
      image: "/assets/Frame 3 tn.png",
      title: "Global Education Rankings 2024",
      description: "Latest comprehensive analysis of top-performing educational systems reveals surprising shifts in global leadership positions.",
      category: "Research"
    },
    {
      image: "/assets/Frame 1 tn.png",
      title: "Career-Ready Graduates",
      description: "New partnerships between universities and industry ensure graduates have practical skills for immediate employment success.",
      category: "Careers"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-red-500 font-semibold text-lg tracking-wide uppercase">Trending</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Education Now
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>

        {/* Content Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-red-300 cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Category */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                  {item.description}
                </p>

                {/* Read More Link */}
                <span className="text-red-500 text-sm font-semibold hover:text-red-600 cursor-pointer transition-colors duration-300">
                  Read More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
