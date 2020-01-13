import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Teilnahmegebühr</Title>
      <Typography component="p" variant="h6">
      € 1.440,- zzgl. MwSt.
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      18.-19.06.20 Mannheim
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Weitere Informationen
        </Link>
      </div>
    </React.Fragment>
  );
}
