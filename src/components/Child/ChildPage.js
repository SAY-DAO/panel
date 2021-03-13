import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MediaSection from './MediaSection';
import InfoSection from './InfoSection';
import StorySection from './StorySection';

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
      </Grid>
    </div>
  );
};

export default ChildPage;
