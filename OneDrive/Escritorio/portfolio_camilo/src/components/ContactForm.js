import React, { useState } from 'react';
import './ContactForm.css'; // Importa los estilos
import '@fortawesome/fontawesome-free/css/all.css'; // Importa los íconos

const ContactForm = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formError, setFormError] = useState('');

  // Maneja el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Por favor, completa todos los campos.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormError('El correo electrónico no es válido.');
      return;
    }

    // Aquí puedes hacer la lógica de enviar los datos (por ejemplo, hacer una petición API)
    alert('¡Formulario enviado correctamente!');

    // Resetear el formulario
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setFormError('');
  };

  return React.createElement(
    'div',
    { className: 'contact-form-wrapper' },
    // Fondo animado
    React.createElement(
      'div',
      { className: 'contact-form-background' },
      React.createElement('div', { className: 'bubble' }),
      React.createElement('div', { className: 'bubble' }),
      React.createElement('div', { className: 'bubble' })
    ),
    // Contenedor del formulario
    React.createElement(
      'div',
      { className: 'contact-form-container' },
      React.createElement('h2', null, '¡Contáctame!'),
      React.createElement(
        'form',
        { onSubmit: handleSubmit, className: 'contact-form' },
        // Campo Nombre
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('i', { className: 'fas fa-user' }),
          React.createElement('input', {
            type: 'text',
            name: 'name',
            value: formData.name,
            onChange: handleChange,
            placeholder: 'Nombre',
            required: true,
          })
        ),
        // Campo Correo Electrónico
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('i', { className: 'fas fa-envelope' }),
          React.createElement('input', {
            type: 'email',
            name: 'email',
            value: formData.email,
            onChange: handleChange,
            placeholder: 'Correo Electrónico',
            required: true,
          })
        ),
        // Campo Mensaje
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('i', { className: 'fas fa-comment' }),
          React.createElement('textarea', {
            name: 'message',
            value: formData.message,
            onChange: handleChange,
            placeholder: 'Mensaje',
            required: true,
          })
        ),
        // Mensaje de error
        formError &&
          React.createElement('p', { className: 'form-error' }, formError),
        // Botón de envío
        React.createElement(
          'button',
          { type: 'submit', className: 'submit-button' },
          'Enviar'
        )
      )
    )
  );
};

export default ContactForm;


