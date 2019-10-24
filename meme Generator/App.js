import React, { Component } from "react";
import Header from "./Header.js";
import MemeGenerator from "./MemeGenerator.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
        <h1>Hello react</h1>
      </div>
    );
  }
}

export default App;
