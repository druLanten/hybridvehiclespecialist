import { useParams } from 'react-router-dom';
import CTAButton from '../components/CTAButton';
import { 
  WrenchIcon, 
  BoltIcon, 
  CogIcon, 
  XMarkIcon,
  CheckIcon,
  ClockIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline';

const services = {
  'engine-service': {
    title: 'Engine Service',
    description: 'Complete hybrid engine diagnostics and maintenance to keep your vehicle running at peak performance.',
    icon: CogIcon,
    price: '150',
    features: [
      'Complete engine diagnostics',
      'Oil and filter change',
      'Spark plug replacement',
      'Engine timing check',
      'Cooling system inspection',
      'Performance optimization'
    ],
    benefits: [
      'Improved fuel efficiency',
      'Enhanced performance',
      'Extended engine life',
      'Reduced emissions'
    ]
  },
  'dual-clutch-service': {
    title: 'Dual Clutch Service',
    description: 'Expert maintenance and repair of dual clutch transmission systems for smooth operation.',
    icon: WrenchIcon,
    price: '200',
    features: [
      'Clutch system inspection',
      'Fluid level check and replacement',
      'Pressure test',
      'Control module diagnostics',
      'Gear engagement check',
      'System calibration'
    ],
    benefits: [
      'Smoother gear changes',
      'Improved response time',
      'Extended clutch life',
      'Better driving experience'
    ]
  },
  // Add other services...
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services[serviceId];

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
            <XMarkIcon className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">Service not found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist or has been moved.</p>
          <CTAButton 
            to="/services"
            variant="primary"
            className="bg-primaryBlue text-white hover:bg-blue-600 transition-all duration-300"
          >
            View All Services
          </CTAButton>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="bg-white">
      {/* Service Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primaryBlue/5 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primaryBlue/5 text-primaryBlue text-sm mb-8">
                <Icon className="w-4 h-4" />
                <span>Premium Service</span>
              </div>
              <h1 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
                {service.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
                <CTAButton 
                  to="/booking" 
                  variant="primary"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Schedule Service
                </CTAButton>
              </div>
            </div>
            
            <div className="lg:w-96 w-full">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-medium text-gray-900 mb-4">Service Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
                    <ClockIcon className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="font-medium text-gray-900">2-3 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
                    <WrenchIcon className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-600">Warranty</div>
                      <div className="font-medium text-gray-900">12 months</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
                    <CheckIcon className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-600">Next Service</div>
                      <div className="font-medium text-gray-900">10,000 km</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Features */}
            <div className="lg:col-span-7">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900">
                  What's Included
                </h2>
                <div className="mt-8 grid sm:grid-cols-2 gap-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="relative pl-8">
                      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primaryBlue/10 flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-primaryBlue"></div>
                      </div>
                      <p className="text-gray-600 m-0">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle Column: Benefits */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckIcon className="w-4 h-4 text-primaryBlue" />
                    </div>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Service Process */}
            <div className="lg:col-span-3">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-6">Service Process</h3>
                <div className="space-y-4">
                  {[
                    { step: 1, title: 'Initial Diagnosis', desc: 'Comprehensive system scan' },
                    { step: 2, title: 'Expert Review', desc: 'Detailed assessment' },
                    { step: 3, title: 'Service Execution', desc: 'Professional repair' },
                    { step: 4, title: 'Quality Check', desc: 'Performance verification' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50/80 hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primaryBlue/10 flex items-center justify-center">
                        <span className="text-sm font-medium text-primaryBlue">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primaryBlue/10 via-white to-accentRed/5" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-12 shadow-xl ring-1 ring-black/5">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center space-x-2 bg-primaryBlue/5 rounded-full px-3 py-1 text-sm text-primaryBlue mb-6">
                    <ClockIcon className="w-4 h-4" />
                    <span>Quick Scheduling</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Ready for Expert Hybrid Service?
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Schedule your service appointment today and let our certified technicians take care of your vehicle with precision and expertise.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 lg:flex-col lg:min-w-[200px]">
                  <CTAButton 
                    to="/booking" 
                    variant="primary"
                    className="bg-primaryBlue text-white hover:bg-blue-600 shadow-sm transition-all duration-300 px-8 py-3"
                  >
                    Book Service
                  </CTAButton>
                  <CTAButton 
                    to="/contact" 
                    variant="outline"
                    className="border-gray-200 text-gray-600 hover:text-primaryBlue hover:border-primaryBlue transition-all duration-300"
                  >
                    Ask a Question
                  </CTAButton>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { label: 'Satisfaction Rate', value: '98%' },
                    { label: 'Expert Technicians', value: '10+' },
                    { label: 'Service Warranty', value: '12mo' },
                    { label: 'Quick Turnaround', value: '24h' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="font-semibold text-2xl text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;