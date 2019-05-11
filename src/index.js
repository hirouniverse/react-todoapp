// react
import React from 'react';
import { render } from 'react-dom';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

// components
import App from './components/App';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// render
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app-container')
);