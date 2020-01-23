// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// internal modules
import App from './components/app';

// State and reducers
import messagesReducer from './reducers/messages_reducer';

const identityReducer = (state = null, action) => state;

const chatContainer = document.getElementById('chat-app');

// currentUser is handled by rails now
const reducers = combineReducers({
  messages: messagesReducer,
  channels: identityReducer
});

// apply middlewares
const middlewares = applyMiddleware(logger, ReduxPromise);

const initialState = {
  messages: [],
  channels: ['general', 'react', 'ruby', 'paris', 'montreal', 'help']
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <BrowserRouter>
      <Switch>
        <Route path="/channels/:channel" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  chatContainer
);
