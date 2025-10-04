interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-white via-primary-50 to-primary-100 py-16 sm:py-20 lg:py-24 overflow-hidden min-h-[80vh] flex items-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 sm:opacity-30"
        >
          <source src="/happyteethbackround.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="flex space-x-1 sm:space-x-2">
                <span className="text-3xl sm:text-4xl animate-bounce" style={{animationDelay: '0s'}}>🌟</span>
                <span className="text-3xl sm:text-4xl animate-bounce" style={{animationDelay: '0.2s'}}>🦷</span>
                <span className="text-3xl sm:text-4xl animate-bounce" style={{animationDelay: '0.4s'}}>✨</span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold mb-4 sm:mb-6 text-gray-800 leading-tight px-2">
              Welcome to <span className="text-primary-500 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">HappyTeeth</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-inter font-light mb-6 sm:mb-8 text-primary-600 px-2">
              Where Little Smiles Shine Bright! ✨
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed px-4">
              Making dental visits fun and stress-free for children and families. Our gentle, caring approach helps kids develop healthy habits for life!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <button
                onClick={() => onNavigate('Appointment')}
                className="w-full sm:w-auto bg-gradient-to-r from-primary-400 to-primary-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-inter font-medium text-base sm:text-lg hover:from-primary-500 hover:to-primary-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>📅</span>
                <span>Schedule a Visit</span>
              </button>
              <button
                onClick={() => onNavigate('About')}
                className="w-full sm:w-auto bg-white text-primary-600 border-2 border-primary-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-inter font-medium text-base sm:text-lg hover:bg-primary-50 transition-all duration-300 hover:scale-105 shadow-md flex items-center justify-center space-x-2"
              >
                <span>👋</span>
                <span>Meet Our Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-4 sm:mb-6">
              Why Kids & Parents Love Us! 💕
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed px-4">
              We specialize in making dental visits fun, educational, and completely stress-free for the whole family
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 sm:p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-primary-200">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl shadow-md">
                👨‍⚕️
              </div>
              <h3 className="text-xl sm:text-2xl font-playfair font-medium mb-3 sm:mb-4 text-gray-800">Gentle Pediatric Experts</h3>
              <p className="text-sm sm:text-base text-gray-600 font-inter leading-relaxed">
                Our specialized pediatric dentists make every visit comfortable and fun, using gentle techniques perfect for little ones
              </p>
            </div>

            <div className="text-center p-6 sm:p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-primary-200">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl shadow-md">
                🎮
              </div>
              <h3 className="text-xl sm:text-2xl font-playfair font-medium mb-3 sm:mb-4 text-gray-800">Fun & Interactive</h3>
              <p className="text-sm sm:text-base text-gray-600 font-inter leading-relaxed">
                Games, cartoons, and interactive learning make dental care an adventure rather than a chore
              </p>
            </div>

            <div className="text-center p-6 sm:p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-primary-200 sm:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl shadow-md">
                👨‍👩‍👧‍👦
              </div>
              <h3 className="text-xl sm:text-2xl font-playfair font-medium mb-3 sm:mb-4 text-gray-800">Family-Centered Care</h3>
              <p className="text-sm sm:text-base text-gray-600 font-inter leading-relaxed">
                We welcome the whole family and help parents feel confident about their children&apos;s oral health journey
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-primary-100 to-primary-200 rounded-3xl p-6 sm:p-8 border border-primary-300 mx-4 sm:mx-0">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🎁</div>
              <h3 className="text-xl sm:text-2xl font-playfair font-semibold text-gray-800 mb-3 sm:mb-4">
                First Visit Special!
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-5 sm:mb-6 max-w-2xl mx-auto px-2">
                New patients receive a complimentary dental exam, fun goodie bag, and a special certificate for being brave!
              </p>
              <button
                onClick={() => onNavigate('Appointment')}
                className="w-full sm:w-auto bg-gradient-to-r from-primary-400 to-primary-500 text-white px-6 sm:px-8 py-3 rounded-full font-inter font-medium hover:from-primary-500 hover:to-primary-600 transition-all duration-300 hover:scale-105 shadow-md"
              >
                Claim Your Special! 🎉
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}