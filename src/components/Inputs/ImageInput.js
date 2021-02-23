import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AddButton from '../AddButton';

const useStyles = makeStyles({
  input: {
    display: 'none',
  },
});

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
        <AddButton />
      </label>
    </>
  );
};

export default ImageInput;
