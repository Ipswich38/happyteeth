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
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 sm:p-12 rounded-3xl border-2 border-primary-200 shadow-lg">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="w-40 h-40 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full flex items-center justify-center text-6xl shadow-lg flex-shrink-0">
                👩‍⚕️
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

        {/* What We Do Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
              We&apos;ve assembled a team of specialized professionals to provide comprehensive care under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-primary-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                👨‍⚕️
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-3 text-center">Expert Specialists</h3>
              <p className="text-gray-600 font-inter text-center leading-relaxed">
                Our team includes specialists in oral surgery, endodontics, orthodontics, pediatric dentistry, TMJ treatment, and cosmetic dentistry.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-secondary-300 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-300 to-secondary-500 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                👨‍👩‍👧‍👦
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-3 text-center">All Ages Welcome</h3>
              <p className="text-gray-600 font-inter text-center leading-relaxed">
                From pediatric care that makes children comfortable to comprehensive treatments for adults and seniors - we serve the whole family.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-accent-400 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                💝
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-3 text-center">Comfort-Focused</h3>
              <p className="text-gray-600 font-inter text-center leading-relaxed">
                Every visit is designed to be stress-free and comfortable, with a gentle approach that puts even the most anxious patients at ease.
              </p>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-secondary-50 to-accent-50 p-8 rounded-3xl border-2 border-secondary-200 shadow-sm">
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 font-inter leading-relaxed mb-8">
              To deliver comprehensive, personalized dental care for patients of all ages through a team of specialized professionals, ensuring every visit is comfortable, stress-free, and results in healthier, brighter smiles.
            </p>

            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">Our Vision</h3>
            <p className="text-gray-600 font-inter leading-relaxed">
              To be the leading dental practice that transforms lives through exceptional oral healthcare, where advanced treatments meet compassionate care, and where every patient feels valued and confident about their smile.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-3xl border-2 border-primary-200 shadow-sm">
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
      </div>
    </div>
  );
}