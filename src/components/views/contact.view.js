

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
    };
  }


  // Renders
  // Main render
  render () { return (
    <View id={this.state.id} store={this.props.store}>
      Contact
    </View>
  )}

}