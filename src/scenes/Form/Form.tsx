import React from 'react';
import { useStyles } from './useStyles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const Form: React.FC = () => {
    const classes = useStyles();
    const avatar = 'http://mruanova.com/img/1.jpg';
    return (
        <div className={classes.appHeader}>
            <h1>Example</h1>
            <h2>Form</h2>
            <div className={classes.instructions}>Please follow the instructions in the form:</div>
            <Card className={classes.card} key={'1'}>
                <CardHeader title={'title'} subheader={'subheader'} action={<IconButton></IconButton>}
                    avatar={<Avatar aria-label="mau" className={classes.avatar} alt="mau" src={avatar}></Avatar>}>
                </CardHeader>
                <CardContent>
                    <input id="text" name="text" type="text" value="50" />
                    <span>$<input type="text" name="currency" /></span>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={function () { window.alert('link') }}>Submit</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default Form;