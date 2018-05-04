// reducer only called if action occurs
// state argument, is NOT application state, it is only the state that this app is responsible for
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
    default:
      return state;
  }
}
