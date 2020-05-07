import React from 'react';
import { useStyles } from './useStyles';
import Drink from '../../interfaces/Drink';

interface Props {
    sale: Drink;
}

const Sale = (props: Props) => {
    const classes = useStyles();
    const { sale } = props;
    const instructions = 'Select a drink from the list.';
    const timestamp = new Date().toString();
    const cashier = 'Mauricio Ruanova-Hurtado';
    return (
        <div className={classes.appHeader}>
            <h1>Barista Matic</h1>
            <h2 className={classes.appLink}>Would you like a coffee?</h2>
            {sale.name.length > 0 ? (
                <div>
                    <div>{'SALE!'}</div>
                    <div>Cashier: {cashier}</div>
                    <div>Receipt: {Date.now()}</div>
                    <div>{timestamp}</div>
                    <div>{sale.name}</div>
                    <div>${sale.cost}</div>
                </div>
            ) : (<div>{instructions}</div>)
            }
        </div>
    );
}

export default Sale;