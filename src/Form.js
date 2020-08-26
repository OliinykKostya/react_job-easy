import React, { useState } from 'react';

const Form = ({ addMessage }) => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handlSubmit = (event) => {
    event.preventDefault();

    addMessage(name, message)
    setName('')
    setMessage('')
  }

  return (
    <form onSubmit={handlSubmit}>

      <label>
        Name
        <input
          type="text"
          value={name}
          placeholder="Put name here"
          required
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      
      <br />

      <label>
        Put message
        <textarea
          type="text"
          value={message}
          required
          placeholder="Put message here"
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>

      <button type="submit">Send Message</button>

    </form>
  )
}

export default Form