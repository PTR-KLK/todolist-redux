import mapObjectToArray from "../../modules/mapObjectToArray";

export const TODOS_ACTION_TYPES = {
  ADD_TODO_INPUT: "ADD_TODO_INPUT",
  SEARCH_TODO_INPUT: "SEARCH_TODO_INPUT",
  SELECT_TODO_LIST: "SELECT_TODO_LIST",
  MARK_TODO: "MARK_TODO",
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  FETCH_INIT_TODOS: "FETCH_INIT_TODOS",
  FETCH_SUCCESS_TODOS: "FETCH_SUCCESS_TODOS",
  FETCH_ERROR_TODOS: "FETCH_ERROR_TODOS",
  FETCH_LOADING_TODOS: "FETCH_LOADING_TODOS",
};

export const ACTION_SELECT_TODO_LIST = (value) => {
  return {
    type: TODOS_ACTION_TYPES.SELECT_TODO_LIST,
    value: value,
  };
};

export const ACTION_SEARCH_TODO_INPUT = (value) => {
  return {
    type: TODOS_ACTION_TYPES.SEARCH_TODO_INPUT,
    value: value,
  };
};

export const ACTION_ADD_TODO_INPUT = (value) => {
  return {
    type: TODOS_ACTION_TYPES.ADD_TODO_INPUT,
    value: value,
  };
};

export const ACTION_MARK_TODO = (key) => {
  return {
    type: TODOS_ACTION_TYPES.MARK_TODO,
    key: key,
  };
};

export const ACTION_ADD_TODO = (todo, key) => {
  return {
    type: TODOS_ACTION_TYPES.ADD_TODO,
    value: todo,
    key: key,
  };
};

export const ACTION_REMOVE_TODO = (key) => {
  return {
    type: TODOS_ACTION_TYPES.REMOVE_TODO,
    key: key,
  };
};

export const ACTION_FETCH_INIT_TODOS = () => {
  return (dispatch) => {
    dispatch(ACTION_FETCH_LOADING_TODOS());

    return fetch("https://isajfdd14-ptrklk-homework.firebaseio.com/todos.json")
      .then((response) => response.json())
      .then((json) => {
        return dispatch(ACTION_FETCH_SUCCESS_TODOS(mapObjectToArray(json)));
      })
      .catch((e) => dispatch(ACTION_FETCH_ERROR_TODOS()));
  };
};

export const ACTION_FETCH_SUCCESS_TODOS = (todos) => {
  return {
    type: TODOS_ACTION_TYPES.FETCH_SUCCESS_TODOS,
    value: todos,
  };
};

export const ACTION_FETCH_LOADING_TODOS = () => {
  return {
    type: TODOS_ACTION_TYPES.FETCH_LOADING_TODOS,
  };
};

export const ACTION_FETCH_ERROR_TODOS = () => {
  return {
    type: TODOS_ACTION_TYPES.FETCH_ERROR_TODOS,
  };
};
