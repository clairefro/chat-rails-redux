export const SET_MESSAGES = 'SET_MESSAGES';
export const MESSAGE_POSTED = 'MESSAGE_POSTED';
export const CHANNEL_SELECTED = 'CHANNEL_SELECTED';

const BASE_URL = '/api/v1';

export function setMessages(channel) {
  const promise = fetch(`${BASE_URL}/channels/${channel}/messages`, { credentials: "same-origin" })
    .then(response => response.json());
  return {
    type: SET_MESSAGES,
    payload: promise // Will be resolved by redux-promise
  };
}

export function createMessage(channel, author, content) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const body = { author, content }; // ES6 destructuring
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: MESSAGE_POSTED,
    payload: promise // Will be resolved by redux-promise
  };
}

export function selectChannel() {
  return {
    type: 'CHANNEL_SELECTED'
  }
}
