import CTAButton from '../components/CTAButton';
import { CheckCircleIcon, ClockIcon, UserGroupIcon, CogIcon, ShieldCheckIcon, SparklesIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

const TeamMemberModal = ({ member, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Left side - Image and Name */}
            <div className="w-full md:w-1/2 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet {member.name}</h2>
              <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right side - Details */}
            <div className="w-full md:w-1/2 p-6 bg-gray-50">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{member.role}</h3>
                  <p className="mt-1 text-sm text-gray-500">{member.expertise}</p>
                </div>

                <div className="prose max-w-none">
                  <h4 className="text-lg font-medium text-gray-900">About</h4>
                  <p className="mt-2 text-gray-600">{member.bio}</p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900">Certifications</h4>
                  <p className="mt-2 text-gray-600">{member.cert}</p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900">Specializations</h4>
                  <ul className="mt-2 space-y-1">
                    {member.specializations.map((spec, index) => (
                      <li key={index} className="text-gray-600">• {spec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  
  const stats = [
    { label: 'Years of Experience', value: '5+' },
    { label: 'Vehicles Serviced', value: '1000+' },
    { label: 'Expert Technicians', value: '10+' },
    { label: 'Satisfied Clients', value: '800+' },
  ];

  const workGallery = [
    {
      image: '/img/gallery/diagnostic.jpg',
      title: 'Advanced Diagnostics',
      description: 'State-of-the-art diagnostic equipment for hybrid vehicles'
    },
    {
      image: '/img/gallery/battery-service.jpg',
      title: 'Battery Service',
      description: 'Specialized hybrid battery maintenance and repair'
    },
    {
      image: '/img/gallery/engine-repair.jpg',
      title: 'Engine Service',
      description: 'Expert hybrid engine maintenance and repairs'
    },
    {
      image: '/img/gallery/workshop.jpg',
      title: 'Modern Workshop',
      description: 'Fully equipped facility for hybrid vehicle service'
    }
  ];

  return (
    <div className="bg-white">
      {/* About Header */}
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-semibold text-gray-900 mb-6">
              About Hybrid Vehicle Specialist
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Harare's premier hybrid vehicle service center, dedicated to providing expert maintenance 
              and repair services for all hybrid vehicle makes and models.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <div className="h-px bg-gray-200" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primaryBlue mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  It all began in 2020 with a dream and a determination to make a difference. 
                  As a passionate hybrid vehicle specialist, I saw how our community in Harare was 
                  embracing cleaner, more efficient vehicles, yet struggled to find reliable expertise 
                  for their maintenance. That's when I knew we needed to bridge this gap.
                </p>
                <p className="mb-4">
                  What started as a small workshop has blossomed into a trusted family of certified technicians, 
                  each bringing their own unique expertise and shared passion for hybrid technology. 
                  Every vehicle that enters our garage is treated with the same care and attention as if it 
                  were our own, because we understand it's not just a car - it's a part of your daily life 
                  and family journey.
                </p>
                <p>
                  Our commitment goes beyond just fixing cars. We're building lasting relationships with our 
                  clients, investing in cutting-edge diagnostic equipment, and constantly expanding our 
                  knowledge to serve you better. When you choose Hybrid Vehicle Specialist, you're not just 
                  choosing a service center - you're joining a community that cares about your journey and 
                  the future of sustainable transportation in Zimbabwe.
                </p>
              </div>
              <div className="mt-8">
                <CTAButton 
                  to="/services" 
                  variant="outline"
                  className="border-red-600 text-gray-700 hover:bg-primaryBlue hover:text-white hover:border-primaryBlue transition-all duration-300"
                >
                  Explore Our Services
                </CTAButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primaryBlue/5 rounded-xl -rotate-3"></div>
              <img
                src="/img/workshop.jpg"
                alt="Our Workshop"
                className="relative rounded-xl shadow-md rotate-3 transition-transform duration-500 hover:rotate-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600">
              Built on a foundation of excellence, integrity, and continuous improvement
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primaryBlue/5 mb-6">
                <ShieldCheckIcon className="h-6 w-6 text-primaryBlue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from customer service to technical expertise.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primaryBlue/5 mb-6">
                <UserGroupIcon className="h-6 w-6 text-primaryBlue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                We operate with complete transparency and honesty in all our dealings with customers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primaryBlue/5 mb-6">
                <SparklesIcon className="h-6 w-6 text-primaryBlue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously update our skills and equipment to stay ahead in hybrid technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Brands */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primaryBlue/10 rounded-full text-primaryBlue text-sm mb-4">
              Certified Specialists
            </span>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Vehicle Brands We Service</h2>
            <p className="text-gray-600">
              Our expert technicians are certified to work on all major hybrid vehicle brands
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: 'Toyota',
                logo: '/img/brands/toyota.svg',
                models: ['Aqua','Prius', 'Axio', 'Camry Hybrid', 'RAV4 Hybrid', 'Corolla Hybrid']
              },
              {
                name: 'Honda',
                logo: '/img/brands/honda.png',
                models: ['Vezel','Fit Hybrid', 'CR-V Hybrid', 'Accord Hybrid']
              },
              {
                name: 'Nissan',
                logo: '/img/brands/nissan.png',
                models: ['Leaf', 'Qashqai Hybrid', 'X-Trail Hybrid']
              },
              {
                name: 'Mazda',
                logo: '/img/brands/mazda.svg',
                models: ['CX-5', 'Mazda3 Hybrid']
              }
            ].map((brand, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-2xl p-6 text-center transition-all duration-300 hover:bg-gray-100">
                  <div className="h-24 flex items-center justify-center mb-6">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="h-16 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{brand.name}</h3>
                  <div className="space-y-2">
                    {brand.models.map((model, modelIndex) => (
                      <div key={modelIndex} className="text-sm text-gray-600">{model}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Don't see your vehicle brand listed? Contact us to learn more about our complete range of hybrid vehicle services.
            </p>
            <CTAButton
              to="/contact"
              variant="outline"
              className="border-primaryBlue text-primaryBlue hover:bg-primaryBlue hover:text-white transition-all duration-300"
            >
              Inquire About Your Vehicle
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Workshop Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Workshop</h2>
            <p className="text-gray-600">
              Take a look at our state-of-the-art facility and equipment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {workGallery.map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-sm group cursor-pointer">
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-white/90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Certifications */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Certifications</h2>
            <p className="text-gray-600 mb-12">
              We maintain the highest standards of technical expertise and service quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center p-6 bg-slate-50 rounded-lg">
              <CheckCircleIcon className="h-8 w-8 text-primaryBlue mr-4" />
              <div>
                <h3 className="font-medium text-gray-900">Certified Hybrid Specialists</h3>
                <p className="text-sm text-gray-600">Advanced hybrid systems training</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-slate-50 rounded-lg">
              <CogIcon className="h-8 w-8 text-primaryBlue mr-4" />
              <div>
                <h3 className="font-medium text-gray-900">Technical Excellence</h3>
                <p className="text-sm text-gray-600">State-of-the-art diagnostic tools</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-slate-50 rounded-lg">
              <ClockIcon className="h-8 w-8 text-primaryBlue mr-4" />
              <div>
                <h3 className="font-medium text-gray-900">Quick Service</h3>
                <p className="text-sm text-gray-600">Efficient diagnostics & repair</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-gray-600">
              Our certified technicians bring years of experience in hybrid vehicle technology
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Slider
              dots={true}
              infinite={true}
              speed={800}
              slidesToShow={3}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
              pauseOnHover={true}
              centerMode={false}
              cssEase="cubic-bezier(0.87, 0.03, 0.41, 0.9)"
              className="team-slider"
              responsive={[
                {
                  breakpoint: 1280,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]}
            >
              {[
              {
                name: 'Brian Machingura',
                role: 'Managing Director',
                image: '/img/team/team1.jpg',
                expertise: 'Lead Hybrid Vehicle Specialist',
                cert: 'Master Hybrid Technology Certified',
                bio: 'As the Managing Director and Lead Hybrid Vehicle Specialist, Brian oversees the entire service center while providing expert technical guidance and ensuring exceptional customer service. His leadership drives innovation in hybrid vehicle repairs.',
                specializations: [
                  'Service Center Management',
                  'Technical Guidance',
                  'Customer Engagement',
                  'Quality Assurance'
                ]
              },
              {
                name: 'Lovemore Ngirazi',
                role: 'Operations Manager',
                image: '/img/team/team2.jpg',
                expertise: 'Workshop Operations',
                cert: 'Operations Management Certified',
                bio: 'Lovemore expertly manages the day-to-day garage activities, ensuring smooth workflow and efficient operations. His coordination of service teams and resource management keeps our workshop running at peak efficiency.',
                specializations: [
                  'Workflow Coordination',
                  'Team Management',
                  'Parts & Tools Management',
                  'Workshop Efficiency'
                ]
              },
              {
                name: 'Boaz Zvirikuzhe',
                role: 'Technical Supervisor',
                image: '/img/team/team3.jpg',
                expertise: 'Senior Mechanic',
                cert: 'Advanced Hybrid Systems Certified',
                bio: 'Boaz leads our technical team with expertise in diagnostics and repairs. As a Senior Mechanic, he ensures all work meets the highest standards while mentoring our technical staff.',
                specializations: [
                  'Technical Team Leadership',
                  'Advanced Diagnostics',
                  'Quality Standards',
                  'Team Training'
                ]
              },
              {
                name: 'Carol',
                role: 'Accounts & Bookings Manager',
                image: '/img/team/team4.jpg',
                expertise: 'Financial Management',
                cert: 'Business Administration',
                bio: 'Carol manages all financial aspects of our operations while ensuring smooth customer booking processes. Her attention to detail in record keeping and invoicing helps maintain our efficient service delivery.',
                specializations: [
                  'Financial Management',
                  'Customer Bookings',
                  'Invoice Processing',
                  'Records Management'
                ]
              }
            ].map((member, index) => (
              <div key={index} className="px-2 h-[400px]">
                <div 
                  className="h-full group cursor-pointer relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="w-full h-full relative overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                        <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                        <div className="w-16 h-0.5 bg-white/50 mx-auto mb-2"></div>
                        <p className="text-base text-white/90 font-medium">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </Slider>
          </div>
        </div>
      </section>

      <style jsx>{`
        .team-slider .slick-slide {
          padding: 1rem;
        }
        .team-slider .slick-track {
          display: flex !important;
          align-items: stretch;
        }
        .team-slider .slick-slide > div {
          height: 100%;
        }
        .team-slider .slick-prev:before,
        .team-slider .slick-next:before {
          color: #1e40af;
          font-size: 24px;
        }
        .team-slider .slick-prev {
          left: -35px;
        }
        .team-slider .slick-next {
          right: -35px;
        }
        .team-slider .slick-dots li button:before {
          color: #1e40af;
        }
        .team-slider .slick-list {
          margin: 0 -1rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }
      `}</style>

      {/* Team Member Modal */}
      <TeamMemberModal 
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      />

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-primaryBlue">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-br from-primaryBlue via-primaryBlue to-blue-800" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-accentRed/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl" />
            
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-white/90 text-sm mb-6">
                  Experience Excellence
                </span>
                <h2 className="text-4xl font-semibold text-white mb-6">
                  Ready to Experience Premium Hybrid Service?
                </h2>
                <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                  Book an appointment with our expert team and discover why we're Harare's most trusted hybrid vehicle specialists.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <CTAButton 
                    to="/booking" 
                    variant="primary"
                    className="bg-white !text-accentRed hover:bg-accentRed hover:!text-white transition-all duration-300 px-8 py-3 text-lg font-medium border-2 border-white hover:border-accentRed"
                  >
                    Book a Service
                  </CTAButton>
                  <CTAButton 
                    to="/contact" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primaryBlue transition-all duration-300"
                  >
                    Contact Us
                  </CTAButton>
                </div>
                <div className="mt-10 pt-10 border-t border-white/10">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                      { label: 'Expert Technicians', value: '10+' },
                      { label: 'Years Experience', value: '5+' },
                      { label: 'Satisfied Clients', value: '800+' },
                      { label: '5-Star Reviews', value: '95%' },
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-blue-100">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;