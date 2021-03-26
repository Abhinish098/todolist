import React, { useState } from 'react';
import { ContainedButton } from '@iktakahiro/gradient-mui-button'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    
    cssLabel: {
        color : 'green'
    },
    
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
          borderColor: `${theme.palette.primary.main} !important`,
        }
    },
    
    cssFocused: {},
    
    notchedOutline: {
        borderWidth: '1px',
        borderColor: 'green !important'
    },
  }));

const ToDoForm = ({ addTask }) => {

    const classes = useStyles();
    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form>
            <Grid container
            direction="row"
            justify="center"
            alignItems="center"            
            style={{marginTop:'2.5vh'}}>
                <Grid item>
                    <TextField
                        id="outlined-read-only-input"
                        placeholder="What else are we doing today?"
                        label="Task"
                        value={userInput}
                        variant="outlined"
                        onChange={handleChange}
                        margin="normal"
                        InputLabelProps={{
                            classes: {
                            root: classes.cssLabel,
                            focused: classes.cssFocused,
                            },
                        }}
                        InputProps={{
                            classes: {
                            root: classes.cssOutlinedInput,
                            focused: classes.cssFocused,
                            notchedOutline: classes.notchedOutline,
                            },
                            inputMode: "numeric"
                        }}
                    />
                </Grid>
                <Grid item>
                    <ContainedButton color="primary" onClick={handleSubmit} style={{marginTop:'2.5vh'}}>Submit</ContainedButton>
                </Grid>
            </Grid>
        </form>
    );
};

export default ToDoForm;