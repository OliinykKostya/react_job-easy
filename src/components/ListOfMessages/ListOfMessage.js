import React from 'react';

const ListOfMessage = ({ data, test }) => {
  return (
      <ul className="list" onScroll={test}>
        {data.map(({ id, name, message }) =>
          <div key={id} className="card list__card" >
            <h5 className="card-header list__card__h5">{name}</h5>
            <div className="card-body">
              <p className="card-text">{message}</p>
            </div>
          </div>
        )}
      </ul>
  )
}

export default ListOfMessage
