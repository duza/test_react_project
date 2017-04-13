import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import './index.css';

class FormCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checked: {'A': false, 'B': true, 'C': false}};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    // Copy the object so we don't mutate the old state.
    // (This requires an Object.assign polyfill):
    const checked = Object.assign({}, this.state.checked)
    if (!checked[value]) {
      checked[value] = true;
    } else {
      checked[value] = false;
    };
    this.setState({checked});
  }

  handleSubmit(event) {
    alert('Boxes checked: ' +
      (this.state.checked.A ? 'A ' : '') +
      (this.state.checked.B ? 'B ' : '') +
      (this.state.checked.C ? 'C' : '')
    );
  }

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            value="A"
            onChange={this.handleChange} /> 
          Option A
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="B"
            onChange={this.handleChange}
            defaultChecked={true} /> 
          Option B
        </label>
        <br />
        <label>
        <input
          type="checkbox"
          value="C"
          onChange={this.handleChange} /> 
          Option C
        </label>
        <br />
        <br />
        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

// Control value in elements: input & textarea 
class FormExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Text field or Textarea value is: ' + this.state.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="edit me"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br />
        <textarea
           name="description"
           value={this.state.value}
           onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

class FormSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'B'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Select value is: ' + this.state.value);
  }

  render() {
    return (
      <div>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="A">Apple</option>
          <option value="B">Banana</option>
          <option value="C">Cranberry</option>
        </select>
        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

// Different [un]control value in elements
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', value2: '', value3: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleUncontrol = this.handleUncontrol.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value.substr(0, 140)
    });
  } 
  
  handleSubmit(event) {
    alert('Text field value is: ' + this.state.value);
  }
  
  handleClearClick() {
    this.setState({
     value: ''
    });
  }

  handleUncontrol(event) {
     this.setState({
       value2: event.target.value
     });
  }
  
  handleTextArea(event) {
    this.setState({
      value3: event.target.value
    });
    console.log(this.state);
  }

  render(){
    return (
      <div>
        <MyInput value={this.state.value} handler={this.handleChange} />      
        <button onClick={(e) => {this.handleSubmit(e); this.handleClearClick()}}>
          Submit
        </button><br />
       <input type="text" onClick={this.handleUncontrol} defaultValue="Hello2!" />
       <br />
       <label for="radio1">Test radio input
       <input type="radio" id="radio1" defaultChecked={false} /></label>
       <br />
       <select name="UncontrolSelect" defaultValue="2">
         <option value="1">Javascript</option>
         <option value="2">Python</option>
       </select>
       <br />
       <label for="checkbox1">Checkbox for tests</label>
       <input type="checkbox" id="checkbox1" defaultChecked={true} />
       <br />
       <textarea name="description" value={this.state.value3} onChange={this.handleTextArea} />
       <br />
      <select multiple={true} defaultValue={['B', 'C']}> 
        <option value="A">Apple</option>
        <option value="B">Banana</option>
        <option value="C">Cranberry</option>
      </select> 
      </div> 
    );
  }
}

function MyInput(props){
  return (
     <input
       type="text"
       placeholder="Hello!"
       value={props.value}
       onChange={props.handler} />
  );
}

function Blog(props) {
  const header = (
    <h2>Example using same keys(id)
       for create two different lists</h2>
  );
  const listForSidebar = props.posts;
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      <br />
      {header}
      <ul>
        {listForSidebar.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
      <hr />
      {content}
      <br />
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

function ListItem(props) {
  // Correct. There is no need to specify the key here:
  console.log(props.key);//Upon attempt to output prop key - wil get undefined
  return <li>{props.value}</li>
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct. Key should be specified inside the array
    <ListItem key={number.id} value={number.text} />
  );
  console.log(listItems);
  return (
    <ul>{listItems}</ul>
  );
}
//Create array of objects with properties: id, text.
const numbers = [1, 2, 3, 4, 5].map(item =>
  ({id: item, text: `Item ${item}`}));

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
    <Blog posts={posts} />
    <Clock />
    <NumberList numbers={numbers} />
    <Clock />
    <Toggle />
    <Clock />
    <Mailbox unreadMessages={messages} />
    <Page /> 
    <br /><hr />
    <Form />
    <FormExample />
    <FormSelect />
    <FormCheckbox />
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
