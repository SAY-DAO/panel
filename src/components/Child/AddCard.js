import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import CardTemplate from './CardTemplate';
import AddButton from '../AddButton';

const AddCard = () => {
  return (
    <CardTemplate style={{ backgroundColor: '#295960', color: '#ffffff' }}>
      <AddButton />
      <CardContent>
        <Typography variant="body1" align="center">
          Add
        </Typography>
      </CardContent>
    </CardTemplate>
  );
};

export default AddCard;
