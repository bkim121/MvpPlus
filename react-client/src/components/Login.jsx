import React from 'react';
import PasswordMask from 'react-password-mask';
import $ from 'jquery';
import { Container, Header, Input, Segment, Button} from 'semantic-ui-react'
import SignIn from './SignIn.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      page: 'login'
    }
  }


  usernameInsert(e) {
    this.setState({ username: e.target.value });
  }

  passwordInsert(e) {
    this.setState({ password: e.target.value });

  }

  checkUser() {
    if (this.state.password.length !== 0){
      var data = {
        username: this.state.username,
        password: this.state.password
      }
      $.ajax({
        url: '/login',
        contentType: 'application/JSON',
        method: 'POST',
        data: JSON.stringify(data),
        success: (data) => {
          if (data === 'match'){
            this.props.change(this.state.username)
          } else {
            alert('wrong password')
          }
        }
      })
      // this.props.change()
    }
  }

  signUp() {
    this.setState({
      page: 'signup'
    })
  }

  changeView() {
    if (this.state.page === 'login'){
      return (
        <Container text>
        <Header as='h2' textAlign='center'>Login</Header>
        <Segment.Group>
          <Segment.Group>
            <Segment textAlign='center'>UserName: <Input placeholder='Username...' onChange={this.usernameInsert.bind(this)}/></Segment>
            <Segment textAlign='center'>Password: <Input placeholder='Password...' type="password" onChange={this.passwordInsert.bind(this)}/></Segment>
            <Segment textAlign='center' onClick={this.checkUser.bind(this)}><Button>Login</Button></Segment>
          </Segment.Group>
          <Segment textAlign='center'><Button onClick={this.signUp.bind(this)}>First Time User?</Button></Segment>
        </Segment.Group>
      </Container>
      )
    } else if (this.state.page === 'signup') {
      return (
        <SignIn newUser={this.props.change.bind(this)}/>
      )
    }
  }

  render () {
    return (
      <div> {this.changeView()} </div>
    )
  }
}


export default Login;


// <PasswordMask placeholder="Password..." value={this.state.password} onChange={this.passwordInsert.bind(this)}/>