import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* Redux */
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

/* Reducers */
import { themeReducer } from './store/theme/themeReducer';
import { counterReducer } from './store/counter/counterReducer';
import { quoteReducer } from './store/quote/quoteReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  counter: counterReducer,
  quote: quoteReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
