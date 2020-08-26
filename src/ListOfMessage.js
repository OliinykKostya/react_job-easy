import React from 'react';

const ListOfMessage = ({ data }) => {
  return (
    <>
      <ul>
        {data.map(({ id ,name, message }) =>
          <div key={id}>
            <li>name : {name}</li>
            <li>message : {message}</li>
          </div>
        )}
      </ul>
    </>
  )
}

export default ListOfMessage