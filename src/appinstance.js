

// Imports
// Generals
import React from 'react';
import { hot } from 'react-hot-loader';
import './styling/base.scss';

// Components
import Cursor from './components/infra/cursor.infra'; 


// App Instance Component
export default hot (module) (class AppInstance
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = { };
  }


  // Renders
  // Main render
  render () { return (
    <div id="instance"> 
      <Cursor />
    </div>
  )}

});