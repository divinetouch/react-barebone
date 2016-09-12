import React from 'react';
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import TestUtils from 'react-addons-test-utils';
import Template from '../../app/views/Template.js';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from '../../app/reducers/Reducers';

describe('template', () => {
    let store = applyMiddleware(thunk)(createStore)(reducers);
    const component = TestUtils.renderIntoDocument(<Provider store={store}><Template /></Provider>);

    /**
     * Should be able to run this after React version 15.4.0
     */
    // it('should produce a template page div', () => {
    //     const component = renderer.create(<Template />);
    //     let tree = component.toJSON();
    //     expect(tree).toMatchSnapshot();
    // });

    it('should automatically select home as active', () => {
        let activeItem = TestUtils.findRenderedDOMComponentWithClass(component, 'active');
        expect(activeItem.textContent).toEqual('Home');

    });

    it('should update active tab', () => {
        let allItems = TestUtils.scryRenderedDOMComponentsWithClass(component, 'item');
        allItems.forEach((item) => {
            if(item.textContent === 'Messages') {
                TestUtils.Simulate.click(item);
            }
        });

        let activeItem = TestUtils.findRenderedDOMComponentWithClass(component, 'active');
        expect(activeItem.textContent).toEqual('Messages');

    });
});