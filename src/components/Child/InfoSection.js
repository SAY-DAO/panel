import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    fontSize: 18,
  },
  infoCard: {
    height: 305,
  },
  basicCard: {
    backgroundColor: '#6F9594',
  },
});

const Title = withStyles({
  root: {
    color: '#C4C4C4',
    fontSize: 14,
  },
})(Typography);

const WhiteBody = withStyles({
  root: {
    color: '#ffffff',
  },
})(Typography);

const InfoSection = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} md={4} lg={3} className={classes.root}>
        <Card className={`${classes.infoCard} ${classes.basicCard}`}>
          <CardContent>
            <Title variant="h6">کد کودک</Title>
            <WhiteBody gutterBottom>54444</WhiteBody>
            <Title variant="h6">نام</Title>
            <WhiteBody gutterBottom>تست</WhiteBody>
            <Title variant="h6">نام خانوادگی</Title>
            <WhiteBody gutterBottom>تست</WhiteBody>
            <Title variant="h6">سن</Title>
            <WhiteBody gutterBottom>3</WhiteBody>
            <Title variant="h6">جنسیت</Title>
            <WhiteBody gutterBottom>تست</WhiteBody>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4} lg={6}>
        <Card className={classes.infoCard}>
          <CardContent>
            <Grid container direction="row-reverse">
              <Grid item xs={6}>
                <Title variant="h6">کشور</Title>
                <Typography gutterBottom>تست</Typography>
              </Grid>
              <Grid item xs={6}>
                <Title variant="h6">شهر</Title>
                <Typography gutterBottom>تست</Typography>
              </Grid>
              <Grid item xs={6}>
                <Title variant="h6">تاریخ تولد</Title>
                <Typography gutterBottom>تست</Typography>
              </Grid>
              <Grid item xs={6}>
                <Title variant="h6">محل تولد</Title>
                <Typography gutterBottom>تست</Typography>
              </Grid>
              <Grid item xs={6}>
                <Title variant="h6">ملیت</Title>
                <Typography gutterBottom>تست</Typography>
              </Grid>
              <Grid item xs={6}>
                <Title variant="h6">تعداد خانوار</Title>
                <Typography gutterBottom>3</Typography>
              </Grid>
              <Grid item xs={6}>
                <Title variant="h6">خانواده SAY</Title>
                <Typography gutterBottom>1</Typography>
              </Grid>
              <Grid item xs={6}>
                <Title variant="h6">تحصیلات</Title>
                <Typography gutterBottom>هفتم</Typography>
              </Grid>
              <Grid item xs={6}>
                <Title variant="h6">شماره تماس</Title>
                <Typography gutterBottom>1111111</Typography>
              </Grid>
              <Grid item xs={6}>
                <Title variant="h6">شماره تماس انجمن</Title>
                <Typography gutterBottom>11111111</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Card className={classes.infoCard}>
          <CardContent>
            <Title variant="h6">تعداد نیاز</Title>
            <Typography gutterBottom>18</Typography>
            <Title variant="h6">هزینه شده</Title>
            <Typography gutterBottom>200,000</Typography>
            <Title variant="h6">وضعیت تایید</Title>
            <Typography gutterBottom>تست</Typography>
            <Title variant="h6">تایید کننده</Title>
            <Typography gutterBottom>تست</Typography>
            <Title variant="h6">تاریخ تایید</Title>
            <Typography gutterBottom>تست</Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default InfoSection;
