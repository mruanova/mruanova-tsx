import Drink from '../interfaces/Drink';
import Item from '../interfaces/Item';
export function isAvailable(drink: Drink, items: Item[]): boolean {
    let available = true;
    drink.ingredients.forEach((ingredient) => {
        if (items.length > 0) {
            if (ingredient.units > items[ingredient.itemId].units) {
                available = false;
            }
            else {
                drink.cost += items[ingredient.itemId].cost;
            }
        }
    });
    return available;
}
