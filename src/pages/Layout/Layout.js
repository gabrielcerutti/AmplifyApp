import React, { memo } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Layout.css';

export default function Layout(props)  {
    return (
      <React.Fragment>
        <Paper>
          <Header title={props.title} />
          {props.children}
          <Footer />
        </Paper>
      </React.Fragment>
    );
};
