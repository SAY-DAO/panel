import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import TopBar from './TopBar';
import Menu from './Menu';
import Child from './Child';

const App = () => {
    return (
      <BrowserRouter>
        <CssBaseline />
        <TopBar />
        <div style={{ padding: 20 }}>
          <Grid container direction="row-reverse" spacing={5}>
            <Grid item>
              <Menu />
            </Grid>
            <Grid item container direction="row-reverse" style={{ flex: 1 }}>
              <Child />
            </Grid>
          </Grid>
        </div>
      </BrowserRouter>
    );
}

export default App;