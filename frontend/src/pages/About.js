import React from 'react';

const About = () => {
  const doctors = [
    {
      name: "Dr. Anupriya",
      specialty: "Chief Dental Surgeon",
      experience: "20+ years",
      image: "https://images.pexels.com/photos/5257326/pexels-photo-5257326.jpeg",
      description: "Specialized in women and children's dental care with extensive experience in advanced dental procedures."
    },
    {
      name: "Dr. Rajesh Kumar",
      specialty: "Orthodontist",
      experience: "15+ years",
      image: "https://images.pexels.com/photos/4270969/pexels-photo-4270969.jpeg",
      description: "Expert in teeth alignment and corrective treatments for all ages."
    },
    {
      name: "Dr. Priya Sharma",
      specialty: "Pediatric Dentist",
      experience: "12+ years",
      image: "https://images.pexels.com/photos/5257326/pexels-photo-5257326.jpeg",
      description: "Specializes in creating comfortable dental experiences for children."
    },
    {
      name: "Dr. Meera Patel",
      specialty: "Oral Surgeon",
      experience: "18+ years",
      image: "https://images.pexels.com/photos/4270969/pexels-photo-4270969.jpeg",
      description: "Advanced surgical procedures and complex dental treatments."
    },
    {
      name: "Dr. Sanjay Reddy",
      specialty: "Endodontist",
      experience: "14+ years",
      image: "https://images.pexels.com/photos/5257326/pexels-photo-5257326.jpeg",
      description: "Root canal specialist with expertise in pain-free treatments."
    },
    {
      name: "Dr. Kavita Singh",
      specialty: "Periodontist",
      experience: "16+ years",
      image: "https://images.pexels.com/photos/4270969/pexels-photo-4270969.jpeg",
      description: "Gum disease prevention and treatment specialist."
    },
    {
      name: "Dr. Arjun Nair",
      specialty: "Prosthodontist",
      experience: "13+ years",
      image: "https://images.pexels.com/photos/5257326/pexels-photo-5257326.jpeg",
      description: "Expert in dental restorations and cosmetic dentistry."
    },
    {
      name: "Dr. Deepika Joshi",
      specialty: "Oral Pathologist",
      experience: "11+ years",
      image: "https://images.pexels.com/photos/4270969/pexels-photo-4270969.jpeg",
      description: "Diagnosis and treatment of oral diseases and conditions."
    },
    {
      name: "Dr. Vikram Gupta",
      specialty: "Dental Anesthetist",
      experience: "10+ years",
      image: "https://images.pexels.com/photos/5257326/pexels-photo-5257326.jpeg",
      description: "Ensuring comfortable and pain-free dental procedures."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/2123430/pexels-photo-2123430.jpeg" 
            alt="Modern dental office"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-800/70 to-purple-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-lavender-200 to-white bg-clip-text text-transparent">Sakthi Dental</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Dedicated to providing exceptional dental care with compassion, expertise, and modern technology since 2005.
          </p>
        </div>
      </section>

      {/* Dr. Anupriya Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet <span className="text-purple-600">Dr. Anupriya</span>
              </h2>
              <div className="text-lg text-gray-600 space-y-6 leading-relaxed">
                <p>
                  With over 20 years of dedicated experience in dental care, Dr. Anupriya has established herself as a leading practitioner in women and children's dental health in the Hosur region.
                </p>
                <p>
                  Her gentle approach and expertise in creating comfortable dental experiences have earned the trust of thousands of families. Dr. Anupriya specializes in comprehensive dental care with a particular focus on preventive treatments and patient education.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-lavender-50 p-6 rounded-2xl border border-purple-100">
                  <h3 className="text-xl font-semibold text-purple-600 mb-3">Qualifications & Expertise</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• BDS - Bachelor of Dental Surgery</li>
                    <li>• MDS - Master of Dental Surgery</li>
                    <li>• Specialized training in Pediatric Dentistry</li>
                    <li>• Advanced certification in Women's Oral Health</li>
                    <li>• 20+ years of clinical experience</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/5257326/pexels-photo-5257326.jpeg" 
                  alt="Dr. Anupriya"
                  className="w-full rounded-3xl shadow-soft-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-soft border border-purple-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">20+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-lavender-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-soft-lg border border-purple-100">
              <div className="text-purple-600 mb-6">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide exceptional, compassionate dental care that prioritizes patient comfort and well-being. We are committed to creating positive dental experiences for women, children, and families through gentle, personalized treatment approaches and state-of-the-art technology.
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-soft-lg border border-purple-100">
              <div className="text-purple-600 mb-6">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM7.5 12L12 9.5 16.5 12 12 14.5 7.5 12zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the most trusted dental care provider in the region, known for our specialized expertise in women and children's dentistry. We envision a community where every family has access to premium dental care that promotes lifelong oral health and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Expert <span className="text-purple-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our team of highly qualified dental professionals, each bringing specialized expertise and a commitment to exceptional patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-purple-50 p-6 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 border border-purple-100"
              >
                <div className="relative mb-6">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-purple-600">
                    {doctor.experience}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {doctor.name}
                </h3>
                <p className="text-purple-600 font-semibold mb-3">
                  {doctor.specialty}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {doctor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-lavender-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do in providing exceptional dental care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassionate Care</h3>
              <p className="text-gray-600 leading-relaxed">
                We treat every patient with empathy, understanding, and genuine care, ensuring comfort and trust throughout their dental journey.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards in dental care through continuous learning, advanced technology, and meticulous attention to detail.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We practice with honesty, transparency, and ethical standards, building long-term relationships based on trust and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;