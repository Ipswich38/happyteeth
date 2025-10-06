interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      title: 'General Dentistry',
      description: 'Comprehensive dental care including examinations, cleanings, fillings, and preventive treatments for the whole family.',
      icon: '🦷',
      specialist: 'DRA. CAMILA CAÑARES-PRICE & DRA. FEVI STELLA TORRALBA-PIO'
    },
    {
      title: 'Oral Surgery & Extractions',
      description: 'Expert surgical procedures including wisdom tooth removal, tooth extractions, and complex oral surgeries.',
      icon: '🔨',
      specialist: 'DR. JEROME OH'
    },
    {
      title: 'Root Canal Treatment (Endodontics)',
      description: 'Advanced root canal therapy to save infected or damaged teeth and preserve your natural smile.',
      icon: '🩺',
      specialist: 'DR. JEROME OH'
    },
    {
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care for children in a fun, friendly, and stress-free environment.',
      icon: '👶',
      specialist: 'DRA. CLENCY'
    },
    {
      title: 'Orthodontics & Braces',
      description: 'Teeth straightening and bite correction with braces and other orthodontic appliances.',
      icon: '🦷',
      specialist: 'DRA. FATIMA PORCIUNCULA'
    },
    {
      title: 'TMJ Disorder Treatment',
      description: 'Specialized treatment for jaw pain, TMJ disorders, and bite alignment issues.',
      icon: '💆‍♀️',
      specialist: 'DR. JONATHAN PINEDA'
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Smile makeovers, teeth whitening, veneers, and cosmetic treatments for a beautiful smile.',
      icon: '✨',
      specialist: 'DRA. SHIRLEY BAYOG'
    },
    {
      title: 'Teeth Whitening',
      description: 'Professional teeth whitening treatments for a brighter, more confident smile.',
      icon: '💎',
      specialist: 'DRA. SHIRLEY BAYOG'
    },
    {
      title: 'Dental Veneers',
      description: 'Custom porcelain veneers to enhance the appearance and shape of your teeth.',
      icon: '🔹',
      specialist: 'DRA. SHIRLEY BAYOG'
    },
    {
      title: 'Dental Crowns',
      description: 'High-quality crowns to restore damaged teeth and improve function and appearance.',
      icon: '👑',
      specialist: 'DRA. SHIRLEY BAYOG'
    },
    {
      title: 'Smile Makeovers',
      description: 'Complete smile transformations combining multiple cosmetic procedures for dramatic results.',
      icon: '😊',
      specialist: 'DRA. SHIRLEY BAYOG'
    },
    {
      title: 'Dental Imaging & X-rays',
      description: 'Advanced dental imaging including periapical and panoramic X-rays for accurate diagnosis.',
      icon: '📸',
      specialist: 'Available with all procedures'
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-white via-primary-50 to-primary-100">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 border-primary-200">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-sm font-inter leading-relaxed text-center mb-4">{service.description}</p>
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-3 mb-4">
                <p className="text-xs font-inter font-medium text-primary-700 text-center">
                  <span className="text-primary-600">👨‍⚕️ Specialist:</span><br />
                  {service.specialist}
                </p>
              </div>
              <button
                onClick={() => {
                  onNavigate('Home');
                  setTimeout(() => {
                    document.getElementById('appointment-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-white py-3 px-4 rounded-full font-inter font-semibold text-sm hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book Now 📅
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-primary-100 to-primary-200 rounded-3xl p-8 border border-primary-300 text-center">
          <div className="text-5xl mb-6">🌟</div>
          <h2 className="text-3xl font-playfair font-semibold text-gray-800 mb-6">Ready to Schedule Your Visit?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us today to book your appointment and experience our gentle, comprehensive dental care!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                onNavigate('Home');
                setTimeout(() => {
                  document.getElementById('appointment-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-white px-8 py-4 rounded-full font-inter font-medium text-lg hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              📅 Book Appointment
            </button>
            <button
              onClick={() => {
                onNavigate('Home');
                setTimeout(() => {
                  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-white text-primary-600 border-2 border-primary-300 px-8 py-4 rounded-full font-inter font-medium text-lg hover:bg-primary-50 transition-all duration-300 hover:scale-105"
            >
              📞 Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}