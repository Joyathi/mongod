import { Component } from "react";

class Counter extends Component {
    constructor(props){
        super(props);//call super keyword
        this.state ={count:0};
    }

    increment = () =>{
        this.setState({count :this.state.count +1});
    }
    render (){
        {console.log("components rendering...");}
        return(
            <>
            <h1>Count :{this.state.count}</h1>
            <button onClick={this.increment}>increment</button>
            </>
        )
    }
}

export default Counter;
