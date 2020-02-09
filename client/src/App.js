import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavBar from "./components/AppNavBar";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <AppNavBar></AppNavBar>
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default App;
