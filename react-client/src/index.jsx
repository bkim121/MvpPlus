import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Button, Header } from 'semantic-ui-react'
import List from './components/List.jsx';
import Login from './components/Login.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      user: undefined,
      current: 'Home'
    }
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/items',
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  currentView() {
    if (this.state.current === 'Home') {
      return <List items={this.state.items}/>
    } else if (this.state.current === 'Login'){
      return <Login/>
    }
  }


  loginStatus() {
    if (this.state.user === undefined){
      return <Button floated='right' onClick={this.changeLogin.bind(this)}>Login</Button>
    } else {
      return <Button floated='right' onClick={this.logOut.bind(this)}>Logout</Button>
    }
  }

  changeLogin() {
    console.log('hi')
    this.setState({ current: 'Login'})
  }

  logOut() {
    console.log('out')
  }

  render () {
    return (
    <div>
      <Header textAlign='center'>LinkSpeak</Header>
      <div> { this.loginStatus() } </div>
      <div> { this.currentView() } </div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));