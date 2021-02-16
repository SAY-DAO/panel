import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles({
  root: {
    boxShadow: 'none',
    backgroundColor: 'rgba(229, 229, 229, 0.73)',
    '& .MuiToolbar-root': {
      flexDirection: 'row-reverse',
    },
  },
  logo: {
    borderRadius: 10,
    width: 82,
  },
});

const TopBar = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger();

  return (
    <Slide in={!trigger}>
      <AppBar position="sticky" color="transparent" className={classes.root}>
        <Toolbar>
          <Box display="flex" m={2}>
            <img
              src="/white-logo.png"
              className={classes.logo}
            />
          </Box>
          <Typography>SAY PANEL</Typography>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default TopBar;
