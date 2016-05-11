import React from 'react';
import { Component } from 'react';
import d3 from 'd3'
import topojson from 'topojson';
import L from 'leaflet';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export default class OpenStreetMap extends Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }

  render() {
    const position = [51.505, -0.09];
    return (
      <div className="container">
        <Map center={position} zoom={13}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}
