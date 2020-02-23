import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.message = props.message;
  }

  render() {
    return (
      <div className="App">
        <h1>{this.title}</h1>
        <p>{this.message}</p>
      </div>
    );
  }
}

export default App;
