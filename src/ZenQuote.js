import React, { Component } from 'react';
import axios from 'axios';
import "./ZenQuote.css";

class ZenQuote extends Component {
    constructor(props){
        super(props);
        this.state = {quote: "", isLoaded: false, isVisible: false, isHidden: false};
    }
    componentDidMount(){
        //Load data
        axios.get("https://api.github.com/zen").then(response => {
            setTimeout(
                function() {
                    this.setState({isHidden: true})
                }.bind(this),
                2800
            );
            setTimeout(
                function() {
                    this.setState({quote: response.data, isLoaded: true});
                }.bind(this), 
                3000
            );
            setTimeout(
                function() {
                    this.setState({isVisible: true})
                }.bind(this),
                3200
            );
        });
        //setState with that data
    }

    render() {
        return(
            <div>
                {this.state.isLoaded ? (
                    <div className={"answer " + (this.state.isVisible && "visible") } >
                        <h1>Always remember...</h1>
                        <p>{this.state.quote}</p>
                    </div>
                ) : (
                    <div className={"loader " + (this.state.isHidden && "hidden")} ></div>
                )}
                
                
            </div>
        )
    }
}

export default ZenQuote;