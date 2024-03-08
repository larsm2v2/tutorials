import React, {Fragment} from "react";
import './App.css';

//Components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import CompletedTodos from "./components/CompletedTodos";

function App() {
  return <Fragment>
    <div className="container">
      <InputTodo />
      <ListTodos />
      <CompletedTodos />
    </div>
  </Fragment>
}

export default App;
