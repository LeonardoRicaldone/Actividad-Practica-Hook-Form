import React from 'react';
import './Title.css';

/**
 * Componente Title reutilizable para mostrar títulos con diferentes niveles
 * @param {string} text - Texto del título
 * @param {number} level - Nivel del título (1-6)
 * @param {string} className - Clases CSS adicionales
 */
const Title = ({ text, level = 1, className = '' }) => {
  const Tag = `h${level}`;
  
  return (
    <Tag className={`title title-${level} ${className}`}>
      {text}
    </Tag>
  );
};

export default Title;