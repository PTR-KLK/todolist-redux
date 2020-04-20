import React from "react";
import Todos from "./components/todos/todos.component";
import AddTodo from "./components/addTodo/addTodo.component";
import { TodoContainer } from "./components/todos/todos.style";
import Footer from './components/footer/footer.component'

function App() {
  return (
    <TodoContainer>
      <h1>My TODO List</h1>
      <AddTodo />
      <Todos />
      <Footer />
    </TodoContainer>
  );
}

export default App;
