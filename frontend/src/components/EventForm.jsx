import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Title from './Title';
import Button from './Button';
import './EventForm.css';

/**
 * Componente EventForm para crear y editar eventos
 * @param {object} event - Evento a editar (null para nuevo evento)
 * @param {function} onSubmit - Función para enviar el formulario
 * @param {function} onCancel - Función para cancelar el formulario
 */
const EventForm = ({ event, onSubmit, onCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue
  } = useForm();

  // Cargar datos del evento si está editando
  useEffect(() => {
    if (event) {
      setValue('evento', event.evento);
      setValue('direccion', event.direccion);
      setValue('tipoEvento', event.tipoEvento);
      setValue('descripcion', event.descripcion);
    } else {
      reset();
    }
  }, [event, setValue, reset]);

  const onSubmitForm = (data) => {
    onSubmit(data);
  };

  return (
    <div className="event-form">
      <div className="form-header">
        <Title 
          text={event ? 'Editar Evento' : 'Nuevo Evento'} 
          level={2} 
        />
      </div>

      <form onSubmit={handleSubmit(onSubmitForm)} className="form">
        <div className="form-group">
          <label htmlFor="evento" className="form-label">
            Nombre del Evento *
          </label>
          <input
            id="evento"
            type="text"
            className={`form-input ${errors.evento ? 'form-input-error' : ''}`}
            placeholder="Ingresa el nombre del evento"
            {...register('evento', {
              required: 'El nombre del evento es obligatorio',
              minLength: {
                value: 3,
                message: 'El nombre debe tener al menos 3 caracteres'
              }
            })}
          />
          {errors.evento && (
            <span className="form-error">{errors.evento.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="direccion" className="form-label">
            Dirección *
          </label>
          <input
            id="direccion"
            type="text"
            className={`form-input ${errors.direccion ? 'form-input-error' : ''}`}
            placeholder="Ingresa la dirección del evento"
            {...register('direccion', {
              required: 'La dirección es obligatoria',
              minLength: {
                value: 5,
                message: 'La dirección debe tener al menos 5 caracteres'
              }
            })}
          />
          {errors.direccion && (
            <span className="form-error">{errors.direccion.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="tipoEvento" className="form-label">
            Tipo de Evento *
          </label>
          <select
            id="tipoEvento"
            className={`form-select ${errors.tipoEvento ? 'form-input-error' : ''}`}
            {...register('tipoEvento', {
              required: 'El tipo de evento es obligatorio'
            })}
          >
            <option value="">Selecciona el tipo de evento</option>
            <option value="Virtual">Virtual</option>
            <option value="Presencial">Presencial</option>
            <option value="Fishery">Fishery</option>
          </select>
          {errors.tipoEvento && (
            <span className="form-error">{errors.tipoEvento.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="descripcion" className="form-label">
            Descripción *
          </label>
          <textarea
            id="descripcion"
            rows="4"
            className={`form-textarea ${errors.descripcion ? 'form-input-error' : ''}`}
            placeholder="Describe el evento"
            {...register('descripcion', {
              required: 'La descripción es obligatoria',
              minLength: {
                value: 10,
                message: 'La descripción debe tener al menos 10 caracteres'
              }
            })}
          />
          {errors.descripcion && (
            <span className="form-error">{errors.descripcion.message}</span>
          )}
        </div>

        <div className="form-actions">
          <Button
            text="Cancelar"
            onClick={onCancel}
            variant="secondary"
            type="button"
          />
          <Button
            text={isSubmitting ? 'Guardando...' : (event ? 'Actualizar' : 'Crear')}
            type="submit"
            variant="primary"
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
};

export default EventForm;