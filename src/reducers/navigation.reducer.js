

// Imports
import {
  APPEND_VIEW,
  SWITCH_VIEW
} from '../actions/navigation.action';

// Initial state
const init_state = {
  
  active_view: 0,
  views: [ ],

};

// Navigation reducer
export default (( state=init_state, action ) => {
  switch (action.type) {

    // Views
    // Append view
    case APPEND_VIEW: {
      let l = state.views [state.views.length-1];
      return Object.assign ({ }, state, {
        views: state.views.concat ([Object.assign (
          action.payload.options, 
          { id: action.payload.id, index: l != null ? l.index+1 : 0 },
        )])
      })
    }

    // Switch view
    case SWITCH_VIEW: {

      // Converts id to index
      let i = action.payload.id;
      if (typeof i != 'Number') {
        for (let n = 0; n < state.views.length; n ++) {
          if (state.views [n].id == i) {
            i = state.views [n].index;
            break;
          }
        }
      }

      // Returns
      return Object.assign ({ }, state, {
        active_view: i
      });

    }


    // Default
    default: {
      return state;
    }

  };
});