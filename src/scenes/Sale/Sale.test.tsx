import React from 'react';
import ReactDOM from 'react-dom';
import Sale from './Sale';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sale />, div);
  ReactDOM.unmountComponentAtNode(div);
});
