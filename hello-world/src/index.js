import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import './index.css';

function App(){
  return (
    <div>
    <Clock />
    <Clock />
    <Toggle />
    <Clock />
    </div>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    //this binding is necessary to make 'this' work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}  

function FormattedDate(props){
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
     super(props);
     this.state = {date: new Date()};
  }

  componentDidMount() {
     this.timerId = setInterval(
	() => this.tick(),
	1000
     );
}

  componentWillUnmount() {
     clearInterval(this.timerId);
}

  tick() {
    this.setState({
	date: new Date()
    /*or (prevState, props) => ({ counter: prevState.counter + props.increment*/
   });
}

  render() {
    return (
   	<div>
	    <h1>Hello, world!</h1>	
	    <FormattedDate date={this.state.date} />
	</div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
