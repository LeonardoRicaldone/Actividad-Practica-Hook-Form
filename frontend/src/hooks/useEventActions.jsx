import { useState, useCallback } from 'react';
import { API_URL } from '../utils/apiUrl';

/**
 * Hook personalizado para manejar todas las operaciones CRUD de eventos
 * @returns {object} Objeto con estado y funciones para manejar eventos
 */
export const useEventActions = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para obtener todos los eventos
  const fetchEvents = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setEvents(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Función para crear un nuevo evento
  const createEvent = useCallback(async (eventData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const newEvent = await response.json();
      setEvents(prevEvents => [...prevEvents, newEvent]);
      
      return newEvent;
    } catch (err) {
      setError(err.message);
      console.error('Error creating event:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Función para actualizar un evento existente
  const updateEvent = useCallback(async (eventId, eventData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_URL}/${eventId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const updatedEvent = await response.json();
      setEvents(prevEvents => 
        prevEvents.map(event => 
          event.id === eventId ? updatedEvent : event
        )
      );
      
      return updatedEvent;
    } catch (err) {
      setError(err.message);
      console.error('Error updating event:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Función para eliminar un evento
  const deleteEvent = useCallback(async (eventId) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_URL}/${eventId}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      setEvents(prevEvents => 
        prevEvents.filter(event => event.id !== eventId)
      );
      
      return true;
    } catch (err) {
      setError(err.message);
      console.error('Error deleting event:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    events,
    loading,
    error,
    fetchEvents,
    createEvent,
    updateEvent,
    deleteEvent,
  };
};