import Slider from 'react-slick';
import CTAButton from './CTAButton';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  // Array of image paths - replace these with your actual image paths
  const images = [
    '/img/slide1.jpg',
    '/img/slide2.jpg',
    '/img/slide3.jpg',
    '/img/slide4.jpg',
    '/img/slide5.jpg'
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <div className="relative bg-primaryBlue text-white">
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative h-[600px]">
              <div className="absolute inset-0 bg-black/50 z-10" /> {/* Dark overlay */}
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Expert Hybrid Vehicle Service &amp; Repairs in Harare
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl">
            Your trusted specialist in Engine Service, Dual Clutch Service, Transmission Service, 
            and Hybrid Battery Service. Professional care for your hybrid vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="/booking" variant="primary">
              Book a Service
            </CTAButton>
            <CTAButton to="/services" variant="outline">
              Our Services
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;