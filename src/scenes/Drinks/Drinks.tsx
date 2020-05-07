import React from 'react';
import { useStyles } from './useStyles';
import Drink from '../../interfaces/Drink';
import Item from '../../interfaces/Item';
import { isAvailable } from '../../utilities/isAvailable';

interface Props {
    drinks: Drink[];
    items: Item[];
    dispatch: Function;
}

const Drinks = (props: Props) => {
    const classes = useStyles();
    const { drinks, items, dispatch } = props;
    const indents: any[] = [];
    const instructions = 'Click reset to start the inventory.';
    const title = 'Drinks';
    const subtitle = 'List of drinks available for sale :';
    const handleClick = (drink: Drink) => (_event: React.MouseEvent | React.KeyboardEvent) => {
        dispatch({ type: 'sale', sale: drink });
    };
    drinks.forEach((drink, index) => {
        drink.cost = 0;
        const available = isAvailable(drink, items);
        if (available) {
            indents.push(
                <div className={classes.button} key={index} onClick={handleClick(drink)}>
                    {drink.name} ${drink.cost.toFixed(2)}
                </div>
            )
        }
    });
    return (
        <div className={classes.box}>
            <h1>{title}</h1>
            <h2 className={classes.appLink}>{subtitle}</h2>
            {
                indents.length > 0 ? (
                    indents
                ) : (<div>{instructions}</div>)
            }
        </div>
    );
}

export default Drinks;
