import './App.css';
import Main from './components/Maincomponent';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
       <Main/>
    </BrowserRouter>
  );
}

export default App;
