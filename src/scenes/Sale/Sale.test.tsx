import React from 'react';
import ReactDOM from 'react-dom';
import Sale from './Sale';
import Drink from '../../interfaces/Drink';

it('renders without crashing', () => {
  const sale = new Drink();
  const div = document.createElement('div');
  ReactDOM.render(<Sale
    sale={sale}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
