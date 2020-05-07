import Ingredient from './Ingredient';
/** 
 * Drinks:
 * coffee, decaf-coffee, caffee-latte, 
 * cafe-americano, cafe-mocha, capuccino
 */
export class Drink {
  id: number = 0
  name: string = '';
  ingredients: Ingredient[] = [];
  cost: number = 0;
  constructor(obj?: any) {
    if (obj) {
      if (Object.hasOwnProperty.call(obj, 'id'))
        this.id = obj.id;
      if (Object.hasOwnProperty.call(obj, 'name'))
        this.name = obj.name;
      if (Object.hasOwnProperty.call(obj, 'ingredients'))
        this.ingredients = obj.ingredients;
        if (Object.hasOwnProperty.call(obj, 'cost'))
          this.cost = obj.cost;
    }
  }
}

export default Drink;
