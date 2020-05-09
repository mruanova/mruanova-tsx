import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './useStyles';
// interfaces
import Action from './interfaces/Action';
import Ingredient from './interfaces/Ingredient';
import Item from './interfaces/Item';
import Drink from './interfaces/Drink';
// scenes
import Sale from './scenes/Sale/Sale';
import InventoryList from './scenes/InventoryList/InventoryList';
import Drinks from './scenes/Drinks/Drinks';
import Ingredients from './scenes/Ingredients/Ingredients';
// services
import ItemService from './services/ItemService';
// utilities
import { initDrinks } from './utilities/initDrinks';

const App: React.FC = () => {
  const classes = useStyles();
  const defaultItems: Item[] = [];
  const [items, setItems] = React.useState(defaultItems);

  const drinks: Drink[] = [];
  initDrinks(drinks);

  const defaultSale = new Drink();
  const [sale, setSale] = React.useState(defaultSale);

  React.useEffect(() => {
    ItemService.getItems()
      .then((response: any) => {
        console.log('getItems', response.data.Items);
        const temp = response.data.Items.sort((a: Item, b: Item) => {
          return a.id - b.id;
        });
        setItems(temp);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, [sale]);

  const handleDrinks = (action: Action) => {
    console.log('handleDrinks', action);
    action.sale.ingredients.forEach((ingredient: Ingredient) => {
      const item = items.find((item: Item) => {
        return item.id === ingredient.itemId
      });
      if (item) {
        const temp = new Item(item);
        temp.units -= ingredient.units;
        console.log('temp', temp);
        ItemService.putItems(temp)
          .then((_response: any) => {
            console.log('remove');
            setSale(action.sale);
          })
          .catch((error: any) => {
            console.error(error);
          });
      }
    });
  };

  const handleIngredients = (action: Action) => {
    console.log('handleIngredients', action);
    const item = items.find((item: Item) => {
      return item.id === action.item.id
    });
    if (item) {
      const temp = new Item(item);
      temp.units += 1;
      console.log('temp', temp);
      ItemService.putItems(temp)
        .then((_response: any) => {
          console.log('add');
          setSale(action.sale);
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  };

  return (
    <div className={classes.app}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>Barista-Matic</Typography>
        </Toolbar>
      </AppBar>
      <Sale sale={sale} />
      <Drinks drinks={drinks} items={items} dispatch={handleDrinks} />
      <InventoryList items={items} />
      <Ingredients items={items} dispatch={handleIngredients} />
    </div >
  );
}

export default App;
