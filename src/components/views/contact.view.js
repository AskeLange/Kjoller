

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
          <div className="backdrop">No. 4</div>
          <div className="sub-title">About me, Aske Kjøller, a</div>
          <div className="title">Frontender</div>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit sit amet nisl ut viverra. Sed pretium, sapien vitae rhoncus ultrices, ante leo eleifend velit, in consequat urna sem vitae magna. Donec rhoncus, orci id tincidunt egestas, metus elit vestibulum lorem, nec ultricies libero metus vel massa. Quisque purus ex, interdum sit amet lorem quis, ornare maximus metus.
          </div>
        </div>

        <div className="next">
        </div>

      </div>
    </View>
  )}

}