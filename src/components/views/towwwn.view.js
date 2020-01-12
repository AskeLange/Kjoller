

// Imports
import React from 'react';
import View from '../infra/view.infra';

// Towwwn View
export default class TowwwnView
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      id: 'v_towwwn',
      label: 'Towwwn'
    };
  }


  // Renders
  // Main render
  render () { return (
    <View id={this.state.id} label={this.state.label} store={this.props.store}>
      <div className="container">

        <div className="image" style={{ 'backgroundImage': 'url(https://i.pinimg.com/564x/3c/33/b3/3c33b3e13be5330e834f208361abfff1.jpg)' }}>
        </div>

        <div className="text">
          <div className="title">
            Towwwn. Dolor sit amet, consectetur adipiscing elit.
          </div>

          <div className="value">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum tempus.
          </div>
        </div>

      </div>
    </View>
  )}

}