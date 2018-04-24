import React , {Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines';

class WeatherList extends Component{

  renderList(data) {
      console.log(data);
      const temp = data.list.map( weather => weather.main.temp - 273.15 );


      const pressure = data.list.map( weather => weather.main.pressure );

      const humidity = data.list.map(function (weather) {
        return weather.main.humidity;
      });

       function average(data){
          return _.round(_.sum(data)/data.length);
        }

      const desc = data.list.map(des => des.weather.map(de => de.description )
      );

      return (
         
                <tr key = {data.city.name}>
                <td> {data.city.name}</td>
                <td>
            {desc[0]}
                </td>
                <td>
            <Sparklines data={temp} svgHeight={80} svgWidth={180} >
             <SparklinesLine color = "orange" />
             <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(temp)} </div>
                </td>

                <td>
            <Sparklines data={pressure} svgHeight={80} svgWidth={180}  limit={20}>
              <SparklinesLine color = "green" />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(pressure)} </div>
                </td>

                <td>
            <Sparklines data={humidity} svgHeight={80} svgWidth={180}  limit={10} >
              <SparklinesReferenceLine type="avg" />
              <SparklinesBars color="#0a83d8" />
            </Sparklines>
            <div>{average(humidity)} </div>
                </td>

                </tr> 
      );

  }

  render(){

    
         return(
      <table className = "table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Desciption</th>
          <th>Temparature (C&deg;)</th>
          <th>Pressure(hpa)</th>
          <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
            {this.props.weather.map(this.renderList)}
        </tbody>
      </table>
    );
  }

}

function mapStateToProps(state){
  return{
    weather: state.weather
  }
}
export default connect(mapStateToProps)(WeatherList);