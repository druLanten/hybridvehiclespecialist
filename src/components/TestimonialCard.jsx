import { StarIcon } from '@heroicons/react/24/solid';

const TestimonialCard = ({ name, role, comment, rating }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-card">
      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <StarIcon
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'text-yellow-400' : 'text-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-grayText mb-6 italic">"{comment}"</p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div>
          <h4 className="font-semibold text-darkText">{name}</h4>
          {role && <p className="text-sm text-grayText">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;