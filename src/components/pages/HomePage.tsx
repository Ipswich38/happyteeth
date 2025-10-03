interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to HappyTeeth
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Your smile is our priority
            </p>
            <button
              onClick={() => onNavigate('Appointment')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose HappyTeeth?
            </h2>
            <p className="text-lg text-gray-600">
              We provide comprehensive dental care in a comfortable environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🦷
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
              <p className="text-gray-600">
                Our experienced dentists provide top-quality care
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🏥
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Facility</h3>
              <p className="text-gray-600">
                State-of-the-art equipment and comfortable environment
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                😊
              </div>
              <h3 className="text-xl font-semibold mb-2">Happy Patients</h3>
              <p className="text-gray-600">
                Thousands of satisfied patients trust us with their smiles
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}