import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    width: 180,
    height: 275,
  },
  cardActionArea: {
    height: '100%',
  },
});

const CardTemplate = ({ children, style }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={style}>
      <CardActionArea className={classes.cardActionArea}>
        <Grid
          container
          justify="space-between"
          direction="column"
          alignItems="center"
          style={{ height: '100%' }}
        >
          {children}
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default CardTemplate;
