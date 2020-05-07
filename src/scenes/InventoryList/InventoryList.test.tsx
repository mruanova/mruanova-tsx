import React from 'react';
import ReactDOM from 'react-dom';
import InventoryList from './InventoryList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InventoryList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
