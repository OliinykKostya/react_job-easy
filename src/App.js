import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import ListOfMessage from './ListOfMessage';
import {getMessageFromServer, addMessageToServer} from './api'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    refreshMessage()
  }, [])

  const refreshMessage = async () => {
    console.log("refreshFilms")

    await getMessageFromServer()
      .then(data => setData(data))
  }

  const addMessage = async (name, message) => {
    await addMessageToServer(Date.now() + '', name, message, )
    refreshMessage()
    console.log(name, message)

  }

  return (
    <div className="App">
      <div>

        <Form addMessage={addMessage} />
        {data ? <ListOfMessage data={data} /> : 'data not found'}

      </div>
    </div>
  );
}

export default App;
