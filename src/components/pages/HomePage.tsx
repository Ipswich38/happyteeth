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

      <section className="py-16 sm:py-20 bg-white">
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
            <div className="text-center p-6 sm:p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-primary-200">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl shadow-md">
                👨‍⚕️
              </div>
              <h3 className="text-xl sm:text-2xl font-playfair font-medium mb-3 sm:mb-4 text-gray-800">Expert Dental Care</h3>
              <p className="text-sm sm:text-base text-gray-600 font-inter leading-relaxed">
                Our experienced dental professionals provide gentle, comprehensive care for patients of all ages, from children to seniors
              </p>
            </div>

            <div className="text-center p-6 sm:p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-primary-200">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl shadow-md">
                🏥
              </div>
              <h3 className="text-xl sm:text-2xl font-playfair font-medium mb-3 sm:mb-4 text-gray-800">Modern & Comfortable</h3>
              <p className="text-sm sm:text-base text-gray-600 font-inter leading-relaxed">
                State-of-the-art equipment and a relaxing environment ensure your comfort throughout every procedure
              </p>
            </div>

            <div className="text-center p-6 sm:p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-primary-200 sm:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl shadow-md">
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
      <section id="contact-section" className="py-16 sm:py-20 bg-gray-50">
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
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">123 Dental Street<br />City, State 12345</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone Numbers</h4>
                    <p className="text-gray-600">0948-686-7966</p>
                    <p className="text-gray-600">0970-107-2952</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@happyteeth.com</p>
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

              <div className="mt-8 p-6 bg-primary-50 rounded-3xl border border-primary-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <span>🚨</span>
                  <span>Emergency Care</span>
                </h4>
                <p className="text-gray-600">
                  For dental emergencies, please call us at
                  <span className="font-semibold text-primary-600"> 0948-686-7966</span> or
                  <span className="font-semibold text-primary-600"> 0970-107-2952</span>
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}