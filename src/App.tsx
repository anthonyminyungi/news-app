import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import List from './components/list';
import { Global } from './styles';

function App(): JSX.Element {
  return (
    <>
      <Global />

      <List />
    </>
  );
}

export default App;
