import React, { useState } from 'react';
import './ContactForm.css';
import { send } from 'emailjs-com';

const ContactForm = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    window.Email.send({
      Host: "smtp.your-email-provider.com", // Por ejemplo: smtp.gmail.com
      Username: "your-email@example.com", // Tu correo
      Password: "your-password", // Tu contraseña o token SMTP
      To: "destination-email@example.com", // Correo de destino
      From: "your-email@example.com", // El correo desde el cual enviarás
      Subject: "Nuevo mensaje de tu formulario de contacto",
      Body: `Nombre: ${toSend.from_name} <br> Email: ${toSend.reply_to} <br> Mensaje: ${toSend.message}`,
    }).then(
      (message) => alert("El correo fue enviado correctamente: " + message),
      (error) => alert("Hubo un error al enviar el correo: " + error)
    );
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <input
        type="text"
        name="from_name"
        placeholder="Nombre"
        value={toSend.from_name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="reply_to"
        placeholder="Correo electrónico"
        value={toSend.reply_to}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Mensaje"
        value={toSend.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
