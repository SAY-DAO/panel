import React from 'react';
import { Link } from 'react-router-dom';
import MenuList from '@material-ui/core/MenuList';
import MuiMenuItem from '@material-ui/core/MenuItem';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import DefaultButton from './DefaultButton';

const useStyles = makeStyles({
  root: {
    height: '85vh',
    borderLeft: '1px solid rgba(87, 84, 84, 0.42)',
  },
});

const MenuItem = withStyles({
  root: {
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse',
    paddingTop: 16,
    paddingBottom: 16,
  },
})(MuiMenuItem);

const Menu = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems='center'
      px={1}
      className={classes.root}
    >
      <MenuList>
        <MenuItem component={Link} to="#">
          <PersonRoundedIcon fontSize="large" htmlColor="#9F9999" />
          <Typography>کودکان</Typography>
        </MenuItem>
        <MenuItem component={Link} to="#">
          <PersonRoundedIcon fontSize="large" htmlColor="#9F9999" />
          <Typography>نیازها</Typography>
        </MenuItem>
        <MenuItem component={Link} to="#">
          <PersonRoundedIcon fontSize="large" htmlColor="#9F9999" />
          <Typography>گزارش‌ها</Typography>
        </MenuItem>
        <MenuItem component={Link} to="#">
          <PersonRoundedIcon fontSize="large" htmlColor="#9F9999" />
          <Typography>مددکاران</Typography>
        </MenuItem>
        <MenuItem component={Link} to="#">
          <PersonRoundedIcon fontSize="large" htmlColor="#9F9999" />
          <Typography>تنظیمات</Typography>
        </MenuItem>
      </MenuList>
      <DefaultButton text="اعلانات" />
    </Box>
  );
};

export default Menu;
