import './App.css';
import Main from './components/Maincomponent';
import React from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import history from './redux/actions/history.js'
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
    <Router history={history}>
       <Main/>
    </Router>
    </Provider>
  );
}

export default App; 
