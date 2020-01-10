

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
    };
  }


  // Renders
  // Main render
  render () { return (
    <View id={this.state.id} store={this.props.store}>
      About
    </View>
  )}

}