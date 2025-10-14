import { Link } from 'react-router-dom';
import CTAButton from './CTAButton';

const ServiceCard = ({ id, title, description, icon: Icon }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-card p-6 border-t-4 border-accentRed hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-center w-12 h-12 bg-primaryBlue rounded-lg mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-darkText mb-2">{title}</h3>
      

      
      <p className="text-grayText mb-6">
        {description}
      </p>
      
      <div className="mt-auto">
        <CTAButton 
          to={`/services/${id}`} 
          variant="outline"
          className="w-full"
        >
          Learn More
        </CTAButton>
      </div>
    </div>
  );
};

export default ServiceCard;