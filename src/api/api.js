const URL_API = "https://salty-hollows-12205.herokuapp.com/api";

export const getMessageFromServer = async () => {
  const response = await fetch(URL_API);
  return response.json();
} 

export const addMessageToServer = async (id, name, message,) => {
  const data = {id, name, message, }

  const response = await fetch(URL_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return response.json();
}
