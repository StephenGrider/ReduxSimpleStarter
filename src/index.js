// Create a new component this component should create HTML
import React from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'


const API_KEY = 'AIzaSyDydhXviisO2az_6HksPtGyOjS9QPu30r0';
const App = () => {
    return (<div>
        <SearchBar />
    </div>);
}

// Take this generated HTML and put it on the page (Add to DOM)!!

ReactDOM.render(<App />, document.querySelector('.container'));