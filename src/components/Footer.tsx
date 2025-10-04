import Image from 'next/image';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-white border-t border-primary-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/happyteethtransparent.png"
                alt="HappyTeeth Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <h3 className="text-2xl font-playfair font-semibold text-primary-600">HappyTeeth</h3>
            </div>
            <p className="text-gray-600 font-inter leading-relaxed">
              Creating happy, healthy smiles for children and families in a fun, caring environment! 🌟
            </p>
          </div>
          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg font-inter font-medium mb-4 sm:mb-6 text-gray-800">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('Home')}
                  className="text-sm sm:text-base text-gray-600 hover:text-primary-600 transition-colors font-inter"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('About')}
                  className="text-sm sm:text-base text-gray-600 hover:text-primary-600 transition-colors font-inter"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('Services')}
                  className="text-sm sm:text-base text-gray-600 hover:text-primary-600 transition-colors font-inter"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('Team')}
                  className="text-sm sm:text-base text-gray-600 hover:text-primary-600 transition-colors font-inter"
                >
                  Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('Contact')}
                  className="text-sm sm:text-base text-gray-600 hover:text-primary-600 transition-colors font-inter"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg font-inter font-medium mb-4 sm:mb-6 text-gray-800">Contact Us</h4>
            <div className="space-y-2 sm:space-y-3 text-gray-600 font-inter">
              <p className="text-sm sm:text-base text-primary-600 font-medium">0948-686-7966</p>
              <p className="text-sm sm:text-base text-primary-600 font-medium">0970-107-2952</p>
              <p className="text-sm sm:text-base">Call or text for appointments!</p>
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-inter font-medium mb-4 sm:mb-6 text-gray-800">Clinic Hours</h4>
            <div className="space-y-2 sm:space-y-3 text-gray-600 font-inter">
              <p className="text-sm sm:text-base">Daily: 9:00 AM – 5:00 PM</p>
              <p className="text-sm sm:text-base">Open 7 days a week!</p>
              <p className="text-sm sm:text-base">Call ahead to schedule</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-100 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-base text-gray-500 font-inter px-4">
            © 2024 HappyTeeth Pediatric Dentistry • Making smiles shine bright! ✨
          </p>
        </div>
      </div>
    </footer>
  );
}