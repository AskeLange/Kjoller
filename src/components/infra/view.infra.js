

// Imports
import React from 'react';
import { append_view } from '../../actions/navigation.action';

// View Component
export default class View
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      active: false,
    };
  }


  // Renders
  // Main render
  render () { return (
    <div className={'view'+(this.state.active ? ' active':'')}
      id={this.props.id}>
      {this.props.children}
    </div>
  )}


  // Life cycle events
  // On store change
  onStoreChange () {

    // Extracts data
    let state = this.props.store.getState ();
    let active_view = state.navigation.active_view;
    let views = state.navigation.views;

    // Finds current view
    let a, n;
    for (n = 0; n < views.length; n ++) {
      if (views[n].id == this.props.id) {
        a = active_view == views[n].index;
        break;
      }
    }
    
    // Sets state
    this.setState ({ 
      active: a
    });

  }

  // Component did mount
  componentDidMount () {
    
    // Subscribes to store
    this.unsub = this.props.store.subscribe (
      this.onStoreChange.bind (this)
    );

    // Appends view
    let p = this.props;
    p.store.dispatch ( append_view (
      this.props.id, { label: this.props.label }
    ));

  }

  // Component will unmount
  componentWillUnmount () {
    this.unsub ( );
  }

}