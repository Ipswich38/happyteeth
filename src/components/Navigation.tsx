interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const menuItems = ['Home', 'About', 'Services', 'Team', 'Gallery', 'Blog', 'Contact', 'Appointment'];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-playfair font-semibold text-primary-text">HappyTeeth</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`px-4 py-2 text-sm font-inter font-medium transition-all duration-200 hover:scale-105 ${
                  currentPage === item
                    ? 'text-primary-text border-b-2 border-primary-text'
                    : 'text-text-secondary hover:text-primary-text'
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