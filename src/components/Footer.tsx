interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-text-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-primary-light">HappyTeeth</h3>
            <p className="text-muted-light font-inter leading-relaxed">
              Providing premium dental care with a personal touch in a serene, modern environment.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-inter font-medium mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('Home')}
                  className="text-muted-light hover:text-primary-light transition-colors font-inter"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('About')}
                  className="text-muted-light hover:text-primary-light transition-colors font-inter"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('Services')}
                  className="text-muted-light hover:text-primary-light transition-colors font-inter"
                >
                  Services
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-inter font-medium mb-6 text-white">Contact</h4>
            <div className="space-y-2 text-muted-light font-inter">
              <p>123 Dental Street</p>
              <p>City, State 12345</p>
              <p className="text-primary-light font-medium">(555) 123-4567</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-inter font-medium mb-6 text-white">Hours</h4>
            <div className="space-y-2 text-muted-light font-inter">
              <p>Mon-Fri: 8am-6pm</p>
              <p>Sat: 9am-4pm</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>
        <div className="border-t border-muted mt-12 pt-8 text-center">
          <p className="text-muted-light font-inter">
            © 2024 HappyTeeth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}