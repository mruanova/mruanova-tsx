import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    appHeader: {
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
    button: {
        border: '1px solid white',
        '&:hover': {
            color: 'black',
            background: 'white'
        },
        cursor: 'pointer',
        paddingLeft: 5,
        marginBottom: 10
    },
}),
    { name: 'Drinks' },
);

export default useStyles;
