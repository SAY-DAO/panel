import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBar from './TopBar';
import Menu from './Menu';

const App = () => {
    return (
      <BrowserRouter>
        <CssBaseline />
        <TopBar />
        <Menu />
        SAY panel App
      </BrowserRouter>
    );
}

export default App;