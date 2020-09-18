import React,{ Component } from 'react'

class App extends Component{

    state = { number: this.props.number }

    handleIncrement = ()=>{
        this.setState(
            {
                number: this.state.number + 1
            }
        )
    }

    handleDecrement = ()=>{
        this.setState(
            {
                number: this.state.number - 1
            }
        )
    }

    handleReset = ()=>{
        this.setState(
            {
                number: 0
            }
        )
    }


    render(){
        return(
            <>
            <h1>State with events</h1>
            <h2>State: {this.state.number}</h2>
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={this.handleDecrement}>Decrement</button>
            <button onClick={this.handleReset}>Reset</button>
            </>
        );
    }

    
}

App.defaultProps = {
    number: 0
}

export default App