import React, { Component } from "react";
import Todoitem from "./Todoitem";

class Todo extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.todos);
  }
  //   componentDidMount() {
  //     let allTodos = this.state.todos.map(task => (
  //       <div>
  //         <h1>{task.id}</h1>
  //         <h2>{task.title}</h2>
  //       </div>
  //     ));
  //   }

  render() {
    // console.log(this.state.todos);
    let todos = this.props.todos.map(todo => (
      <Todoitem key={todo.id} todo={todo} isMarked={this.props.isMarked} />
    ));
    return <div>todo from todo comp: {todos}</div>;
  }
}

export default Todo;
