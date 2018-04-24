import axios from 'axios';

const API_KEY = 'aba4541ae1393f56652bc7b4a3332ce7';

const URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export function Weather(city){
  const mainUrl =` ${URL}&q=${city },us`;


  const request = axios.get(mainUrl);

  return{
    
    type: "FETCH_WEATHER",
    payload: request
  };

}