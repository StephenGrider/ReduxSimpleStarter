import React, { Component } from 'react';


function bindReactMethod(this_value, method_name) {
    // Bind all of your custom methods, like:
    //   this.onInputChange = this.onInputChange.bind(this);
    this_value[method_name] = this_value[method_name].bind(this_value)
}


// https://stackoverflow.com/questions/15192722/javascript-extending-class
class MyComponent extends Component {

    constructor(props, custom_methods) {
        super(props);
        try {
            custom_methods.map((method_name) => {
                bindReactMethod(this, method_name)
            });
        }
        catch (error) { } // ignore error because that means the user didnt have custom methods to bind
    }
}
