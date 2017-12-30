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
        <Survey/>
        <List/>
      </div>
    )
  }
}

export default Home;