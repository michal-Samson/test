import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Button, TextField } from '@material-ui/core';
import QuestionAmerican from './questionAmerican';
import QuestionDND from './questionDND'
export default function Main(props) {
  const count = useSelector(state => state.mainReducer.test)

    const name = useSelector(state => state.mainReducer.name)
    const dispatch = useDispatch()
   
    return (
        <div >
           <p>You answered {count} questions out of {"3"} questions</p>
               
     
        </div>
    );
}