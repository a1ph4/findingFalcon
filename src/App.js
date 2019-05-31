import React, { Component } from "react";
import { Header, HeaderLinks } from "./Component/styled-components";
import Home from "./Component/home";
import Result from "./Component/result";
import { Provider } from "react-redux";
import {store, reInit} from "./store";
import './index.css'
class App extends Component {
  constructor(){
    super()
    this.state={
      result:undefined
    }
    this.finalResult=this.finalResult.bind(this)
    this.pageReset=this.pageReset.bind(this)
  }
  finalResult(result, time) {
    this.setState({result: result, time:time});
  }
  pageReset(){
    this.setState({result:undefined})
    reInit()
  }
  render() {
    let page;
    if(!this.state.result){
      page = <Home finalResult={this.finalResult}/>
    }else{
      page= <Result result={this.state.result} time={this.state.time}/>
    }
    return (
        <Provider store={store}>
          <div>
            <Header>
              <h3>Finding Falcone</h3>
              <HeaderLinks>
                <button href="#" onClick={this.pageReset}>Reset</button>
              </HeaderLinks>
            </Header>
            {page}
          </div>
        </Provider>
    );
  }
}

export default App;
