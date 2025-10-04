interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <section className="bg-primary-muted py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-playfair font-semibold mb-8 text-text-primary leading-tight">
              Welcome to <span className="text-primary-text">HappyTeeth</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-text-secondary font-inter font-normal max-w-3xl mx-auto">
              Your smile is our priority – experience premium dental care in a serene, comfortable environment
            </p>
            <button
              onClick={() => onNavigate('Appointment')}
              className="bg-primary text-text-on-primary px-10 py-4 rounded-full font-inter font-medium text-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-semibold text-text-primary mb-6">
              Why Choose HappyTeeth?
            </h2>
            <p className="text-xl text-text-secondary font-inter font-light max-w-2xl mx-auto">
              We provide comprehensive dental care in a comfortable, modern environment designed for your well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-8 bg-card rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-primary-muted rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                🦷
              </div>
              <h3 className="text-2xl font-playfair font-medium mb-4 text-text-primary">Expert Care</h3>
              <p className="text-text-secondary font-inter leading-relaxed">
                Our experienced dentists provide top-quality care with personalized attention to every detail
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-primary-muted rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                🏥
              </div>
              <h3 className="text-2xl font-playfair font-medium mb-4 text-text-primary">Modern Facility</h3>
              <p className="text-text-secondary font-inter leading-relaxed">
                State-of-the-art equipment and a serene environment designed for your comfort and peace of mind
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-primary-muted rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                😊
              </div>
              <h3 className="text-2xl font-playfair font-medium mb-4 text-text-primary">Happy Patients</h3>
              <p className="text-text-secondary font-inter leading-relaxed">
                Thousands of satisfied patients trust us with their smiles and continue to recommend our services
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}