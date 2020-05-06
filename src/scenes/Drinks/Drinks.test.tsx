import React from 'react';
import ReactDOM from 'react-dom';
import Drinks from './Drinks';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Drinks />, div);
  ReactDOM.unmountComponentAtNode(div);
});
