import React from 'react';
import { useStyles } from './useStyles';
import Item from '../../interfaces/Item';

interface Props {
    data: Item[];
    dispatch: Function;
}

const Ingredients = (props: Props) => {
    const classes = useStyles();
    const { data, dispatch } = props;
    const instructions = 'Click reset to initialize the inventory.'
    const indents: any[] = []; const [value, setValue] = React.useState(0);
    const handleClick = () => {
        dispatch({ type: 'add', value });
    };
    const handleChange = (event: any) => {
        setValue(event.target.value);
    };
    data.forEach((element, index) => {
        indents.push(
            <div key={index}>
                <div className={classes.name}>{element.name}</div>
                <input id="text" className="text" type="number" onChange={handleChange} />
                <button id="button" className="button" onClick={handleClick}>Add</button>
            </div>
        )
    });
    return (
        <div className={classes.appHeader}>
            <h1>Ingredients</h1>
            <h2 className={classes.appLink}>Here you can add ingredients to your inventory:</h2>
            {
                indents.length > 0 ? (
                    indents
                ) : (<div>{instructions}</div>)
            }
        </div>
    );
}

export default Ingredients;