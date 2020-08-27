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
    <form onSubmit={handlSubmit} className="form">

      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Name</label>
        <input
          className="form-control"
          type="text"
          id="exampleFormControlInput1"
          value={name}
          placeholder="Put name here"
          required
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="form-group form__textarea">
        <label htmlFor="exampleFormControlTextarea1">Put message</label>
        <textarea
          className="form-control"
          type="text"
          id="exampleFormControlTextarea1"
          rows="3"
          value={message}
          required
          placeholder="Put message here"
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-info form__button">Send Message</button>

    </form>
  )
}

export default Form
