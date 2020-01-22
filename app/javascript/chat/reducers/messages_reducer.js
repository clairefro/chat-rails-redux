import { SET_MESSAGES, MESSAGE_POSTED, CHANNEL_SELECTED } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case SET_MESSAGES: {
      return action.payload.messages;
    }
    case MESSAGE_POSTED: {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }
    case CHANNEL_SELECTED: {
      return []; // Channel has changed. Clearing view.
    }
    default:
      return state;
  }
}
