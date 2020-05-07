import React from 'react';
import { useStyles } from './useStyles';
import Item from '../../interfaces/Item';

interface Props {
    data: Item[];
    dispatch: Function;
}

const InventoryList = (props: Props) => {
    const classes = useStyles();
    const { data, dispatch } = props;
    const instructions = 'Click reset to initialize the inventory.'
    const handleReset = () => {
        dispatch({ type: 'reset' });
    };
    const indents: any[] = [];
    data.forEach((element, index) => {
        indents.push(
            <div key={index}>
                <div className={classes.cost}>${element.cost.toFixed(2)}</div>
                <div className={classes.name}>{element.name} </div>
                <div className={classes.units}>({element.units})</div>
            </div>
        )
    });
    return (
        <div className={classes.appHeader}>
            <h1>Inventory</h1>
            <h2 className={classes.appLink}>List of the ingredients available for your drinks:</h2>
            {
                indents.length > 0 ? (
                    indents
                ) : (<div>{instructions}</div>)
            }
            <button id="reset" className="reset" onClick={handleReset}>Reset</button>
        </div>
    );
}

export default InventoryList;