import React from 'react';

interface TutorCardProps {
  image: string;
  name: string;
  bgColor: string;
}

const TutorCard: React.FC<TutorCardProps> = ({ image, name, bgColor }) => {
  return (
    <div
      className={`rounded-[1.5rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer ${bgColor} aspect-square flex items-end justify-center p-4`}
    >
      <div className="text-center">
        <div className="w-full h-48 flex items-center justify-center mb-2">
          {/* Placeholder for tutor image - you can replace with actual images */}
          <div className="w-32 h-32 rounded-full bg-white/30 flex items-center justify-center text-4xl">
            {image}
          </div>
        </div>
        <p className="text-navy font-semibold text-sm">{name}</p>
      </div>
    </div>
  );
};

export default TutorCard;
