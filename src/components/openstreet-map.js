import React from 'react';
import { Component } from 'react';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import RSVPForm from './map/rsvp-form';
import StateSelector from './map/state-selector';
import { connect } from 'react-redux';

class OpenStreetMap extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  renderEventsList() {
    return this.props.events.map((event) => {
      const date = new Date(event.date);
      const position = [event.Latitude, event.Longitude];

      return (
        <Marker position={position} key={`${event.City} ${event.State} ${event.Date}`}>
          <Popup>
            <RSVPForm eventDate={new Date(event.Date)} eventTitle={`${event.City}, ${event.State}`} />
          </Popup>
        </Marker>
      );
    });
  }

  getCentralPosition() {
    const DEFAULT_CENTER = [35.5927461,-82.5564559];
    console.log("1 --> ", this.props.selectedState);
    if (!this.props.selectedState) {
      return DEFAULT_CENTER;
    }

    console.log("2 --> ", this.props.selectedState);
    let abbrev = this.props.selectedState.abbreviation;
    let selectedEvents = this.props.events.filter((event) => { return event.StateAbbrev == abbrev });


    if ( selectedEvents.length > 0) {
      return [selectedEvents[0].Latitude, selectedEvents[0].Longitude];
    } else {
      return DEFAULT_CENTER;
    }
  }

  render() {

    let central_position = this.getCentralPosition();
    return (
      <div className="container">
        <StateSelector />
        <Map center={central_position} zoom={6}
            touchZoom={false} scrollWheelZoom={false}
            zoomControl={false} doubleClickZoom={false}>
          <TileLayer
            url='http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          { this.renderEventsList() }
        </Map>
      </div>
    )
  }
}

function mapStateToProps(state) {
  //whatever is returned here will showup as props
  return {
    events: state.events,
    selectedState: state.selectedState
  }
}

export default connect(mapStateToProps)(OpenStreetMap);
