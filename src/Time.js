import React, { Component } from 'react'

class Time extends Component {
    constructor(props){
        super(props);
        this.state = {time: new Date()}
        console.log("in the constructor")
    }

    componentDidMount(){
        console.log("in the mount");
        this.timerID = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    render() {
        console.log("in the render")
        return <h1>{this.state.time.getSeconds()}</h1>
    }
}

export default Time;