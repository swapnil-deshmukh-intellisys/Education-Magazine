'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Eye, Calendar, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  categorySlug: string;
  author: string;
  date: string;
  readTime: number;
  views: number;
  slug: string;
}

// Trending news data with full content
const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Global Stock Markets Rally Amid Ceasefire Talks",
    excerpt: "Major indices surge as diplomatic negotiations show progress in resolving ongoing conflicts.",
    content: `Global financial markets experienced their strongest rally in months as diplomatic breakthroughs in international conflicts sparked investor optimism worldwide. Major stock indices including the S&P 500, Dow Jones, and NASDAQ posted significant gains, with technology and energy sectors leading the surge.

    The market rally comes as high-level diplomatic negotiations between conflicting nations showed unprecedented progress, with both sides expressing willingness to consider peaceful resolutions. Analysts believe that reduced geopolitical tensions could lead to increased global trade and economic cooperation.

    "This is a classic risk-on rally," said Chief Market Strategist Jennifer Martinez. "Investors are moving money back into equities as the probability of conflict resolution increases. We're seeing particular strength in sectors that were most affected by the uncertainty."

    The positive sentiment spread across global markets, with European and Asian exchanges following the U.S. lead. Oil prices, which had been elevated due to supply concerns, moderated as the potential for peaceful resolution reduced supply disruption risks.

    Financial advisors are cautioning investors that while the outlook is improving, markets remain volatile and diversification remains key to long-term success.`,
    featuredImage: "/news/stock-market-rally.jpg",
    category: "Markets",
    categorySlug: "markets",
    author: "Financial Analyst Team",
    date: "2024-04-09",
    readTime: 3,
    views: 45200,
    slug: "stock-markets-ceasefire-talks"
  },
  {
    id: 2,
    title: "Oil Prices Drop as Peace Negotiations Advance",
    excerpt: "Crude oil futures decline significantly following breakthrough in international peace talks.",
    content: `Crude oil prices experienced their steepest decline in over a year as peace negotiations between major global powers showed significant progress. West Texas Intermediate (WTI) and Brent crude both fell more than 8% in trading, marking the largest single-day drop since early 2023.

    The price decline reflects market expectations that reduced military tensions could lead to increased oil production and more stable supply chains. Oil-producing nations that had been considering production cuts may now maintain or increase output to meet growing demand.

    "The market is pricing in a significant reduction in geopolitical risk premium," explained Energy Analyst David Chen. "When tensions are high, oil prices include a risk premium for potential supply disruptions. As peace becomes more likely, that premium disappears."

    The decline in oil prices is expected to have ripple effects across the global economy, potentially reducing transportation costs and inflationary pressures. However, energy sector stocks experienced significant declines as investors adjusted to the new price environment.

    OPEC members are scheduled to meet next week to discuss production strategy, with many analysts expecting the organization to maintain current output levels despite the price decline.`,
    featuredImage: "/news/oil-prices-drop.jpg",
    category: "Energy",
    categorySlug: "energy",
    author: "Energy Market Reporter",
    date: "2024-04-09",
    readTime: 4,
    views: 38900,
    slug: "oil-prices-peace-negotiations"
  },
  {
    id: 3,
    title: "Tech Stocks Lead Market Recovery",
    excerpt: "Technology sector shows strong gains as investors return to growth stocks amid geopolitical optimism.",
    content: `Technology stocks emerged as the clear leaders in the recent market rally, with major tech giants posting double-digit gains over the past week. The NASDAQ Composite index outperformed other major indices, driven by strong performance from semiconductor, cloud computing, and artificial intelligence companies.

    The tech sector's resurgence comes as investors regain confidence in growth-oriented investments following months of uncertainty. Companies that had been punished for high valuations are now seeing renewed interest as the risk appetite returns to the market.

    Leading the charge were semiconductor manufacturers, which benefit from both consumer and industrial demand. AI-related companies also saw significant gains as investors position for the next wave of technological innovation.

    "We're seeing a rotation back into quality tech names," said Portfolio Manager Sarah Williams. "Companies with strong fundamentals, consistent growth, and exposure to long-term trends like AI and cloud computing are particularly attractive in this environment."

    The rally in tech stocks has also lifted venture capital activity, with several high-profile funding rounds announced this week. Startups in the AI, fintech, and cybersecurity sectors are particularly benefiting from increased investor confidence.`,
    featuredImage: "/news/tech-stocks-recovery.jpg",
    category: "Technology",
    categorySlug: "technology",
    author: "Tech Markets Desk",
    date: "2024-04-08",
    readTime: 5,
    views: 52100,
    slug: "tech-stocks-market-recovery"
  },
  {
    id: 4,
    title: "Federal Reserve Signals Rate Pause Amid Global Uncertainty",
    excerpt: "Central bank hints at holding interest rates steady as international conflicts affect economic outlook.",
    content: `The Federal Reserve indicated it may pause its interest rate hikes amid improving global economic conditions and reduced geopolitical tensions. The central bank's latest statement suggested that current monetary policy may be sufficient to manage inflation while supporting economic growth.

    Fed Chair Jerome Powell emphasized that the central bank is closely monitoring developments in international relations and their potential impact on the U.S. economy. The possibility of reduced global conflicts could lead to more stable supply chains and lower inflationary pressures.

    "We're in a position to be patient and data-dependent," Powell stated in a press conference. "The recent positive developments in international relations may allow us to maintain our current policy stance while we assess their full economic impact."

    Financial markets responded positively to the news, with bond yields declining and stock prices rising. Investors interpreted the Fed's stance as potentially signaling the end of the tightening cycle that began in 2022.

    However, Fed officials cautioned that inflation remains above their 2% target and that they remain prepared to act if price pressures persist. The central bank's next policy decision is scheduled for its upcoming meeting in six weeks.`,
    featuredImage: "/news/fed-rate-pause.jpg",
    category: "Economy",
    categorySlug: "economy",
    author: "Economics Correspondent",
    date: "2024-04-08",
    readTime: 6,
    views: 67800,
    slug: "federal-reserve-rate-pause"
  },
  {
    id: 5,
    title: "Defense Stocks Surge on Increased Military Spending",
    excerpt: "Aerospace and defense companies see significant gains as governments boost defense budgets.",
    content: `Defense and aerospace stocks experienced substantial gains as governments worldwide announced increased military spending in response to ongoing security concerns. Major defense contractors saw their stock prices rise by an average of 12% following the announcements.

    The increased defense spending comes as nations reassess their security needs and modernize their military capabilities. Analysts project that global defense spending could reach record levels over the next five years, benefiting companies involved in aircraft, missiles, cybersecurity, and surveillance systems.

    "We're seeing a fundamental shift in defense priorities," said Defense Industry Analyst Michael Roberts. "Nations are investing heavily in next-generation technology, from autonomous systems to advanced missile defense. This creates long-term growth opportunities for well-positioned defense companies."

    Leading the gains were companies specializing in advanced military technology, including artificial intelligence applications, unmanned systems, and electronic warfare. Traditional defense contractors also benefited from increased orders for conventional military hardware.

    The defense sector rally contrasts with the broader market's focus on peace and diplomacy, highlighting the complex relationship between global tensions and investment opportunities.`,
    featuredImage: "/news/defense-stocks.jpg",
    category: "Defense",
    categorySlug: "defense",
    author: "Defense Industry Reporter",
    date: "2024-04-07",
    readTime: 4,
    views: 41500,
    slug: "defense-stocks-military-spending"
  },
  {
    id: 6,
    title: "Cryptocurrency Markets React to Global Developments",
    excerpt: "Digital currencies show volatility as investors seek safe havens amid geopolitical tensions.",
    content: `Cryptocurrency markets experienced heightened volatility as investors reacted to changing global economic conditions. Bitcoin and other major cryptocurrencies saw significant price swings as traders assessed the impact of improved international relations on digital asset markets.

    The crypto market's reaction has been mixed, with some investors viewing digital currencies as alternative safe havens while others see them as risk assets to be sold during uncertain times. Bitcoin, the largest cryptocurrency, initially rallied on the news before giving back some gains as profit-taking emerged.

    "Crypto is still finding its place in the global financial system," explained Digital Assets Strategist Lisa Chang. "Sometimes it trades like a risk asset, sometimes like a safe haven. This dual nature creates interesting trading opportunities but also increased volatility."

    Institutional investors have been particularly active in the crypto markets, using futures and options to hedge their positions. The increased institutional participation has led to higher trading volumes and more sophisticated market dynamics.

    Regulatory developments have also influenced crypto prices, with several countries announcing clearer frameworks for digital asset trading. This regulatory clarity is seen as positive for long-term market development.`,
    featuredImage: "/news/crypto-markets.jpg",
    category: "Crypto",
    categorySlug: "crypto",
    author: "Digital Assets Analyst",
    date: "2024-04-07",
    readTime: 5,
    views: 35600,
    slug: "cryptocurrency-global-developments"
  },
  {
    id: 7,
    title: "Gold Prices Rise as Safe-Haven Demand Increases",
    excerpt: "Precious metals gain value as investors seek protection amid global uncertainty.",
    content: `Gold prices reached their highest level in over a year as investors turned to the precious metal as a safe-haven asset during uncertain times. The price of gold futures rose more than 6% as traders sought protection against potential market volatility.

    The surge in gold prices reflects classic investor behavior during periods of uncertainty. Gold has traditionally been viewed as a store of value and protection against inflation and currency devaluation, making it attractive when other assets seem risky.

    "Gold is doing exactly what investors expect it to do during uncertain times," said Precious Metals Analyst Robert Kim. "It's providing stability when other markets are volatile. The increased demand is coming from both institutional and individual investors."

    Central banks have also been increasing their gold reserves, adding to the upward pressure on prices. Several countries announced plans to diversify their foreign exchange reserves away from traditional currencies and toward precious metals.

    The rally in gold has benefited mining companies and gold ETFs, which have seen significant inflows from investors seeking exposure to the precious metal without directly owning physical gold.`,
    featuredImage: "/news/gold-prices.jpg",
    category: "Commodities",
    categorySlug: "commodities",
    author: "Commodities Trader",
    date: "2024-04-06",
    readTime: 3,
    views: 48900,
    slug: "gold-prices-safe-haven"
  },
  {
    id: 8,
    title: "Asian Markets Follow Global Rally Trend",
    excerpt: "Pacific Rim exchanges show strong performance following positive developments in international relations.",
    content: `Asian stock markets joined the global rally, with major exchanges in Japan, China, and South Korea posting significant gains. The Nikkei 225 and Hang Seng indices both rose more than 4% as investors in the region responded positively to improving global conditions.

    The rally in Asian markets was particularly notable given the region's importance to global trade and economic growth. Improved international relations could significantly benefit export-oriented economies in Asia, leading to increased corporate earnings and economic growth.

    "Asian markets are particularly sensitive to global trade and diplomatic developments," explained Regional Market Analyst Takeshi Yamamoto. "Any reduction in international tensions directly benefits the region's export-driven economies and manufacturing sectors."

    Technology companies in Asia led the gains, with semiconductor and electronics manufacturers seeing strong demand. Chinese tech stocks, which had been under pressure, experienced a particularly strong rally as investors regained confidence in the sector.

    The strong performance in Asian markets helped fuel the global rally, with European and U.S. markets building on the positive momentum from overnight trading in Asia. Market analysts are watching to see if the rally can be sustained in the coming weeks.`,
    featuredImage: "/news/asian-markets.jpg",
    category: "Markets",
    categorySlug: "markets",
    author: "Asia Markets Reporter",
    date: "2024-04-06",
    readTime: 4,
    views: 31200,
    slug: "asian-markets-global-rally"
  }
];

export default function NewsDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const newsItem = newsItems.find(item => item.slug === slug);
  
  if (!newsItem) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">News Article Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">The news article you're looking for doesn't exist.</p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: newsItem.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href={`/category/${newsItem.categorySlug}`} className="hover:text-red-500 transition-colors">
                {newsItem.category}
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 dark:text-white">{newsItem.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="relative h-64 md:h-96 mb-6 rounded-lg overflow-hidden">
            <Image
              src={newsItem.featuredImage}
              alt={newsItem.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-red-500 text-white rounded">
                {newsItem.category}
              </span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {newsItem.title}
          </h1>
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{newsItem.readTime} min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>{newsItem.views.toLocaleString()} views</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(newsItem.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900 dark:text-white">By {newsItem.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Share article"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleBookmark}
                  className={`p-2 rounded-lg transition-colors ${
                    isBookmarked 
                      ? 'bg-red-500 text-white' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  aria-label="Bookmark article"
                >
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div className="text-gray-800 dark:text-gray-200 leading-relaxed space-y-4">
            {newsItem.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related News</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsItems
              .filter(item => item.id !== newsItem.id)
              .slice(0, 3)
              .map((item) => (
                <article
                  key={item.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Link href={`/news/${item.slug}`}>
                    <div className="relative h-40">
                      <Image
                        src={item.featuredImage}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-red-500 text-white rounded">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                  
                  <div className="p-4">
                    <Link href={`/news/${item.slug}`}>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 hover:text-red-500 transition-colors">
                        {item.title}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{item.readTime}m</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{item.views.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(item.date).toLocaleDateString('en-US', {
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
        </section>
      </article>

      <Footer />
    </div>
  );
}
