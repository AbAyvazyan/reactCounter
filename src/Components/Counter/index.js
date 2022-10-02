import { Component } from 'react'

export default class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            value:0
        }
    }

    onPlusButtonHandler=()=>{

        if(this.state.value+this.props.step<=this.props.max) {
            this.setState({value: this.state.value + this.props.step})
        }
    }

    onMinusButtonHandler=()=>{
        if(this.state.value-this.props.step>=this.props.min) {
            this.setState({value: this.state.value - this.props.step})
        }
    }

    render(){
        return(
            <>
                <div className={'counter-div'}>
                <button onClick={this.onPlusButtonHandler}>+</button>
                <span>{this.state.value}</span>
                <button onClick={this.onMinusButtonHandler}>-</button>
                </div>
            </>
        )
    }
}