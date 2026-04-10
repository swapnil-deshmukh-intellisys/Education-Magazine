'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CoverStory {
  title: string;
  image: string;
  category: string;
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Cover stories data (this would come from Sanity in production)
  const coverStories: CoverStory[] = [
    {
      title: "Cliff Oxford: Influential Thinker Redefining How Companies Are Built and Exited",
      image: "/assets/Frame 1 tn.png",
      category: "COVER STORY"
    },
    {
      title: "Dr. Bradford Sims: A Multifaceted Leader developing Careers in STEM",
      image: "/assets/Frame 2 tn.png",
      category: "COVER STORY"
    },
    {
      title: "Queens University of Charlotte: Where the Science of Healing Meets the Art of Care",
      image: "/assets/Frame 3 tn.png",
      category: "COVER STORY"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % coverStories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + coverStories.length) % coverStories.length);
  };

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="bg-black min-h-[80vh] lg:min-h-[90vh] flex items-center -mt-8">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Latest Issue */}
          <div className="flex flex-col items-center lg:items-center lg:col-span-3 mb-12">
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <Image
                src="/assets/Cover_Ben Sadgrove.jpg"
                alt="Latest Issue Cover"
                width={320}
                height={480}
                className="w-full h-[480px] object-contain rounded-lg shadow-2xl"
                priority
              />
            </div>
            <button className="mt-2 px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200 uppercase tracking-wider text-sm">
              Latest Issue
            </button>
          </div>

          {/* Right Column - Slider */}
          <div className="relative lg:col-span-9">
            <div className="relative overflow-hidden rounded-lg">
              {/* Slider Container */}
              <div className="relative h-[450px] w-full">
                <div
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {coverStories.map((story, index) => (
                    <div key={index} className="min-w-full h-full relative">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      
                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 pl-12 text-white">
                        <div className="mb-4">
                          <span className="text-sm font-bold tracking-wider text-yellow-400 uppercase">
                            {story.category}
                          </span>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight text-left">
                          {story.title}
                        </h2>
                        <Link href="/magazine">
                          <button className="px-6 py-2 bg-white text-black font-bold rounded hover:bg-gray-100 hover:scale-105 transition-all duration-200 text-left cursor-pointer">
                            READ MORE
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1 text-white hover:text-gray-300 transition-colors duration-200"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-white hover:text-gray-300 transition-colors duration-200"
                aria-label="Next slide"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Pagination Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {coverStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
