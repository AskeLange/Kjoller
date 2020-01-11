

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
          <div className="backdrop">No. 2</div>
          <div className="sub-title">Co-founder & frontend-lead</div>
          <div className="title">Towwwn</div>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit sit amet nisl ut viverra. Sed pretium, sapien vitae rhoncus ultrices, ante leo eleifend velit, in consequat urna sem vitae magna. Donec rhoncus, orci id tincidunt egestas, metus elit vestibulum lorem, nec ultricies libero metus vel massa..
          </div>
        </div>

        <div className="next">
        </div>

      </div>
    </View>
  )}

}