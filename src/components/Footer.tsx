interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-300 to-primary-400 rounded-full flex items-center justify-center text-lg">
                😊
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-primary-300">HappyTeeth</h3>
            </div>
            <p className="text-gray-300 font-inter leading-relaxed">
              Creating happy, healthy smiles for children and families in a fun, caring environment! 🌟
            </p>
          </div>
          <div>
            <h4 className="text-lg font-inter font-medium mb-6 text-white flex items-center space-x-2">
              <span>🏠</span>
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('Home')}
                  className="text-gray-300 hover:text-primary-300 transition-colors font-inter flex items-center space-x-2"
                >
                  <span>🏡</span>
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('About')}
                  className="text-gray-300 hover:text-primary-300 transition-colors font-inter flex items-center space-x-2"
                >
                  <span>👨‍⚕️</span>
                  <span>About</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('Services')}
                  className="text-gray-300 hover:text-primary-300 transition-colors font-inter flex items-center space-x-2"
                >
                  <span>🦷</span>
                  <span>Services</span>
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-inter font-medium mb-6 text-white flex items-center space-x-2">
              <span>📞</span>
              <span>Contact Us</span>
            </h4>
            <div className="space-y-3 text-gray-300 font-inter">
              <p className="flex items-center space-x-2">
                <span>🏢</span>
                <span>123 Happy Street</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>🏙️</span>
                <span>Smileville, ST 12345</span>
              </p>
              <p className="text-primary-300 font-medium flex items-center space-x-2">
                <span>📱</span>
                <span>(555) HAPPY-TEETH</span>
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-inter font-medium mb-6 text-white flex items-center space-x-2">
              <span>⏰</span>
              <span>Kid-Friendly Hours</span>
            </h4>
            <div className="space-y-3 text-gray-300 font-inter">
              <p className="flex items-center space-x-2">
                <span>📅</span>
                <span>Mon-Fri: 8am-6pm</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>🌤️</span>
                <span>Sat: 9am-4pm</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>🌅</span>
                <span>Sun: Family Time!</span>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-inter flex items-center justify-center space-x-2">
            <span>© 2024 HappyTeeth Pediatric Dentistry</span>
            <span>✨</span>
            <span>Making smiles shine bright!</span>
            <span>🌟</span>
          </p>
        </div>
      </div>
    </footer>
  );
}