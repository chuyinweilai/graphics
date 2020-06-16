import React, { Component } from 'react';
import './App.css';
import { 
  // PIXIJS_BASIC,
  PIXIJS_ROTATE,
  // CACHEASBITMAP
} from './pages/pixi';


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    let app = document.querySelector(".App");
    // const pixi = new PIXIJS_BASIC(app);
    const pixi = new PIXIJS_ROTATE(app);
    // const pixi = new CACHEASBITMAP(app);
    
    
    let init = {
    }
    pixi.init(init)
  }

  // setPixijs = () => {
  // }
  
  render(){
    return (
      <div className="App">
      </div>
    )
  }
}
