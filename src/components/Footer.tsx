interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">HappyTeeth</h3>
            <p className="text-gray-400">
              Providing quality dental care with a smile.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('Home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('About')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('Services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">123 Dental Street</p>
            <p className="text-gray-400">City, State 12345</p>
            <p className="text-gray-400">(555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Hours</h4>
            <p className="text-gray-400">Mon-Fri: 8am-6pm</p>
            <p className="text-gray-400">Sat: 9am-4pm</p>
            <p className="text-gray-400">Sun: Closed</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 HappyTeeth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}