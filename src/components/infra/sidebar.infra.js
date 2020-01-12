

// Imports
import React from 'react';
import { switch_view, toggle_view } from '../../actions/navigation.action';

// View Component
export default class View
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = { 
      
      active: false,
      active_view: 0,
      views: [ ],

    };
  }


  // Renders
  // Main render
  render () { return (
    <div id="sidebar" className={this.state.active?'active':''}>

      {/* Hamburger Icon */}
      <div className="icon attraction"
        onClick={this.toggle.bind (this)}>
        <div className="inner">
          <div className="topleft"></div>
          <div className="topright"></div>
          <div className="bottomright"></div>
          <div className="bottomleft"></div>
        </div>
      </div>

      {/* Overlay */}
      <div className={'overlay'+(this.state.active?' active':'')}>
      </div>

      {/* Actual sidebar */}
      <div className={'content'+(this.state.active?' active':'')}>
        <div className="navigation-elements">
          { this.state.views.map (this.renderElement.bind (this)) }
        </div>

        <div className="footer">
          <div className="section">
            <div className="title">
              Aske Kjøller Lange
            </div>

            <div className="text">
              Frontend-developer<br />
              <a href="#" className="attraction">aske@kjoller.me</a>
            </div>
          </div>

          <div className="section">
            <div className="text">
              <a href="#" className="attraction">Github</a>
              <a href="#" className="attraction">Codepen</a>
              <a href="#" className="attraction">Linkedin</a>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )}

  // Render Navigation Element
  renderElement (e) { return (
    <div className={'element'+(this.state.active_view==e.index?' active':'')} 
      key={`navigation-element#${e.id}`} onClick={this.switchView.bind (this, e.index)}>
      <div className="inner">
        { e.label }
      </div>
    </div>
  )}

  
  // Actions
  // Toggle sidebar
  toggle (e) {

    // Checks can toggle
    if (this.canToggle == null) this.canToggle = true;
    if (!this.canToggle) return;
    this.canToggle = false;

    // Active n' inner
    let a = this.state.active;
    let i = document.querySelectorAll ('#sidebar .icon .inner');

    // Animation
    if (!a) { i[0].classList.add ('animTo'); }
    if (a) { i[0].classList.add ('animFrom');  }

    // Removes class and changes active
    this.setState ({ active: !a });
    if (a) { i[0].classList.remove ('active'); }

    // Class timeout
    setTimeout (_ => { 
      i[0].classList.remove ('animTo');
      i[0].classList.remove ('animFrom');
      if (!a) { i[0].classList.add ('active'); }
    }, 740);

    // Can toggle timeout
    setTimeout (() => {
      this.canToggle = true;
    }, 750);

  }

  // Switch view
  switchView (index) {

    if (index == this.state.active_view) return;
    let c = document.querySelectorAll ('#sidebar .content');
    c[0].classList.add ('close');

    let elems = document.querySelectorAll ('#sidebar .navigation-elements .element');
    for (let n = 0; n < elems.length; n++) elems[n].classList.remove ('active');
    elems [index].classList.add ('active');

    setTimeout (() => {
      
      this.props.store.dispatch
        (toggle_view (false));

      this.props.store.dispatch 
        (switch_view (index));

    }, 400);

    setTimeout (() => {
      c[0].classList.remove ('close');
      this.toggle ();
    }, 980);

  }


  // Life cycle events
  // On store change
  onStoreChange () {

    // Extracts data
    let state = this.props.store.getState ();
    let active_view = state.navigation.active_view;
    let views = state.navigation.views;

    // Sets state
    this.setState ({
      active_view,
      views
    });

  }

  // Component did mount
  componentDidMount () {
    this.unsub = this.props.store.subscribe (
      this.onStoreChange.bind (this)
    ); this.onStoreChange ();
  }

  // Component will unmount
  componentWillUnmount () {
    this.unsub ( );
  }

}