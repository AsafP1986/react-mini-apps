import React, { Component } from "react";
import Todos from "./components/Todos";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: "1", title: "make a cafe", completed: false },
        { id: "2", title: "make a tea", completed: false },
        { id: "3", title: "make a coco", completed: true },
        { id: "4", title: "make a hit", completed: false }
      ]
    };
  }
  isMarked() {
    return console.log("marked from app");
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} isMarked={this.isMarked} />
      </div>
    );
  }
}

export default App;
