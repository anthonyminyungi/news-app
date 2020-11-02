import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { Header, List, Nav, SavedList } from './components';
import { Global } from './styles';

function App(): JSX.Element {
  return (
    <>
      <Global />
      <Header />
      <BrowserRouter>
        <Nav />
        <Route path="/" exact component={List} />
        <Route path="/saved" exact component={SavedList} />
      </BrowserRouter>
    </>
  );
}

export default App;
