import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Circular from './Circular'
import './Styles.css'

const styles = {
  card: {
    minWidth: 275,
    display: 'block',
    margin: '0 auto'
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;

  if(props.loading === true) {
    return (
    <Circular />
    );
  } else {
    return (
      <div className="App">
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary">
              Let's find your location
            </Typography>
            <Typography variant="headline" component="h2">
              Coordinates:
            </Typography>
            <Typography component="p">
              Your latitude is: {props.latitude}
              <br />
              Your longitude is: {props.longitude}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);