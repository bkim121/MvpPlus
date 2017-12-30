import React from 'react';
import { Divider, Segment } from 'semantic-ui-react'

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <Segment style={{ float: 'left', width: '67%', position: 'relative', top: '15px', bottom: '5%'}}>
      <Divider section />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
      </Segment>
    )
  }
}

export default Survey;