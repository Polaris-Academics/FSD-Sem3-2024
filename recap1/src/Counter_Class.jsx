import React, { Component } from 'react'

export default class Counter_Class extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    componentDidMount(){
        
    }
    componentDidUpdate(prevProps,prevState){

    }
    componentWillUnmount(){
        
    }

    sub = () => {
        this.setState({count:this.state.count-1});
    }
    add = () => {
        this.setState({count:this.state.count+1});
    }

  render(){
    return(
        <>
        <h3>Counter Button</h3>
        <div>
            <button onClick={this.sub}>-</button>
            <button onClick={this.add}>+</button>
        </div>
        <div>Count value : {this.state.count}</div>
        </>
    )

  }
}
