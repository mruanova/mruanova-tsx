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
    text: {
        textAlign: 'right',
        width: 50
    },
    button: {
        backgroundColor: 'goldenrod',
        borderRadius: 5,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
        width: 40,
        '&:hover': { textDecoration: 'underline' },
    }
}),
    { name: 'Ingredients' },
);

export default useStyles;
