import React from 'react';
import { Divider, Segment } from 'semantic-ui-react'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <Segment style={{ float: 'right', width: '30%', position: 'relative', marginTop: '0.5%', marginBottom: '5%'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
      </Segment>
    )
  }
}

export default List;