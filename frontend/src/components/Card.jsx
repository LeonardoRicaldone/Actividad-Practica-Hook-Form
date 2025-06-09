import React from 'react';
import Button from './Button';
import './Card.css';

/**
 * Componente Card para mostrar información de eventos
 * @param {object} event - Objeto con datos del evento
 * @param {function} onEdit - Función para editar el evento
 * @param {function} onDelete - Función para eliminar el evento
 */
const Card = ({ event, onEdit, onDelete }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{event.evento}</h3>
        <span className={`card-badge ${event.tipoEvento.toLowerCase()}`}>
          {event.tipoEvento}
        </span>
      </div>
      
      <div className="card-body">
        <div className="card-info">
          <strong>Lugar:</strong>
          <span>{event.direccion}</span>
        </div>
        
        <div className="card-description">
          <strong>Descripción:</strong>
          <p>{event.descripcion}</p>
        </div>
      </div>
      
      <div className="card-actions">
        <Button 
          text="Editar" 
          onClick={onEdit}
          variant="secondary"
        />
        <Button 
          text="Eliminar" 
          onClick={onDelete}
          variant="danger"
        />
      </div>
    </div>
  );
};

export default Card;