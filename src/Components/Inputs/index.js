import { Component } from 'react'

export default class Inputs extends Component{
    constructor(props){
        super(props)
        this.state={
                flag:true,
                min:0,
                max:0,
                step:0
        }
    }


    enterButtonClickHandler = () =>{
        this.setState({flag:false})
        this.props.forFlagChange()
    }


    render(){
        return(
            <>
                {this.state.flag ? <div>
                    <input type="number" name={'min'} onChange={this.props.handleChanger}/>{'<-'}min<br/>
                    <input type="number" name={'max'} onChange={this.props.handleChanger}/>{'<-'}max<br/>
                    <input type="number" name={'step'} onChange={this.props.handleChanger}/>{'<-'}step<br/>
                    <button onClick={this.enterButtonClickHandler}>Enter</button>
                </div>:<>You Entered value</>}
            </>
        )
    }
}