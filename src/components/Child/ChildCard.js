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
    height: 275,
  },
  cardActionArea: {
    height: '100%',
  },
  media: {
    width: 120,
    height: 120,
    margin: '20px auto 10px',
    borderRadius: '50%',
    boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.25)',
    backgroundColor: '#f1f1f1',
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
          title="Setareh"
        />
        <CardContent>
          <Typography variant="h6" align="center" paragraph>
            ستاره
          </Typography>
          <Grid container direction="row-reverse" justify="space-between">
            <Grid item>نیازهای ثبت شده</Grid>
            <Grid item>100</Grid>
          </Grid>
          <Grid container direction="row-reverse" justify="space-between">
            <Grid item>نیازهای انحام شده</Grid>
            <Grid item>0</Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ChildCard;
