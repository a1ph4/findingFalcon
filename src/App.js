import React, { Component } from "react";
import { Header, HeaderLinks } from "./Component-styles/header-styles";

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <h3>Finding Falcon</h3>
          <HeaderLinks>
            <a href="/">Home</a>
          </HeaderLinks>
        </Header>
      </div>
    );
  }
}

export default App;
