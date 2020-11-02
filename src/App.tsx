import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { Global } from './styles';

function App(): JSX.Element {
  return (
    <>
      <Global />
      <BrowserRouter>
        <div>hello</div>
      </BrowserRouter>
    </>
  );
}

export default App;
