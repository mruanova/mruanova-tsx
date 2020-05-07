import Drink from './Drink';
import Item from './Item';
/** 
 * Action used in Reducer
 */
export class Action {
  type: string = '';
  sale: Drink = new Drink();
  value: number = 0;
  item: Item = new Item();
  constructor(obj?: any) {
    if (obj) {
      if (Object.hasOwnProperty.call(obj, 'type'))
        this.type = obj.type;
      if (Object.hasOwnProperty.call(obj, 'sale'))
        this.sale = obj.sale;
      if (Object.hasOwnProperty.call(obj, 'value'))
        this.value = obj.value;
      if (Object.hasOwnProperty.call(obj, 'item'))
        this.item = obj.item;
    }
  }
}

export default Action;
