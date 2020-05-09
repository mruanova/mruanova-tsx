import ItemType from '../enums/ItemType';
import Ingredient from '../interfaces/Ingredient';
import Drink from '../interfaces/Drink';
import { initDrinks } from './initDrinks';

it('initialize Coffee', () => {
  const drinks: Drink[] = [];
  initDrinks(drinks);
  expect(drinks.length).toEqual(6);

  const drink = drinks.find((element: Drink) => {
    return element.name === 'Coffee';
  });
  expect(drink).toBeTruthy();

  const ingredients = drink?.ingredients;
  expect(ingredients).toBeTruthy();

  expect(ingredients?.length).toEqual(3);

  const coffee = ingredients?.find((element: Ingredient) => {
    return element.itemId === ItemType.Coffee;
  });
  expect(coffee).toBeTruthy();
  expect(coffee?.units).toEqual(3);

  const sugar = ingredients?.find((ingredient: Ingredient) => {
    return ingredient.itemId === ItemType.Sugar;
  });
  expect(sugar).toBeTruthy();
  expect(sugar?.units).toEqual(1);

  const cream = ingredients?.find((ingredient: Ingredient) => {
    return ingredient.itemId === ItemType.Cream;
  });
  expect(cream).toBeTruthy();
  expect(cream?.units).toEqual(1);
});

it('initialize Decaf Coffee', () => {
  const drinks: Drink[] = [];
  initDrinks(drinks);
  expect(drinks.length).toEqual(6);

  const drink = drinks.find((element: Drink) => {
    return element.name === 'Decaf Coffee';
  });
  expect(drink).toBeTruthy();

  const ingredients = drink?.ingredients;
  expect(ingredients).toBeTruthy();

  expect(ingredients?.length).toEqual(3);

  const decaf = ingredients?.find((ingredient: Ingredient) => {
    return ingredient.itemId === ItemType.DecafCoffee;
  });
  expect(decaf).toBeTruthy();
  expect(decaf?.units).toEqual(3);

  const sugar = ingredients?.find((element: Ingredient) => {
    return element.itemId === ItemType.Sugar;
  });
  expect(sugar).toBeTruthy();
  expect(sugar?.units).toEqual(1);

  const cream = ingredients?.find((ingredient: Ingredient) => {
    return ingredient.itemId === ItemType.Cream;
  });
  expect(cream).toBeTruthy();
  expect(cream?.units).toEqual(1);
});

it('initialize Caffe Latte', () => {
  const drinks: Drink[] = [];
  initDrinks(drinks);
  expect(drinks.length).toEqual(6);

  const drink = drinks.find((element: Drink) => {
    return element.name === 'Caffe Latte';
  });
  expect(drink).toBeTruthy();

  const ingredients = drink?.ingredients;
  expect(ingredients).toBeTruthy();

  expect(ingredients?.length).toEqual(2);

  const espresso = ingredients?.find((ingredient: Ingredient) => {
    return ingredient.itemId === ItemType.Espresso;
  });
  expect(espresso).toBeTruthy();
  expect(espresso?.units).toEqual(2);

  const steamedMilk = ingredients?.find((ingredient: Ingredient) => {
    return ingredient.itemId === ItemType.SteamedMilk;
  });
  expect(steamedMilk).toBeTruthy();
  expect(steamedMilk?.units).toEqual(1);
});

it('initialize Caffe Americano', () => {
  const drinks: Drink[] = [];
  initDrinks(drinks);
  expect(drinks.length).toEqual(6);

  const drink = drinks.find((element: Drink) => {
    return element.name === 'Caffe Americano';
  });
  expect(drink).toBeTruthy();

  const ingredients = drink?.ingredients;
  expect(ingredients).toBeTruthy();

  expect(ingredients?.length).toEqual(3);

  const espresso = ingredients?.find((ingredient: Ingredient) => {
    return ingredient.itemId === ItemType.Espresso;
  });
  expect(espresso).toBeTruthy();
  expect(espresso?.units).toEqual(3);
});

it('initialize Caffe Mocha', () => {
  const drinks: Drink[] = [];
  initDrinks(drinks);
  expect(drinks.length).toEqual(6);

  const drink = drinks.find((element: Drink) => {
    return element.name === 'Caffe Mocha';
  });
  expect(drink).toBeTruthy();

  const ingredients = drink?.ingredients;
  expect(ingredients).toBeTruthy();

  expect(ingredients?.length).toEqual(4);

  const espresso = ingredients?.find((ingredient: Ingredient) => {
    return ingredient.itemId === ItemType.Espresso;
  });
  expect(espresso).toBeTruthy();
  expect(espresso?.units).toEqual(1);

  const cocoa = ingredients?.find((ingredient: Ingredient) => {
    return ingredient.itemId === ItemType.Cocoa;
  });
  expect(cocoa).toBeTruthy();
  expect(cocoa?.units).toEqual(1);

  const steamedMilk = ingredients?.find((ingredient: Ingredient) => {
    return ingredient.itemId === ItemType.SteamedMilk;
  });
  expect(steamedMilk).toBeTruthy();
  expect(steamedMilk?.units).toEqual(1);

  const whippedCream = ingredients?.find((ingredient: Ingredient) => {
    return ingredient.itemId === ItemType.WhippedCream;
  });
  expect(whippedCream).toBeTruthy();
  expect(whippedCream?.units).toEqual(1);
});

it('initialize Capuccino', () => {
  const drinks: Drink[] = [];
  initDrinks(drinks);
  expect(drinks.length).toEqual(6);

  const drink = drinks.find((element: Drink) => {
    return element.name === 'Capuccino';
  });
  expect(drink).toBeTruthy();

  const ingredients = drink?.ingredients;
  expect(ingredients).toBeTruthy();

  expect(ingredients?.length).toEqual(3);

  const espresso = ingredients?.find((ingredient: Ingredient) => {
    return ingredient.itemId === ItemType.Espresso;
  });
  expect(espresso).toBeTruthy();
  expect(espresso?.units).toEqual(2);

  const steamedMilk = ingredients?.find((ingredient: Ingredient) => {
    return ingredient.itemId === ItemType.SteamedMilk;
  });
  expect(steamedMilk).toBeTruthy();
  expect(steamedMilk?.units).toEqual(1);
  
  const sugar = ingredients?.find((element: Ingredient) => {
    return element.itemId === ItemType.Sugar;
  });
  expect(sugar).toBeTruthy();
  expect(sugar?.units).toEqual(1);
});