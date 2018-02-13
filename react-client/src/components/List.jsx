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
      <Segment style={{ float: 'right', width: '20%', position: 'relative', 'marginTop': '-40px'}}>
      <div style={{'height': '610px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore... </div>
      </Segment>
    )
  }
}

export default List;