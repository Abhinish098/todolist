import React from 'react';
import ToDo from '../Components/Mainbody';
import { ContainedButton } from '@iktakahiro/gradient-mui-button'
import Grid from '@material-ui/core/Grid';


const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            style={{marginTop:'5vh'}}>
                <Grid item>
                    <ContainedButton color="secondary" style={{fontSize:'12px'}} onClick={handleFilter}>Clear Completed Tasks!</ContainedButton>
                </Grid>
            </Grid>
        </div>
    );
};

export default ToDoList;