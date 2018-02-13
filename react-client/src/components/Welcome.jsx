import React from 'react';


class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <h1 style={{ 'text-align': 'center' }}> WELCOME! </h1>
        <h2 style={{ 'text-align': 'center' }}> This is LinkSpeak, a Survey-based App where you will be able to receive immediate response for your surveys!! </h2>
      </div>
    )
  }
}

export default Welcome;
