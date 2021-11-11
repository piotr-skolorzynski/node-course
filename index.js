const fetch = require("node-fetch");

const asyncFunction = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(data);
};

asyncFunction();

