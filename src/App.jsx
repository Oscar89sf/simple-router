// Homework:
// 1 Create a new react app (vite link above)
// 2 Create a component
// 3 Include that component in App.jsx
// 4 Pass a prop into the component at #2
// 5 Add some state to the App component
// 6 Optional, update the state created at #5
import React, { Component } from "react";
class App extends Component {
  state = { todos: ["Buy Cereals", "Buy Cheese"] };
  onInput = (e) => {
    this.setState({ input: e.target.value });
  };
  onClick = () => {
    const todos = [...this.state.todos];
    todos.push(this.state.input);
    this.setState({ todos });
  };
  render() {
    console.log(this.state);
    const { todos } = this.state;
    return (
      <>
        <h1>Todo list</h1>
        <div>
          <input type="text" onInput={this.onInput} />
          <button onClick={this.onCLick}>Add</button>
          <ul>
            {todos.map((todo) => {
              return <li>{todo}</li>;
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
