import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import CardTemplate from './CardTemplate';

const ChildCard = () => {
  return (
    <CardTemplate>
      <CardMedia
        component="img"
        src="https://sayapp.company/files/1-child/1-avatar_0010010001.png"
        title="Setareh"
      />
      <CardContent>
        <Typography variant="h6" align="center" paragraph>
          ستاره
        </Typography>
        <Typography variant="subtitle2">
          <Grid container direction="row-reverse" justify="space-between">
            <Grid item>نیازهای ثبت شده</Grid>
            <Grid item>100</Grid>
          </Grid>
        </Typography>
        <Typography variant="subtitle2">
          <Grid container direction="row-reverse" justify="space-between">
            <Grid item>نیازهای انجام شده</Grid>
            <Grid item>0</Grid>
          </Grid>
        </Typography>
      </CardContent>
    </CardTemplate>
  );
};

export default ChildCard;
