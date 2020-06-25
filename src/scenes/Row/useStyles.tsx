import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    row: {
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
        width: 375,
    },
    Website: {
        display: 'inline-block',
        textAlign: 'left',
        width: 175,
    },
    Address: {
        display: 'inline-block',
        textAlign: 'left',
        width: 350,
    },
    Coordinates: {
        display: 'inline-block',
        textAlign: 'right',
        width: 200,
    },
}));
