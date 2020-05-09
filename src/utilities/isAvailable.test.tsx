import ItemType from '../enums/ItemType';
import Item from '../interfaces/Item';
import Drink from '../interfaces/Drink';
import { isAvailable } from './isAvailable';

it('Coffee drink is available', () => {
  const items: Item[] = [];
  items.push({ id: ItemType.Coffee, name: 'coffee', units: 10, cost: 0.75 });
  items.push({ id: ItemType.DecafCoffee, name: 'decaf-coffee', units: 10, cost: 0.75 });
  items.push({ id: ItemType.Espresso, name: 'espresso', units: 10, cost: 1.00 });
  items.push({ id: ItemType.Sugar, name: 'sugar', units: 10, cost: 0.25 });
  items.push({ id: ItemType.Cocoa, name: 'cocoa', units: 10, cost: 0.50 });
  items.push({ id: ItemType.Cream, name: 'cream', units: 10, cost: 0.25 });
  items.push({ id: ItemType.WhippedCream, name: 'whipped-cream', units: 10, cost: 0.55 });
  items.push({ id: ItemType.FoamedCream, name: 'foamed-cream', units: 10, cost: 0.45 });
  items.push({ id: ItemType.SteamedMilk, name: 'steamed-milk', units: 10, cost: 0.35 });
  const coffee = new Drink({
    id: 0, name: 'Coffee', ingredients: [
      { itemId: ItemType.Coffee, units: 3 },
      { itemId: ItemType.Sugar, units: 1 },
      { itemId: ItemType.Cream, units: 1 },
    ], cost: 0,
  });
  const available = isAvailable(coffee, items);
  expect(available).toEqual(true);
  expect(coffee.cost).toEqual(2.75);
});

it('Coffee Drink is not available when missing iventory', () => {
  const items: Item[] = [];
  items.push({ id: ItemType.Coffee, name: 'coffee', units: 1, cost: 0.75 });
  items.push({ id: ItemType.DecafCoffee, name: 'decaf-coffee', units: 10, cost: 0.75 });
  items.push({ id: ItemType.Espresso, name: 'espresso', units: 10, cost: 1.00 });
  items.push({ id: ItemType.Sugar, name: 'sugar', units: 10, cost: 0.25 });
  items.push({ id: ItemType.Cocoa, name: 'cocoa', units: 10, cost: 0.50 });
  items.push({ id: ItemType.Cream, name: 'cream', units: 10, cost: 0.25 });
  items.push({ id: ItemType.WhippedCream, name: 'whipped-cream', units: 10, cost: 0.55 });
  items.push({ id: ItemType.FoamedCream, name: 'foamed-cream', units: 10, cost: 0.45 });
  items.push({ id: ItemType.SteamedMilk, name: 'steamed-milk', units: 10, cost: 0.35 });
  const coffee = new Drink({
    id: 0, name: 'Coffee', ingredients: [
      { itemId: ItemType.Coffee, units: 3 },
      { itemId: ItemType.Sugar, units: 1 },
      { itemId: ItemType.Cream, units: 1 },
    ], cost: 0,
  });
  const available = isAvailable(coffee, items);
  expect(available).toEqual(false);
  expect(coffee.cost).toEqual(0);
});
