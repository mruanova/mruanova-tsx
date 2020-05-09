import ItemType from '../enums/ItemType';
import Drink from '../interfaces/Drink';
export function initDrinks(drinks: Drink[]) {
  drinks.length = 0;
  drinks.push({
    id: 0, name: 'Coffee', ingredients: [
      { itemId: ItemType.Coffee, units: 3 },
      { itemId: ItemType.Sugar, units: 1 },
      { itemId: ItemType.Cream, units: 1 },
    ], cost: 0, receipt: '', cashier: '', timestamp: ''
  });
  drinks.push({
    id: 1, name: 'Decaf Coffee', ingredients: [
      { itemId: ItemType.DecafCoffee, units: 3 },
      { itemId: ItemType.Sugar, units: 1 },
      { itemId: ItemType.Cream, units: 1 },
    ], cost: 0,
    receipt: '', cashier: '', timestamp: ''
  });
  drinks.push({
    id: 2, name: 'Caffe Latte', ingredients: [
      { itemId: ItemType.Espresso, units: 2 },
      { itemId: ItemType.SteamedMilk, units: 1 },
    ], cost: 0, receipt: '', cashier: '', timestamp: ''
  });
  drinks.push({
    id: 3, name: 'Caffe Americano', ingredients: [
      { itemId: ItemType.Espresso, units: 3 },
    ], cost: 0, receipt: '', cashier: '', timestamp: ''
  });
  drinks.push({
    id: 4, name: 'Caffe Mocha', ingredients: [
      { itemId: ItemType.Espresso, units: 1 },
      { itemId: ItemType.Cocoa, units: 1 },
      { itemId: ItemType.SteamedMilk, units: 1 },
      { itemId: ItemType.WhippedCream, units: 1 },
    ], cost: 0, receipt: '', cashier: '', timestamp: ''
  });
  drinks.push({
    id: 5, name: 'Capuccino', ingredients: [
      { itemId: ItemType.Espresso, units: 2 },
      { itemId: ItemType.SteamedMilk, units: 1 },
      { itemId: ItemType.Sugar, units: 1 },
    ], cost: 0, receipt: '', cashier: '', timestamp: ''
  });
}
