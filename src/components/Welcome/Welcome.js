import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import './Welcome.css';

const useStyles = makeStyles({
  media: {
      height: '10em',
  },
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

const mediaUrl = `http://d8wr4j82ogzfw.cloudfront.net/posters/${getRandomInt(4) + 1}.jpg`;

const Welcome = (props) => {
  const classes = useStyles();
    const data = props;
    console.log(data);
  return (
      <Card>
          <CardMedia image={mediaUrl} className={classes.media} />
          <CardContent>
              <Typography variant="h5" component="h2">
              {data.title}
              </Typography>
              <Typography component="p">
                  {data.subtitle}
              </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: 'flex-end' }}>
              <Button href="https://haufe-akademie.de" id="home-id">
                  Home
              </Button>
              <Button href="https://work.haufegroup.io" id="sbf-id">
                  Silicon Black Forest
              </Button>
          </CardActions>
      </Card>
  );
};

export default Welcome;