import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AudioPlayer from 'material-ui-audio-player';

const useStyles = makeStyles({
  root: {
    padding: 4,
    width: '100%',
  },
  mediaCard: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  media: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    margin: 20,
  },
});

const ChildPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Card className={classes.mediaCard}>
            <Box
              display="flex"
              flexDirection="row-reverse"
              alignItems="center"
              mx={1}
            >
              <CardMedia
                className={classes.media}
                component="img"
                src="https://sayapp.company/files/1-child/1-avatar_0010010001.png"
                title="Setareh"
              />
              <CardContent>Avatar</CardContent>
            </Box>
            <Box
              display="flex"
              flexDirection="row-reverse"
              alignItems="center"
              mx={1}
            >
              <CardMedia
                className={classes.media}
                component="img"
                src="https://sayapp.company/files/1-child/1-sleptAvatar_0010010001.png"
                title="Setareh"
              />
              <CardContent>Slept Avatar</CardContent>
            </Box>
            <Box display="flex" justifyContent="center" flexGrow={1} mx={3}>
              <AudioPlayer
                src="https://sayapp.company/files/1-child/1-voice_0010010001.mp3"
                download
              />
            </Box>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent></CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChildPage;
