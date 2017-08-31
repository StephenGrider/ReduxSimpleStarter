import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '@/actions/index'

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState ({
            term: event.target.value
        })
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ 
            term: "" 
        });
        
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-6">
                        <h2> Weather App</h2>
                    </div>
                    <div className="col-lg-6">
                        <form onSubmit= {this.onFormSubmit} className="input-group">
                                <input 
                                    className="form-control" 
                                    type="text" 
                                    placeholder="Get a five day forecast of your favorite city." 
                                    aria-label="Get a five day forecast of your favorite city."
                                    onChange= { this.onInputChange }
                                    value = { this.state.term}
                                    />
                                <span className="input-group-btn">
                                <button 
                                    className="input-group btn btn-primary search-btn" 
                                    type="submit">
                                    Search!
                                </button>
                                </span>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);