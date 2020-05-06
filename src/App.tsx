import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Header from './scenes/Header/Header';
import { useStyles } from './useStyles';
import Ingredient from './interfaces/Ingredient';
import Drink from './interfaces/Drink';
import Inventory from './scenes/Inventory/Inventory';
import Drinks from './scenes/Drinks/Drinks';
import Ingredients from './scenes/Ingredients/Ingredients';
import './App.css';

const App: React.FC = () => {
  const classes = useStyles();
  const ingredients: Ingredient[] = [];
  const drinks: Drink[] = [];
  const initialState = { ingredients, drinks };
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'reset':
        ingredients.length = 0;
        ingredients.push({ id: 0, name: 'coffee', units: 10, cost: 0.75 });
        ingredients.push({ id: 1, name: 'decaf-coffee', units: 10, cost: 0.75 });
        ingredients.push({ id: 2, name: 'espresso', units: 10, cost: 1.00 });
        ingredients.push({ id: 3, name: 'sugar', units: 10, cost: 0.25 });
        ingredients.push({ id: 4, name: 'cocoa', units: 10, cost: 0.50 });
        ingredients.push({ id: 5, name: 'cream', units: 10, cost: 0.25 });
        ingredients.push({ id: 6, name: 'whipped-cream', units: 10, cost: 0.55 });
        ingredients.push({ id: 7, name: 'foamed-cream', units: 10, cost: 0.45 });
        ingredients.push({ id: 8, name: 'steamed-milk', units: 10, cost: 0.35 });
        drinks.length = 0;
        drinks.push({ id: 0, name: 'Coffee', ingredients: [] })
        return { ingredients, drinks };
      case 'increment':
        // const count = state.count++;
        return { ingredients };
      case 'decrement':
        // const count = state.count--;
        return { ingredients };
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
      <Header />
      <Inventory data={state.ingredients} dispatch={dispatch} />
      <Drinks />
      <Ingredients data={state.ingredients} dispatch={dispatch} />
    </div >
  );
}

export default App;