import React from 'react';
import List from './List.jsx';
import Survey from './Survey.jsx'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div style={{margin: '5% 5% 5% 5%'}}>
        <Survey user={this.props.user}/>
        <List/>
      </div>
    )
  }
}

export default Home;