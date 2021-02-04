import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    width: 180,
    height: 270,
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.08)',
    borderRadius: 10,
  },
  cardActionArea: {
    height: '100%',
  },
  media: {
    width: 140,
    height: 140,
    margin: '0 auto',
    borderRadius: '50%',
  },
});

const ChildCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.cardActionArea}>
        <CardMedia
          className={classes.media}
          image="https://sayapp.company/files/1-child/1-avatar_0010010001.png"
          title="logo192.png"
        />
        <CardContent>
          <Typography variant="h6" align="center" paragraph>
            ستاره
          </Typography>
          <Grid container direction="row-reverse" justify="space-between">
            <Grid item>نیازهای ثبت شده</Grid>
            <Grid item>:</Grid>
            <Grid item>100</Grid>
          </Grid>
          <Grid container direction="row-reverse" justify="space-between">
            <Grid item>نیازهای انحام شده</Grid>
            <Grid item>:</Grid>
            <Grid item>0</Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ChildCard;
