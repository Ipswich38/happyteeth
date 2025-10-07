interface TeamMember {
  name: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export function TeamPage() {
  const doctors: TeamMember[] = [
    {
      name: 'DR. JEROME OH',
      title: 'Oral Surgeon, Endodontics Specialist',
      description: 'With specialized training in both surgical and non-surgical procedures, Dr. Oh is dedicated to providing expert care for complex dental needs. He expertly handles root canal treatments and other procedures to preserve and restore natural teeth. He also ensures every procedure is performed with precision and patient comfort in mind.',
      icon: '👨‍⚕️',
      image: '/Team/Dr_JeromeOh.png'
    },
    {
      name: 'DRA. CLENCY',
      title: 'Pediatric Dentist',
      description: 'Specializing in children\'s dental care, Dra. Clency is dedicated to creating a fun, friendly, and stress-free experience for our youngest patients. With a gentle touch and a warm approach, she helps kids feel comfortable while teaching them the importance of good oral health. Because every child deserves a bright and healthy smile!',
      icon: '👩‍⚕️'
    },
    {
      name: 'DRA. FATIMA PORCIUNCULA',
      title: 'Orthodontics',
      description: 'Specializing in straightening teeth and improving bite alignment, Dra. Fatima is passionate about helping patients achieve their dream smiles. She ensures every patient receives personalized care for a confident, healthy smile.',
      icon: '👩‍⚕️',
      image: '/Team/Dra_Fatima.png'
    },
    {
      name: 'DRA. FEVI STELLA TORRALBA-PIO',
      title: 'General Dentist',
      description: 'Dedicated to helping patients achieve and maintain healthy, beautiful smiles. Dr. Pio ensures that each treatment is tailored to meet the unique needs of every patient. She combines her gentle approach with years of experience, providing exceptional care that helps improve both the health and appearance of every patient\'s smile.',
      icon: '👩‍⚕️'
    },
    {
      name: 'DR. JONATHAN PINEDA',
      title: 'TMJ Specialist',
      description: 'If you experience jaw pain, clicking sounds, or discomfort while chewing, Dr. Jonathan is here to help! As a TMJ Specialist, he focuses on diagnosing and treating temporomandibular joint (TMJ) disorders, helping patients find relief from pain and restore proper jaw function. He provides personalized treatment plans to improve jaw alignment, reduce discomfort, and enhance overall oral health.',
      icon: '👨‍⚕️',
      image: '/Team/Dr_Jonathan.png'
    },
    {
      name: 'DRA. SHIRLEY BAYOG',
      title: 'Cosmetic Dentistry',
      description: 'Dreaming of a brighter, more confident smile? Dr. Shirley, our Cosmetic/Aesthetic Dentist, specializes in creating natural, beautiful smiles through teeth whitening, veneers, crowns, and full smile makeovers. With her artistry and advanced techniques, she helps patients leave the clinic not just with better teeth—but with greater confidence.',
      icon: '👩‍⚕️'
    }
  ];

  const supportTeam = [
    {
      name: 'MS. JEZEL ROCHE',
      title: 'Front-Desk Staff',
      description: 'The first smile you see when you walk into our clinic belongs to Jezel! With a warm and welcoming approach, she is here to assist with appointments, answer your questions, and make sure you feel at home the moment you arrive. Whether it\'s scheduling your visit or providing helpful information, she is dedicated to making your experience smooth and stress-free.',
      icon: '💼'
    },
    {
      name: 'MS. MHAY BLANQUEZA',
      title: 'Dental Assistant, Treatment Coordinator',
      description: 'From preparing instruments to comforting patients, Mhay ensures every visit is smooth and stress-free. Whether assisting with procedures or providing helpful oral care tips, she is always ready to support both our dentists and patients with a gentle touch and a warm smile. Her dedication helps create a comfortable and reassuring experience for everyone who walks through our doors.',
      icon: '🦷'
    },
    {
      name: 'MS. EDNA TATIMO',
      title: 'Lead Dental Assistant',
      description: 'Always ready to assist our dentists, Edz plays a key role in making sure every procedure runs smoothly. With her caring and attentive approach, she ensures that patients feel comfortable before, during, and after treatments. Her dedication and gentle touch help create a positive and stress-free dental experience for everyone.',
      icon: '🩺'
    },
    {
      name: 'MICH BLASCO',
      title: 'Admin, Editor',
      description: 'From managing schedules and coordinating patient care to handling paperwork and keeping our Facebook page updated, she ensures everything runs smoothly. With professionalism and attention to detail, Mich helps create a stress-free experience for both our team and our valued patients.',
      icon: '📋'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">Meet Our Team</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
            Our experienced and caring team is dedicated to providing you with the highest quality dental care
          </p>
        </div>

        {/* Doctors Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-playfair font-semibold text-gray-800 mb-8 text-center">Our Doctors</h2>
          <div className="space-y-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border-2 border-primary-200 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-4">
                  {doctor.image ? (
                    <div className="w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full flex items-center justify-center text-3xl shadow-lg">
                      {doctor.icon}
                    </div>
                  )}

                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-playfair font-semibold text-gray-800 mb-2">{doctor.name}</h3>
                    <p className="text-primary-600 font-inter font-medium mb-3">{doctor.title}</p>
                    <p className="text-gray-600 font-inter leading-relaxed">{doctor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-playfair font-semibold text-gray-800 mb-8 text-center">Our Support Team</h2>
          <div className="space-y-8">
            {supportTeam.map((member, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border-2 border-secondary-300 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary-300 to-secondary-500 rounded-full flex items-center justify-center text-3xl shadow-lg">
                    {member.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-playfair font-semibold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-secondary-600 font-inter font-medium mb-3">{member.title}</p>
                    <p className="text-gray-600 font-inter leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Our Team Section */}
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-3xl text-center border-2 border-primary-200">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">Why Our Team?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-2">Specialized Expertise</h3>
              <p className="text-gray-600 font-inter">Each doctor brings specialized training and years of experience in their field</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                💝
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-2">Patient-Centered Care</h3>
              <p className="text-gray-600 font-inter">Your comfort and satisfaction is our top priority in every treatment</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ⭐
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-2">Comprehensive Services</h3>
              <p className="text-gray-600 font-inter">From general dentistry to specialized procedures, we cover all your dental needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}