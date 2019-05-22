import React, { Component } from "react";
import { Header, HeaderLinks } from "./Component/styled-components";
import Home from "./Component/home";
import Result from "./Component/result";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import store from "./store";
class App extends Component {
  finalResult(result) {
    console.log(result);
  }
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <Header>
              <h3>Finding Falcon</h3>
              <HeaderLinks>
                <Link to="/">Home</Link>
                <Link to="/result">Result</Link>
              </HeaderLinks>
            </Header>
          </div>
          <div>
            <Route
              exact
              path="/"
              render={() => <Home finalResult={this.finalResult} />}
            />
            <Route exact path="/result" component={Result} />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
