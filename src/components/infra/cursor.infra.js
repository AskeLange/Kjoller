

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
      seco_cur: { x: 0, y: 0 },
      target: null,
      open_icon: false,

    };
  }


  // Renders
  // Main render
  render () { return (
    <div id="cursor">
      
      { !this.state.open_icon &&
        <div className="primary" style={{
          top: Math.round (this.state.prim_cur.y)+'px',
          left: Math.round (this.state.prim_cur.x)+'px' }}>
        </div>
      }

      { this.state.open_icon &&
        <div className="primary openable" style={{
          top: Math.round (this.state.prim_cur.y)+'px',
          left: Math.round (this.state.prim_cur.x)+'px' }}>
            <svg viewBox="0 0 24 24">
              <use xlinkHref="#icon-right"></use>
            </svg>
        </div>
      }

      <div className="secondary" style={{
        top: Math.round (this.state.seco_cur.y)+'px',
        left: Math.round (this.state.seco_cur.x)+'px' }}>
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

    let update = (( opp ) => {

      // Base speed, position difference, 
      // direction and distance
      let speed = 128 * delta;
      let pdiff = { x: opp.x - s.x, y: opp.y - s.y };
      let dir = Math.atan2 (pdiff.y, pdiff.x);
      let dis = Math.sqrt (Math.pow (pdiff.x, 2) + Math.pow (pdiff.y, 2));
      
      // Ease-out transition
      let t = Math.min (dis / 500, 1);
      speed *= (t*t * (3.0 - 2.0 * t)) * .94 + .06;

      // Calculates new positions and dead zone
      let npo = { x: s.x + Math.cos (dir) * speed, y: s.y + Math.sin (dir) * speed };
      if (dis <= 4) { npo.x = opp.x; npo.y = opp.y; }

      // Sets state
      this.setState ({
        seco_cur: {
          x: npo.x,
          y: npo.y
        }
      });

    });


    if (this.state.target == null) {
    
      // Updates based on primary cursor
      update (this.state.prim_cur);
      document.getElementById ('cursor')
        .classList.remove ('attracted');
    
    } else { 
      
      // Aliases
      let t = this.state.target;

      // Difference, dir and distance
      let dif = { x: p.x - t.x, y: p.y - t.y };
      let dir = Math.atan2 (dif.y, dif.x);
      let dis = Math.sqrt (Math.pow (dif.y, 2) + Math.pow (dif.x, 2));

      // Updates based on target
      // And primary cursor
      update ({
        x: t.x + Math.cos (dir) * dis * .2,
        y: t.y + Math.sin (dir) * dis * .2,
      });

      document.getElementById ('cursor')
        .classList.add ('attracted');

    }


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

    // Mouse hover states
    window.requestAnimationFrame (() => {
      
      // On mouse hover (attraction)
      let n, e = document.getElementsByClassName ('attraction');
      for (n = 0; n < e.length; n ++) {
        
        // Mouse over
        e[n].addEventListener ('mouseover', e => {
          
          // Fetches boundaries n' sets state
          let r = e.target.getBoundingClientRect ();
          this.setState ({ target: {
            y: r.top + r.height / 2,
            x: r.left + r.width / 2
          }})
    
        });

        // Mouse leave
        e[n].addEventListener ('mouseleave', e => {
          this.setState ({ target: null });
        });

      }

      // On mouse hover (openable)
      e = document.getElementsByClassName ('openable');
      for (n = 0; n < e.length; n ++) {

        // Mouse over
        e [n].addEventListener ('mouseover', ev => {
          for (let i = 0; i < ev.path.length; i ++) {
            if (ev.path [i].classList.contains ('openable')) {
              this.setState ({ open_icon: true }); break;
            }
          }
        });

        // Mouse leave
        e[n].addEventListener ('mouseleave', ev => {
          this.setState ({ open_icon: false });
        });

      }

    });
    
    
    // Initiates loop
    window.requestAnimationFrame (
      this.loop.bind (this));

  }

}