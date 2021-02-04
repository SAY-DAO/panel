import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MuiMenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 10,
    color: '#4a4a4a',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    justifyContent: 'right',
    height: '60vh',
  },
}));

const MenuItem = withStyles({
  root: {
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 16,
  },
})(MuiMenuItem);

const Menu = () => {
  const classes = useStyles();

  return (
      <Paper className={classes.root}>
        <MenuList>
          <MenuItem component={Link} to="#">
            <ListItemIcon>
              <NavigateBeforeIcon fontSize="small" />
            </ListItemIcon>
            کودکان
          </MenuItem>
          <MenuItem component={Link} to="#">
            <ListItemIcon>
              <NavigateBeforeIcon fontSize="small" />
            </ListItemIcon>
            نیازها
          </MenuItem>
          <MenuItem component={Link} to="#">
            <ListItemIcon>
              <NavigateBeforeIcon fontSize="small" />
            </ListItemIcon>
            گزارش‌ها
          </MenuItem>
          <MenuItem component={Link} to="#">
            <ListItemIcon>
              <NavigateBeforeIcon fontSize="small" />
            </ListItemIcon>
            مددکاران
          </MenuItem>
          <MenuItem component={Link} to="#">
            <ListItemIcon>
              <NavigateBeforeIcon fontSize="small" />
            </ListItemIcon>
            تنظیمات
          </MenuItem>
        </MenuList>
      </Paper>
  );
};

export default Menu;
