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
              <div className="w-48 h-64 rounded-xl overflow-hidden shadow-lg flex-shrink-0 border-4 border-primary-200 bg-white p-2">
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

        {/* What We Do Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">What Makes Us Different</h2>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 sm:p-12 rounded-3xl border-2 border-primary-200 shadow-lg mb-12">
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-gray-700 font-inter leading-relaxed">
                <strong>Are you unhappy with your smile—or disappointed with past dental treatments?</strong> You&apos;re not alone. Many people feel unsure or frustrated with their results.
              </p>

              <p className="text-lg text-gray-700 font-inter leading-relaxed">
                At Happy Teeth, we believe you deserve better. Here, you&apos;re not just a patient—<strong>you&apos;re family</strong>. We take time to understand your needs, lifestyle, and budget to create a personalized dental care plan just for you.
              </p>

              <p className="text-lg text-gray-700 font-inter leading-relaxed">
                From routine exams to advanced treatments, our clinic offers a full range of services including <strong>General Dentistry, Prosthodontics, Root Canal & TMJ Therapy, Oral Surgery, Cosmetic and Orthodontic care, Pediatric Dentistry, and Implants</strong>.
              </p>

              <p className="text-lg text-gray-700 font-inter leading-relaxed">
                Our mission is simple: to be your trusted, all-in-one family dental clinic in San Jose del Monte, Bulacan—delivering quality care that leaves you smiling with confidence.
              </p>

              <p className="text-lg text-gray-700 font-inter leading-relaxed">
                Our experienced dentists use the latest digital technology in a clean, calm, and welcoming environment, supported by our friendly and skilled dental assistants.
              </p>

              <p className="text-lg text-gray-700 font-inter leading-relaxed">
                We also accept major health cards like <strong>Maxicare, Medicard, and PhilCare</strong>—making great dental care even more accessible for you and your loved ones.
              </p>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-secondary-50 to-accent-50 p-8 rounded-3xl border-2 border-secondary-200 shadow-sm">
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 font-inter leading-relaxed mb-8">
              To be your trusted, all-in-one family dental clinic, delivering personalized, quality care that leaves you smiling with confidence. We treat every patient as family, taking time to understand your unique needs, lifestyle, and budget to create tailored dental solutions. Through comprehensive services, advanced technology, and a welcoming environment, we make exceptional dental care accessible and comfortable for you and your loved ones.
            </p>

            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">Our Vision</h3>
            <p className="text-gray-600 font-inter leading-relaxed">
              To be the premier family dental destination in San Jose del Monte, Bulacan, where every patient experiences the comfort and care of being treated like family. We envision a community where exceptional dental health is accessible to all, supported by comprehensive services, cutting-edge technology, and genuine relationships that last a lifetime.
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