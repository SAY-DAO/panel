import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import MediaSection from './MediaSection';
import InfoSection from './InfoSection';
import StorySection from './StorySection';
import DefaultButton from '../DefaultButton';

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
        <Grid container item direction="row-reverse" justify="space-between">
          <Typography variant="h2">Hello miss loblob</Typography>
          <DefaultButton text="Edit" size="small" />
        </Grid>
        <Grid
          container
          item
          direction="row-reverse"
          justify="space-between"
          spacing={2}
        >
          <MediaSection />
        </Grid>
        <Grid
          container
          item
          direction="row-reverse"
          justify="space-between"
          spacing={2}
        >
          <InfoSection />
        </Grid>
        <Grid
          container
          item
          direction="row-reverse"
          justify="space-between"
          spacing={2}
        >
          <StorySection />
        </Grid>
        <Grid container item direction="row-reverse" justify="space-between">
          <Typography variant="h2">Child Needs</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChildPage;
