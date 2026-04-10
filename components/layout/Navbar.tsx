'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { categories } from '@/data/categories';
import { siteConfig } from '@/data/site-config';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to search results page with query parameter
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-800' 
        : 'bg-black shadow-md border-b border-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-xl text-white">
                Knowledge Review
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Main Nav Links */}
            <div className="flex items-center space-x-6">
              <Link 
                href="/" 
                className={`font-medium transition-colors ${
                  pathname === '/' ? 'text-red-500' : 'text-white hover:text-red-500'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`font-medium transition-colors ${
                  pathname === '/about' ? 'text-red-500' : 'text-white hover:text-red-500'
                }`}
              >
                About Us
              </Link>
              
              {/* Categories Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsCategoriesOpen(true)}
                  onMouseLeave={() => setIsCategoriesOpen(false)}
                  className="flex items-center space-x-1 text-white hover:text-red-500 transition-colors font-medium"
                >
                  <span>Categories</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isCategoriesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-black rounded-lg shadow-xl border border-gray-800"
                    onMouseEnter={() => setIsCategoriesOpen(true)}
                    onMouseLeave={() => setIsCategoriesOpen(false)}
                  >
                    <div className="py-2">
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          href={`/category/${category.slug}`}
                          className="block px-4 py-2 text-sm text-white hover:text-red-500 transition-colors"
                        >
                          <div className="flex items-center space-x-2">
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: category.color }}
                            />
                            <span>{category.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="/word-art" 
                className={`font-medium transition-colors ${
                  pathname === '/word-art' ? 'text-red-500' : 'text-white hover:text-red-500'
                }`}
              >
                Word Art
              </Link>
              <Link 
                href="/magazine" 
                className={`font-medium transition-colors ${
                  pathname === '/magazine' ? 'text-red-500' : 'text-white hover:text-red-500'
                }`}
              >
                Magazine
              </Link>
              <Link 
                href="/contact" 
                className={`font-medium transition-colors ${
                  pathname === '/contact' ? 'text-red-500' : 'text-white hover:text-red-500'
                }`}
              >
                Contact Us
              </Link>
            </div>

            {/* Search and Theme Toggle */}
            <div className="flex items-center space-x-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-80 px-4 py-2 pl-10 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-gray-500 placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                  pathname === '/' ? 'text-red-500' : 'text-white hover:text-red-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                  pathname === '/about' ? 'text-red-500' : 'text-white hover:text-red-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              
              {/* Mobile Categories */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-gray-400 mb-2">Categories</div>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/category/${category.slug}`}
                      className="block px-3 py-2 rounded-lg text-white hover:text-red-500 text-sm transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: category.color }}
                        />
                        <span>{category.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/word-art"
                className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                  pathname === '/word-art' ? 'text-red-500' : 'text-white hover:text-red-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Word Art
              </Link>
              <Link
                href="/magazine"
                className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                  pathname === '/magazine' ? 'text-red-500' : 'text-white hover:text-red-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Magazine
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                  pathname === '/contact' ? 'text-red-500' : 'text-white hover:text-red-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>

              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="px-3 py-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder-gray-400"
                />
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
