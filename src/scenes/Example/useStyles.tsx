import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type classIndexTypes =
    | string
    | 'ProjectId'
    | 'Position'
    | 'Website'
    | 'Address'
    | 'Coordinates';

export const useStyles = makeStyles(
    (theme: Theme) => {
        // const light = theme.palette.type === 'light';
        return createStyles<classIndexTypes, any>({
            column: {
                fontSize: 12,
                fontWeight: 600,
                lineHeight: 2,
                marginLeft: 12,
                paddingLeft: 5,
                textAlign: 'left',
            },
            ProjectId: {
                flexGrow: 0,
                marginRight: 15,
                width: 105,
            },
            Position: {
                flexGrow: 0,
                marginRight: 15,
                width: 105,
            },
            Website: {
                flexGrow: 0,
                marginRight: 15,
                width: 105,
            },
            Address: {
                flexGrow: 0,
                marginRight: 15,
                width: 105,
            },
            Coordinates: {
                flexGrow: 0,
                marginRight: 15,
                width: 105,
            },
        });
    },
    { name: 'Example' },
);
