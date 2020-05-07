import React from 'react';
import { useStyles } from './useStyles';
import Item from '../../interfaces/Item';
// import _ from 'lodash';

interface Props {
    data: Item[];
    dispatch: Function;
}

const InventoryList = (props: Props) => {
    const classes = useStyles();
    const { data, dispatch } = props;
    const instructions = 'Click reset to start the inventory.'
    const handleReset = () => {
        dispatch({ type: 'reset' });
    };
    const indents: any[] = [];
    data.forEach((element, index) => {
        indents.push(
            <div key={index} className={classes.row}>
                <div className={classes.cost}>${element.cost.toFixed(2)}</div>
                <div className={classes.name}>{element.name} </div>
                <div className={classes.units}>({element.units})</div>
            </div>
        )
    });
    return (
        <div className={classes.appHeader}>
            <h1>Inventory</h1>
            <h2 className={classes.appLink}>List of the ingredients available:</h2>
            {
                indents.length > 0 ? (
                    indents
                ) : (<div>{instructions}</div>)
            }
            <button id="reset" className={classes.reset} onClick={handleReset}>Reset</button>
        </div>
    );
}

export default InventoryList;
/*
export default React.memo(InventoryList, (prevProps, nextProps) =>
  _.isEqual(prevProps, nextProps),
);
*/