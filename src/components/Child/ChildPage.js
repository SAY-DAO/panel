import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import MediaSection from './MediaSection';

const useStyles = makeStyles({
  root: {
    padding: 12,
    width: '100%',
  },
});

const ChildPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={3}>
        <Grid
          container
          item
          direction="row-reverse"
          justify="space-between"
          spacing={2}
        >
          <MediaSection />
        </Grid>
        <Grid item spacing={2}>
          <Card>
            <CardContent></CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChildPage;
