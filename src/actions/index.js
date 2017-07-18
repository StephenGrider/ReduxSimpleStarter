import axios from 'axios'
const API_KEY  = '52bf0b8b3ff86d0d7b7db54d5c8a1e92';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(cidade) {

    const url = `${ROOT_URL}&q=${cidade},us`;
    const request = axios.get(url);
    console.log(url);
    console.log('Request: ', request );
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}