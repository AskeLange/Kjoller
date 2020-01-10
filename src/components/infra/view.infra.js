

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
      <div className="inner">
        {this.props.children}
      </div>
    </div>
  )}


  // Life cycle events
  // On store change
  onStoreChange () {

    

  }

  // Component did mount
  componentDidMount () {
    
    // Subscribes to store
    this.unsub = this.props.store.subscribe (
      this.onStoreChange.bind (this)
    );

    // Appends view
    let p = this.props;
    p.store.dispatch ( append_view ({
      id: this.props.id
    }));

  }

  // Component will unmount
  componentWillUnmount () {
    this.unsub ( );
  }

}