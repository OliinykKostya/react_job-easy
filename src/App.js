import React, { useState, useEffect } from 'react';
import './App.scss';
import Form from './components/Form/Form';
import ListOfMessage from './components/ListOfMessages/ListOfMessages';
import { getMessageFromServer, addMessageToServer } from './api/api'
import Spinner from './components/Spinner/Spinner';

const App = () => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    refreshMessage()
  }, [])

  const refreshMessage = async () => {
    setLoading(true)
    await getMessageFromServer()
      .then(data => setData(data))
      .catch(() => setError(true))
    setLoading(false)
  }

  const addMessage = async (name, message) => {
    await addMessageToServer(Date.now() + '', name, message,)
    refreshMessage()
  }

  return (
    <div className="App" >
      <div className="container__form">
        <Form addMessage={addMessage} />
      </div>
      <div className="container__list">
        {isLoading
          ? <Spinner />
          : error
            ? <p>Error, Data was not find</p>
            : <ListOfMessage data={data} />
        }
      </div>
    </div>
  );
}

export default App;
