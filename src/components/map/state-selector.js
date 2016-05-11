import React from 'react';
import { Component } from 'react';

import { connect } from 'react-redux';

import { selectState } from '../../actions/index';
import { bindActionCreators } from 'redux';

class StateSelector extends Component {
  constructor(props) {
    super(props);

    this.statesOnChange = this.statesOnChange.bind(this);
  }

  statesOnChange(event) {
    // console.log(event.target);
    // console.log(event.target.value);
    let value = event.target.value;
    let selectedState = this.props.states.filter((state) => { return state.abbreviation == value})[0];

    // console.log();
    this.props.selectState(selectedState);
  }

  buildSelect() {
    return this.props.states.map((stateItem) => {
                        return (<option
                                  value={stateItem.abbreviation}>{stateItem.name}</option>) });
  }

  render() {
    return(
      <div className="container">
        <select name="states" onChange={this.statesOnChange}>
          { this.buildSelect() }
        </select>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    states: state.states
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { selectState: selectState }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(StateSelector);
