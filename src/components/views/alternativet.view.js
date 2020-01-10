

// Imports
import React from 'react';
import View from '../infra/view.infra';

// Alternativet View
export default class AlternativetView
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      id: 'v_alternativet',
    };
  }


  // Renders
  // Main render
  render () { return (
    <View id={this.state.id} store={this.props.store}>
      Alternativet
    </View>
  )}

}