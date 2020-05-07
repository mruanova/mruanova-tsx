import Drink from './Drink';
import Item from './Item';
import Ingredient from './Ingredient';
/** 
 * State used in Reducer
 */
export class State {
  sale: Drink = new Drink();
  drinks: Drink[] = [];
  items: Item[] = [];
  ingredients: Ingredient[] = [];
  constructor(obj?: any) {
    if (obj) {
      if (Object.hasOwnProperty.call(obj, 'sale'))
        this.sale = obj.sale;
      if (Object.hasOwnProperty.call(obj, 'drinks'))
        this.drinks = obj.drinks;
      if (Object.hasOwnProperty.call(obj, 'items'))
        this.items = obj.items;
      if (Object.hasOwnProperty.call(obj, 'ingredients'))
        this.ingredients = obj.ingredients;
    }
  }
}

export default State;
