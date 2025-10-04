interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      title: 'Consultation',
      description: 'Comprehensive dental examination and personalized treatment planning.',
      icon: '👨‍⚕️'
    },
    {
      title: 'Oral Prophylaxis',
      description: 'Professional teeth cleaning and preventive care for optimal oral health.',
      icon: '🦷'
    },
    {
      title: 'Fillings',
      description: 'Tooth-colored and amalgam restorations to treat cavities and decay.',
      icon: '🔧'
    },
    {
      title: 'Dentures',
      description: 'Complete and partial dentures to restore your smile and function.',
      icon: '😊'
    },
    {
      title: 'Crown & Bridge',
      description: 'Durable crowns and bridges to restore damaged or missing teeth.',
      icon: '👑'
    },
    {
      title: 'TMJ Disorder Treatment',
      description: 'Specialized care for jaw joint disorders and related pain relief.',
      icon: '💆‍♀️'
    },
    {
      title: 'Wisdom Tooth Surgery',
      description: 'Safe and comfortable extraction of problematic wisdom teeth.',
      icon: '🦷'
    },
    {
      title: 'Root Canal Treatment',
      description: 'Advanced endodontic therapy to save infected or damaged teeth.',
      icon: '🩺'
    },
    {
      title: 'Teeth Whitening',
      description: 'Professional whitening treatments for a brighter, more confident smile.',
      icon: '✨'
    },
    {
      title: 'Braces',
      description: 'Orthodontic treatment to straighten teeth and improve your bite.',
      icon: '🦷'
    },
    {
      title: 'Veneers',
      description: 'Porcelain veneers to enhance the appearance of your front teeth.',
      icon: '💎'
    },
    {
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care for children in a fun, comfortable environment.',
      icon: '👶'
    },
    {
      title: 'Periapical & Panoramic X-ray',
      description: 'Advanced dental imaging for accurate diagnosis and treatment planning.',
      icon: '📸'
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <span className="text-5xl">🦷✨</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-gray-800 mb-6">Our Comprehensive Services</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a complete range of dental services to keep your family&apos;s smiles healthy and bright!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-primary-100">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                {service.icon}
              </div>
              <h3 className="text-lg font-playfair font-medium text-gray-800 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-sm font-inter leading-relaxed text-center mb-4">{service.description}</p>
              <button
                onClick={() => onNavigate('Appointment')}
                className="w-full bg-gradient-to-r from-primary-300 to-primary-400 text-gray-800 py-2 px-4 rounded-full font-inter font-medium text-sm hover:from-primary-400 hover:to-primary-500 transition-all duration-300 hover:scale-105"
              >
                Book Now 📅
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-secondary-100 to-accent-100 rounded-3xl p-8 border border-secondary-200 text-center">
          <div className="text-5xl mb-6">🌟</div>
          <h2 className="text-3xl font-playfair font-semibold text-gray-800 mb-6">Ready to Schedule Your Visit?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us today to book your appointment and experience our gentle, comprehensive dental care!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('Appointment')}
              className="bg-gradient-to-r from-primary-400 to-primary-500 text-white px-8 py-4 rounded-full font-inter font-medium text-lg hover:from-primary-500 hover:to-primary-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              📅 Book Appointment
            </button>
            <button
              onClick={() => onNavigate('Contact')}
              className="bg-white text-primary-600 border-2 border-primary-300 px-8 py-4 rounded-full font-inter font-medium text-lg hover:bg-primary-50 transition-all duration-300 hover:scale-105"
            >
              📞 Call Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}