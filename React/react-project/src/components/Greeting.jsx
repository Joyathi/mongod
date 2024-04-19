import React,{Component} from 'react';

class Greeting extends Component{
    render(){
        return <h1>Hello world{this.props.name}, I am a class component</h1>;
    }
}
export default Greeting;