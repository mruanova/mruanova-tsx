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
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    arrow_box: {
        position: 'relative',
        background: '#88b7d5',
        border: '4px solid #c2e1f5',
        "&:after": {
            borderColor: 'rgba(136, 183, 213, 0)',
            borderTopColor: '#88b7d5',
            borderWidth: 30,
            marginLeft: -30,
            top: '100%',
            left: '50%',
            border: 'solid transparent',
            content: '',
            height: 0,
            width: 0,
            position: 'absolute',
            pointerEvents: 'none'
        },
        "&:last-before": {
            borderColor: 'rgba(194, 225, 245, 0)',
            borderTopColor: '#c2e1f5',
            borderWidth: 36,
            marginLeft: -36,
            top: '100%',
            left: '50%',
            border: 'solid transparent',
            content: '',
            height: 0,
            width: 0,
            position: 'absolute',
            pointerEvents: 'none'
        }
    },
    instructions: {
        borderLeft: '15px solid blue',
        borderRadius: 25,
        backgroundColor: 'lightblue',
        fontSize: 12
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
