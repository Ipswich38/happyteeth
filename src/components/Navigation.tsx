interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const menuItems = ['Home', 'About', 'Services', 'Team', 'Gallery', 'Blog', 'Contact', 'Appointment'];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-playfair font-semibold text-primary-600">HappyTeeth</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`px-4 py-2 text-sm font-inter font-medium transition-all duration-200 hover:scale-105 ${
                  currentPage === item
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
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