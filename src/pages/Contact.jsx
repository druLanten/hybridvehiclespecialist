import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-white">
      {/* Contact Header */}
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center space-x-2 bg-white px-4 py-1 rounded-full shadow-sm border border-gray-100 mb-8">
              <ChatBubbleLeftRightIcon className="h-5 w-5 text-primaryBlue" />
              <span className="text-sm font-medium text-gray-600">Let's Talk</span>
            </div>
            <h1 className="text-4xl font-semibold text-gray-900 mb-6">Get in Touch with Us</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions about our services? We're here to help and would love to hear from you.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <div className="h-px bg-gray-200" />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:sticky lg:top-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                  Contact Information
                  <div className="flex-grow border-t border-gray-200 ml-4" />
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-primaryBlue/5 rounded-lg">
                        <MapPinIcon className="w-6 h-6 text-primaryBlue" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Our Location</h3>
                      <a 
                        href="https://maps.app.goo.gl/XmH7AZne5Vd5eAf99"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 text-gray-600 hover:text-primaryBlue transition-colors group block"
                      >
                        <p className="group-hover:underline">4 Cor Road, Greendale</p>
                        <p className="group-hover:underline">Harare, Zimbabwe</p>
                        <span className="text-sm text-primaryBlue mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Open in Google Maps →
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-primaryBlue/5 rounded-lg">
                        <PhoneIcon className="w-6 h-6 text-primaryBlue" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Phone Number</h3>
                      <a 
                        href="tel:+263788984197" 
                        className="mt-1 text-gray-600 hover:text-primaryBlue transition-colors block hover:underline"
                      >
                        +263 788 984 197
                      </a>
                      <a 
                        href="tel:+263719246165" 
                        className="mt-1 text-gray-600 hover:text-primaryBlue transition-colors block hover:underline"
                      >
                        +263 719 246 165
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Mon-Sat from 8am to 5pm</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-primaryBlue/5 rounded-lg">
                        <EnvelopeIcon className="w-6 h-6 text-primaryBlue" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Email Address</h3>
                      <p className="mt-1 text-gray-600">info@hybridspecialist.co.zw</p>
                      <p className="text-sm text-gray-500">We aim to respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="mt-12 pt-12 border-t border-gray-100">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <ClockIcon className="w-6 h-6 text-primaryBlue mr-2" />
                    Business Hours
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="text-gray-900 font-medium">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-gray-600">Saturday</span>
                      <span className="text-gray-900 font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-gray-600">Sunday</span>
                      <span className="text-gray-900 font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-darkText mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-darkText mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:border-primaryBlue"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-darkText mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:border-primaryBlue"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-darkText mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:border-primaryBlue"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-darkText mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:border-primaryBlue"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accentRed text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-lightGray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 rounded-xl shadow-card">
            <div className="relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.3873226527066!2d31.115932589574225!3d-17.83561029947308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bb8fb50a1973%3A0xe142304c68a8c39!2sHybrid%20Vehicle%20Specialist!5e1!3m2!1sen!2szw!4v1760079006240!5m2!1sen!2szw"
                className="w-full h-[450px] rounded-lg"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hybrid Vehicle Specialist Location"
              ></iframe>
              <a
                href="https://maps.app.goo.gl/XmH7AZne5Vd5eAf99"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 hover:bg-gray-50 transition-colors"
              >
                <MapPinIcon className="h-5 w-5 text-primaryBlue" />
                <span className="text-sm font-medium text-gray-700">Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;