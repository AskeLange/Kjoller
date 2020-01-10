

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
    };
  }


  // Renders
  // Main render
  render () { return (
    <View id={this.state.id} store={this.props.store}>
      Towwwn
    </View>
  )}

}