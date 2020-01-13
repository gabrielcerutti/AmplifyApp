import React, { Component, Fragment } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { spacing } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ReactMarkdown from 'react-markdown';
import renderHTML from 'react-render-html';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './Trainingcourse.css';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  sectionGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    align: 'left'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  panelContent:{

  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  root: {
    padding: theme.spacing(3, 2),
  }
}));

export default function Trainingcourse(props) {


  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  var _cards = props.data.obligationTraining;
  const _optionalTrainings = props.data.OptionalTrainings;
  var _markdown = null; 
  // Falsche Logik implementiert. Noch mal überdenken, hier kommt ein Array
  if( props.data.content !== undefined && props.data.content[0].markdown !== undefined )
  {
    _markdown = props.data.content[0].markdown;
  }

  var _html = null; 
  if( props.data.content !== undefined && props.data.content[0].html !== undefined )
  {
    _html = props.data.content[0].html.join('\n');
  }

  var _papers = null;
  if( props.data.papers !== undefined)
  {
    _papers = props.data.papers;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
      <Typography variant="h2" component="h2">
        {props.data.title}
      </Typography>
        <Container className={classes.cardGrid} maxWidth="md">
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3" align="left" color="textSecondary" paragraph>
              {props.data.secondTitle}
            </Typography>
            <Typography component="p" align="left" >
              {props.data.description}
            </Typography>
          </Paper>
        </Container>
        {
          _markdown !== null && _markdown != undefined &&
          <React.Fragment>
            <Container className={classes.sectionGrid} maxWidth="md">
              <Paper className={classes.root}>
                <Typography component="p" align="left" >
                  <ReactMarkdown source={_markdown} />
                </Typography>
              </Paper>
            </Container>
          </React.Fragment>
        }

        {
          _html !== null && _html != undefined &&
          <React.Fragment>
            <Container className={classes.sectionGrid} maxWidth="md">
              <Paper className={classes.root}>
                <Typography component="p" align="left" >
                  {renderHTML(_html)}
                </Typography>
              </Paper>
            </Container>
          </React.Fragment>
        }


        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}

          { _cards !== null && _cards !== undefined &&
            <Grid container spacing={4}>
              {_cards.map(card => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.image}
                      title={card.tooltip}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h4" >
                      {card.title}
                      </Typography>
                      <Typography>
                        {card.teaser}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                      <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                  <ExpandMoreIcon />
                  </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                          minutes.
                        </Typography>
                        <Typography paragraph>
                          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                          heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                          browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                          and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                          pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                          saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                          Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                          without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                          medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                          again without stirring, until mussels have opened and rice is just tender, 5 to 7
                          minutes more. (Discard any mussels that don’t open.)
                        </Typography>
                        <Typography>
                          Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                      </CardContent>
                  </Collapse>
                    
                  </Card>
                </Grid>
              ))}
            </Grid>
          }
        </Container>
        {
          _optionalTrainings !== undefined && (
          <div>
            <Container className={classes.cardGrid} maxWidth="md">
              <Paper className={classes.root}>
                <Typography component="p" align="left" >
                {_optionalTrainings.Description}
                </Typography>
              </Paper>
            </Container>
            <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {
                  _optionalTrainings.Trainings.map( t => (
                    <Grid item key={t.id} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                        <CardMedia
                          className={classes.cardMedia}
                          image={t.image}
                          title={t.tooltip}
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h5" component="h2">
                          {t.title}
                          </Typography>
                          <Typography>
                            {t.teaser}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" color="primary">
                            View
                          </Button>
                          <Button size="small" color="primary">
                            Edit
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))
              }
                    </Grid>
            </Container>
          </div> )                      
        }

        { _papers !== undefined  && _papers !== null && 
          <React.Fragment>
            { _papers.sections.map(section => (
              <Container className={classes.sectionGrid} maxWidth="md">
                <Paper className={classes.root}>
                  { section.title !== undefined &&
                    <Typography variant="h5" component="h3" align="left" color="textSecondary" paragraph>
                      {section.title}
                    </Typography>
                  }
                  <Typography component="p" align="left" >
                    {section.content}
                  </Typography>
                  { section.link !== undefined &&
                    <Box component="span" p={2}>
                      <Typography component="p" align="left">
                        <Link href={section.link.href}>{section.link.text}</Link>
                      </Typography>
                    </Box>
                  }
                </Paper>
                </Container>
              ))
            }
          </React.Fragment>
        }
      </main>
    </React.Fragment>
  );
}
