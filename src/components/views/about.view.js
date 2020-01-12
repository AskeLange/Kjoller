

// Imports
import React from 'react';
import View from '../infra/view.infra';

// About View
export default class AboutView
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      id: 'v_about',
      label: 'About'
    };
  }


  // Renders
  // Main render
  render () { return (
    <View id={this.state.id} label={this.state.label} store={this.props.store}>
      <div className="container">

        <div className="image" style={{ 'backgroundImage': 'url(https://i.pinimg.com/564x/14/d4/fd/14d4fd0db41c4d511bc5699e218c9930.jpg)' }}>
        </div>

        <div className="text">
          <div className="title">
            About me. Dolor sit amet, consectetur adipiscing elit.
          </div>

          <div className="value">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum tempus.
          </div>
        </div>

      </div>
    </View>
  )}

}