const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
  console.log(response.data);
  //   const todo = response.data;
  //   const ID = todo.ID;
  //   const title = todo.title;
  //   const finished = todo.finished;

  //   console.log(`The todo with ID: ${ID} has a title of: ${title} is it finished? ${finished}`);
});
