import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Imports Material-Ui components
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class WoundList extends React.Component {

  render() {
    const { classes, wounds } = this.props;

    const styles = {
      card: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
    };

    return (
      <div>
        { wounds.map(wound => (
          <List key={ wound.attributes.id } className={ classes.root } >
            <Card className={ classes.card } >
              <CardContent>
                <div className="card-wrapper">
                  <div className="wound-info">
                    <Typography gutterBottom variant="h5" component="h2">
                      { wound.attributes.bodyLocation } wound: { wound.attributes.type }
                    </Typography>
                    <Typography component="p">
                      Acquired in House: { wound.attributes.inHouseAcquired.toString() }
                    </Typography>
                    <Typography component="p">
                      Resolved: { wound.attributes.resolved.toString() }
                    </Typography>
                  </div>
                  <div className="wound-image__wrapper">
                    <img src={ wound.attributes.imageUrl } height="140" width="140" className = "wound-image" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </List>
        ))}
      </div>
    );
  }
}


WoundList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ patient: { wounds } }) => ({
  wounds,
});

export default connect(mapStateToProps)(withStyles(styles)(WoundList));