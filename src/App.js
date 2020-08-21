import React, { Component } from 'react';
import './App.css';
import * as pixis from './pages/pixi';


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
  }

  setPage = () => {
    let page_keys = Object.keys(pixis)
    return page_keys.map((val,index) => <li onClick={this.changePage.bind(this)} data-key={val} key={val}>{val}</li>);
  }

  changePage = (e) => {
    let app = document.querySelector(".App");
    app.innerHTML = ""
    let key = e.currentTarget.dataset.key;
    if(key === "home"){

    } else {
      let Foo = pixis[key]
      const pixi = new Foo(app);
      
      let init = {
        width:600, 
        height:600, 
      }
      pixi.init(init)
    }
  }
  
  render(){
    return (
      <div className="Main">
        <ul className="page-list">
          <li data-key="home" onClick={this.changePage.bind(this)}>home</li>
          {this.setPage()}
        </ul>
        <div className="App"></div>
      </div>
    )
  }
}
