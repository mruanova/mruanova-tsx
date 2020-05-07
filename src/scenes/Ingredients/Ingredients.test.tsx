import React from 'react';
import ReactDOM from 'react-dom';
import Ingredients from './Ingredients';
import Item from '../../interfaces/Item';

it('renders without crashing', () => {
  const items: Item[] = [];
  const div = document.createElement('div');
  ReactDOM.render(<Ingredients
    items={items}
    dispatch={() => { }}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
