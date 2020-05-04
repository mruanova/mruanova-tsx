import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    appHeader: {
        backgroundColor: 'silver',
        minHeight: '100vh',
        display: 'inline-block',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: '#282c34',
        verticalAlign: 'top',
        padding: 30
    },
    card: {
        display: 'inline-block',
        fontSize: 10,
        marginLeft: 12,
        marginTop: 12,
        width: 290,
    },
    button: {
        backgroundColor: 'lightgreen',
        marginLeft: 10,
        color: 'green'
    },
    text: {
        textAlign: 'right',
        width: 50
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        backgroundPosition: 'initial',
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    avatar: {
        backgroundColor: 'red[500]',
    },
}));
