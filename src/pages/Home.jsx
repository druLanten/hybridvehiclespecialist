import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { WrenchIcon, BoltIcon, CogIcon, PowerIcon } from '@heroicons/react/24/outline';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import CTAButton from '../components/CTAButton';
import Slider from 'react-slick';

// Testimonials data
const testimonials = [
  {
    name: "Carlos Shava",
    role: "Toyota Aqua Owner",
    comment: "Best hybrid service in Harare! They diagnosed and fixed my Prius's battery issue quickly and professionally.",
    rating: 5,
    image: "/img/testimonial1.jpg"
  },
  {
    name: "Kudakwashe Marufu",
    role: "Honda Vezel Owner",
    comment: "Excellent service and very knowledgeable staff. They helped me understand my hybrid system better.",
    rating: 5,
    image: "/img/testimonial2.jpg"
  },
  {
    name: "Chiedza Mapanzure",
    role: "Lexus RX Hybrid Owner",
    comment: "Professional service at its best. Their diagnostic equipment is state-of-the-art.",
    rating: 5,
    image: "/img/testimonial3.jpg"
  },
  {
    name: "Angela Sibanda",
    role: "Toyota Camry Hybrid Owner",
    comment: "Trustworthy and reliable. They've been servicing my hybrid for years now.",
    rating: 5,
    image: "/img/testimonial4.jpg"
  }
];

const services = [
  {
    id: 'engine-service',
    title: 'Engine Service',
    description: 'Complete hybrid engine diagnostics and maintenance to keep your vehicle running at peak performance.',
    icon: CogIcon,
    price: '150',
  },
  {
    id: 'dual-clutch-service',
    title: 'Dual Clutch Service',
    description: 'Expert maintenance and repair of dual clutch transmission systems for smooth operation.',
    icon: WrenchIcon,
    price: '200',
  },
  {
    id: 'transmission-service',
    title: 'Transmission Service',
    description: 'Comprehensive transmission maintenance and repairs for optimal power delivery.',
    icon: CogIcon,
    price: '180',
  },
  {
    id: 'battery-service',
    title: 'Hybrid Battery Service',
    description: 'Professional hybrid battery diagnostics, maintenance, and replacement services.',
    icon: PowerIcon,
    price: '250',
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Featured Services */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-darkText mb-4">
              Our Specialized Services
            </h2>
            <div className="w-24 h-1 bg-accentRed mx-auto mb-6"></div>
            <p className="text-grayText max-w-2xl mx-auto text-lg">
              We provide expert maintenance and repair services specifically tailored for hybrid vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform hover:translate-y-0">
            {services.map((service) => (
              <div key={service.id} className="transform transition-all duration-300 hover:-translate-y-2">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-lightGray via-white to-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-darkText mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-primaryBlue mx-auto mb-6"></div>
            <p className="text-grayText max-w-2xl mx-auto text-lg">
              We are Harare's leading hybrid vehicle specialists, committed to providing top-quality service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-card transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <CogIcon className="w-8 h-8 text-primaryBlue" />
              </div>
              <h3 className="text-xl font-bold text-darkText mb-4">Expert Technicians</h3>
              <p className="text-grayText leading-relaxed">
                Our certified professionals bring years of specialized experience in hybrid vehicle maintenance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-card transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <WrenchIcon className="w-8 h-8 text-accentRed" />
              </div>
              <h3 className="text-xl font-bold text-darkText mb-4">Latest Equipment</h3>
              <p className="text-grayText leading-relaxed">
                State-of-the-art diagnostic and repair tools ensure precise and efficient service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-card transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <BoltIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-darkText mb-4">Quality Service</h3>
              <p className="text-grayText leading-relaxed">
                Our commitment to excellence ensures your complete satisfaction with every visit.
              </p>
            </div>
          </div>

          <div className="text-center">
            <CTAButton 
              to="/about" 
              variant="secondary"
              className="transform transition-all duration-300 hover:scale-105"
            >
              Learn More About Us
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primaryBlue/5 via-transparent to-accentRed/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-darkText mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-primaryBlue mx-auto mb-6"></div>
            <p className="text-grayText max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Here's what our valued customers have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="transform transition-all duration-300 hover:-translate-y-2"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-0 w-64 h-64 bg-primaryBlue opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-64 h-64 bg-accentRed opacity-5 rounded-full blur-3xl"></div>
      </section>

      {/* Upcoming Events & City Visits */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primaryBlue/10 rounded-full text-primaryBlue text-sm mb-4">
              Mobile Services
            </span>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Upcoming City Visits</h2>
            <p className="text-gray-600">
              We bring our expert diagnostic services to various cities across Zimbabwe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                city: 'Bulawayo',
                date: 'October 15-17, 2025',
                location: 'Central Business District',
                description: 'Comprehensive hybrid diagnostics and consultations',
                services: ['Full Diagnostic Service', 'Battery Health Checks', 'Performance Analysis'],
                spots: '8 slots available'
              },
              {
                city: 'Mutare',
                date: 'October 25-26, 2025',
                location: 'Yeovil Industrial Area',
                description: 'Specialized hybrid system diagnostics and maintenance advice',
                services: ['System Diagnostics', 'Performance Tuning', 'Maintenance Consultation'],
                spots: '6 slots available'
              },
              {
                city: 'Gweru',
                date: 'November 5-6, 2025',
                location: 'Light Industrial Area',
                description: 'Expert hybrid vehicle assessment and technical support',
                services: ['Technical Assessment', 'Battery Testing', 'System Updates'],
                spots: '5 slots available'
              }
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{event.city}</h3>
                      <p className="text-primaryBlue font-medium">{event.date}</p>
                    </div>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {event.spots}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-start space-x-2 text-gray-600 mb-2">
                      <svg className="h-5 w-5 mt-0.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {event.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-gray-600">
                        <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <CTAButton
                      to="/booking"
                      variant="outline"
                      className="w-full border-primaryBlue text-primaryBlue hover:bg-primaryBlue hover:text-white transition-all duration-300"
                    >
                      Book a Slot
                    </CTAButton>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Can't make these dates? Contact us to inquire about future visits to your city.
            </p>
            <CTAButton
              to="/contact"
              variant="outline"
              className="border-accentRed text-accentRed hover:bg-accentRed hover:text-white transition-all duration-300"
            >
              Request a City Visit
            </CTAButton>
          </div>
        </div>
      </section>


      {/* Book Service CTA */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-primaryBlue to-blue-800"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEyIiBzdHJva2U9IiNmZmZmZmYxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        
        {/* Animated Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

        <div className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl p-8 md:p-12 backdrop-blur-xl">
              {/* Top gradient line */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200/30 to-transparent"></div>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  {/* Content */}
                  <div className="md:col-span-8 text-center md:text-left">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-300/20 backdrop-blur-sm mb-6">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                      <span className="text-sm text-blue-100">Online Booking Available</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                      Keep Your Hybrid Vehicle in 
                      <span className="block bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent">
                        Perfect Condition
                      </span>
                    </h2>
                    <p className="text-xl text-blue-100 leading-relaxed mb-8">
                      Book a service appointment with our expert technicians. Professional care and maintenance for optimal performance.
                    </p>
                    
                    {/* Benefits */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {[
                        { text: "Expert Hybrid Technicians" },
                        { text: "State-of-the-art Equipment" },
                        { text: "Quick Service Turnaround" },
                        { text: "Comprehensive Diagnostics" }
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-blue-100">
                          <svg className="w-5 h-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">{benefit.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Card */}
                  <div className="md:col-span-4">
                    <div className="bg-gradient-to-b from-blue-600/30 to-blue-900/30 rounded-xl p-6 backdrop-blur-xl border border-blue-500/20">
                      
                      <div className="space-y-3">
                        <CTAButton 
                          to="/booking" 
                          variant="primary"
                          className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white 
                            hover:from-blue-500 hover:to-blue-600 transform transition-all duration-300 
                            hover:-translate-y-1 shadow-lg shadow-blue-500/25 hover:shadow-xl 
                            hover:shadow-blue-500/40 text-lg py-3 rounded-xl"
                        >
                          Book Now
                        </CTAButton>
                        <CTAButton 
                          to="/services" 
                          variant="outline"
                          className="w-full border-2 border-blue-400/30 text-blue-100 
                            hover:bg-blue-400/10 transition-all duration-300 py-3 rounded-xl"
                        >
                          View Services
                        </CTAButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;