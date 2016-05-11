import React from 'react';
import { Component } from 'react';
import d3 from 'd3'
import topojson from 'topojson';
import L from 'leaflet';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import RSVPForm from './map/rsvp-form';

export default class OpenStreetMap extends Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }

  render() {
    const position = [35.5927461,-82.5564559];
    return (
      <div className="container">
        <Map center={position} zoom={6}
            touchZoom={false} scrollWheelZoom={false}
            zoomControl={false} doubleClickZoom={false}>
          <TileLayer
            url='http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              <RSVPForm eventDate={new Date()} eventTitle="This is the title" />
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}
