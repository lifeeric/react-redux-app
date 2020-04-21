import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2)
    },
    text: {
        margin: theme.spacing(1)
    }
}));

export default function AddPerson({addPerson}) {

    // classes
    const classes = useStyles();

    // State
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');

    // name Changer
    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }

    // Age change
    const ageChangeHandler = (e) => {
        setAge(e.target.value);
    }

    return (
        <div>
            <TextField
            className={classes.text}
              id="standard-basic-1"
              variant="outlined"
              label="Name"
              value={name}
              onChange={nameChangeHandler}  
            /> 
            <br />

            <TextField  
              id="standard-basic-2"
              variant="outlined"
              label="Age"
              value={age}
              onChange={ageChangeHandler}  
            />
            <br />

            <Button className={classes.root} 
                onClick={() => { addPerson(name, age); setName(''); setAge('')}} 
                variant="contained" 
                color="default"
            >
                Add Person
            </Button>
        </div>
    )
}
