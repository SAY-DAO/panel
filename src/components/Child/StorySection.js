import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Title } from './InfoSection';

const useStyles = makeStyles({
  summaryCard: {
    height: 110,
    '& .paragraph': {
      height: 40,
      overflow: 'auto',
    },
  },
  storyCard: {
    height: 260,
    '& .paragraph': {
      height: 190,
      overflow: 'auto',
    },
  },
  paragraph: {
    paddingTop: 0,
    height: '80%',
    '& p': {
      height: '100%',
      overflow: 'auto',
    },
  },
});

const StorySection = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} lg={6}>
        <Card className={classes.summaryCard}>
          <CardContent>
            <Title variant="h6" gutterBottom>
              خلاصه داستان فارسی
            </Title>
            <Typography className="paragraph">
              دخترک می‌داند که خواندن و نوشتن تنها اتفاق‌های خوبی هستند که همه
              می‌توانند اگر بخواهند از آن‌ها استفاده کنند
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Card className={classes.summaryCard}>
          <CardContent>
            <Title variant="h6" gutterBottom>
              خلاصه داستان انگلیسی
            </Title>
            <Typography className="paragraph">
              He comprehends that sometimes for the sentences in his head to be
              heard, they have to take more turns.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Card className={classes.storyCard}>
          <CardContent>
            <Title variant="h6" gutterBottom>
              داستان فارسی
            </Title>
            <Typography className="paragraph">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Card className={classes.storyCard}>
          <CardContent>
            <Title variant="h6" gutterBottom>
              داستان انگلیسی
            </Title>
            <Typography className="paragraph">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default StorySection;
