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
      <Segment style={{ float: 'left', width: '67%', position: 'relative', 'marginTop': '5px', 'marginBottom': '5%'}}>
      <div> {this.surveyView()} </div>
      <Divider section />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
      </Segment>
    )
  }
}

export default Survey;