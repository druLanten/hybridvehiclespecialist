import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primaryBlue via-primaryBlue to-blue-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEyIiBzdHJva2U9IiNmZmZmZmYyMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      </div>

      {/* Main footer content */}
      <div className="relative">
        {/* Top border gradient */}
        <div className="h-px bg-gradient-to-r from-transparent via-accentRed/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto pt-16 pb-12 px-4 sm:px-6 lg:px-8">
          {/* Main footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-5 space-y-8">
              <div>
                <div className="inline-block mb-6 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <img 
                    src="/img/logo.png" 
                    alt="Hybrid Vehicle Specialist" 
                    className="h-20 w-auto"
                  />
                </div>
                <p className="text-white/80 mt-4 leading-relaxed">
                  Your trusted partner in hybrid vehicle maintenance and repairs in Harare.
                  Specializing in comprehensive vehicle care with state-of-the-art diagnostics
                  and expert technicians.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { 
                    id: 'facebook', 
                    href: 'https://www.facebook.com/profile.php?id=100083397498707',
                    path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                  },
                  { 
                    id: 'tiktok', 
                    href: 'https://www.tiktok.com/@hybrid.vehiclespecialist',
                    path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z'
                  },
                  { 
                    id: 'whatsapp-1', 
                    href: 'https://wa.me/263782175454',
                    path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'
                  },
                  { 
                    id: 'whatsapp-2', 
                    href: 'https://wa.me/263719246165',
                    path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'
                  }
                ].map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                      hover:bg-accentRed/20 hover:border-accentRed/50 border border-white/20 
                      transition-all duration-300 group"
                  >
                    <span className="sr-only">{social.id}</span>
                    <svg className="w-5 h-5 text-white/80 group-hover:text-accentRed transition-colors" 
                         fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1 md:col-span-3">
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {[
                  { to: '/services', text: 'Our Services' },
                  { to: '/booking', text: 'Book a Service' },
                  { to: '/about', text: 'About Us' },
                  { to: '/contact', text: 'Contact Us' }
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <svg
                        className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-accentRed"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-1 md:col-span-4">
              <h3 className="text-lg font-semibold text-white mb-6">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 group">
                  <svg className="w-5 h-5 text-white/60 group-hover:text-accentRed mt-1 transition-colors" 
                       fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="flex-1">
                    <a 
                      href="https://maps.app.goo.gl/XmH7AZne5Vd5eAf99"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white group-hover:text-white transition-colors block group"
                    >
                      <p>5 Cor Avenue, Greendale</p>
                      <p>Harare, Zimbabwe</p>
                      <span className="text-sm text-accentRed mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Open in Google Maps →
                      </span>
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3 group">
                  <svg className="w-5 h-5 text-white/60 group-hover:text-accentRed mt-1 transition-colors" 
                       fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="flex-1 space-y-2">
                    <a href="tel:+263782175454" 
                       className="text-white/80 hover:text-white transition-colors block">
                      +263 782 175 454
                    </a>
                    <a href="tel:+263719246165" 
                       className="text-white/80 hover:text-white transition-colors block">
                      +263 719 246 165
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3 group">
                  <svg className="w-5 h-5 text-white/60 group-hover:text-accentRed mt-1 transition-colors" 
                       fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="flex-1">
                    <a href="mailto:info@hybridspecialist.co.zw" 
                       className="text-white/80 hover:text-white transition-colors break-all">
                      info@hybridspecialist.co.zw
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 mt-12 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <p className="text-sm text-gray-400 text-center md:text-left">
                © {new Date().getFullYear()} Hybrid Vehicle Specialist. All rights reserved.
              </p>
              <div className="flex justify-center md:justify-end space-x-6">
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border gradient */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;