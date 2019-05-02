import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducer';
import { addComment } from './actions';

const store = createStore(reducer);



serviceWorker.unregister();


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment('first comment'));
store.dispatch(addComment('second comment'));

