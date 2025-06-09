import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import Card from '../components/Card';
import EventForm from '../components/EventForm';
import Message from '../components/Message';
import { useEventActions } from '../hooks/useEventActions';
import './HomeScreen.css';

const HomeScreen = () => {
  const {
    events,
    loading,
    error,
    fetchEvents,
    createEvent,
    updateEvent,
    deleteEvent
  } = useEventActions();

  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [message, setMessage] = useState(null);

  // Cargar eventos al montar el componente
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  // Función para mostrar mensajes temporales
  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  };

  // Manejar creación de evento
  const handleCreateEvent = async (eventData) => {
    try {
      await createEvent(eventData);
      setShowForm(false);
      showMessage('Evento creado exitosamente', 'success');
    } catch (error) {
      showMessage('Error al crear el evento', 'error');
    }
  };

  // Manejar actualización de evento
  const handleUpdateEvent = async (eventData) => {
    try {
      await updateEvent(editingEvent.id, eventData);
      setEditingEvent(null);
      setShowForm(false);
      showMessage('Evento actualizado exitosamente', 'success');
    } catch (error) {
      showMessage('Error al actualizar el evento', 'error');
    }
  };

  // Manejar eliminación de evento
  const handleDeleteEvent = async (eventId) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este evento?')) {
      try {
        await deleteEvent(eventId);
        showMessage('Evento eliminado exitosamente', 'success');
      } catch (error) {
        showMessage('Error al eliminar el evento', 'error');
      }
    }
  };

  // Manejar edición de evento
  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setShowForm(true);
  };

  // Cancelar formulario
  const handleCancelForm = () => {
    setShowForm(false);
    setEditingEvent(null);
  };

  return (
    <div className="home-screen">
      <div className="container">
        <header className="home-header">
          <Title text="Event Planner - Impulso Creativo" level={1} />
          <Button 
            text="Nuevo Evento" 
            onClick={() => setShowForm(true)}
            variant="primary"
          />
        </header>

        {message && (
          <Message 
            text={message.text} 
            type={message.type} 
          />
        )}

        {showForm && (
          <div className="form-overlay">
            <div className="form-container">
              <EventForm
                event={editingEvent}
                onSubmit={editingEvent ? handleUpdateEvent : handleCreateEvent}
                onCancel={handleCancelForm}
              />
            </div>
          </div>
        )}

        <div className="events-section">
          {loading && <p className="loading">Cargando eventos...</p>}
          
          {error && (
            <Message 
              text={`Error: ${error}`} 
              type="error" 
            />
          )}

          {!loading && !error && events.length === 0 && (
            <div className="no-events">
              <Title text="No hay eventos registrados" level={3} />
              <p>Comienza creando tu primer evento</p>
            </div>
          )}

          <div className="events-grid">
            {events.map(event => (
              <Card
                key={event.id}
                event={event}
                onEdit={() => handleEditEvent(event)}
                onDelete={() => handleDeleteEvent(event.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;