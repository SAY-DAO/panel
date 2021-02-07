import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  input: {
    display: 'none',
  },
});

const UploadButton = withStyles({
  root: {
    width: 120,
    height: 120,
    backgroundImage: `url(
      "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%230000008A' stroke-width='1' stroke-dasharray='9' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"
    )`,
    borderRadius: 10,
    flexDirection: 'column',
  },
})(Button);

const handleUploadClick = (event) => {
  const file = event.target.files[0];
  console.log(file);
};

const ImageInput = () => {
  const classes = useStyles();

  return (
    <>
      <input
        type="file"
        id="contained-button-file"
        className={classes.input}
        onChange={handleUploadClick}
      />
      <label htmlFor="contained-button-file">
        <UploadButton component="span" disableFocusRipple>
          <Box display="flex" flexDirection="column" alignItems="center">
            <AddIcon fontSize="large" color="action" />
            <Typography variant="overline" color="textSecondary">
              Child Voice
            </Typography>
          </Box>
        </UploadButton>
      </label>
    </>
  );
};

export default ImageInput;
