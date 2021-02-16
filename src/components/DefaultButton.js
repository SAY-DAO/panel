import React from 'react';
import MuiButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const Button = withStyles({
  root: {
    backgroundColor: '#fcb664',
    color: '#ffffff',
    fontSize: 18,
    '&:hover': {
      backgroundColor: '#d78537',
    },
    width: 157,
    height: 83,
  },
})(MuiButton);

const DefaultButton = ({ text }) => {
  return (
    <Button size="large" disableFocusRipple>
      {text}
    </Button>
  );
};

export default DefaultButton;
