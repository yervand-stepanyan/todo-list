async function request({ method, body, id }) {
  const URL = `${process.env.REACT_APP_API_ROOT}${id || ''}`;
  const fetchOption = body
    ? {
        body: JSON.stringify(body) || '',
        headers: {
          'Content-Type': 'application/json',
        },
        method,
      }
    : {
        method,
      };

  const response = await fetch(URL, fetchOption);

  return response.json();
}

const API = {
  deleteTodo: id => request({ method: 'DELETE', id }),
  getTodos: () => request({ method: 'GET' }),
  postTodo: body => request({ method: 'POST', body }),
  updateTodo: body => request({ method: 'POST', body }),
};

export default API;
