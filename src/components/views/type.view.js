

// Imports
import React from 'react';
import View from '../infra/view.infra';

// TypeUnite View
export default class TypeUniteView
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      id: 'v_type',
      label: 'Type Unite'
    };
  }


  // Renders
  // Main render
  render () { return (
    <View id={this.state.id} label={this.state.label} store={this.props.store}>
      <div className="container">

        <div className="image" style={{ 'backgroundImage': 'url(https://i.pinimg.com/564x/9d/22/68/9d22682c4848253666f4e4cd1664e2b6.jpg)' }}>
        </div>

        <div className="text">
          <div className="title">
            Type Unite. Dolor sit amet, consectetur adipiscing elit.
          </div>

          <div className="value">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum tempus.
          </div>
        </div>

      </div>
    </View>
  )}

}