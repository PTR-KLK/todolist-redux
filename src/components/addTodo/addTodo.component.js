import React from "react";
import { connect } from "react-redux";
import {
  ACTION_ADD_TODO,
  ACTION_ADD_TODO_INPUT,
} from "../../modules/todos/todos.action";
import {
  selectTodos,
  selectAddTodoInput,
} from "../../modules/todos/todos.selector";
import { createTaskKey, addToDatabase } from "../../modules/databaseTools";
import { AddTodoForm, AddTodoTextInput, AddTodoButton } from "./addTodo.style";

const API_URL = "https://isajfdd14-ptrklk-homework.firebaseio.com/todos.json";

function AddTodoComponent(props) {
  const handleChange = (e) => props.actionInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskKey = createTaskKey(props.inputValue);

    addToDatabase(taskKey, props.inputValue, API_URL);

    props.actionAddTodo(props.inputValue, taskKey);

    props.actionInputValue("");
  };

  return (
    <div>
      <AddTodoForm onSubmit={handleSubmit}>
        <AddTodoTextInput
          type="text"
          value={props.inputValue}
          onChange={handleChange}
          placeholder="Dodaj zadanie..."
        />
        <AddTodoButton type="subit">Dodaj</AddTodoButton>
      </AddTodoForm>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: selectTodos(state),
  inputValue: selectAddTodoInput(state),
});

const mapDispatchToProps = (dispatch) => ({
  actionAddTodo: (todo, id) => dispatch(ACTION_ADD_TODO(todo, id)),
  actionInputValue: (value) => dispatch(ACTION_ADD_TODO_INPUT(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoComponent);
