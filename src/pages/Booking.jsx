import { useState } from 'react';
import { WrenchIcon, BoltIcon, CogIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleSolidIcon } from '@heroicons/react/24/solid';

const services = [
  {
    id: 'engine-service',
    title: 'Engine Service',
    icon: CogIcon,
    duration: '2-3 hours',
    description: 'Complete hybrid engine diagnostics and maintenance',
  },
  {
    id: 'dual-clutch-service',
    title: 'Dual Clutch Service',
    icon: WrenchIcon,
    duration: '3-4 hours',
    description: 'Expert maintenance of dual clutch transmission systems',
  },
  {
    id: 'transmission-service',
    title: 'Transmission Service',
    icon: CogIcon,
    duration: '2-3 hours',
    description: 'Comprehensive transmission inspection and service',
  },
  {
    id: 'battery-service',
    title: 'Hybrid Battery Service',
    icon: BoltIcon,
    duration: '4-5 hours',
    description: 'Complete hybrid battery system diagnostics and maintenance',
  },
];

const Booking = () => {
  const [selectedServices, setSelectedServices] = useState(new Set());

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId);
      } else {
        newSet.add(serviceId);
      }
      return newSet;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with selectedServices
  };

  return (
    <div>
      {/* Booking Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primaryBlue via-blue-600 to-blue-700 text-white py-24">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiNmZmZmZmYyMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Floating elements */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl relative">
            {/* Small decorative line */}
            <div className="w-20 h-1 bg-blue-400 mb-8 rounded-full"></div>
            
            {/* Main content */}
            <div className="relative">
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm font-medium text-blue-100 backdrop-blur-sm mb-4">
                Expert Hybrid Vehicle Service
              </span>
              <h1 className="text-5xl font-bold mb-6 tracking-tight">
                Book Your Service
                <span className="block text-blue-200 mt-2 text-2xl font-normal">
                  Professional care for your hybrid vehicle
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Schedule your maintenance with our certified technicians. Create a custom service package by selecting multiple services to ensure comprehensive care for your vehicle.
              </p>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
                {[
                  { value: '98%', label: 'Satisfaction Rate' },
                  { value: '15+', label: 'Expert Technicians' },
                  { value: '24h', label: 'Quick Turnaround' },
                  { value: '5⭐', label: 'Average Rating' }
                ].map((stat, index) => (
                  <div key={index} className="relative">
                    <div className="relative z-10">
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-blue-200">{stat.label}</div>
                    </div>
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-lg -z-0 transform rotate-3"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Service Selection */}
            <div>
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Select Services</h2>
                  <p className="text-sm text-gray-500 mt-1">Choose one or more services for your vehicle</p>
                </div>
                {selectedServices.size > 0 && (
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Services Selected</div>
                    <div className="text-2xl font-semibold text-gray-900">{selectedServices.size}</div>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {services.map((service) => {
                  const Icon = service.icon;
                  const isSelected = selectedServices.has(service.id);
                  
                  return (
                    <div
                      key={service.id}
                      onClick={() => handleServiceToggle(service.id)}
                      className={`group relative overflow-hidden p-6 border-2 rounded-2xl cursor-pointer transition-all ${
                        isSelected
                          ? 'border-primaryBlue bg-primaryBlue/5 shadow-md'
                          : 'border-gray-200 hover:border-primaryBlue/50 hover:bg-gray-50'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-4 right-4">
                          <CheckCircleSolidIcon className="w-6 h-6 text-primaryBlue" />
                        </div>
                      )}
                      
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${
                          isSelected ? 'bg-primaryBlue text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-baseline justify-between">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {service.title}
                            </h3>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-4 mt-4">
                            <div className="flex items-center text-sm text-gray-500">
                              <span className="font-semibold text-gray-900">${service.price}</span>
                              <span className="ml-1">estimated</span>
                            </div>
                            <div className="text-sm text-gray-500">
                              {service.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Personal Information */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primaryBlue/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primaryBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Personal Information</h2>
                  <p className="text-sm text-gray-500 mt-1">Please provide your contact details</p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white placeholder-gray-400
                        focus:ring-2 focus:ring-primaryBlue/20 focus:border-primaryBlue transition-colors duration-200"
                      required
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white placeholder-gray-400
                        focus:ring-2 focus:ring-primaryBlue/20 focus:border-primaryBlue transition-colors duration-200"
                      required
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white placeholder-gray-400
                        focus:ring-2 focus:ring-primaryBlue/20 focus:border-primaryBlue transition-colors duration-200"
                      required
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white placeholder-gray-400
                        focus:ring-2 focus:ring-primaryBlue/20 focus:border-primaryBlue transition-colors duration-200"
                      required
                      placeholder="+263 77 1234 567"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle Information */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primaryBlue/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primaryBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2m8-10a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM17 21h2v-2a4 4 0 0 0-4-4h-2" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Vehicle Details</h2>
                  <p className="text-sm text-gray-500 mt-1">Tell us about your hybrid vehicle</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="make" className="block text-sm font-medium text-gray-700">
                      Vehicle Make
                    </label>
                    <input
                      type="text"
                      id="make"
                      name="make"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white placeholder-gray-400
                        focus:ring-2 focus:ring-primaryBlue/20 focus:border-primaryBlue transition-colors duration-200"
                      required
                      placeholder="e.g., Toyota"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                      Vehicle Model
                    </label>
                    <input
                      type="text"
                      id="model"
                      name="model"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white placeholder-gray-400
                        focus:ring-2 focus:ring-primaryBlue/20 focus:border-primaryBlue transition-colors duration-200"
                      required
                      placeholder="e.g., Prius"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                      Year of Manufacture
                    </label>
                    <input
                      type="number"
                      id="year"
                      name="year"
                      min="1990"
                      max="2025"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white placeholder-gray-400
                        focus:ring-2 focus:ring-primaryBlue/20 focus:border-primaryBlue transition-colors duration-200"
                      required
                      placeholder="e.g., 2020"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="registration" className="block text-sm font-medium text-gray-700">
                      Registration Number
                    </label>
                    <input
                      type="text"
                      id="registration"
                      name="registration"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white placeholder-gray-400
                        focus:ring-2 focus:ring-primaryBlue/20 focus:border-primaryBlue transition-colors duration-200"
                      required
                      placeholder="e.g., ABC123"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Preferred Date and Time */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primaryBlue/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primaryBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Schedule</h2>
                  <p className="text-sm text-gray-500 mt-1">Choose your preferred appointment time</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white
                        focus:ring-2 focus:ring-primaryBlue/20 focus:border-primaryBlue transition-colors duration-200"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white
                        focus:ring-2 focus:ring-primaryBlue/20 focus:border-primaryBlue transition-colors duration-200"
                      required
                    >
                      <option value="">Select a time slot</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primaryBlue/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primaryBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Additional Information</h2>
                  <p className="text-sm text-gray-500 mt-1">Any specific concerns or requirements?</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="space-y-2">
                  <textarea
                    id="notes"
                    name="notes"
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white placeholder-gray-400
                      focus:ring-2 focus:ring-primaryBlue/20 focus:border-primaryBlue transition-colors duration-200"
                    placeholder="Please describe any specific issues, concerns, or special requirements for your service..."
                  ></textarea>
                  <p className="text-xs text-gray-500">
                    This information helps us prepare better for your service appointment.
                  </p>
                </div>
              </div>
            </div>

            {/* Total Cost Summary */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h2>
              <div className="space-y-4">
                {selectedServices.size > 0 ? (
                  <>
                    <div className="space-y-2">
                      {Array.from(selectedServices).map(serviceId => {
                        const service = services.find(s => s.id === serviceId);
                        return (
                          <div key={serviceId} className="flex justify-between text-sm">
                            <span className="text-gray-600">{service.title}</span>
                            <span className="font-medium text-gray-900">{service.duration}</span>
                          </div>
                        );
                      })}
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-900">Total Services</span>
                          <span className="font-semibold text-gray-900">{selectedServices.size}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          * Service duration may vary based on vehicle condition and additional requirements
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-gray-500">Please select at least one service to proceed</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={selectedServices.size === 0}
              className="w-full bg-primaryBlue text-white py-4 px-6 rounded-xl font-medium
                disabled:opacity-50 disabled:cursor-not-allowed
                enabled:hover:bg-blue-600 enabled:hover:shadow-lg
                transition-all duration-200"
            >
              {selectedServices.size === 0 ? 'Select a Service to Continue' : 'Book Appointment'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Booking;