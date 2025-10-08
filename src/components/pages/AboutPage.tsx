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
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 sm:p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
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
                <h3 className="text-2xl font-playfair font-medium text-primary-600 mb-2">DRA. CAMILA CAÑARES-PRICE</h3>
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
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 font-inter leading-relaxed mb-8">
              To be your trusted, all-in-one family dental clinic, delivering personalized, quality care that leaves you smiling with confidence. We treat every patient as family, taking time to understand your unique needs, lifestyle, and budget to create tailored dental solutions. Through comprehensive services, advanced technology, and a welcoming environment, we make exceptional dental care accessible and comfortable for you and your loved ones.
            </p>

            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">Our Vision</h3>
            <p className="text-gray-600 font-inter leading-relaxed">
              To be the premier family dental destination in San Jose del Monte, Bulacan, where every patient experiences the comfort and care of being treated like family. We envision a community where exceptional dental health is accessible to all, supported by comprehensive services, cutting-edge technology, and genuine relationships that last a lifetime.
            </p>
          </div>

          <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">Our Core Values</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-400 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">1</div>
                <div>
                  <p className="font-semibold text-gray-800">Patient-Centered Care</p>
                  <p className="text-sm text-gray-600">Every treatment plan is tailored to individual needs</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary-400 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">2</div>
                <div>
                  <p className="font-semibold text-gray-800">Professional Excellence</p>
                  <p className="text-sm text-gray-600">Specialized expertise across all dental disciplines</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent-400 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">3</div>
                <div>
                  <p className="font-semibold text-gray-800">Comfort & Compassion</p>
                  <p className="text-sm text-gray-600">Creating stress-free, gentle dental experiences</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">4</div>
                <div>
                  <p className="font-semibold text-gray-800">Comprehensive Service</p>
                  <p className="text-sm text-gray-600">From pediatric to cosmetic to surgical care</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">5</div>
                <div>
                  <p className="font-semibold text-gray-800">Community Trust</p>
                  <p className="text-sm text-gray-600">Building lasting relationships through integrity</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
              You&apos;re not just a patient—you&apos;re family. We deliver personalized care that leaves you smiling with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center group hover:-translate-y-2 transition-all duration-500">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-100 via-pink-50 to-red-100 rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 rotate-3 group-hover:rotate-6">
                  <span className="transform group-hover:scale-110 transition-transform duration-300">👨‍👩‍👧‍👦</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-playfair font-bold text-gray-800 mb-4 group-hover:text-rose-700 transition-colors duration-300">Family-First Approach</h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                Personalized care plans tailored to your needs, lifestyle, and budget—treating every patient like family.
              </p>
            </div>

            <div className="text-center group hover:-translate-y-2 transition-all duration-500">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 -rotate-3 group-hover:-rotate-6">
                  <span className="transform group-hover:scale-110 transition-transform duration-300">🏥</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-playfair font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">Complete Dental Care</h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                All services under one roof—from general dentistry to specialized treatments including implants, orthodontics, and oral surgery.
              </p>
            </div>

            <div className="text-center group hover:-translate-y-2 transition-all duration-500">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 rotate-2 group-hover:rotate-4">
                  <span className="transform group-hover:scale-110 transition-transform duration-300">💳</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-playfair font-bold text-gray-800 mb-4 group-hover:text-emerald-700 transition-colors duration-300">Health Card Friendly</h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                Accept Maxicare, Medicard, and PhilCare—making quality dental care accessible for your family.
              </p>
            </div>

            <div className="text-center group hover:-translate-y-2 transition-all duration-500">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100 rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 -rotate-2 group-hover:-rotate-4">
                  <span className="transform group-hover:scale-110 transition-transform duration-300">💻</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-playfair font-bold text-gray-800 mb-4 group-hover:text-violet-700 transition-colors duration-300">Latest Technology</h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                Advanced digital technology in a clean, calm environment with experienced dentists and skilled assistants.
              </p>
            </div>

            <div className="text-center group hover:-translate-y-2 transition-all duration-500">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 rotate-1 group-hover:rotate-3">
                  <span className="transform group-hover:scale-110 transition-transform duration-300">📍</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-playfair font-bold text-gray-800 mb-4 group-hover:text-amber-700 transition-colors duration-300">Local Trust</h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                Your trusted family dental clinic in San Jose del Monte, Bulacan—serving the community with quality care.
              </p>
            </div>

            <div className="text-center group hover:-translate-y-2 transition-all duration-500">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-lime-100 via-green-50 to-emerald-100 rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 -rotate-1 group-hover:-rotate-3">
                  <span className="transform group-hover:scale-110 transition-transform duration-300">😊</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-lime-400 to-green-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-playfair font-bold text-gray-800 mb-4 group-hover:text-lime-700 transition-colors duration-300">Comfort Focused</h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                Welcoming environment designed to help patients feel comfortable and confident about their dental care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}