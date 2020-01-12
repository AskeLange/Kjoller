

// Imports
import React from 'react';
import View from '../infra/view.infra';
import { toggle_view } from '../../actions/navigation.action';

// TypeUnite View
export default class TypeUniteView
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      id: 'v_type',
      label: 'Type Unite',
      open: false,
    };
  }


  // Renders
  // Main render
  render () { return (
    <View id={this.state.id} label={this.state.label} store={this.props.store}>
      <div className={'container'+(this.state.open?' open':'')}>

        <div className="image" style={{ 'backgroundImage': 'url(https://i.pinimg.com/564x/9d/22/68/9d22682c4848253666f4e4cd1664e2b6.jpg)' }}>
        </div>

        <div className="upper-text">
          <div className="title">
            Type Unite. Dolor sit amet, consectetur adipiscing elit.
          </div>

          <div className={'value'+(this.state.open?' inactive':' attraction')}
            onClick={this.toggleView.bind (this)}>
            Read more
          </div>
        </div>

        <div className="lower-text">
        </div>

      </div>
    </View>
  )}

  
  // Actions
  // Open view
  toggleView () {
    
    // Scrolls to top
    if (this.state.open) {
      let c = document.querySelectorAll (`#${this.state.id} .container`);
      c[0].scroll({
        top: 0, left: 0, 
        behavior: 'smooth'
      });
    }

    // Dispatches actions
    this.props.store.dispatch (
      toggle_view ()
    );


  }


  // Life cycle events
  // On store change
  onStoreChange () {

    // Extracts data
    let state = this.props.store.getState ();
    let open = state.navigation.open_view;

    // Sets state
    this.setState ({
      open
    });

  }

  // Component did mount
  componentDidMount () {
    this.unsub = this.props.store.subscribe (
      this.onStoreChange.bind (this)
    );
  }

  // Component will unmount
  componentWillUnmount () {
    this.unsub ();
  }

}