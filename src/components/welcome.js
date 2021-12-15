import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Button, TextField } from '@material-ui/core';
import { actions } from '../Redux/action/action';
import Main from './main'
export default function Welcome() {
    const go = useSelector(state => state.mainReducer.go)
    const name = useSelector(state => state.mainReducer.name)
    const dispatch = useDispatch()
  
    return (
        <div style={{ textAlign: "center", display: "flex", justifyContent: 'space-around', paddingTop: "100px" }}>
            <Paper elevation={3}  >
                {go === false ?
                    <div><p>What is your name</p>
                        <input defaultValue={name} onChange={(e) => dispatch(actions.setName(e.target.value))}  /><br></br>
                        <Button disabled={name == "" ? true : false}  onClick={()=>dispatch(actions.setGo({"act":true}))} color="primary">Go</Button>
                    </div>
                     : <Main  />}  
            </Paper>
        </div>
    );
}