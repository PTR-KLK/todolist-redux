export const selectAddTodoInput = (state) =>
  state.todos.addTodoInput;

export const selectSearchTodoInput = (state) =>
  state.todos.searchTodoInput;

export const selectSelectTodoList = (state) =>
  state.todos.selectTodoList;

export const selectTodos = (state) =>
  state.todos.todos;

export const selectTodosDone = (state) =>
  selectTodos(state).filter(element => element.completed);

export const selectTodosProgress = (state) =>
  selectTodos(state).filter(element => !element.completed);

export const selectTodosFetchError = (state) =>
  state.todos.isError;

export const selectTodosFetchLoading = (state) =>
  state.todos.isLoading;