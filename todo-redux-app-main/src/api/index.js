// TIP: MAKE SURE to include "Content-Type" header with the value of "application/json"
// also don't forget that the body should contain JSON-formatted data

const BASE_URL = "http://localhost:3000";

export const todoAPI = {
  fetchAll: () => fetch(`${BASE_URL}/todos`).then((res) => res.json()),
  updateOne: ({ id, todo }) => {
    // TODO: return a fetch call to an appropriate API route to update todo
    // URL: /todos/{id} -- the id here is the id value of the todo item to be updated
    // HINT: to update an existing record you need to use PATCH method
    const options = {
      method: "PATCH", // Use PATCH to update a todo
      headers: {
        "Content-Type": "application/json", // Set Content-Type header
      },
      body: JSON.stringify(todo), // Convert todo to JSON
    };
    return fetch(`${BASE_URL}/todos/${id}`, options).then((res) => res.json());
  },
  createOne: (todo) => {
    // TODO: return a fetch call to an appropriate API route to create todo
    // URL: /todos
    // HINT: to create a new todo item, use POST method
    const options = {
      method: "POST", // Use POST to create a new todo
      headers: {
        "Content-Type": "application/json", // Set Content-Type header
      },
      body: JSON.stringify(todo), // Convert todo to JSON
    };
    return fetch(`${BASE_URL}/todos`, options).then((res) => res.json());
  },
  deleteOne: (id) => {
    // TODO: return a fetch call to an appropriate API route to delete todo
    // URL: /todos/{id} -- the id here is the id value of the todo item to be deleted
    // HINT: to delete a todo item, use DELETE method
    const options = {
      method: "DELETE", // Use DELETE to delete a todo
      headers: {
        "Content-Type": "application/json", // Set Content-Type header
      },
    };
    return fetch(`${BASE_URL}/todos/${id}`, options).then((res) => res.json());
  },
};
