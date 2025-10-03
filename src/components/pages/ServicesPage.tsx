interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      title: 'General Dentistry',
      description: 'Comprehensive dental care including cleanings, fillings, and preventive treatments.',
      icon: '🦷'
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with veneers, teeth whitening, and aesthetic treatments.',
      icon: '✨'
    },
    {
      title: 'Orthodontics',
      description: 'Straighten your teeth with traditional braces or modern Invisalign treatments.',
      icon: '😊'
    },
    {
      title: 'Oral Surgery',
      description: 'Expert surgical procedures including tooth extractions and implant placement.',
      icon: '🏥'
    },
    {
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care for children in a fun, comfortable environment.',
      icon: '👶'
    },
    {
      title: 'Emergency Care',
      description: 'Urgent dental care when you need it most, available for dental emergencies.',
      icon: '🚨'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of dental services to meet all your oral health needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button
                onClick={() => onNavigate('Appointment')}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Schedule?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to book your appointment and start your journey to better oral health
          </p>
          <button
            onClick={() => onNavigate('Appointment')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}