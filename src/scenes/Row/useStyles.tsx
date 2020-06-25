import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    row: {
        paddingTop: 10,
        "&:nth-child(even)": {
            background: "#f2f2f2"
        }
    },
    ProjectId: {
        display: 'inline-block',
        marginRight: 15,
        textAlign: 'right',
        width: 15,
    },
    Position: {
        display: 'inline-block',
        textAlign: 'left',
        width: 300,
    },
    Website: {
        display: 'inline-block',
        textAlign: 'left',
        width: 150,
    },
    Address: {
        display: 'inline-block',
        textAlign: 'left',
        width: 250,
    },
    Coordinates: {
        display: 'inline-block',
        textAlign: 'right',
        width: 100,
    },
}));
