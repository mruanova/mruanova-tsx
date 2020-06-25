import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    row: {
        "&:nth-child(even)": {
            background: "#f2f2f2"
        }
    }
}));
