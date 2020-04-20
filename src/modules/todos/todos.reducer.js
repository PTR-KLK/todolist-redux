import { TODOS_ACTION_TYPES } from "./todos.action";

const INITIAL_STATE = {
  todos: [],
  isError: false,
  isLoading: false,
  addTodoInput: "",
  searchTodoInput: "",
  selectTodoList: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.SELECT_TODO_LIST:
      return (state = {
        ...state,
        selectTodoList: action.value,
      });
    case TODOS_ACTION_TYPES.SEARCH_TODO_INPUT:
      return (state = {
        ...state,
        searchTodoInput: action.value,
      });
    case TODOS_ACTION_TYPES.ADD_TODO_INPUT:
      return (state = {
        ...state,
        addTodoInput: action.value,
      });
    case TODOS_ACTION_TYPES.ADD_TODO:
      return (state = {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.value,
            completed: false,
            key: action.key,
          },
        ],
      });
    case TODOS_ACTION_TYPES.REMOVE_TODO:
      return (state = {
        ...state,
        todos: state.todos.filter((todo) => todo.key !== action.key),
      });
    case TODOS_ACTION_TYPES.MARK_TODO:
      const newTodos = [...state.todos];
      newTodos.map((element) =>
        element.key === action.key
          ? (element.completed = !element.completed)
          : null
      );

      return (state = {
        ...state,
        todos: newTodos,
      });
    case TODOS_ACTION_TYPES.FETCH_SUCCESS_TODOS:
      return (state = {
        ...state,
        todos: action.value,
        isLoading: false,
        isError: false,
      });
    case TODOS_ACTION_TYPES.FETCH_ERROR_TODOS:
      return (state = {
        ...state,
        isError: true,
        isLoading: false,
      });
    case TODOS_ACTION_TYPES.FETCH_LOADING_TODOS:
      return (state = {
        ...state,
        isError: false,
        isLoading: true,
      });
    default:
      return state;
  }
};
