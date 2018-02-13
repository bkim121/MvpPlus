import React from 'react';
import HomeView from './HomeView.jsx';
import NoUserView from './NoUserView.jsx';
import { Divider, Segment } from 'semantic-ui-react';

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home'
    }
  }

  surveyView() {
    if (this.state.view === 'home' && this.props.user){
      return <HomeView/>
    } else {
      return <NoUserView/>
    }
  }


  render () {
    return (
      <Segment style={{ float: 'left', 'width': '77%', position: 'relative', 'marginTop': '-40px'}}>
      <div style={{'height': '450px'}}> {this.surveyView()} </div>
      <Divider section />
      <div style={{'height': '100px'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore... </div>
      </Segment>
    )
  }
}

export default Survey;