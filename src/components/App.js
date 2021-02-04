import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import TopBar from './TopBar';
import Menu from './Menu';
import ChildCard from './Child/ChildCard';

const App = () => {
    return (
      <BrowserRouter>
        <CssBaseline />
        <TopBar />
        <div style={{ padding: '20px' }}>
          <Grid container direction='row-reverse' spacing={5}>
            <Grid item>
              <Menu />
            </Grid>
            <Grid item>
              SAY panel App
              <ChildCard />
            </Grid>
          </Grid>
        </div>
      </BrowserRouter>
    );
}

export default App;