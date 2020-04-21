import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


// Styling 
const useStyles = makeStyles(theme => ({
    root: {
        width: 400,
        margin: 'auto',
        padding: theme.spacing(0.8)
    },
    paper: {
        padding: theme.spacing(1)
    }
}));

export default function Person(props) {
    // classes 
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={2} onClick={props.deletePerson} className={classes.paper}>
                <h1>{props.name}</h1>
                <p>Age: {Math.floor(props.age)}</p>
            </Paper>
        </div>
    )
}
