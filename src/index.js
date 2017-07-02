/**
 * Created by jamesrondina on 7/2/17.
 */

import React from "react";
import ReactDOM from "react-dom";

// Create a new component. This component should produce some HTML

const App = function() {
        return <div>Hello World!</div>
};

// Take this coponent's generate HTML and put it on the page (in the DOM)

ReactDOM.render(<App/>, document.querySelector(".container"));