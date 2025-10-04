import Image from 'next/image';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const menuItems = ['Home', 'About', 'Services', 'Team', 'Gallery', 'Blog', 'Contact', 'Appointment'];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-primary-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <Image
                src="/happyteethlogo.png"
                alt="HappyTeeth Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <h1 className="text-2xl font-playfair font-semibold text-primary-600 tracking-wide">HappyTeeth</h1>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`px-4 py-3 text-sm font-inter font-medium rounded-full transition-all duration-300 hover:scale-105 ${
                  currentPage === item
                    ? 'text-white bg-primary-400 shadow-md'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}