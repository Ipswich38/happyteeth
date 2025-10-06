export function GalleryPage() {
  const featuredVideos = [
    {
      title: 'Airflow Dental Cleaning',
      description: 'Experience our advanced Airflow dental cleaning technology that provides gentle, effective, and comfortable teeth cleaning for a brighter, healthier smile.',
      category: 'Technology',
      videoUrl: '/Gallery/airflow-dental-cleaning.mp4'
    },
    {
      title: 'Happy Teeth Dentists at National Association of Dental Traders, Inc., Philippines',
      description: 'Our team representing HappyTeeth at the National Association of Dental Traders, Inc. event, showcasing our commitment to professional excellence and industry leadership.',
      category: 'Events',
      videoUrl: '/Gallery/happy-teeth-nadti-2025.mp4'
    }
  ];

  const galleryImages = [
    { title: 'Root Canal Treatment New Technology', category: 'Technology', imageUrl: '/Gallery/newtechnologyrootcanalgadget.png' },
    {
      title: 'Digital X-Ray Machine',
      category: 'Technology',
      imageUrl: '/Gallery/digitalxray.jpeg',
      description: 'Our DIGITAL XRAY services:\n❗️Panoramic\n❗️Cephalometric\n❗️TMJ\n❗️Periapical'
    },
    { title: 'Modern Reception Area', category: 'Facility' },
    { title: 'Treatment Room 1', category: 'Facility' },
    { title: 'Advanced Equipment', category: 'Technology' },
    { title: 'Comfortable Waiting Area', category: 'Facility' },
    { title: 'Smile Transformation', category: 'Results' },
    { title: 'Teeth Whitening Results', category: 'Results' },
    { title: 'Orthodontic Success', category: 'Results' },
    { title: 'State-of-the-art X-ray', category: 'Technology' },
    { title: 'Sterilization Center', category: 'Safety' }
  ];

  const categories = ['All', 'Facility', 'Technology', 'Results', 'Safety', 'Events'];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a look at our modern facility, advanced technology, and the beautiful smiles we&apos;ve helped create
          </p>
        </div>

        {/* Featured Videos Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">Featured Videos</h2>
            <p className="text-lg text-gray-600">Discover our advanced dental technology and community involvement</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredVideos.map((video, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-6 border-2 border-primary-200 shadow-lg">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="aspect-video bg-black">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                    >
                      <source src={video.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-playfair font-bold text-gray-900 flex-1 pr-3">{video.title}</h3>
                      <span className="inline-block px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full font-medium flex-shrink-0">
                        {video.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gradient-to-br from-cyan-100 to-cyan-200 flex items-center justify-center">
                {image.imageUrl ? (
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center text-gray-600">
                    <div className="text-4xl mb-2">📸</div>
                    <p className="text-sm">{image.title}</p>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{image.title}</h3>
                {image.description && (
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 whitespace-pre-line">{image.description}</p>
                  </div>
                )}
                <span className="inline-block px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">See the Difference</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our modern facility and advanced technology help us deliver exceptional results
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🏥</div>
              <h3 className="font-semibold mb-1">Modern Facility</h3>
              <p className="text-gray-600 text-sm">State-of-the-art dental office</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔬</div>
              <h3 className="font-semibold mb-1">Advanced Technology</h3>
              <p className="text-gray-600 text-sm">Latest dental equipment and techniques</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">😊</div>
              <h3 className="font-semibold mb-1">Happy Results</h3>
              <p className="text-gray-600 text-sm">Beautiful, healthy smiles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}