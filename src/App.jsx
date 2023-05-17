// Homework:
// 1 Create a new react app (vite link above)
// 2 Create a component
// 3 Include that component in App.jsx
// 4 Pass a prop into the component at #2
// 5 Add some state to the App component
// 6 Optional, update the state created at #5
import React, { Component } from "react";
import Child from "./components/Child";
class App extends Component {
  state = { count: 1 };
  render() {
    return (
      <>
        <Child name={"Button 1"} />

        <Child name={"Button 2"} />
      </>
    );
  }
}

export default App;
