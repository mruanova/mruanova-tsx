import React from 'react';
import ReactDOM from 'react-dom';
import Example from './Row';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Row />, div);
  ReactDOM.unmountComponentAtNode(div);
});
