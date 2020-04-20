import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  TodoTextInput,
  TodoElement,
  TodoText,
  TodoCheckbox,
  TodoButton,
  TodoSelect,
} from "./todos.style";
import {
  ACTION_SEARCH_TODO_INPUT,
  ACTION_SELECT_TODO_LIST,
  ACTION_FETCH_INIT_TODOS,
  ACTION_MARK_TODO,
  ACTION_REMOVE_TODO,
} from "../../modules/todos/todos.action";
import {
  selectSearchTodoInput,
  selectSelectTodoList,
  selectTodos,
  selectTodosDone,
  selectTodosProgress,
  selectTodosFetchError,
  selectTodosFetchLoading,
} from "../../modules/todos/todos.selector";
import {
  patchCompleted,
  removeFromDatabase,
} from "../../modules/databaseTools";

const API_URL = "https://isajfdd14-ptrklk-homework.firebaseio.com/todos";

function TodosComponent(props) {

  const { actionFetchTodos } = props;
  
  useEffect(() => {
    actionFetchTodos();
  }, [actionFetchTodos]);

  const handleMark = (element) => {
    props.actionMarkTodo(element);

    patchCompleted(element, props.todos, API_URL);
  };

  const handleDelete = (element) => {
    props.actionRemoveTodo(element);

    removeFromDatabase(element, API_URL);
  };

  const handleSelect = (event) => {
    props.actionActiveList(event.target.value);
  };

  const handleFilter = (event) => {
    props.actionSearchFilter(event.target.value);
  };

  const filterExp = new RegExp(props.searchFilter, "i");

  const todoListFilter = () => {
    return (props.activeList === "all"
      ? props.todos
      : props.activeList === "done"
      ? props.todosDone
      : props.activeList === "progress"
      ? props.todosProgress
      : props.todos
    ).filter((e) => filterExp.test(e.title));
  };

  const renderTodos = (todoList) =>
    todoList.map((todoElement) => (
      <TodoElement key={todoElement.key}>
        <TodoCheckbox
          active={todoElement.completed}
          type="checkbox"
          onClick={() => handleMark(todoElement.key)}
        >
          {todoElement.completed
            ? String.fromCharCode("0x2713")
            : String.fromCharCode("0x2022")}
        </TodoCheckbox>
        <TodoText active={todoElement.completed}>{todoElement.title}</TodoText>
        <TodoButton onClick={() => handleDelete(todoElement.key)}>x</TodoButton>
      </TodoElement>
    ));

  const renderSuccess = () => (
    <>
      <TodoSelect onChange={handleSelect}>
        <option value="all">Wszystkie</option>
        <option value="done">Ukończone</option>
        <option value="progress">Nieukończone</option>
      </TodoSelect>
      <TodoTextInput
        type="text"
        value={props.searchFilter}
        onChange={handleFilter}
        placeholder="Wyszukaj zadanie po nazwie..."
      />
      {renderTodos(todoListFilter())}
    </>
  );

  return (
    <>
      {!props.todosFetchError && !props.todosFetchLoading && renderSuccess()}

      {props.todosFetchError && <div>Błąd pobierania z API</div>}

      {props.todosFetchLoading && <div>Ładowanie danych...</div>}
    </>
  );
}

const mapStateToProps = (state) => ({
  searchFilter: selectSearchTodoInput(state),
  activeList: selectSelectTodoList(state),
  todos: selectTodos(state),
  todosDone: selectTodosDone(state),
  todosProgress: selectTodosProgress(state),
  todosFetchError: selectTodosFetchError(state),
  todosFetchLoading: selectTodosFetchLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  actionSearchFilter: (value) => dispatch(ACTION_SEARCH_TODO_INPUT(value)),
  actionActiveList: (value) => dispatch(ACTION_SELECT_TODO_LIST(value)),
  actionFetchTodos: () => dispatch(ACTION_FETCH_INIT_TODOS()),
  actionMarkTodo: (key) => dispatch(ACTION_MARK_TODO(key)),
  actionRemoveTodo: (key) => dispatch(ACTION_REMOVE_TODO(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosComponent);
