import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const wounds = [{"type":"wounds","id":1,"attributes":{"patientId":1,"type":"Burn","bodyLocation":"Groin","inHouseAcquired":false,"resolved":true,"imageUrl":"https://images.freeimages.com/images/large-previews/1e5/injured-2-1245415.jpg","createdAt":"2010-11-30T20:36:57.112Z","updatedAt":"2010-11-30T20:36:57.112Z"}},{"type":"wounds","id":2,"attributes":{"patientId":1,"type":"Skin Tear","bodyLocation":"Groin","inHouseAcquired":true,"resolved":true,"imageUrl":"https://images.freeimages.com/images/large-previews/568/wounded-1325741.jpg","createdAt":"2015-11-28T20:05:20.354Z","updatedAt":"2015-11-28T20:05:20.354Z"}},{"type":"wounds","id":3,"attributes":{"patientId":1,"type":"Bruise","bodyLocation":"Hand","inHouseAcquired":false,"resolved":false,"imageUrl":"https://images.freeimages.com/images/large-previews/fcf/cut-off-fish-tail-1-1528006.jpg","createdAt":"2012-02-14T10:37:25.366Z","updatedAt":"2012-02-14T10:37:25.366Z"}},{"type":"wounds","id":4,"attributes":{"patientId":1,"type":"Pressure","bodyLocation":"Arm","inHouseAcquired":true,"resolved":false,"imageUrl":"https://images.freeimages.com/images/large-previews/568/wounded-1325741.jpg","createdAt":"2013-07-21T12:38:43.826Z","updatedAt":"2013-07-21T12:38:43.826Z"}},{"type":"wounds","id":5,"attributes":{"patientId":1,"type":"Rash","bodyLocation":"Forearm","inHouseAcquired":false,"resolved":true,"imageUrl":"https://images.freeimages.com/images/large-previews/568/wounded-1325741.jpg","createdAt":"2015-08-27T15:11:36.892Z","updatedAt":"2015-08-27T15:11:36.892Z"}},{"type":"wounds","id":6,"attributes":{"patientId":1,"type":"Blister","bodyLocation":"Arm","inHouseAcquired":false,"resolved":false,"imageUrl":"https://images.freeimages.com/images/large-previews/575/ouch-1434056.jpg","createdAt":"2015-09-10T21:38:57.801Z","updatedAt":"2015-09-10T21:38:57.801Z"}},{"type":"wounds","id":7,"attributes":{"patientId":1,"type":"Pressure","bodyLocation":"Back","inHouseAcquired":false,"resolved":true,"imageUrl":"https://images.freeimages.com/images/large-previews/1e5/injured-2-1245415.jpg","createdAt":"2014-09-12T05:01:21.813Z","updatedAt":"2014-09-12T05:01:21.813Z"}},{"type":"wounds","id":8,"attributes":{"patientId":1,"type":"Surgical","bodyLocation":"Hips","inHouseAcquired":false,"resolved":false,"imageUrl":"https://images.freeimages.com/images/large-previews/b17/cut-lime-1329725.jpg","createdAt":"2016-03-21T13:45:09.742Z","updatedAt":"2016-03-21T13:45:09.742Z"}},{"type":"wounds","id":9,"attributes":{"patientId":1,"type":"Rash","bodyLocation":"Arm","inHouseAcquired":true,"resolved":true,"imageUrl":"https://images.freeimages.com/images/large-previews/1e5/injured-2-1245415.jpg","createdAt":"2010-07-17T04:48:44.829Z","updatedAt":"2010-07-17T04:48:44.829Z"}},{"type":"wounds","id":10,"attributes":{"patientId":1,"type":"Moisture Associated Skin Damage","bodyLocation":"Neck","inHouseAcquired":false,"resolved":false,"imageUrl":"https://images.freeimages.com/images/large-previews/fcf/cut-off-fish-tail-1-1528006.jpg","createdAt":"2012-04-01T07:08:21.688Z","updatedAt":"2012-04-01T07:08:21.688Z"}},{"type":"wounds","id":11,"attributes":{"patientId":1,"type":"Cancer Lesion","bodyLocation":"Groin","inHouseAcquired":true,"resolved":true,"imageUrl":"https://images.freeimages.com/images/large-previews/b17/cut-lime-1329725.jpg","createdAt":"2014-07-13T00:37:52.480Z","updatedAt":"2014-07-13T00:37:52.480Z"}},{"type":"wounds","id":12,"attributes":{"patientId":1,"type":"Venous","bodyLocation":"Chest","inHouseAcquired":false,"resolved":true,"imageUrl":"https://images.freeimages.com/images/large-previews/1e5/injured-2-1245415.jpg","createdAt":"2013-11-07T19:19:55.883Z","updatedAt":"2013-11-07T19:19:55.883Z"}},{"type":"wounds","id":13,"attributes":{"patientId":1,"type":"Skin Tear","bodyLocation":"Groin","inHouseAcquired":false,"resolved":true,"imageUrl":"https://images.freeimages.com/images/large-previews/b40/wound-blood-1245806.jpg","createdAt":"2012-01-24T01:25:10.347Z","updatedAt":"2012-01-24T01:25:10.347Z"}},{"type":"wounds","id":14,"attributes":{"patientId":1,"type":"Blister","bodyLocation":"Buttocks","inHouseAcquired":false,"resolved":false,"imageUrl":"https://images.freeimages.com/images/large-previews/1e5/injured-2-1245415.jpg","createdAt":"2016-08-30T15:43:48.610Z","updatedAt":"2016-08-30T15:43:48.610Z"}},{"type":"wounds","id":15,"attributes":{"patientId":1,"type":"Venous","bodyLocation":"Arm","inHouseAcquired":true,"resolved":true,"imageUrl":"https://images.freeimages.com/images/large-previews/568/wounded-1325741.jpg","createdAt":"2013-11-06T05:31:13.649Z","updatedAt":"2013-11-06T05:31:13.649Z"}},{"type":"wounds","id":16,"attributes":{"patientId":1,"type":"Surgical","bodyLocation":"Ankle","inHouseAcquired":true,"resolved":true,"imageUrl":"https://images.freeimages.com/images/large-previews/3e6/blood-1312378.jpg","createdAt":"2014-12-10T04:50:34.262Z","updatedAt":"2014-12-10T04:50:34.262Z"}},{"type":"wounds","id":17,"attributes":{"patientId":1,"type":"Pressure","bodyLocation":"Chest","inHouseAcquired":true,"resolved":true,"imageUrl":"https://images.freeimages.com/images/large-previews/b17/cut-lime-1329725.jpg","createdAt":"2012-12-11T21:35:46.132Z","updatedAt":"2012-12-11T21:35:46.132Z"}},{"type":"wounds","id":18,"attributes":{"patientId":1,"type":"Rash","bodyLocation":"Head","inHouseAcquired":true,"resolved":false,"imageUrl":"https://images.freeimages.com/images/large-previews/1e5/injured-2-1245415.jpg","createdAt":"2016-05-25T04:40:40.605Z","updatedAt":"2016-05-25T04:40:40.605Z"}},{"type":"wounds","id":19,"attributes":{"patientId":1,"type":"Rash","bodyLocation":"Leg","inHouseAcquired":false,"resolved":true,"imageUrl":"https://images.freeimages.com/images/large-previews/568/wounded-1325741.jpg","createdAt":"2017-11-04T11:57:00.407Z","updatedAt":"2017-11-04T11:57:00.407Z"}},{"type":"wounds","id":20,"attributes":{"patientId":1,"type":"Bruise","bodyLocation":"Hand","inHouseAcquired":false,"resolved":true,"imageUrl":"https://images.freeimages.com/images/large-previews/1e5/injured-2-1245415.jpg","createdAt":"2016-11-03T10:20:52.127Z","updatedAt":"2016-11-03T10:20:52.127Z"}}];

class WoundList extends React.Component {

  render() {
    const { classes } = this.props;

    const styles = {
      card: {
        maxWidth: 50,
      },
      media: {
        height: 140,
      },
    };

    return (
      <div>
        { wounds.map(wound => (
          <List key={ wound.id } className={ classes.root }>
            <Card>
              <CardMedia>
                <div className="wound-image__wrapper">
                  <img className="wound-image" width="100" height="100" src={ wound.attributes.imageUrl}/>
                </div>
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  { wound.attributes.bodyLocation } wound: { wound.attributes.type }
                </Typography>
                <Typography component="p">
                  Acquired in House: { wound.attributes.inHouseAcquired.toString() }
                </Typography>
                <Typography component="p">
                  Resolved: { wound.attributes.resolved.toString() }
                </Typography>
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

export default withStyles(styles)(WoundList);