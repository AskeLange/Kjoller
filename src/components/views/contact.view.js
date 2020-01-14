

// Imports
import React from 'react';
import View from '../infra/view.infra';
import { toggle_view } from '../../actions/navigation.action';

// Contact View
export default class ContactView
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      id: 'v_contact',
      label: 'Contact',
      open: false,
      title: 'Interested? Write & say hi!',
    };
  }


  // Renders
  // Main render
  render () { return (
    <View id={this.state.id} label={this.state.label} store={this.props.store}>
      <div className={'container'+(this.state.open?' open':'')}>

        <div className="image" style={{ 'backgroundImage': 'url(https://i.pinimg.com/564x/26/60/fe/2660fec5205f936d0dbf272df31d270e.jpg)' }}>
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

        <div className="lower-text">
        </div>

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