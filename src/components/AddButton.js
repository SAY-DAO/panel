import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const useStyles = makeStyles({
  icon: {
    color: '#ffffff',
    fontSize: 65,
  },
});

const CustomButton = withStyles({
  root: {
    width: 123,
    height: 123,
    borderRadius: '50%',
    backgroundColor: '#6f9594',
    boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.25)',
    '&:hover': {
      backgroundColor: '#295960',
    },
  },
})(Button);

const AddButton = () => {
  const classes = useStyles();

  return (
    <CustomButton component="span" disableFocusRipple>
      <AddRoundedIcon className={classes.icon} />
    </CustomButton>
  );
};

export default AddButton;
