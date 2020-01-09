

// Imports
import {
  APPEND_VIEW
} from '../actions/navigation.action';

// Initial state
const init_state = {
  views: [ ],
};

// Navigation reducer
export default (( state=init_state, action ) => {
  switch (action.type) {

    // Views
    // Append view
    case APPEND_VIEW: {
      return Object.assign ({ }, state, {
        views: state.views.concat ([Object.assign (
          action.payload.options, 
          { id: action.payload.id }
        )])
      })
    }


    // Default
    default: {
      return state;
    }

  };
});