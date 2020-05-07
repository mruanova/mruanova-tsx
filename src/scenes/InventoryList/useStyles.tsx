import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    box: {
        border: '1px solid white',
        width: 240,
        minHeight: 420,
        display: 'inline-block',
        paddingLeft: 30,
        paddingRight: 30,
        verticalAlign: 'top',
        margin: 10
    },
    appLink: {
        color: 'goldenrod'
    },
    name: {
        display: 'inline-block',
        width: 125
    },
    cost: {
        display: 'inline-block',
        marginRight: 5
    },
    reset: {
        backgroundColor: 'goldenrod',
        borderRadius: 5,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10,
        width: 240,
        '&:hover': { textDecoration: 'underline' },
    },
    row: {
        marginBottom: 10
    },
    units: {
        display: 'inline-block',
    },
}),
    { name: 'Inventory' },
);

export default useStyles;
