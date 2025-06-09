import React from 'react';
import './Message.css';

/**
 * Componente Message para mostrar notificaciones al usuario
 * @param {string} text - Texto del mensaje
 * @param {string} type - Tipo de mensaje (success, error, warning, info)
 * @param {function} onClose - Función para cerrar el mensaje
 */
const Message = ({ text, type = 'info', onClose }) => {
  return (
    <div className={`message message-${type}`}>
      {text}
      {onClose && (
        <button className="message-close" onClick={onClose}>
          ×
        </button>
      )}
    </div>
  );
};

export default Message;