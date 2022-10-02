import logo from './logo.svg';
import './App.css';

import {Component} from "react";
import Counter from './Components/Counter/'
import Inputs from './Components/Inputs/'

export class App extends Component {
    constructor() {
        super();
        this.state={
            min:0,
            max:0,
            step:0,
            show:false
        }
    }

    handleChanger =(event) =>{
        this.setState({...this.state,[event.target.name]:+event.target.value})
    }

    changerFlagHandler=() =>{
        this.setState({show:true})
    }

  render() {
    return (
        <>
          <Inputs min={this.state.min} max={this.state.max} step={this.state.step} forFlagChange={this.changerFlagHandler.bind(this)} handleChanger={this.handleChanger.bind(this)}/>
            {this.state.show?<Counter min={this.state.min} max={this.state.max} step={this.state.step}/>:<Counter/>}
        </>
    );
  }
}

export default App;
