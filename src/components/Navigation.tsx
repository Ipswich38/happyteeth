import Image from 'next/image';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuItems = ['Home', 'About', 'Services', 'Team', 'Gallery', 'Contact', 'Appointment'];

  return (
    <nav className="bg-white/20 backdrop-blur-xl shadow-lg border-b border-white/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          <div className="flex items-center">
            <button
              onClick={() => onNavigate('Home')}
              className="flex items-center hover:scale-105 transition-transform duration-200"
            >
              <Image
                src="/happyteethtransparent.png"
                alt="HappyTeeth Logo"
                width={60}
                height={60}
                className="object-contain sm:w-[80px] sm:h-[80px]"
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item === 'Contact') {
                    if (currentPage === 'Home') {
                      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      onNavigate('Home');
                      setTimeout(() => {
                        document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  } else if (item === 'Appointment') {
                    if (currentPage === 'Home') {
                      document.getElementById('appointment-section')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      onNavigate('Home');
                      setTimeout(() => {
                        document.getElementById('appointment-section')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  } else if (item === 'Services') {
                    if (currentPage === 'Home') {
                      document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      onNavigate('Home');
                      setTimeout(() => {
                        document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  } else {
                    onNavigate(item);
                  }
                }}
                className={`px-3 xl:px-4 py-2 xl:py-3 text-sm font-inter font-medium rounded-full transition-all duration-300 hover:scale-105 ${
                  item === 'Appointment'
                    ? 'text-white bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-md hover:from-cyan-500 hover:to-cyan-600'
                    : currentPage === item
                    ? 'text-white bg-primary-400 shadow-md'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                {item}
              </button>
            ))}

            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com/canaresdentalclinic/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-md"
              aria-label="Visit our Facebook page"
            >
              f
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 min-w-[44px] min-h-[44px] rounded-md text-primary-600 hover:bg-primary-50 transition-colors flex items-center justify-center"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 py-4 space-y-2 bg-white/30 backdrop-blur-xl border-t border-white/30">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item === 'Contact') {
                    if (currentPage === 'Home') {
                      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      onNavigate('Home');
                      setTimeout(() => {
                        document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  } else if (item === 'Appointment') {
                    if (currentPage === 'Home') {
                      document.getElementById('appointment-section')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      onNavigate('Home');
                      setTimeout(() => {
                        document.getElementById('appointment-section')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  } else if (item === 'Services') {
                    if (currentPage === 'Home') {
                      document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      onNavigate('Home');
                      setTimeout(() => {
                        document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  } else {
                    onNavigate(item);
                  }
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-4 min-h-[44px] text-base font-inter font-medium rounded-lg transition-all duration-200 flex items-center ${
                  item === 'Appointment'
                    ? 'text-white bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-md hover:from-cyan-500 hover:to-cyan-600'
                    : currentPage === item
                    ? 'text-white bg-primary-400 shadow-sm'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                {item}
              </button>
            ))}

            {/* Facebook Link in Mobile Menu */}
            <a
              href="https://www.facebook.com/canaresdentalclinic/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-4 min-h-[44px] text-base font-inter font-medium rounded-lg transition-all duration-200 text-gray-600 hover:text-pink-600 hover:bg-pink-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                f
              </div>
              Follow us on Facebook
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}