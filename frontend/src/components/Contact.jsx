import React, { useState } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const clearData = (e) =>{
    setFormData({
      name:'',
      email:'',
      message:''
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_id', // EmailJS:n palvelu-ID
        'template_id', // EmailJS:n mallin ID
        e.target, // Lomakkeen elementit
        'user_id' // Käyttäjä-ID (löytyy EmailJS:n hallintapaneelista)
      )
      .then(
        (result) => {
          console.log('Sähköposti lähetetty:', result.text);
          clearData();
          alert('Sähköposti on lähetetty!');
        },
        (error) => {
          console.error('Sähköpostin lähetys epäonnistui:', error.text);
          alert('Sähköpostin lähetys epäonnistui, yritä myöhemmin uudelleen.');
        }
      )
  }

  return (
    <div className="contact-form-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact
