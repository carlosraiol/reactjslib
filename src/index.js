import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './bootstrap.min.css';
//import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redux/reducers';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('app'));

//serviceWorker.unregister();

/*const rootElement =  document.getElementById('app')
ReactDOM.render(<App />, rootElement);*/