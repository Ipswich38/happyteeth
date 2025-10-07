import Image from 'next/image';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-primary-50/50 border-t border-primary-200 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/happyteethtransparent.png"
                alt="HappyTeeth Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <h3 className="text-lg font-playfair font-semibold text-primary-600">HappyTeeth</h3>
            </div>
            <p className="text-sm text-gray-600 font-inter leading-relaxed">
              Creating happy, healthy smiles for patients of all ages in a comfortable, caring environment! 🌟
            </p>
          </div>
          <div className="sm:col-span-1">
            <h4 className="text-sm font-inter font-medium mb-3 text-gray-800">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => onNavigate('Home')}
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors font-inter py-2 min-h-[44px] flex items-center"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('About')}
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors font-inter py-2 min-h-[44px] flex items-center"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('Services')}
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors font-inter py-2 min-h-[44px] flex items-center"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('Team')}
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors font-inter py-2 min-h-[44px] flex items-center"
                >
                  Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('Contact')}
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors font-inter py-2 min-h-[44px] flex items-center"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-1">
            <h4 className="text-sm font-inter font-medium mb-3 text-gray-800">Contact Us</h4>
            <div className="space-y-2 text-gray-600 font-inter">
              <div>
                <a
                  href="tel:+639486867966"
                  className="text-sm text-primary-600 font-medium hover:text-primary-700 transition-colors cursor-pointer py-2 min-h-[44px] flex items-center"
                >
                  09486867966
                </a>
                <p className="text-sm">Call or text for appointments!</p>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-xs">f</span>
                </div>
                <a
                  href="https://www.facebook.com/canaresdentalclinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-pink-600 hover:text-pink-700 transition-colors py-2 min-h-[44px] flex items-center"
                >
                  Follow us on Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-inter font-medium mb-3 text-gray-800">Clinic Hours</h4>
            <div className="space-y-1 text-gray-600 font-inter">
              <p className="text-sm">Daily: 9:00 AM – 5:00 PM</p>
              <p className="text-sm">Open 7 days a week!</p>
              <p className="text-sm">Call ahead to schedule</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-200/50 mt-6 sm:mt-8 pt-4 text-center">
          <p className="text-xs text-gray-500 font-inter leading-relaxed">
            © 2025 HappyTeeth Dental Care • Making smiles shine bright! ✨<br />
            <span className="text-primary-500">Website design and created by </span>
            <a
              href="https://kreativloopsbycherwinfernandez.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-600 underline transition-colors"
            >
              Kreativloops
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}