

// Imports
import React from 'react';
import View from '../infra/view.infra';

// Contact View
export default class ContactView
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      id: 'v_contact',
      label: 'Contact'
    };
  }


  // Renders
  // Main render
  render () { return (
    <View id={this.state.id} label={this.state.label} store={this.props.store}>
      <div className="container">

        <div className="image" style={{ 'backgroundImage': 'url(https://i.pinimg.com/564x/26/60/fe/2660fec5205f936d0dbf272df31d270e.jpg)' }}>
        </div>

        <div className="text">
          <div className="title">
            Contact me. Dolor sit amet, consectetur adipiscing elit.
          </div>

          <div className="value">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum tempus.
          </div>
        </div>

      </div>
    </View>
  )}

}