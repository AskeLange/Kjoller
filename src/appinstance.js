

// Imports
// Generals
import React from 'react';
import { hot } from 'react-hot-loader';
import './styling/base.scss';

// Components
import Cursor from './components/infra/cursor.infra';
import ScrollBar from './components/infra/scrollbar.infra'; 
import SideBar from './components/infra/sidebar.infra';

// Views
import AboutView from './components/views/about.view';
import TowwwnView from './components/views/towwwn.view';
import TypeUniteView from './components/views/type.view';
import ContactView from './components/views/contact.view';


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

      {/* Views */}
      <div id="views">
        <AboutView store={this.props.store} />
        <TowwwnView store={this.props.store} />
        <TypeUniteView store={this.props.store} />
        <ContactView store={this.props.store} />
      </div>
      
      {/* General */}
      <div id="logo" className="attraction">
        <div className="inner">Aske Kjøller</div>
      </div>
      
      <SideBar store={this.props.store} />
      <ScrollBar store={this.props.store} />
      <Cursor />
      
      {/* Animation overlay */}
      <div id="overlay">
        <div className="logo">
          Aske Kjøller
        </div>
      </div>

    </div>
  )}

});