import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import './ImageBox.css';

import LTHImage from '../../assets/lth_300_300.jpg';


const useStyles = makeStyles({
  imagecontainer: {
    float: 'left',
    margin: '-20px 20px 0 15px',
    zIndex: 100,
    borderRadius: 3,
    backgroundImage: LTHImage,
  }
});

const ImageBox = ({ Icon, bgColor }) => {
  const classes = useStyles();
  return (
      <Box  className={classes.imagecontainer} />
  );
};

export default ImageBox;