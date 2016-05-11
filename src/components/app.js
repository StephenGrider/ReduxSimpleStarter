import React from 'react';
import { Component } from 'react';
import Navigation from './navigation';
import PlainMap from './plain-map';
import OpenStreetMap from './openstreet-map';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <PlainMap />

        <OpenStreetMap />
      </div>
    );
  }
}
