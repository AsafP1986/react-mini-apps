import React, { Component } from "react";
// import Todo from './components/Todo';

class Todoitem extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.todo);
  }
  //   componentDidMount() {
  //     let allTodos = this.state.todos.map(task => (
  //       <div>
  //         <h1>{task.id}</h1>
  //         <h2>{task.title}</h2>
  //       </div>
  //     ));
  //   }
  getStyle() {
    if (this.props.todo.completed) {
      return {
        backgroundColor: "#d0d0d0",
        margin: 0,
        padding: 0,
        textDecoration: "line-through"
      };
    }

    return {
      backgroundColor: "#d0d0d0",
      margin: 0,
      padding: 0,
      textDecoration: "none"
    };
  }

  render() {
    return (
      <div>
        <p style={this.getStyle()}>
          <label>
            <h3>
              <input
                type="checkbox"
                onChange={this.props.isMarked.bind(this, this.props.todo.id)}
              />
              {this.props.todo.title}
            </h3>
          </label>
        </p>
      </div>
    );
  }
}

export default Todoitem;
