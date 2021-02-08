import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import TopBar from './TopBar';
import Menu from './Menu';
import Child from './Child';

const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.08)',
        borderRadius: 10,
      },
    },
  },
});

const App = () => {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </BrowserRouter>
    );
}

export default App;