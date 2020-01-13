import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import './Footer.css';

import purple from '@material-ui/core/colors/purple';

const useStyles = makeStyles(theme => ({
  footer: {
    color: '#FFFFFF',
    backgroundColor: '#003F71',
    padding: theme.spacing(6),
  },
  table: {
    minWidth: 650,
    color: '#FFFFFF',
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Service', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


function Copyright() {
  return (
    <Typography variant="body2" color="inherit" align="left">
      {'Copyright © '}
      <Link color="inherit" href="https://haufe-akademie.de">
        Haufe Akademie
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer(props)  {

  const classes = useStyles();

    return (
      <React.Fragment>
        <Container maxWidth="lg">
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="inherit" component="p">
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </footer>
        </Container>
      </React.Fragment>
    );
};

/*
          <Grid container spacing={40}>
    <Grid item xs={12} style={{paddingLeft: 0, paddingRight: 0}}>
      <Paper className={classes.paper}>xs=12</Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>xs=12 sm=6</Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>xs=12 sm=6</Paper>
    </Grid>
  </Grid>

          <Table className={classes.table} aria-label="simple table" color="inherit">
        <TableHead>
          <TableRow color='#FFFFFF'>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>          

*/