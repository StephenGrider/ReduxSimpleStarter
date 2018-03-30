import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import reducers from './src/reducers';

function mountComponentWithRedux(
    ComponentClass,
    state = {},
    props = {}
) {
  const componentInstance = mount( // produces app by going through full React lifecycle
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
  return componentInstance;
}

export { mountComponentWithRedux };
