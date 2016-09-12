import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from '../../app/views/404.js';


it('should produce a page not found div', () => {
    const component = renderer.create(<NotFound />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});