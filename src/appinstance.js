

// Imports
// Generals
import React from 'react';
import { hot } from 'react-hot-loader';
import './styling/base.scss';

// Components
import Cursor from './components/infra/cursor.infra';
import ScrollBar from './components/infra/scrollbar.infra'; 

// Views
import AboutView from './components/views/about.view';
import TowwwnView from './components/views/towwwn.view';
import AlternativetView from './components/views/alternativet.view';
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

      <div id="views">
        <AboutView store={this.props.store} />
        <TowwwnView store={this.props.store} />
        <AlternativetView store={this.props.store} />
        <ContactView store={this.props.store} />
      </div>
      
      <Cursor />
      <ScrollBar store={this.props.store} />
      
      <div id="overlay">
      </div>

    </div>
  )}

});