import React from 'react';  //How we can use React
import ReactDOM from 'react-dom';


//Create a new compenent.  Idea hear is to produce html
//New Component.  Code that produces html


//Need to think of the following as a factory (oo thinkg a class)-- it is not an instance
const App = function() {
    return <div>Hi there and more!</div>;
}


//Take this compents generated html and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));  //So why <App />  not just App.   Because App as mentioned above is my class when I <App /> we get and Instace of App
//<App /> in Jsx creates in es5 React.createElement(App, null);  so it creates that element

// The second argument is to tell where we place this new elment we created I could use ReactDOM.render(<App />, document.getElementById('rootElement'));