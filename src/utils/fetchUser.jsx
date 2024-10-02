export const getUser = (setUser, count) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
    .then((response) => response.json())
    .then((json) => setUser(json));
};
