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
    const title = 'Barista Matic';
    const subtitle = 'Would you like a coffee ?';
    return (
        <div className={classes.box}>
            <h1>{title}</h1>
            <h2 className={classes.sub}>{subtitle}</h2>
            {sale.name.length > 0 ? (
                <div>
                    <div className={classes.row}>SALE!</div>
                    <div className={classes.row}>Cashier: {sale.cashier}</div>
                    <div className={classes.row}>Receipt: {sale.receipt}</div>
                    <div className={classes.row}>{sale.timestamp}</div>
                    <div className={classes.row}>{sale.name}</div>
                    <div className={classes.row}>${sale.cost.toFixed(2)}</div>
                </div>
            ) : (<div>{instructions}</div>)
            }
        </div>
    );
}

export default Sale;