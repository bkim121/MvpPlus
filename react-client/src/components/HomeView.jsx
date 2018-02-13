import React from 'react';
import Welcome from './Welcome.jsx'

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'welcome'
    }
  }

  viewState(){
    if (this.state.view === 'welcome'){
      return <Welcome />
    }
  }

  render () {
    return (
      <div> { this.viewState() } </div>
    )
  }
}

export default HomeView;