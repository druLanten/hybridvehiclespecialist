import ServiceCard from '../components/ServiceCard';
import { WrenchIcon, BoltIcon, CogIcon, ClockIcon, ShieldCheckIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';
import CTAButton from '../components/CTAButton';

const services = [
  {
    id: 'engine-service',
    title: 'Engine Service',
    description: 'Comprehensive hybrid engine diagnostics and maintenance performed by certified technicians using state-of-the-art equipment.',
    icon: CogIcon,
    price: '150',
    includes: ['Engine diagnostics', 'Performance optimization', 'Cooling system check', 'Filter replacement']
  },
  {
    id: 'dual-clutch-service',
    title: 'Dual Clutch Service',
    description: 'Expert maintenance and repair of dual clutch transmission systems for smooth and efficient gear changes.',
    icon: WrenchIcon,
    price: '200',
    includes: ['System calibration', 'Fluid replacement', 'Clutch inspection', 'Control module check']
  },
  {
    id: 'transmission-service',
    title: 'Transmission Service',
    description: 'Professional transmission maintenance and repairs to ensure optimal power delivery and smooth operation.',
    icon: CogIcon,
    price: '180',
    includes: ['Fluid change', 'Filter replacement', 'Diagnostic scan', 'Performance testing']
  },
  {
    id: 'battery-service',
    title: 'Hybrid Battery Service',
    description: 'Specialized hybrid battery diagnostics and maintenance to maximize performance and longevity.',
    icon: BoltIcon,
    price: '250',
    includes: ['Cell testing', 'Cooling system check', 'Performance analysis', 'System optimization']
  },
  {
    id: 'diagnostic-service',
    title: 'Advanced Diagnostics',
    description: 'Comprehensive system analysis using latest diagnostic equipment for accurate problem identification.',
    icon: CogIcon,
    price: '100',
    includes: ['Full system scan', 'Performance testing', 'Error code analysis', 'Health report']
  },
  {
    id: 'maintenance-service',
    title: 'Preventive Maintenance',
    description: 'Regular maintenance program to prevent issues and maintain optimal vehicle performance.',
    icon: WrenchIcon,
    price: '120',
    includes: ['Multi-point inspection', 'Fluid checks', 'Filter inspection', 'System updates']
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50">
      {/* Services Header */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-8">
              <div className="flex items-center justify-center space-x-6 bg-white px-8 py-3 rounded-md shadow-sm">
                {[WrenchIcon, BoltIcon, CogIcon].map((Icon, index) => (
                  <Icon 
                    key={index} 
                    className={`h-6 w-6 ${
                      index === 0 ? 'text-primaryBlue' : 
                      index === 1 ? 'text-accentRed' : 
                      'text-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
            <h1 className="text-4xl font-semibold text-gray-900 mb-6">
              Expert Hybrid Vehicle Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We provide comprehensive maintenance and repair services for all types of hybrid vehicles,
              combining technical expertise with exceptional customer service.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <CTAButton
                to="/booking"
                variant="primary"
                className="bg-primaryBlue hover:bg-blue-600 text-white transition-all duration-300"
              >
                Schedule Service
              </CTAButton>
              <CTAButton
                to="/contact"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-accentRed hover:border-accentRed hover:text-white transition-all duration-300"
              >
                Contact Us
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <div className="h-px bg-gray-200" />
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <ShieldCheckIcon className="h-8 w-8 text-primaryBlue" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Certified Experts</h3>
                <p className="text-sm text-gray-500">Factory-trained technicians</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <ClockIcon className="h-8 w-8 text-primaryBlue" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Quick Service</h3>
                <p className="text-sm text-gray-500">Efficient diagnostics & repair</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <DocumentCheckIcon className="h-8 w-8 text-primaryBlue" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Service Warranty</h3>
                <p className="text-sm text-gray-500">Guaranteed quality work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group">
                <div className="bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-md p-6 h-full border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-gray-50 mr-4 group-hover:bg-primaryBlue/5 transition-colors duration-300">
                      <service.icon className="h-6 w-6 text-primaryBlue" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-900 mb-2">Service Includes:</div>
                    <ul className="space-y-2">
                      {service.includes.map((item, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-primaryBlue mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <CTAButton
                      to={`/services/${service.id}`}
                      variant="outline"
                      className="w-full border-gray-200 text-gray-700 hover:bg-primaryBlue hover:text-white hover:border-primaryBlue transition-all duration-300"
                    >
                      Learn More
                    </CTAButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Service Guarantee</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We stand behind our work with a comprehensive service guarantee. Every repair and 
            maintenance service is performed by certified technicians using manufacturer-approved 
            parts and advanced diagnostic equipment.
          </p>
          <CTAButton 
            to="/booking" 
            variant="primary"
            className="bg-gradient-to-r from-primaryBlue to-accentRed hover:from-accentRed hover:to-primaryBlue text-white transition-all duration-300"
          >
            Schedule a Service
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default Services;