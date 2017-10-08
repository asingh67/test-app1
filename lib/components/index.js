import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{

    state = {
        answer : 42,
    };

    someAsynFunc(){
        return Promise.resolve(37);
    }

    async componentDidMount(){
        this.setState({
            answer: await this.someAsynFunc(),
        });
    }
    render(){
        return(
            <h2>Hello React Class {this.state.answer} </h2>
        );
        
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
