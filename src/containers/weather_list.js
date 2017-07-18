import React, { Component } from 'react';
import { connect } from 'react-redux';
import {SparklinesLine , Sparklines} from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component
{
    renderWeather(dados)
    {

        const cidadeNome = dados.city.name;
        const temperaturas = dados.list.map(weather => weather.main.temp);
        const pressures = dados.list.map(weather => weather.main.pressure);
        const humidities = dados.list.map(weather => weather.main.humidity);
        const {lon, lat} = dados.city.coord;
        return (
            <tr key={cidadeNome}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temperaturas} color="orange" units="k"/></td>
                <td><Chart data={pressures} color="green" units="hPa"/></td>
                <td><Chart data={humidities} color="gray" units="%"/></td>
            </tr>
        );
    }
    render()
    {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Cidade</th>
                        <th>Temperatura (K)</th>
                        <th>Pressão (hPa)</th>
                        <th>Humidade (%)</th>
                    </tr>
                </thead>
                <tbody>
                {

                     this.props.weather.map(this.renderWeather)
                }
                </tbody>
            </table>
        );
    }
}

/**
 * Disponibiliza o weather que esta no index.js da pasta redux para o componente
 *
 * mapStateToProps: Pega um stado que esta no redux e disponibilisa como propriedade do componente
 * @returns {{weather: *}}
 */
function mapStateToProps (state)  {
    console.log('state',state);
    return {
        weather: state.weather
    };
}

export default  connect(mapStateToProps)(WeatherList);


