import React, { useState } from 'react';
import { useStyles } from './useStyles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const Form: React.FC = () => {
    const classes = useStyles();
    const avatar = 'http://mruanova.com/img/1.jpg';
    const [value, setValue] = useState('50');
    const handleChange = (event: any) => {
        const temp = event.target.value;
        setValue(temp);
    }
    const handleClick = () => {
        if (value && value.length > 0) {
            window.alert(value);
        } else {
            window.alert('Error: Invalid input.');
        }
    }
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
                    $<input id="text" name="text" type="text" value={value} onChange={handleChange} />
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleClick}>Submit</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default Form;