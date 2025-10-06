export function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At HappyTeeth, we&apos;re committed to providing exceptional dental care
            in a warm, welcoming environment that puts our patients at ease.
          </p>
        </div>

        {/* Founder Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 sm:p-12 rounded-3xl border-2 border-primary-200 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full flex items-center justify-center text-5xl shadow-lg">
                👩‍⚕️
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-playfair font-semibold text-gray-800 mb-2">Meet Our Founder</h2>
                <h3 className="text-2xl font-playfair font-medium text-primary-600 mb-4">DRA. CAMILA CAÑARES-PRICE</h3>
                <p className="text-lg font-inter font-medium text-gray-700 mb-4">General Dentist, Owner & Founder</p>
                <p className="text-gray-600 font-inter leading-relaxed">
                  As the heart and leader of Happy Teeth, Dra Mai is dedicated to providing exceptional dental care to every patient. Her dental practice began in 1995, bringing nearly three decades of experience in general dentistry. She is passionate about helping patients achieve healthy, beautiful smiles through personalized treatments and gentle care. Her vision of creating a warm, welcoming dental practice has made HappyTeeth a trusted name in comprehensive dental care for patients of all ages.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 font-inter mb-4">
              Founded by Dr. Camila Cañares-Price, HappyTeeth has been serving the community with
              comprehensive dental care, building a reputation for excellence and compassionate treatment. We believe that
              everyone deserves a healthy, beautiful smile.
            </p>
            <p className="text-gray-600 font-inter mb-4">
              Our practice combines the latest dental technology with personalized
              care to ensure the best possible outcomes for our patients. Under Dr. Camila&apos;s leadership,
              we&apos;ve assembled a team of specialists dedicated to providing exceptional care.
            </p>
            <p className="text-gray-600 font-inter">
              We&apos;re proud to be your trusted dental care provider and look forward
              to helping you maintain optimal oral health for years to come.
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary-50 to-accent-50 p-8 rounded-3xl border-2 border-secondary-200 shadow-sm">
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 font-inter mb-6">
              To deliver comprehensive, personalized dental care for patients of all ages through a team of specialized professionals, ensuring every visit is comfortable, stress-free, and results in healthier, brighter smiles. We are committed to making quality dental care accessible while building lasting relationships with our patients and community.
            </p>

            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 font-inter mb-6">
              To be the leading dental practice that transforms lives through exceptional oral healthcare, where advanced treatments meet compassionate care, and where every patient feels valued, comfortable, and confident about their smile.
            </p>

            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Our Values</h3>
            <ul className="text-gray-600 font-inter space-y-2">
              <li>• <strong>Patient-Centered Care:</strong> Every treatment plan is tailored to individual needs</li>
              <li>• <strong>Professional Excellence:</strong> Specialized expertise across all dental disciplines</li>
              <li>• <strong>Comfort & Compassion:</strong> Creating stress-free, gentle dental experiences</li>
              <li>• <strong>Comprehensive Service:</strong> From pediatric to cosmetic to surgical care</li>
              <li>• <strong>Community Trust:</strong> Building lasting relationships through integrity and care</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}