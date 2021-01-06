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
    display: 'flex',
    justifyContent: 'right',
    height: '60vh',
  },
  paper: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    borderRadius: 8,
    color: '#4a4a4a',
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
    <div className={classes.root}>
      <Paper className={classes.paper}>
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
    </div>
  );
};

export default Menu;
