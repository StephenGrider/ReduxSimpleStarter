import React from 'react';
import PropTypes from 'prop-types';

// Imports Material-UI components
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function PatientCard(props) {
  const { classes } = props;
  const formattedDate = props.dob.slice(0, 10);
  return (
    <Card>
        <div className="card-wrapper">
          <CardContent className="user-info">
            <Typography gutterBottom variant="h5" component="h2">
              { props.firstName } { props.lastName }
            </Typography>
            <Typography component="p">
              Date of Birth: { formattedDate }
            </Typography>
          </CardContent>
          <div className="user-image__wrapper">
            <img className="user-image" src={ props.avatarUrl } />
          </div>
        </div>
      {props.children}
    </Card>
  );
}

PatientCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatientCard);
