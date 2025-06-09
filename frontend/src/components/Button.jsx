import React from 'react';
import './Button.css';

/**
 * Componente Button reutilizable con diferentes variantes
 * @param {string} text - Texto del botón
 * @param {function} onClick - Función a ejecutar al hacer click
 * @param {string} variant - Variante del botón (primary, secondary, danger)
 * @param {string} type - Tipo de botón (button, submit, reset)
 * @param {boolean} disabled - Si el botón está deshabilitado
 * @param {string} className - Clases CSS adicionales
 */
const Button = ({ 
  text, 
  onClick, 
  variant = 'primary', 
  type = 'button', 
  disabled = false,
  className = '' 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} ${className} ${disabled ? 'btn-disabled' : ''}`}
    >
      {text}
    </button>
  );
};

export default Button;