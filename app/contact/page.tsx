import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import { siteConfig } from '@/data/site-config';

export default function ContactPage() {

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
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question, feedback, or want to 
            contribute to our educational community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {siteConfig.contact.email}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {siteConfig.contact.phone}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                    Mon-Fri 9AM-5PM EST
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {Object.entries(siteConfig.socialLinks).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label={platform}
                  >
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                      {platform.charAt(0).toUpperCase()}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <details className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <summary className="font-medium text-gray-900 dark:text-white cursor-pointer">
                    How can I contribute an article?
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    We welcome guest contributions! Please send us your article idea and brief bio 
                    through our contact form, and our editorial team will review it.
                  </p>
                </details>
                
                <details className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <summary className="font-medium text-gray-900 dark:text-white cursor-pointer">
                    Do you offer advertising opportunities?
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Yes, we offer various advertising packages. Contact us for our media kit and 
                    pricing information.
                  </p>
                </details>
                
                <details className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <summary className="font-medium text-gray-900 dark:text-white cursor-pointer">
                    How can I subscribe to your newsletter?
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    You can subscribe to our newsletter using the subscription form at the bottom 
                    of any page on our website.
                  </p>
                </details>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export const metadata = {
  title: 'Contact Us - Education Insights',
  description: 'Get in touch with the Education Insights team. We welcome your feedback, questions, and contributions.',
};
