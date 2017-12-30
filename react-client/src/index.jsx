import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Button, Header } from 'semantic-ui-react'
import Home from './components/Home.jsx';
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

  changeUser(user) {
    this.setState({
      user: user,
      current: 'Home'
    })
  }

  logOut() {
    this.setState({
      user: undefined,
    })
  }

  changeLogin() {
    this.setState({ current: 'Login'})
  }

  currentView() {
    if (this.state.current === 'Home') {
      return <Home user={this.state.user}/>
    } else if (this.state.current === 'Login'){
      return <Login change={this.changeUser.bind(this)}/>
    }
  }

  loginStatus() {
    if (this.state.user === undefined){
      return <Button floated='right' onClick={this.changeLogin.bind(this)}>Login</Button>
    } else {
      return <Button floated='right' onClick={this.logOut.bind(this)}>Logout</Button>
    }
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