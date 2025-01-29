import React, { useState } from 'react'
import emailjs from 'emailjs-com'

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

  const showNotification = (message) => {
    const notification = document.createElement("div")
    notification.className = "notification"
    notification.innerText = message
    document.body.appendChild(notification)
  
    setTimeout(() => {
      notification.remove();
    }, 5000);
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID, 
      e.target,                         
      process.env.REACT_APP_USER_ID      
    )
    .then((result) => {
      console.log('Message sent successfully:', result.text)
      showNotification("Message sent successfully!")
      clearData()
    }, (error) => {
      console.log('Error sending message:', error.text)
      showNotification("Error sending form: " + error)
    })
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
