import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { useMediaQuery } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


import Welcome from '../../components/Welcome';

import Layout from '../Layout';
import './Landingpage.css';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  flex: { 
    display: 'flex'
  },
  flexColumn: { 
    display: 'flex', 
    flexDirection: 'column'
  },
  leftCol: { 
    flex: 1, 
    marginRight: theme.spacing(1, 2)
  },
  rightCol: { 
    flex: 1, 
    marginLeft: theme.spacing(1, 2)
  },
  singleCol: { 
    marginTop: theme.spacing(1, 2), 
    marginBottom: theme.spacing(1, 2)
  }
}));

export default function Landingpage(props){

  const classes = useStyles();
  const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));


  return isXSmall ? (
    <React.Fragment>
      <Layout title='Lernumgebung'>
        <div className="container">
          <h2>In der kleinen Ansicht wird kein Bild angezeigt</h2>
          <p>
            <Link to="/trainingcourses/7355" id="7355">Lehrgang Geprüfte/r bAV-Experte/in</Link>
          </p>
          <p>
            <Link to="/trainingcourses/7356" id="7356">Lehrgang Geprüfte/r Umsatzsteuer-Experte/in</Link>
          </p>
          <p>
            <Link to="/trainingcourses/1835" id="1835">Geprüfte/r Experte/in für Arbeits- und Personalrecht</Link>
          </p>
          <p>
            <Link to="/courses/30170" id="30170">Datensicherheit im Office: Umgang mit Cookies, Phishing & Co.</Link>
          </p>
          <p>
            <Link to="/congress/2934" id="2934">Haufe Assistenz-Kongress 2020</Link>
          </p>
          <p>
            <Link to="/congress/8767" id="8767">Jahresschluss-Tagung Personalbüro</Link>
          </p>
        </div>
      </Layout>
    </React.Fragment>
  ) : isSmall ? (
    <React.Fragment>
      <Layout title='Lernumgebung'>
      <div className="container">
        <Welcome title='Lehrgangsauswahl' subtitle='Das ist die mittlere Größe' />
        <p>
          <Link to="/trainingcourses/7355" id="7355">Lehrgang Geprüfte/r bAV-Experte/in</Link>
        </p>
        <p>
          <Link to="/trainingcourses/7356" id="7356">Lehrgang Geprüfte/r Umsatzsteuer-Experte/in</Link>
        </p>
        <p>
          <Link to="/trainingcourses/1835" id="1835">Geprüfte/r Experte/in für Arbeits- und Personalrecht</Link>
        </p>
        <p>
          <Link to="/courses/30170" id="30170">Datensicherheit im Office: Umgang mit Cookies, Phishing & Co.</Link>
        </p>
        <p>
          <Link to="/congress/2934" id="2934">Haufe Assistenz-Kongress 2020</Link>
        </p>
        <p>
          <Link to="/congress/8767" id="8767">Jahresschluss-Tagung Personalbüro</Link>
        </p>
    </div>
    </Layout>
    </React.Fragment>

  ) : (
    <React.Fragment>
      <Layout title='Lernumgebung'>
      <div className="container">
      <div>
        <div className={classes.flexColumn}>
          <div style={{ marginBottom: '2em' }}>
            <Welcome title='Lehrgangsauswahl' subtitle='Bild und Text ändern sich anhand der Displaygröße' />
          </div>
        </div>
      </div>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Paper className={classes.root}>
          <Typography component="p" align="left" >
            Diese Seite dient nur als Beispiel für den Absprung aus einer übergeordenten Seite. In diesem Fall könnte es die Lernumgebung sein.
          </Typography>
        </Paper>
        <Paper>
          <p>
            <Link to="/trainingcourses/7355" id="7355">Lehrgang Geprüfte/r bAV-Experte/in</Link>
          </p>
        </Paper>
        <Paper>
          <p>
            <Link to="/trainingcourses/7356" id="7356">Lehrgang Geprüfte/r Umsatzsteuer-Experte/in</Link>
          </p>
        </Paper>
        <Paper>
          <p>
            <Link to="/trainingcourses/7347" id="7347">Lehrgang Geprüfte/r Umsatzsteuer-Experte/in (7347)</Link>
          </p>
        </Paper>
        <Paper>
          <p>
            <Link to="/trainingcourses/1835" id="1835">Geprüfte/r Experte/in für Arbeits- und Personalrecht</Link>
          </p>
        </Paper>
        <Paper>
          <p>
            <Link to="/courses/30170" id="30170">Datensicherheit im Office: Umgang mit Cookies, Phishing & Co.</Link>
          </p>
        </Paper>
        <Paper>
          <p>
            <Link to="/congress/2934" id="2934">Haufe Assistenz-Kongress 2020</Link>
          </p>
        </Paper>
        <Paper>
          <p>
          <Link to="/congress/8767" id="8767">Jahresschluss-Tagung Personalbüro</Link>
          </p>
        </Paper>
      </Container>
    </div>
    </Layout>
    </React.Fragment>

  );

}
