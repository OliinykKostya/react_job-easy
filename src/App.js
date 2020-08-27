import React, { useState, useEffect } from 'react';
import './App.scss';
import Form from './components/Form/Form';
import ListOfMessage from './components/ListOfMessages/ListOfMessage';
import { getMessageFromServer, addMessageToServer } from './api/api'
import Spinner from './components/Spinner/Spinner';

const App = () => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    refreshMessage()
  }, [])

  const refreshMessage = async () => {
    setLoading(true)
    await getMessageFromServer()
      .then(data => setData(data))
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
          : data ? <ListOfMessage data={data} test={test} /> : "ERROR Data not Found"
        }
      </div>
    </div>
  );
}

export default App;
