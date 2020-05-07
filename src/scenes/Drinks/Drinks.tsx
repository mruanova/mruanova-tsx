import React from 'react';
import { useStyles } from './useStyles';
import Drink from '../../interfaces/Drink';

interface Props {
    data: Drink[];
}

const Drinks = (props: Props) => {
    const classes = useStyles();
    const { data } = props;
    const indents: any[] = [];
    const instructions = 'Click reset to initialize the inventory.'
    data.forEach((element, index) => {
        indents.push(<div className={classes.button} key={index}>{element.name}</div>)
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