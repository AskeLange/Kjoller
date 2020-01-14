

// Imports
import React from 'react';
import View from '../infra/view.infra';
import { toggle_view } from '../../actions/navigation.action';

// About View
export default class AboutView
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      id: 'v_about',
      label: 'About',
      open: false,
      title: 'Lorem ipsum dolor sit amet',
    };
  }


  // Renders
  // Main render
  render () { return (
    <View id={this.state.id} label={this.state.label} store={this.props.store}>
      <div className={'container'+(this.state.open?' open':'')}>

        <div className="image" style={{ 'backgroundImage': 'url(https://i.pinimg.com/564x/14/d4/fd/14d4fd0db41c4d511bc5699e218c9930.jpg)' }}>
        </div>

        <div className="upper-text">
          <div className={'open attraction'+(this.state.open?' inactive':'')}
            onClick={this.toggleView.bind (this)}>
            <svg viewBox="0 0 24 24">
              <use xlinkHref="#icon-right">
              </use>
            </svg>
          </div>

          <div className="title">
            { this.state.title.split (' ')
                .map (this.renderWord.bind (this)) }
          </div>

        </div>

        {/* <div className="lower-text">
          <div className="section">
            <div className="no">No. 1</div>
            <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus tempus purus, non rutrum orci blandit ut. Suspendisse tempus ligula eu lorem facilisis semper. Nam sed sollicitudin erat. Sed tristique elit ligula, sed ultrices nisi varius in. Maecenas sit amet mauris porttitor, rhoncus magna sit amet, luctus purus. Aenean pretium purus turpis.</div>
          </div>

          <div className="section">
            <div className="no">No. 2</div>
            <div className="content">Id tristique sapien egestas at. Nunc convallis arcu tortor, eu sollicitudin odio egestas eget. Nullam in consectetur ligula, ac porta ipsum. Vivamus id dignissim nunc. Nullam ornare risus vitae elit sodales semper. Praesent porta malesuada diam, vitae posuere purus maximus sit amet.</div>
          </div>

          <div className="section">
            <div className="no">No. 3</div>
            <div className="content">Tristique sapien nunc convallis arcu tortor, eu sollicitudin odio egestas eget. Nullam in consectetur ligula, ac porta ipsum. Vivamus id dignissim nunc. Nullam ornare risus vitae elit sodales semper. Praesent porta malesuada diam, vitae posuere purus maximus sit amet.</div>
          </div>

          <div className="section">
            <div className="no">No. 4</div>
            <div className="content">Iapien egestas at. Nunc convallis arcu tortor, eu sollicitudin odio egestas eget. Nullam in consectetur ligula, ac porta ipsum. Vivamus id dignissim nunc. Nullam ornare risus vitae elit sodales semper. Praesent porta malesuada diam, vitae posuere purus maximus sit amet.</div>
          </div>
        </div> */}

      </div>
    </View>
  )}

  // Render words
  renderWord (e,n) { return (
    <div className="word" data-id={n}>
      <div className="inner">{e}</div>
    </div>
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
    let active_view = state.navigation.active_view;
    let views = state.navigation.views;

    // Sets state
    this.setState ({
      open
    }, () => {

      // Finds active view
      let n, index;
      for (n = 0; n < views.length; n ++) {
        if (views[n].id == this.state.id) {
          index = views[n].index; break;
        }
      }

      if (index == active_view) {

        // Sets words to active
        let time = 100;
        let words = document.querySelectorAll (`#${this.state.id} .word`);
        for (let n = 0; n < words.length; n ++) {
          setTimeout (() => {
            words [n].classList.add ('active');
          }, words [n].attributes['data-id'].value * time);
        }

      } else {

        // Sets words to active
        let time = 100;
        let words = document.querySelectorAll (`#${this.state.id} .word`);
        for (let n = 0; n < words.length; n ++) {
          setTimeout (() => {
            words [n].classList.remove ('active');
          }, words [n].attributes['data-id'].value * time);
        }

      }

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