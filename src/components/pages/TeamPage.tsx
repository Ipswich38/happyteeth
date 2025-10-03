export function TeamPage() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Lead Dentist',
      education: 'DDS, University of Dental Medicine',
      experience: '15+ years experience',
      specialties: ['General Dentistry', 'Cosmetic Dentistry']
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Orthodontist',
      education: 'DDS, MS Orthodontics',
      experience: '12+ years experience',
      specialties: ['Orthodontics', 'Invisalign Specialist']
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Pediatric Dentist',
      education: 'DDS, Pediatric Dentistry Certificate',
      experience: '8+ years experience',
      specialties: ['Pediatric Dentistry', 'Special Needs Care']
    },
    {
      name: 'Lisa Thompson',
      title: 'Dental Hygienist',
      education: 'RDH, Certified Dental Hygienist',
      experience: '10+ years experience',
      specialties: ['Preventive Care', 'Patient Education']
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our experienced and caring team is dedicated to providing you with the highest quality dental care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">👨‍⚕️</span>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.title}</p>

                <div className="text-left space-y-2">
                  <p className="text-gray-600">
                    <strong>Education:</strong> {member.education}
                  </p>
                  <p className="text-gray-600">
                    <strong>Experience:</strong> {member.experience}
                  </p>
                  <div className="text-gray-600">
                    <strong>Specialties:</strong>
                    <ul className="list-disc list-inside mt-1">
                      {member.specialties.map((specialty, idx) => (
                        <li key={idx}>{specialty}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Team?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Experienced</h3>
              <p className="text-gray-600">Years of combined experience in dental care</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Caring</h3>
              <p className="text-gray-600">Patient comfort and satisfaction is our priority</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
              <p className="text-gray-600">Committed to continuing education and excellence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}