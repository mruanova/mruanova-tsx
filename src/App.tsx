import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './useStyles';
import ItemType from './enums/ItemType';
// interfaces
import Ingredient from './interfaces/Ingredient';
import Item from './interfaces/Item';
import Drink from './interfaces/Drink';
// scenes
import Sale from './scenes/Sale/Sale';
import InventoryList from './scenes/InventoryList/InventoryList';
import Drinks from './scenes/Drinks/Drinks';
import Ingredients from './scenes/Ingredients/Ingredients';
import './App.css';

const App: React.FC = () => {
  const classes = useStyles();
  const items: Item[] = [];
  const ingredients: Ingredient[] = [];
  const drinks: Drink[] = [];
  const sale = new Drink();
  const initialState = { items, ingredients, drinks, sale };
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'reset':
        items.length = 0;
        items.push({ id: ItemType.Coffee, name: 'coffee', units: 10, cost: 0.75 });
        items.push({ id: ItemType.DecafCoffee, name: 'decaf-coffee', units: 10, cost: 0.75 });
        items.push({ id: ItemType.Espresso, name: 'espresso', units: 10, cost: 1.00 });
        items.push({ id: ItemType.Sugar, name: 'sugar', units: 10, cost: 0.25 });
        items.push({ id: ItemType.Coffee, name: 'cocoa', units: 10, cost: 0.50 });
        items.push({ id: ItemType.Cream, name: 'cream', units: 10, cost: 0.25 });
        items.push({ id: ItemType.WhippedCream, name: 'whipped-cream', units: 10, cost: 0.55 });
        items.push({ id: ItemType.FoamedCream, name: 'foamed-cream', units: 10, cost: 0.45 });
        items.push({ id: ItemType.SteamedMilk, name: 'steamed-milk', units: 10, cost: 0.35 });
        drinks.length = 0;
        drinks.push({
          id: 0, name: 'Coffee', ingredients: [
            { itemId: ItemType.Coffee, units: 3 },
            { itemId: ItemType.Sugar, units: 1 },
            { itemId: ItemType.Cream, units: 1 },
          ], cost: 0,
        });
        drinks.push({
          id: 1, name: 'Decaff Coffee', ingredients: [
            { itemId: ItemType.DecafCoffee, units: 3 },
            { itemId: ItemType.Sugar, units: 1 },
            { itemId: ItemType.Cream, units: 1 },
          ], cost: 0,
        });
        drinks.push({
          id: 2, name: 'Caffe Latte', ingredients: [
            { itemId: ItemType.Espresso, units: 2 },
            { itemId: ItemType.SteamedMilk, units: 1 },
          ], cost: 0,
        });
        drinks.push({
          id: 3, name: 'Caffe Americano', ingredients: [
            { itemId: ItemType.Espresso, units: 3 },
          ], cost: 0,
        });
        drinks.push({
          id: 4, name: 'Caffe Mocha', ingredients: [
            { itemId: ItemType.Espresso, units: 1 },
            { itemId: ItemType.Cocoa, units: 1 },
            { itemId: ItemType.SteamedMilk, units: 1 },
            { itemId: ItemType.WhippedCream, units: 1 },
          ], cost: 0,
        });
        drinks.push({
          id: 5, name: 'Capuccino', ingredients: [
            { itemId: ItemType.Espresso, units: 2 },
            { itemId: ItemType.SteamedMilk, units: 1 },
            { itemId: ItemType.Sugar, units: 1 },
          ], cost: 0,
        });
        return { items, ingredients, drinks, sale };
      case 'sale':
        return { items, ingredients, drinks, sale: action.sale };
      case 'add':
        // const count = state.count--;
        return { items, ingredients, drinks, sale };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div className={classes.app}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>Barista-Matic</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Sale sale={state.sale} />
      <Drinks drinks={state.drinks} items={state.items} dispatch={dispatch} />
      <InventoryList data={state.items} dispatch={dispatch} />
      <Ingredients data={state.ingredients} dispatch={dispatch} />
    </div >
  );
}

export default App;