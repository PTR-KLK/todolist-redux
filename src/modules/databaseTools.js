export const createTaskKey = (input) => {
  function acronym(text) {
    return text.split(/\s/).reduce(function (accumulator, word) {
      return accumulator + word.charAt(0);
    }, "");
  }

  const timeStamp = Math.floor(Date.now() / 1000);

  return timeStamp + acronym(input);
};

export const removeFromDatabase = (key, url) => {
  return fetch(url + `/${key}.json`, {
    method: "DELETE",
  });
};

export const addToDatabase = (key, value, url) => {
  return fetch(url, {
    method: "PATCH",
    body: JSON.stringify({
      [key]: {
        title: value,
        completed: false,
      },
    }),
  });
};

export const patchCompleted = (key, todos, url) => {
  const todoElement = todos.find((e) => e.key === key);

  return fetch(url + `/${key}.json`, {
    method: "PATCH",
    body: JSON.stringify({
      completed: todoElement.completed,
    }),
  });
};
