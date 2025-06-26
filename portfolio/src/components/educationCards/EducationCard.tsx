import React, { useEffect, useRef } from 'react';
import './EducationCard.css';

interface EducationCardProps {
  image: string;
  title: string;
  year: number;
  description: string;
  description2: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ image, title, description, description2, year }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && cardRef.current) {
          cardRef.current.classList.add("animate-in");
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <>
      <div ref={cardRef} className="education-card">
        <img src={image} alt={title} />
        <p className='edc-title'>{title}</p>
        <p className='edc-description'>
          <span className="material-symbols-outlined">
            school
          </span>
          {description}
        </p>
        <p className='edc-description'>
          <span className="material-symbols-outlined">
            location_on
          </span>
          {description2}
        </p>
        <p className='edc-year'>{year}</p>
      </div>
    </>
  );
};

export default EducationCard;