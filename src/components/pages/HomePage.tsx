import { useState } from 'react';

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
    'Emergency Dental Care'
  ];
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        >
          <source src="/happyteethbackground.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 w-full">
          <div className="flex justify-start items-end min-h-screen px-4 sm:px-6 lg:px-8 pb-20">
            {/* Content positioned bottom-left */}
            <div className="max-w-md lg:max-w-lg">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-semibold mb-4 text-white drop-shadow-lg leading-tight">
                Welcome to <span className="text-primary-300">HappyTeeth</span>
              </h1>

              <h2 className="text-2xl sm:text-3xl font-inter font-light mb-8 text-white drop-shadow-md">
                Where Smiles Shine Bright!
              </h2>

              <button
                onClick={() => onNavigate('Appointment')}
                className="bg-gradient-to-r from-primary-400 to-primary-500 text-white px-8 py-4 rounded-full font-inter font-medium text-lg hover:from-primary-500 hover:to-primary-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>📅</span>
                <span>Schedule a Visit</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Appointment Form Section */}
      <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-primary-200/50 p-6 sm:p-8 lg:p-10 hover:shadow-3xl transition-all duration-500">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-playfair font-semibold text-gray-800 mb-3">
                Book Your Appointment 📅
              </h3>
              <p className="text-gray-600 font-inter max-w-2xl mx-auto">
                Schedule your visit today and take the first step towards a healthier, brighter smile!
              </p>
            </div>

            <form onSubmit={handleAppointmentSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="appointment-name" className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="appointment-name"
                    name="name"
                    required
                    value={appointmentForm.name}
                    onChange={handleAppointmentChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 bg-white/80"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="appointment-cellphone" className="block text-sm font-medium text-gray-700">
                    Cellphone Number *
                  </label>
                  <input
                    type="tel"
                    id="appointment-cellphone"
                    name="cellphone"
                    required
                    value={appointmentForm.cellphone}
                    onChange={handleAppointmentChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 bg-white/80"
                    placeholder="09XXXXXXXXX"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="appointment-service" className="block text-sm font-medium text-gray-700">
                    Service *
                  </label>
                  <select
                    id="appointment-service"
                    name="service"
                    required
                    value={appointmentForm.service}
                    onChange={handleAppointmentChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 bg-white/80"
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
                  <label htmlFor="appointment-date" className="block text-sm font-medium text-gray-700">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 bg-white/80"
                  />
                </div>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary-400 to-primary-500 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:from-primary-500 hover:to-primary-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 mx-auto"
                >
                  <span>🦷</span>
                  <span>Request Appointment</span>
                </button>
              </div>
            </form>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 sm:p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 border-primary-200 hover:border-primary-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                👨‍⚕️
              </div>
              <h3 className="text-xl sm:text-2xl font-playfair font-medium mb-3 sm:mb-4 text-gray-800">Expert Dental Care</h3>
              <p className="text-sm sm:text-base text-gray-600 font-inter leading-relaxed">
                Our experienced dental professionals provide gentle, comprehensive care for patients of all ages, from children to seniors
              </p>
            </div>

            <div className="text-center p-6 sm:p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 border-secondary-300 hover:border-secondary-400">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-secondary-300 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                🏥
              </div>
              <h3 className="text-xl sm:text-2xl font-playfair font-medium mb-3 sm:mb-4 text-gray-800">Modern & Comfortable</h3>
              <p className="text-sm sm:text-base text-gray-600 font-inter leading-relaxed">
                State-of-the-art equipment and a relaxing environment ensure your comfort throughout every procedure
              </p>
            </div>

            <div className="text-center p-6 sm:p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 border-accent-400 hover:border-accent-500 sm:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                👨‍👩‍👧‍👦
              </div>
              <h3 className="text-xl sm:text-2xl font-playfair font-medium mb-3 sm:mb-4 text-gray-800">Comprehensive Services</h3>
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
                    <p className="text-gray-600">09512168437</p>
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

              <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl border-2 border-primary-300 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <span>🚨</span>
                  <span>Emergency Care</span>
                </h4>
                <p className="text-gray-600">
                  For dental emergencies, please call us at
                  <span className="font-semibold text-primary-600"> 09512168437</span>
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-secondary-200 hover:shadow-xl transition-shadow duration-300">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-400 text-white py-3 rounded-lg font-semibold hover:bg-primary-500 transition-colors"
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
                Thank you for choosing HappyTeeth! We've received your appointment request and will send you a confirmation via text message within 24 hours.
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
                Got it! 👍
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}