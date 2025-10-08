export function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">About HappyTeeth</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-inter leading-relaxed">
            A comprehensive dental practice founded on nearly three decades of expertise,
            dedicated to creating healthy, beautiful smiles for patients of all ages in a warm, welcoming environment.
          </p>
        </div>

        {/* Founder Section */}
        <div className="mb-20">
          <div className="p-8 sm:p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500" style={{background: 'linear-gradient(to bottom right, rgba(154, 223, 219, 0.2), rgba(83, 179, 182, 0.2))'}}>
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="w-48 h-64 rounded-xl overflow-hidden shadow-2xl flex-shrink-0 bg-white p-2 hover:scale-105 transition-transform duration-300">
                <img
                  src="/DraCamilaPrice_founder.jpg"
                  alt="Dra. Camila Cañares-Price, Founder"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-playfair font-semibold text-gray-800 mb-3">Meet Our Founder</h2>
                <h3 className="text-2xl font-playfair font-medium mb-2" style={{color: '#FF77A3'}}>DRA. CAMILA CAÑARES-PRICE</h3>
                <p className="text-lg font-inter font-medium text-gray-700 mb-6">General Dentist, Owner & Founder</p>

                <div className="space-y-4">
                  <p className="text-gray-600 font-inter leading-relaxed">
                    <strong>Since 1995,</strong> Dra Mai has been dedicated to providing exceptional dental care, bringing nearly three decades of experience in general dentistry to every patient interaction.
                  </p>
                  <p className="text-gray-600 font-inter leading-relaxed">
                    As the heart and visionary behind HappyTeeth, she is passionate about helping patients achieve healthy, beautiful smiles through personalized treatments and gentle care. Her commitment to creating a warm, welcoming dental practice has established HappyTeeth as a trusted name in comprehensive dental care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500" style={{background: 'linear-gradient(to bottom right, rgba(241, 175, 196, 0.2), rgba(236, 193, 202, 0.2))'}}>
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 font-inter leading-relaxed mb-8">
              To be your trusted, all-in-one family dental clinic, delivering personalized, quality care that leaves you smiling with confidence. We treat every patient as family, taking time to understand your unique needs, lifestyle, and budget to create tailored dental solutions. Through comprehensive services, advanced technology, and a welcoming environment, we make exceptional dental care accessible and comfortable for you and your loved ones.
            </p>

            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">Our Vision</h3>
            <p className="text-gray-600 font-inter leading-relaxed">
              To be the premier family dental destination in San Jose del Monte, Bulacan, where every patient experiences the comfort and care of being treated like family. We envision a community where exceptional dental health is accessible to all, supported by comprehensive services, cutting-edge technology, and genuine relationships that last a lifetime.
            </p>
          </div>

          <div className="p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500" style={{background: 'linear-gradient(to bottom right, rgba(241, 175, 196, 0.2), rgba(236, 193, 202, 0.2))'}}>
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">Our Core Values</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1" style={{backgroundColor: '#FF77A3'}}>1</div>
                <div>
                  <p className="font-semibold text-gray-800">Patient-Centered Care</p>
                  <p className="text-sm text-gray-600">Every treatment plan is tailored to individual needs</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1" style={{backgroundColor: '#41C595'}}>2</div>
                <div>
                  <p className="font-semibold text-gray-800">Professional Excellence</p>
                  <p className="text-sm text-gray-600">Specialized expertise across all dental disciplines</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1" style={{backgroundColor: '#9ADFDB'}}>3</div>
                <div>
                  <p className="font-semibold text-gray-800">Comfort & Compassion</p>
                  <p className="text-sm text-gray-600">Creating stress-free, gentle dental experiences</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1" style={{backgroundColor: '#F1AFC4'}}>4</div>
                <div>
                  <p className="font-semibold text-gray-800">Comprehensive Service</p>
                  <p className="text-sm text-gray-600">From pediatric to cosmetic to surgical care</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1" style={{backgroundColor: '#53B3B6'}}>5</div>
                <div>
                  <p className="font-semibold text-gray-800">Community Trust</p>
                  <p className="text-sm text-gray-600">Building lasting relationships through integrity</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}