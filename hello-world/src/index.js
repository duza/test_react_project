import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import './index.css';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li>Item {number}</li>
);
console.log(listItems);
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick(){
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick(){
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

/*    let button = null;
    if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
*/  
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        <p>The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</p>
        {isLoggedIn ? (
           <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
           <LoginButton onClick={this.handleLoginClick} />
        )}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


function App(){
  return (
    <div>
    <LoginControl />
    <Clock />
    <ul>{listItems}</ul>
    <Clock />
    <Toggle />
    <Clock />
    <Mailbox unreadMessages={messages} />
    <Page /> 
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
