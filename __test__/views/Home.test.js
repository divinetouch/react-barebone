import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../app/views/Home.js';


it('should produce a welcom to home page div', () => {
    const component = renderer.create(<Home />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});