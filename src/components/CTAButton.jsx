import { Link } from 'react-router-dom';

const CTAButton = ({ to, onClick, children, variant = 'primary', className = '' }) => {
  const baseStyles = 'inline-block px-6 py-3 rounded-xl font-medium transition-all duration-200 text-center';
  const variants = {
    primary: 'bg-accentRed text-white hover:bg-red-700',
    secondary: 'bg-white text-primaryBlue border-2 border-primaryBlue hover:bg-primaryBlue hover:text-white',
    outline: 'border-2 border-accentRed text-accentRed hover:bg-accentRed hover:text-white',
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
};

export default CTAButton;