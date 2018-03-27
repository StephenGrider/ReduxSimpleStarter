import React from 'react';
import App from './app';
import { shallow } from 'enzyme';

describe(
    'App',
    () => {
        it(
            'renders correctly',
            () => {
                // `yarn test`, or `yarn test:watch` to run
                // More examples here:
                // https://github.com/vjwilson/enzyme-example-jest/blob/master/src/__tests__/Foo-test.js
                expect(
                    shallow(<App />).contains(<div>Redux Simple Starter</div>)
                ).toBe(true);
            }
        );
    }
);
