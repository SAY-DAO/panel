import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import AudioPlayer from 'material-ui-audio-player';

const useStyles = makeStyles({
  mediaCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
    height: 206,
  },
});

const audioStyle = makeStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    boxShadow: 'none',
    width: '90%',
    margin: 12,
    marginTop: 20,
  },
});

const MediaSection = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item xl={2} lg={2} md={3} sm={6} xs={12}>
        <Card className={classes.mediaCard}>
          <CardMedia
            component="img"
            src="https://sayapp.company/files/1-child/1-avatar_0010010001.png"
            title="Setareh"
          />
          <CardContent>Avatar</CardContent>
        </Card>
      </Grid>
      <Grid item xl={2} lg={2} md={3} sm={6} xs={12}>
        <Card className={classes.mediaCard}>
          <CardMedia
            component="img"
            src="https://sayapp.company/files/1-child/1-sleptAvatar_0010010001.png"
            title="Setareh"
          />
          <CardContent>Slept Avatar</CardContent>
        </Card>
      </Grid>
      <Grid item xl={8} lg={8} md={6} sm={12} xs={12}>
        <Card className={classes.mediaCard}>
          <AudioPlayer
            src="https://sayapp.company/files/1-child/1-voice_0010010001.mp3"
            download
            useStyles={audioStyle}
          />
          <CardContent>Voice</CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default MediaSection;
