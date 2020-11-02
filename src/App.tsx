import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import List from './components/list';
import { Global } from './styles';

function App(): JSX.Element {
  return (
    <>
      <Global />
      <Header />
      <List />
    </>
  );
}

export default App;
