import React from 'react';
import { useStyles } from './useStyles';
// import Ingredient from '../../interfaces/Ingredient';

const Drinks = () => {
    const classes = useStyles();
    return (
        <div className={classes.appHeader}>
            <h1>Drinks</h1>
            <h2 className={classes.appLink}>List of drinks available for sale:</h2>
        </div>
    );
}

export default Drinks;