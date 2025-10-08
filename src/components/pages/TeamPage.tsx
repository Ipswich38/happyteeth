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
      icon: '👩‍⚕️',
      image: '/Team/DraClency.png'
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
      icon: '👩‍⚕️',
      image: '/Team/DraFevi.png'
    },
    {
      name: 'DR. JONATHAN PINEDA',
      title: 'TMJ Specialist',
      description: 'If you experience jaw pain, clicking sounds, or discomfort while chewing, Dr. Jonathan is here to help! As a TMJ Specialist, he focuses on diagnosing and treating temporomandibular joint (TMJ) disorders, helping patients find relief from pain and restore proper jaw function. He provides personalized treatment plans to improve jaw alignment, reduce discomfort, and enhance overall oral health.',
      icon: '👨‍⚕️',
      image: '/Team/Dr_Jonathan.png'
    },
    {
      name: 'DR. FELIPE SUPILANA',
      title: 'Dental Implant Specialist',
      description: 'Looking to restore your smile with dental implants? Dr. Felipe brings specialized expertise with certifications in the Straumann and Bicon Dental Implant Systems. With advanced training in implant dentistry, he provides patients with cutting-edge treatment options and personalized care to restore missing teeth with precision and lasting results.',
      icon: '👨‍⚕️',
      image: '/Team/Dr_Felipe.png'
    },
    {
      name: 'DRA. SHIRLEY BAYOG',
      title: 'Cosmetic Dentistry',
      description: 'Dreaming of a brighter, more confident smile? Dr. Shirley, our Cosmetic/Aesthetic Dentist, specializes in creating natural, beautiful smiles through teeth whitening, veneers, crowns, and full smile makeovers. With her artistry and advanced techniques, she helps patients leave the clinic not just with better teeth—but with greater confidence.',
      icon: '👩‍⚕️',
      image: '/Team/DraShirley.png'
    }
  ];

  const supportTeam = [
    {
      name: 'MS. JEZEL ROCHE',
      title: 'Front-Desk Staff',
      description: 'The first smile you see when you walk into our clinic belongs to Jezel! With a warm and welcoming approach, she is here to assist with appointments, answer your questions, and make sure you feel at home the moment you arrive. Whether it\'s scheduling your visit or providing helpful information, she is dedicated to making your experience smooth and stress-free.',
      icon: '💼',
      image: '/Team/support/10.png'
    },
    {
      name: 'MS. MHAY BLANQUEZA',
      title: 'Dental Assistant, Treatment Coordinator',
      description: 'From preparing instruments to comforting patients, Mhay ensures every visit is smooth and stress-free. Whether assisting with procedures or providing helpful oral care tips, she is always ready to support both our dentists and patients with a gentle touch and a warm smile. Her dedication helps create a comfortable and reassuring experience for everyone who walks through our doors.',
      icon: '🦷',
      image: '/Team/support/11.png'
    },
    {
      name: 'MS. EDNA TATIMO',
      title: 'Lead Dental Assistant',
      description: 'Always ready to assist our dentists, Edz plays a key role in making sure every procedure runs smoothly. With her caring and attentive approach, she ensures that patients feel comfortable before, during, and after treatments. Her dedication and gentle touch help create a positive and stress-free dental experience for everyone.',
      icon: '🩺',
      image: '/Team/support/9.png'
    },
    {
      name: 'MICH BLASCO',
      title: 'Admin, Editor',
      description: 'From managing schedules and coordinating patient care to handling paperwork and keeping our Facebook page updated, she ensures everything runs smoothly. With professionalism and attention to detail, Mich helps create a stress-free experience for both our team and our valued patients.',
      icon: '📋',
      image: '/Team/support/12.png'
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
              <div key={index} className="group bg-gradient-to-br from-slate-50 to-blue-50/50 hover:from-blue-100 hover:to-indigo-100 p-6 sm:p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                  {doctor.image ? (
                    <div className="relative w-48 h-48 rounded-3xl overflow-hidden flex-shrink-0 shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  ) : (
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-indigo-400 rounded-full flex items-center justify-center text-3xl shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                      {doctor.icon}
                    </div>
                  )}

                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gray-800 group-hover:text-blue-800 mb-2 transition-colors duration-300">{doctor.name}</h3>
                    <p className="text-blue-600 group-hover:text-indigo-700 font-inter font-semibold mb-4 transition-colors duration-300">{doctor.title}</p>
                    <p className="text-gray-600 group-hover:text-gray-700 font-inter leading-relaxed transition-colors duration-300">{doctor.description}</p>
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
              <div key={index} className="group bg-gradient-to-br from-emerald-50 to-green-50/50 hover:from-emerald-100 hover:to-teal-100 p-6 sm:p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                  {member.image ? (
                    <div className="relative w-48 h-48 rounded-3xl overflow-hidden flex-shrink-0 shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  ) : (
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-200 to-teal-400 rounded-full flex items-center justify-center text-3xl shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                      {member.icon}
                    </div>
                  )}

                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gray-800 group-hover:text-emerald-800 mb-2 transition-colors duration-300">{member.name}</h3>
                    <p className="text-emerald-600 group-hover:text-teal-700 font-inter font-semibold mb-4 transition-colors duration-300">{member.title}</p>
                    <p className="text-gray-600 group-hover:text-gray-700 font-inter leading-relaxed transition-colors duration-300">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Our Team Section */}
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8 rounded-3xl text-center shadow-xl">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-8">Why Our Team?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center hover:-translate-y-2 transition-all duration-500">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 via-violet-50 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto text-3xl shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 rotate-3 group-hover:rotate-6">
                  <span className="transform group-hover:scale-110 transition-transform duration-300">🎯</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-playfair font-bold text-gray-900 group-hover:text-purple-800 mb-3 transition-colors duration-300">Specialized Expertise</h3>
              <p className="text-gray-600 group-hover:text-gray-700 font-inter transition-colors duration-300">Each doctor brings specialized training and years of experience in their field</p>
            </div>

            <div className="group text-center hover:-translate-y-2 transition-all duration-500">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-100 via-rose-50 to-red-100 rounded-2xl flex items-center justify-center mx-auto text-3xl shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 -rotate-2 group-hover:-rotate-4">
                  <span className="transform group-hover:scale-110 transition-transform duration-300">💝</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-playfair font-bold text-gray-900 group-hover:text-pink-800 mb-3 transition-colors duration-300">Patient-Centered Care</h3>
              <p className="text-gray-600 group-hover:text-gray-700 font-inter transition-colors duration-300">Your comfort and satisfaction is our top priority in every treatment</p>
            </div>

            <div className="group text-center hover:-translate-y-2 transition-all duration-500">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 rounded-2xl flex items-center justify-center mx-auto text-3xl shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 rotate-1 group-hover:rotate-3">
                  <span className="transform group-hover:scale-110 transition-transform duration-300">⭐</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-playfair font-bold text-gray-900 group-hover:text-amber-800 mb-3 transition-colors duration-300">Comprehensive Services</h3>
              <p className="text-gray-600 group-hover:text-gray-700 font-inter transition-colors duration-300">From general dentistry to specialized procedures, we cover all your dental needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}