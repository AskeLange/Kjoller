

// Imports
import React from 'react';
import { switch_view } from '../../actions/navigation.action';

// Scrollbar Component
export default class Scrollbar
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      active: 0,
      views: [ ],
    };
  }


  // Renders
  // Main render
  render () { return (
    <div id="scrollbar">
      { this.fillParts (this.state.views)
        .map (this.renderPart.bind (this)) }
    </div>
  )}

  // Render part
  renderPart (e,n) { return (
    <div className={'element'+(e.type=='part'?' mid-part':' view-part')}
      key={`scrollbar-element#${n}`}>
      <div className={'inner'+(e.type!='part'?' attraction':'')}>
        <div className="overlay">
        </div>
      </div>
    </div>
  )}


  // Actions
  // Fill parts
  fillParts (arr) {
    let a = arr.concat ([ ]);
    for (let n = 1; n < (arr.length-1)*2; n += 2) {
      a.splice (n, 0, { type: 'part' });
    } return a;
  }


  // Life cycle events
  // On store change
  onStoreChange () {

    // Extracts data
    let state = this.props.store.getState ();
    let views = state.navigation.views;
    let active = state.navigation.active_view;

    // Sets state
    this.setState ({
    
      views, 
      active
    
    }, () => {
      
      let vie = document.querySelectorAll ('#scrollbar .view-part');
      vie[active].classList.add ('active');

    });

  }

  // On scroll
  onScroll (e) {

    // Checks if sidebar is active
    let sidebar = document.getElementById ('sidebar');
    if (sidebar.classList.contains ('active')) return;

    // Constants
    const trans = 1250;
    const scroll_lock = 1250;
    
    // Checks variables
    if (this.canScroll == null)
      this.canScroll = true;

    // Does the actual scrolling
    if (this.canScroll) {

      // Calculates new active
      let b, a = b = this.state.active;
      if (e.deltaY > 0) { a ++; }
      if (e.deltaY < 0) { b = -- a; }

      // Checks boundaries
      if (a < 0 || a >= this.state.views.length)
        return;

      // Determines mid part animation direction
      let m = document.querySelectorAll ('#scrollbar .mid-part'), c;
      if (e.deltaY > 0) { c = 'animLeft'; }
      if (e.deltaY < 0) { c = 'animRight'; }

      // Animates overlay
      let ct = c == 'animLeft' ? 'animRight' : 'animLeft';
      let overlay = document.getElementById ('overlay');
      overlay.classList.add (ct);
      setTimeout (() => { overlay.classList.remove (ct) }, trans - 20);

      // Animates mid part
      m[b].classList.add (c); 
      setTimeout (() => { m[b].classList.remove (c); }, trans);


      // Sets active classes
      let act = document.querySelectorAll ('#scrollbar .active');
      if (act.length > 0) act[0].classList.remove ('active');

      // Sets can scroll
      this.canScroll = false;
      setTimeout (() => { this.canScroll = true; }, scroll_lock);

      
      // Dispatches action
      setTimeout (() => { this.props.store.dispatch (
        switch_view (a)
      )}, trans / 2);

    }

  }

  // Component did mount
  componentDidMount () {
    
    // Subscribes to store
    this.unsub = this.props.store.subscribe (
      this.onStoreChange.bind (this)
    ); this.onStoreChange ();

    // Adds on scroll listener
    // Listens to scrolls
    window.onwheel = window.onmousewheel = 
      document.onmousewheel = window.ontouchmove =
        this.onScroll.bind (this);

  }

  // Component will unmount
  componentWillUnmount () {
    this.unsub ();
  }

}