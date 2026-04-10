'use client';

import { useState } from 'react';
import Link from 'next/link';

// Simple news ticker data
const newsItems = [
  "BREAKING: Global stock markets surge as ceasefire talks show progress",
  "Oil prices drop 8% following breakthrough in peace negotiations",
  "Federal Reserve signals potential pause in interest rate hikes",
  "Tech stocks lead market recovery with NASDAQ up 4.2%",
  "Gold prices reach yearly high as investors seek safe havens",
  "Defense stocks rally on increased military spending announcements",
  "Cryptocurrency markets show volatility amid global developments",
  "Asian markets follow global rally trend with strong gains"
];

export default function NewsSlider() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden">
      <div className="flex items-center">
        <div className="bg-black px-4 py-2 text-white font-bold whitespace-nowrap">
          Trending News
        </div>
        <div className="flex-1 overflow-hidden">
          <div 
            className={`flex whitespace-nowrap ${
              isPaused ? '' : 'animate-scroll'
            }`}
            style={{
              animation: isPaused ? 'none' : 'scroll 30s linear infinite'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...newsItems, ...newsItems].map((item, index) => (
              <span key={index} className="mx-8 inline-block">
                <Link 
                  href={`/news/${item.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                 
                >
                  {item}
                </Link>
                <span className="mx-4">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
