import React, { Component } from 'react';
import { connectModule } from 'redux-modules'
import module from '../modules/module';
import '../assets/style.scss';

@connectModule(module)
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Boilerplate Code for modern webapps with react, redux, Webpack</h1>
        <h3>Features : </h3>
        <ul>
          <li>Webpack HMR support.</li>
          <li>Uses redux-modules to organize redux actions, reducers and constants.</li>
          <li>Uses htmlWebpackPlugin and extractTextPlugin support that injects markup directly from a template</li>
          <li>Includes sass/scss support.</li>
          <li>Vendor library caching support.</li>
          <li>Pre-written npm scripts available.</li>
          <li>ImmutableJS support in managing redux app state.</li>
          <li>Get production ready build with uglifier and minifier.</li>
        </ul>
      </div>
    );
  }
}
