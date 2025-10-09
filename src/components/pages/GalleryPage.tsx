export function GalleryPage() {
  const featuredVideos = [
    {
      title: 'Airflow Dental Cleaning',
      description: 'Experience our advanced Airflow dental cleaning technology that provides gentle, effective, and comfortable teeth cleaning for a brighter, healthier smile.',
      category: 'Technology',
      videoUrl: '/Gallery/airflow-dental-cleaning.mp4'
    },
    {
      title: 'Happy Teeth at Florida Dental Association Convention 2025',
      description: 'Our team representing HappyTeeth at the Florida Dental Association Convention, showcasing our commitment to professional excellence and industry leadership.',
      category: 'Events',
      videoUrl: '/Gallery/FLORIDA DENTAL ASSOCIATION CONVENTION 2025 (1).mp4'
    }
  ];

  const galleryImages = [
    {
      title: 'Root Canal Treatment New Technology',
      category: 'Technology',
      imageUrl: '/Gallery/newtechnologyrootcanalgadget.png',
      description: 'Advanced root canal technology for precise and comfortable treatment'
    },
    {
      title: 'Digital X-Ray Machine',
      category: 'Technology',
      imageUrl: '/Gallery/digitalxray.jpeg',
      description: 'Comprehensive digital X-ray services: Panoramic, Cephalometric, TMJ, and Periapical imaging'
    },
    {
      title: 'Treatment Room',
      category: 'Facility',
      imageUrl: '/Gallery/treatmentroom.png',
      description: 'Modern, comfortable treatment rooms equipped with state-of-the-art dental technology'
    },
    {
      title: 'Reception Area',
      category: 'Facility',
      imageUrl: '/Gallery/happyteethreception.png',
      description: 'Welcoming reception area designed for patient comfort and relaxation'
    },
    {
      title: 'Dental Implant',
      category: 'Results',
      imageUrl: '/Gallery/dental implant.jpg',
      description: 'Small titanium posts surgically placed into the jawbone to act as artificial tooth roots. Looks, feels, and functions like natural teeth. Helps preserve jawbone and facial structure. No slipping or clicking like dentures. A long-term investment in your oral health.'
    },
    {
      title: 'Happy Dental Team',
      category: 'Team',
      imageUrl: '/herosection/1.jpg',
      description: 'Our cheerful and professional dental team ready to provide you with the best dental care experience'
    },
    {
      title: 'Dental Team Excellence',
      category: 'Team',
      imageUrl: '/herosection/2.jpg',
      description: 'Our experienced dental professionals committed to delivering exceptional patient care'
    },
    {
      title: 'Clinical Excellence',
      category: 'Team',
      imageUrl: '/herosection/3.jpg',
      description: 'Our skilled dental specialists working together to ensure optimal patient outcomes'
    },
    {
      title: 'Professional Dental Care',
      category: 'Team',
      imageUrl: '/herosection/4.jpg',
      description: 'Our dedicated team of dental professionals providing comprehensive oral healthcare services'
    },
    {
      title: 'Caring Dental Staff',
      category: 'Team',
      imageUrl: '/herosection/5.jpg',
      description: 'Our compassionate dental team ensuring every patient feels comfortable and well-cared for'
    },
    {
      title: 'Dental Team Unity',
      category: 'Team',
      imageUrl: '/herosection/7.jpg',
      description: 'Our collaborative dental team working together to provide the highest quality dental treatments'
    }
  ];


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
              <div key={index} className="group rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2" style={{background: 'linear-gradient(to bottom right, rgba(154, 223, 219, 0.2), rgba(83, 179, 182, 0.2))'}} onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(154, 223, 219, 0.4), rgba(83, 179, 182, 0.4))'} onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(154, 223, 219, 0.2), rgba(83, 179, 182, 0.2))'}>
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
                      <span className="inline-block px-2 py-1 text-xs rounded-full font-medium flex-shrink-0 text-white" style={{backgroundColor: '#9ADFDB'}}>
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

        {/* Photo Gallery Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">Photo Gallery</h2>
            <p className="text-lg text-gray-600">Explore our modern facility, advanced technology, and professional team</p>
          </div>
        </div>

        {/* Gallery Collage Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group break-inside-avoid mb-6 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                index % 4 === 0 ? 'lg:row-span-2' : ''
              }`}
            >
              <div className="relative">
                {image.imageUrl ? (
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-auto object-cover transition-all duration-500 group-hover:brightness-30 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-64 flex items-center justify-center transition-all duration-500 group-hover:brightness-30" style={{background: 'linear-gradient(to bottom right, #9ADFDB, #53B3B6)'}}>
                    <div className="text-center text-gray-600">
                      <div className="text-4xl mb-2">📸</div>
                      <p className="text-sm">{image.title}</p>
                    </div>
                  </div>
                )}


                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6 z-10">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-2 font-playfair">{image.title}</h3>
                    {image.description && (
                      <p className="text-sm text-gray-200 leading-relaxed opacity-90">
                        {image.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Special handling for Digital X-Ray Machine */}
                {image.title === 'Digital X-Ray Machine' && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6 z-10">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl font-bold mb-3 font-playfair">{image.title}</h3>
                      <div className="space-y-1">
                        <p className="text-sm font-medium" style={{color: '#9ADFDB'}}>Our DIGITAL XRAY services:</p>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className="px-2 py-1 rounded-full text-white" style={{backgroundColor: '#FF77A3'}}>Panoramic</span>
                          <span className="px-2 py-1 rounded-full text-white" style={{backgroundColor: '#F1AFC4'}}>Cephalometric</span>
                          <span className="px-2 py-1 rounded-full text-white" style={{backgroundColor: '#ECC1CA'}}>TMJ</span>
                          <span className="px-2 py-1 rounded-full text-white" style={{backgroundColor: '#41C595'}}>Periapical</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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