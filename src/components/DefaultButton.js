import React from 'react';
import MuiButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const Button = withStyles({
  root: {
    backgroundColor: '#fcb664',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#d78537',
    },
    width: 100,
    height: 53,
    borderRadius: 10,
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
