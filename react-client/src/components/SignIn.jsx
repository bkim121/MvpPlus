import React from 'react';
import { Container, Header, Input, Segment, Button} from 'semantic-ui-react';
import $ from 'jquery';
import ListItem from './ListItem.jsx';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  checkNewUser() {
    var data = {
      username: this.state.username,
      password: this.state.password
    }
    console.log(data)
    $.ajax({
      url: '/signup',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: (data) => console.log(data)
    })
  }

  usernameCreate(e) {
    this.setState({ username: e.target.value });
    console.log(e.target.value)
  }

  passwordCreate(e) {
    this.setState({ password: e.target.value });
    console.log(e.target.value)
  }

  render () {
    return (
      <Container text>
        <Header as='h2' textAlign='center'>Create A New User</Header>
        <Segment.Group>
          <Segment.Group>
            <Segment textAlign='center'>UserName: <Input placeholder='Username...' onChange={this.usernameCreate.bind(this)}/></Segment>
            <Segment textAlign='center'>Password: <Input placeholder='Password...' onChange={this.passwordCreate.bind(this)}/></Segment>
            <Segment textAlign='center' onClick={this.checkNewUser.bind(this)}><Button>SignUp</Button></Segment>
          </Segment.Group>
        </Segment.Group>
      </Container>
    )
  }
}

export default SignIn;