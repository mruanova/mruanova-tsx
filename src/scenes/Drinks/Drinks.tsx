import React from 'react';
import { useStyles } from './useStyles';
import Drink from '../../interfaces/Drink';
import Item from '../../interfaces/Item';

interface Props {
    drinks: Drink[];
    items: Item[];
}

const Drinks = (props: Props) => {
    const classes = useStyles();
    const { drinks, items } = props;
    const indents: any[] = [];
    const instructions = 'Click reset to initialize the inventory.';
    const handleClick = (drink: any) => (event: React.MouseEvent | React.KeyboardEvent) => {
        console.log('handleClick', drink);
    };
    drinks.forEach((drink, index) => {
        let available = true;
        let cost = 0;
        drink.ingredients.forEach((ingredient) => {
            if (items.length > 0) {
                if (ingredient.units > items[ingredient.itemId].units) {
                    available = false;
                }else{
                    cost += items[ingredient.itemId].cost;
                }
            }
        });
        if (available) {
            indents.push(
                <div className={classes.button} key={index} onClick={handleClick(drink)}>
                    {drink.name} ${cost.toFixed(2)}
                </div>
            )
        }
    });
    return (
        <div className={classes.appHeader}>
            <h1>Drinks</h1>
            <h2 className={classes.appLink}>List of drinks available for sale:</h2>
            {
                indents.length > 0 ? (
                    indents
                ) : (<div>{instructions}</div>)
            }
        </div>
    );
}

export default Drinks;