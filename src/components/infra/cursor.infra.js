

// Imports
import React from 'react';

// Cursor component
export default class Cursor
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      
      prim_cur: { x: 0, y: 0 },
      seco_cur: { x: 0, y: 0 }

    };
  }


  // Renders
  // Main render
  render () { return (
    <div id="cursor">
      <div className="secondary" style={{
        top: Math.round (this.state.seco_cur.y)+'px',
        left: Math.round (this.state.seco_cur.x)+'px' }}>
      </div>
      
      <div className="primary" style={{
        top: Math.round (this.state.prim_cur.y)+'px',
        left: Math.round (this.state.prim_cur.x)+'px' }}>
      </div>
    </div>
  )}


  // Events
  // Loop
  loop () {

    // Aliases
    let p = this.state.prim_cur;
    let s = this.state.seco_cur;

    // Calculates delta
    if (!this.last) this.last = (new Date ()).getTime ();
    let delta = ((new Date ()).getTime () - this.last) / 16;
    this.last = (new Date ()).getTime ();

    // Base speed, position difference, 
    // direction and distance
    let speed = 128 * delta;
    let pdiff = { x: p.x - s.x, y: p.y - s.y };
    let dir = Math.atan2 (pdiff.y, pdiff.x);
    let dis = Math.sqrt (Math.pow (pdiff.x, 2) + Math.pow (pdiff.y, 2));
    
    // Ease-out transition
    let t  = Math.min (dis / 500, 1);
    speed *= (t*t * (3.0 - 2.0 * t)) * .94 + .06;

    // Calculates new positions and dead zone
    let npo = { x: s.x + Math.cos (dir) * speed, y: s.y + Math.sin (dir) * speed };
    if (dis <= 4) { npo.x = p.x; npo.y = p.y; }

    // Sets state
    this.setState ({
      seco_cur: {
        x: npo.x,
        y: npo.y
      }
    });

    // Loops around
    window.requestAnimationFrame (
      this.loop.bind (this));

  }

  // Component did mount
  componentDidMount () {

    // On mouse move
    window.addEventListener ('mousemove', event => {
      this.setState ({ prim_cur: {
        x: event.clientX,
        y: event.clientY
      }});
    });
    
    // Initiates loop
    window.requestAnimationFrame (
      this.loop.bind (this));

  }

}