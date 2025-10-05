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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, HappyTeeth has been serving the community with
              comprehensive dental care for over a decade. We believe that
              everyone deserves a healthy, beautiful smile.
            </p>
            <p className="text-gray-600 mb-4">
              Our practice combines the latest dental technology with personalized
              care to ensure the best possible outcomes for our patients.
            </p>
            <p className="text-gray-600">
              We&apos;re proud to be your trusted dental care provider and look forward
              to helping you maintain optimal oral health for years to come.
            </p>
          </div>

          <div className="bg-cyan-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To provide high-quality, compassionate dental care that helps our
              patients achieve and maintain optimal oral health while creating
              positive, comfortable experiences.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Excellence in patient care</li>
              <li>• Commitment to continuing education</li>
              <li>• Integrity in all our interactions</li>
              <li>• Compassion and understanding</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}