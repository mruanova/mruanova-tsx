import React from 'react';
import { useStyles } from './useStyles';

const Header: React.FC = () => {
    const classes = useStyles();
    return (
        <header className={classes.appHeader}>
            <h1>Barista Matic</h1>
            <h2 className={classes.appLink}>Would you like a coffee?</h2>
        </header>
    );
}

export default Header;