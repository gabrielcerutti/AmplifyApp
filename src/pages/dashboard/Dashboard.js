import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import bgImg from '../../assets/stage_ich-mach-es.png';

import { mainListItems, secondaryListItems } from './listItems';

import Deposits from './Deposits';

import LightHouseCard from '../../components/LightHouseCard/LightHouseCard';

import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import LTHImage from '../../assets/lth_300_300.jpg';
import Avatar from '../../assets/stephanie.jpg';
import AvatarBan1 from '../../assets/ban1.jpg';
import AvatarBan2 from '../../assets/ban2.jpg';


function Jumbotron(){
  return(
    <img 
      src={bgImg}
      alt="new"
      />
  );
}

const styles = {
  flex: { display: 'flex' },
  flexColumn: { display: 'flex', flexDirection: 'column' },
  leftCol: { flex: 1, marginRight: '1em' },
  rightCol: { flex: 1, marginLeft: '1em' },
  singleCol: { marginTop: '2em', marginBottom: '2em' },
};

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard(props) {

  console.log(props);

  const revenue = 3;
  var _data = props.data;

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <React.Fragment>
    <div className={classes.root}>
      <CssBaseline />
      <main>
        <Jumbotron/> 
        <Container className={classes.container} maxWidth="lg">

          <Typography variant="h2" component="h2">
            {props.data.title}
          </Typography>

          <div className={classes.appBarSpacer} />
            <Typography variant="h3" gutterBottom>
              {_data.elements.headline}
            </Typography>

          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                {
                  _data.elements.items.map( item => (
                  
                    <Grid item key={item.id}>

                    <Paper className={classes.paper}>
                      <Typography gutterBottom variant="h5" component="h4" >
                        {item.title}
                      </Typography>
                      <Divider variant="inset" />
                      <Typography>
                        {item.teaser}
                      </Typography>
                    </Paper>
                    <br/ >

                    <ExpansionPanel key={item.id}>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>Details</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        {item.description}
                      </Typography>
                    </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <br/ >
                  </Grid>
                  ))
                }
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  <Deposits />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Container>
       
        <Container className={classes.container} maxWidth="lg">

          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} lg={4}>
                <Card profile>
                  <CardAvatar profile>
                    <a href="#" onClick={e => e.preventDefault()}>
                      <img src={AvatarBan2} alt="..." width="150px" />
                    </a>
                  </CardAvatar>
                  <CardBody profile>
                    <h6 className={classes.cardCategory}>Stimmen unserer Teilnehmer</h6>
                    <h4 className={classes.cardTitle}>Marius</h4>
                    <p className={classes.description}>
                      Es war so wunderbar.
                    </p>
                  </CardBody>
                </Card>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Card profile>
                  <CardAvatar profile>
                    <a href="#" onClick={e => e.preventDefault()}>
                      <img src={LTHImage} alt="..." width="150px" />
                    </a>
                  </CardAvatar>
                  <CardBody profile>
                    <h6 className={classes.cardCategory}>Stimmen unserer Teilnehmer</h6>
                    <h4 className={classes.cardTitle}>Susi Sorglos</h4>
                    <p className={classes.description}>
                      Es war so wunderbar.
                    </p>
                  </CardBody>
                </Card>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Card profile>
                  <CardAvatar profile>
                    <a href="#" onClick={e => e.preventDefault()}>
                      <img src={AvatarBan1} alt="..." width="150px" />
                    </a>
                  </CardAvatar>
                  <CardBody profile>
                    <h6 className={classes.cardCategory}>Stimmen unserer Teilnehmer</h6>
                    <h4 className={classes.cardTitle}>Susi Sorglos</h4>
                    <p className={classes.description}>
                      Mir hän mit Legosteinli g'spielt.
                    </p>
                  </CardBody>
                </Card>
              </Grid>

            </Grid>
          </Container>
        </Container>

        <Container>
          <Grid item xs={12} md={4} lg={4}>
            <LightHouseCard value={revenue} />
         </Grid>
        </Container>


        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            { _data !== undefined && 
              <Grid container spacing={2}>
                <Grid item xs={12} md={8} lg={9}>
                  {
                    _data.elements.items.map( item => (
                      <Grid item key={item.id} xs={12} md={8} lg={9}>
                        <ExpansionPanel key={item.id}>
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography className={classes.heading}>{item.title}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Typography>
                            {item.description}
                          </Typography>
                        </ExpansionPanelDetails>
                        </ExpansionPanel>
                      </Grid>
                    )
                    )
                  }
                </Grid>
              </Grid>
            }
          </Grid>
        </Container>

      </main>
    </div>
    </React.Fragment>
  );
}
