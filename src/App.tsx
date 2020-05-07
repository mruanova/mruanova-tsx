import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './useStyles';
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
import { appReducer } from './appReducer';

const App: React.FC = () => {
  const classes = useStyles();
  const items: Item[] = [];
  const ingredients: Ingredient[] = [];
  const drinks: Drink[] = [];
  const drink = new Drink();
  const initialState = { items, ingredients, drinks, sale: drink };
  const reducer = appReducer();
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div className={classes.app}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>Barista-Matic</Typography>
        </Toolbar>
      </AppBar>
      <Sale sale={state.sale} />
      <Drinks drinks={state.drinks} items={state.items} dispatch={dispatch} />
      <InventoryList data={state.items} dispatch={dispatch} />
      <Ingredients data={state.items} dispatch={dispatch} />
    </div >
  );
}

export default App;
