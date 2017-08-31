import React, { Component } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { connect } from 'react-redux'

class WeatherList extends Component { 
    renderWeather(cityData) {
        const tempWeather = weather => {
            return weather.main.temp;
        }
        const pressureWeather = weather => {
            return weather.main.pressure;
        }
        const humidityWeather = weather => {
            return weather.main.humidity;
        }
            const name = cityData.city.name;
            const temps = cityData.list.map(tempWeather);
            const pressure = cityData.list.map(pressureWeather);
            const humidity = cityData.list.map(humidityWeather);
            
            return (
                <tr key = {name}>
                    <td>{name}</td>
                    <td>
                    <Sparklines data={temps}>
                        <SparklinesLine color="red" />
                    </Sparklines>
                    </td>
                    <td>
                        <Sparklines data={pressure}>
                            <SparklinesLine color="green" />
                        </Sparklines>
                    </td>
                    <td>
                        <Sparklines data={humidity}>
                            <SparklinesLine color="blue" />
                        </Sparklines>
                    </td>
                </tr>
                
            )
        }
    render() {
        return(
            <div className="w-container">
                <table className="table table-hover">
                <thead className="thead-default">
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                    { this.props.newWeather.map(this.renderWeather.bind(this)) }
                </tbody>
            </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        newWeather: state.weather
    }
}

export default connect(mapStateToProps)(WeatherList);