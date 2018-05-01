import axios from 'axios';

export function userlist(){
  const request = axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
  return{
    type: 'USER',
    payload: request
  }
}
export function showdetails(id) {
  const request = axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
  return {
    type: 'SHOWDETAILS',
    payload: request
  }
}