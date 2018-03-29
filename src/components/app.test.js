import React from 'react';
import {
    mountComponentWithRedux
} from '../../test_helper';
import App from './app';


describe(
    'Components::App',
    () => {
        let component;
        beforeEach(
            () => {
                component = mountComponentWithRedux(App);
            }
        );
        it(
            'renders',
            () => {
                expect(component.exists()).toBe(true);
            }
        );
        it(
            'renders button',
            () => {
                expect(component.find('.get-started').exists()).toBe(true);
            }
        );
        it(
            'button is clickable',
            () => {
                component.find('.get-started').simulate('click');
                expect(component.find('.get-started').text()).toEqual('Started!');
            }
        );
    }
);
