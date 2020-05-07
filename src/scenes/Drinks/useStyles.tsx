import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    appHeader: {
        border: '1px solid white',
        width: 320,
        minHeight: 320,
        display: 'inline-block',
        padding: 30,
        verticalAlign: 'top',
        marginTop: 10,
        marginLeft: 10
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
