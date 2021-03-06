

// Views
// Append view
export const APPEND_VIEW = 'APPEND_VIEW';
export let append_view = (( id, options={} ) => {
  return { type: APPEND_VIEW, payload: { id, options } };
});

// Switch view
export const SWITCH_VIEW = 'SWITCH_VIEW';
export let switch_view = ( id => {
  return { type: SWITCH_VIEW, payload: { id } };
});

// Open view
export const TOGGLE_VIEW = 'TOGGLE_VIEW';
export let toggle_view = ( forced_value => {
  return { type: TOGGLE_VIEW, payload: { forced_value } };
});