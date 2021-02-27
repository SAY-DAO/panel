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
        boxShadow: '4px 4px 20px rgba(196, 196, 196, 0.73)',
        borderRadius: 10,
      },
    },
    MuiCardContent: {
      root: {
        width: '100%',
      },
    },
    MuiCardMedia: {
      img: {
        width: 120,
        height: 120,
        marginTop: 20,
        borderRadius: '50%',
        boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.25)',
        backgroundColor: '#f1f1f1',
      },
    },
    MuiButton: {
      root: {
        boxShadow: '4px 4px 20px rgba(196, 196, 196, 0.73)',
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
          <div style={{ padding: 8 }}>
            <Grid container direction="row-reverse" spacing={2}>
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