import React from 'react';
import { useStyles } from './useStyles';
import Ingredient from '../../interfaces/Ingredient';

interface Props {
    data: Ingredient[];
    dispatch: Function;
}

const Ingredients = (props: Props) => {
    const classes = useStyles();
    const { data, dispatch } = props;
    const indents: any[] = []; const [value, setValue] = React.useState(0);
    const handleClick = () => {
        dispatch({ type: 'increment', value });
    };
    const handleChange = (event: any) => {
        setValue(event.target.value);
    };
    /*
    data.forEach((element) => {
        indents.push(<div>${element.cost} {element.name}
            ({element.units})
             </div>)
    })
    */
    return (
        <div className={classes.appHeader}>
            <h1>Ingredients</h1>
            <h2 className={classes.appLink}>Here you can add ingredients to your inventory:</h2>
            <div>
                <input id="text" className="text" type="number" onChange={handleChange} />
                <button id="button" className="button" onClick={handleClick}>Add</button>
            </div>
        </div>
    );
}

export default Ingredients;