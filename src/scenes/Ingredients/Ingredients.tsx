import React from 'react';
import { useStyles } from './useStyles';
import Item from '../../interfaces/Item';

interface Props {
    items: Item[];
    dispatch: Function;
}

const Ingredients = (props: Props) => {
    const classes = useStyles();
    const { items, dispatch } = props;
    const instructions = 'Click reset to start the inventory.'
    const title = 'Ingredients';
    const subtitle = 'Here you can restock ingredients :';
    const indents: any[] = [];
    const [value] = React.useState(1);
    const handleClick = (item: Item) => (_event: React.MouseEvent | React.KeyboardEvent) => {
        dispatch({ type: 'add', value, item });
    };
    items.forEach((element) => {
        const buttonId = `button${element.id}`;
        indents.push(
            <div key={element.id}>
                <div className={classes.name}>{element.name}</div>
                <button id={buttonId} className={classes.button} onClick={handleClick(element)}>+ 1</button>
            </div>
        )
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

export default Ingredients;