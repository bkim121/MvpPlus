import React from 'react';
import PasswordMask from 'react-password-mask';
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

  checkUser() {
    console.log('hello')
  }

  usernameInsert(e) {
    this.setState({ username: e.target.value });
    console.log(e.target.value)
  }

  passwordInsert(e) {
    this.setState({ password: e.target.value });
    console.log(e.target.value)
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
            <Segment textAlign='center'>Password: <Input placeholder='Password...' onChange={this.passwordInsert.bind(this)}/></Segment>
            <Segment textAlign='center' onClick={this.checkUser.bind(this)}><Button>Login</Button></Segment>
          </Segment.Group>
          <Segment textAlign='center'><Button onClick={this.signUp.bind(this)}>First Time User?</Button></Segment>
        </Segment.Group>
      </Container>
      )
    } else if (this.state.page === 'signup') {
      return (
        <SignIn/>
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