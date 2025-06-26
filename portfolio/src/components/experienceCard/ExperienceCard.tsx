import React, { useState, useEffect, useRef } from 'react';
import './ExperienceCard.css';

interface ExperienceCardProps {
  image: string;
  title: string;
  fname: string;
  description: string;
  year: number;
  primaryColor: string;
  position: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ image, title, fname, description, year, primaryColor, position }) => {
  const [isOpen, setIsOpen] = useState(false);
  const boxShadowColor = primaryColor + "30";

  const toggleModal = () => setIsOpen(!isOpen);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && cardRef.current) {
          cardRef.current.classList.add("animate-in");
        }
      },
      { threshold: 0.2 } // dispara quando 20% do card estiver visível
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <>
      <div ref={cardRef} style={{ "--primaryColor": primaryColor, "--boxShadowColor": boxShadowColor  } as React.CSSProperties} className="experience-card" onClick={toggleModal}>
        <img  style={{ "--boxShadowColor": boxShadowColor  } as React.CSSProperties} src={image} alt={title} />
        <p className='ec-title'>{title}</p>
        <p className='ec-description'>{position}</p>
        <p className='ec-year'>{year}</p>
      </div>

      {isOpen && (
        <div className="modal-overlay"  style={{ "--primaryColor": primaryColor } as React.CSSProperties} onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{fname}</h2>
            <img src={image} alt={title} style={{ width: '100px' }} />
            <p>{position}</p>
            <ul>
              {description.split('\n').map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </ul>
            <span className="material-symbols-outlined" onClick={toggleModal}>close</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceCard;