import { useState, useEffect } from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    cellphone: '',
    service: '',
    date: ''
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  // Hero section images
  const heroImages = [
    '/herosection/1.jpg',
    '/herosection/2.jpg',
    '/herosection/3.jpg',
    '/herosection/4.jpg',
    '/herosection/5.jpg',
    '/herosection/6.jpg',
    '/herosection/7.jpg'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAppointmentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setAppointmentForm({
      ...appointmentForm,
      [e.target.name]: e.target.value
    });
  };

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment request:', appointmentForm);
    setShowConfirmation(true);
    setAppointmentForm({ name: '', cellphone: '', service: '', date: '' });
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  // Image carousel effect with glance/disappearing animation
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      // First fade out current image
      setIsImageVisible(false);

      // After fade out completes, change image and fade in
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        );
        setIsImageVisible(true);
      }, 500); // Wait for fade out to complete
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [heroImages.length, isPlaying]);

  // Manual navigation functions
  const goToNextImage = () => {
    setIsImageVisible(false);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
      setIsImageVisible(true);
    }, 300);
  };

  const goToPrevImage = () => {
    setIsImageVisible(false);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
      );
      setIsImageVisible(true);
    }, 300);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const services = [
    'General Consultation',
    'Dental Cleaning',
    'Tooth Filling',
    'Tooth Extraction',
    'Root Canal Treatment',
    'Dental Crown',
    'Teeth Whitening',
    'Orthodontic Consultation',
    'Pediatric Dental Care',
    'TMJ Treatment',
    'Emergency Dental Care'
  ];

  // Comprehensive services based on patient needs and specialist expertise
  const majorServices = [
    {
      title: 'General Consultation',
      icon: '👩‍⚕️',
      image: '/Gallery/GeneralConsulation.png'
    },
    {
      title: 'Dental Cleaning',
      icon: '🪥',
      image: '/Gallery/teethcleaning.jpg'
    },
    {
      title: 'Teeth Whitening',
      icon: '✨',
      image: '/Gallery/cosmeticdentistry.jpg'
    },
    {
      title: 'Orthodontics & Braces',
      icon: '🦷',
      image: '/Gallery/braces.jpg'
    },
    {
      title: 'TMJ Treatment',
      icon: '💆‍♀️',
      image: '/Gallery/TMJnew.jpg'
    },
    {
      title: 'Root Canal Treatment',
      icon: '🩺',
      image: '/Gallery/newtechnologyrootcanalgadget.png'
    },
    {
      title: 'Oral Surgery',
      icon: '🔨',
      image: '/Gallery/oralsurgery.jpg'
    },
    {
      title: 'Dental Implants',
      icon: '🦷',
      image: '/Gallery/dental implant.jpg'
    },
    {
      title: 'Digital X-ray',
      icon: '📷',
      image: '/Gallery/dentalxray.jpg'
    },
    {
      title: 'Pediatric Dentistry',
      icon: '👶',
      image: '/Gallery/pediatric.png'
    }
  ];
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Gallery/HTwhitebg.png')",
          }}
        ></div>
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-16">
              {/* Left Content */}
              <div className="space-y-8">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-gray-900 leading-tight">
                  Welcome to <span className="text-primary-500">Happy Teeth</span>
                </h1>

                <h2 className="text-2xl sm:text-3xl font-inter font-light text-gray-700">
                  Where Smiles Shine Bright!
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  Experience comprehensive dental care in a warm, welcoming environment with our team of specialists.
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-gradient-to-r from-primary-400 to-primary-500 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:from-primary-500 hover:to-primary-600 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Explore Our Services
                  </button>
                </div>
              </div>

              {/* Right Image Carousel */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md lg:max-w-lg aspect-square rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden relative bg-white">
                  {/* Main Image with Glance Effect */}
                  <div className="relative w-full h-full">
                    <img
                      src={heroImages[currentImageIndex]}
                      alt={`Happy Teeth Dental Clinic ${currentImageIndex + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                        isImageVisible
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-110'
                      }`}
                    />

                    {/* Elegant Overlay with Glance Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-opacity duration-500 ${
                      isImageVisible ? 'opacity-60' : 'opacity-20'
                    }`}></div>

                    {/* Subtle Logo Watermark */}
                    <div className="absolute bottom-4 right-4 opacity-70">
                      <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                        <img src="/happyteethtransparent.png" alt="Happy Teeth" className="w-6 h-6 object-contain" />
                      </div>
                    </div>


                    {/* Slider Controls at Bottom */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-black/30 backdrop-blur-md rounded-full px-4 py-2">
                      {/* Previous Button */}
                      <button
                        onClick={goToPrevImage}
                        className="w-11 h-11 min-w-[44px] min-h-[44px] bg-white/80 hover:bg-white/95 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 group"
                        aria-label="Previous image"
                      >
                        <svg className="w-4 h-4 text-gray-700 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      {/* Play/Pause Button */}
                      <button
                        onClick={togglePlayPause}
                        className="w-11 h-11 min-w-[44px] min-h-[44px] bg-white/80 hover:bg-white/95 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 group"
                        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                      >
                        {isPlaying ? (
                          <svg className="w-3 h-3 text-gray-700 group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                          </svg>
                        ) : (
                          <svg className="w-3 h-3 text-gray-700 group-hover:text-gray-900 transition-colors ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        )}
                      </button>

                      {/* Next Button */}
                      <button
                        onClick={goToNextImage}
                        className="w-11 h-11 min-w-[44px] min-h-[44px] bg-white/80 hover:bg-white/95 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 group"
                        aria-label="Next image"
                      >
                        <svg className="w-4 h-4 text-gray-700 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Appointment Form Section */}
      <section id="appointment-section" className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-pink-500/80 to-pink-600/90 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-pink-300/50 p-6 sm:p-8 lg:p-10 hover:shadow-3xl transition-all duration-500">
            <div className="mb-6 text-center">
              <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-white mb-2">Book Your Appointment</h2>
              <p className="text-white/90">Schedule your visit with our dental experts</p>
            </div>

            <form onSubmit={handleAppointmentSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="appointment-name" className="block text-sm font-medium text-white">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="appointment-name"
                    name="name"
                    required
                    value={appointmentForm.name}
                    onChange={handleAppointmentChange}
                    className="w-full px-4 py-4 min-h-[44px] border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 bg-white/80 text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="appointment-cellphone" className="block text-sm font-medium text-white">
                    Cellphone Number *
                  </label>
                  <input
                    type="tel"
                    id="appointment-cellphone"
                    name="cellphone"
                    required
                    value={appointmentForm.cellphone}
                    onChange={handleAppointmentChange}
                    className="w-full px-4 py-4 min-h-[44px] border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 bg-white/80 text-base"
                    placeholder="09XXXXXXXXX"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="appointment-service" className="block text-sm font-medium text-white">
                    Service *
                  </label>
                  <select
                    id="appointment-service"
                    name="service"
                    required
                    value={appointmentForm.service}
                    onChange={handleAppointmentChange}
                    className="w-full px-4 py-4 min-h-[44px] border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 bg-white/80 text-base"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="appointment-date" className="block text-sm font-medium text-white">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="appointment-date"
                    name="date"
                    required
                    value={appointmentForm.date}
                    onChange={handleAppointmentChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-4 min-h-[44px] border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 bg-white/80 text-base"
                  />
                </div>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 mx-auto"
                >
                  <span>Request Appointment</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Major Services Banner */}
      <section id="services-section" className="py-16 sm:py-20 bg-gradient-to-br from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental care with specialized expertise in high-quality treatments
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Services Grid - 2 rows x 5 columns on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              {majorServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl lg:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 aspect-square"
                >
                  {/* Background Image */}
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-4xl lg:text-3xl">
                      {service.icon}
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Service Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-2">
                    <h3 className="text-white font-bold text-base lg:text-sm font-playfair drop-shadow-lg group-hover:text-primary-300 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Hover Enhancement */}
                  <div className="absolute inset-0 ring-0 group-hover:ring-4 group-hover:ring-primary-400/30 rounded-2xl lg:rounded-xl transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  document.getElementById('appointment-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Book Appointment</span>
              </button>
              <button
                onClick={() => {
                  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-primary-400 to-primary-500 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:from-primary-500 hover:to-primary-600 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-50 to-secondary-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-4 sm:mb-6">
              Why Our Patients Love Us! 💕
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed px-4">
              We provide comprehensive dental care for patients of all ages, making every visit comfortable and stress-free
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center group">
              <div className="relative">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl sm:text-5xl shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden" style={{background: 'linear-gradient(to bottom right, #9ADFDB, #41C595)'}}>
                  <div className="absolute inset-0 rounded-full animate-pulse" style={{background: 'linear-gradient(to bottom right, rgba(154, 223, 219, 0.3), rgba(65, 197, 149, 0.3))'}}></div>
                  <span className="relative z-10">👨‍⚕️</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" style={{background: 'linear-gradient(to right, #41C595, #53B3B6)'}}></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-playfair font-bold mb-4 text-gray-800 transition-colors duration-300" onMouseEnter={(e) => e.currentTarget.style.color = '#41C595'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Expert Dental Care</h3>
              <p className="text-sm sm:text-base text-gray-600 font-inter leading-relaxed">
                Our experienced dental professionals provide gentle, comprehensive care for patients of all ages, from children to seniors
              </p>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl sm:text-5xl shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden" style={{background: 'linear-gradient(to bottom right, #F1AFC4, #FF77A3)'}}>
                  <div className="absolute inset-0 rounded-full animate-pulse" style={{background: 'linear-gradient(to bottom right, rgba(241, 175, 196, 0.3), rgba(255, 119, 163, 0.3))'}}></div>
                  <span className="relative z-10">🏥</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" style={{background: 'linear-gradient(to right, #FF77A3, #ECC1CA)'}}></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-playfair font-bold mb-4 text-gray-800 transition-colors duration-300" onMouseEnter={(e) => e.currentTarget.style.color = '#FF77A3'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Modern & Comfortable</h3>
              <p className="text-sm sm:text-base text-gray-600 font-inter leading-relaxed">
                State-of-the-art equipment and a relaxing environment ensure your comfort throughout every procedure
              </p>
            </div>

            <div className="text-center group sm:col-span-2 lg:col-span-1">
              <div className="relative">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl sm:text-5xl shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden" style={{background: 'linear-gradient(to bottom right, #ECC1CA, #F1AFC4)'}}>
                  <div className="absolute inset-0 rounded-full animate-pulse" style={{background: 'linear-gradient(to bottom right, rgba(236, 193, 202, 0.3), rgba(241, 175, 196, 0.3))'}}></div>
                  <span className="relative z-10">👨‍👩‍👧‍👦</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" style={{background: 'linear-gradient(to right, #ECC1CA, #FF77A3)'}}></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-playfair font-bold mb-4 text-gray-800 transition-colors duration-300" onMouseEnter={(e) => e.currentTarget.style.color = '#ECC1CA'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Comprehensive Services</h3>
              <p className="text-sm sm:text-base text-gray-600 font-inter leading-relaxed">
                From routine cleanings to advanced procedures, we offer complete dental care including pediatric, cosmetic, and restorative services
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get in touch with us today. We&apos;re here to answer your questions and help you schedule your visit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">2nd Floor, EB Town Center<br />Brgy. Graceville, San Jose del Monte<br />Philippines</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone Number</h4>
                    <a
                      href="tel:+639486867966"
                      className="text-primary-600 hover:text-primary-700 transition-colors cursor-pointer font-medium"
                    >
                      09486867966
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-secondary-200 rounded-full flex items-center justify-center mr-4 mt-1">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">drcanaresprice@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">f</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Facebook</h4>
                    <a
                      href="https://www.facebook.com/canaresdentalclinic/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-700 transition-colors cursor-pointer"
                    >
                      @canaresdentalclinic
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    🕒
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Clinic Hours</h4>
                    <div className="text-gray-600">
                      <p>Daily: 9:00 AM - 5:00 PM</p>
                      <p>Open 7 days a week!</p>
                      <p>Call ahead to schedule</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300" style={{background: 'linear-gradient(to bottom right, rgba(241, 175, 196, 0.2), rgba(255, 119, 163, 0.2))'}}>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <span>🚨</span>
                  <span>Emergency Care</span>
                </h4>
                <p className="text-gray-600">
                  For dental emergencies, please call us at
                  <span className="font-semibold text-primary-600"> 09486867966</span>
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1" style={{background: 'linear-gradient(to bottom right, white, rgba(154, 223, 219, 0.15))'}}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 text-base"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 text-base"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 text-base"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 text-base"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-400 text-white py-4 min-h-[44px] rounded-lg font-semibold hover:bg-primary-500 transition-colors text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Popup */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300 scale-100 animate-in">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl shadow-lg">
                ✅
              </div>

              <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-4">
                Appointment Request Sent!
              </h3>

              <p className="text-gray-600 font-inter leading-relaxed mb-6">
                Thank you for choosing HappyTeeth! We&apos;ve received your appointment request and will send you a confirmation via text message within 24 hours.
              </p>

              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-4 mb-6 border border-primary-200">
                <div className="flex items-center justify-center space-x-2 text-primary-600">
                  <span className="text-lg">📱</span>
                  <span className="font-medium">SMS confirmation coming soon!</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Please keep your phone handy for our confirmation message.
                </p>
              </div>

              <button
                onClick={closeConfirmation}
                className="w-full bg-gradient-to-r from-primary-400 to-primary-500 text-white py-3 px-6 rounded-full font-inter font-semibold hover:from-primary-500 hover:to-primary-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}