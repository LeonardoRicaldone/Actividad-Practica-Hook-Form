import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';
import Button from '../components/Button';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/home');
  };

  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <Title text="Bienvenido a Event Planner" level={1} />
        <Title text="Impulso Creativo" level={2} />
        <p className="welcome-description">
          Gestiona y organiza todos tus eventos de manera eficiente y profesional.
          Esta aplicación te permitirá crear, editar y administrar eventos culturales,
          educativos y sociales.
        </p>
        <div className="welcome-actions">
          <Button 
            text="Comenzar" 
            onClick={handleProceed}
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;