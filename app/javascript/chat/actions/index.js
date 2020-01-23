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

export function createMessage(channel, content) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const url = `${BASE_URL}/channels/${channel}/messages`;
  const body = { content }; // ES6 destructuring
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
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
