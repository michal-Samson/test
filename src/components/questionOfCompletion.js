import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Button, TextField } from '@material-ui/core';
import { actions } from '../Redux/action/action';
import QuestionAmerican from './questionAmerican';
import QuestionDND from './questionDND'
export default function Main(props) {
    const [feedback, setFeedback] = useState("")
    const name = useSelector(state => state.mainReducer.name)
    const dispatch = useDispatch()
    var ans = ""
    const random = useSelector(state => state.mainReducer.random)

    function check() {
        
        if (ans=="lion") {
            setFeedback("You got it!");
            dispatch(actions.setTest());
            }
        else
        setFeedback("Sorry, wrong answer!")
        if(random==2)
        dispatch(actions.setRandom(+1)) 
 
    }
    return (
        <div >
            <p>Who is the king of beasts?</p>
            <input onChange={(e) => ans = e.target.value}
            />
            
            {feedback}
            <br></br>
            <Button onClick={() => { check() }} color="primary">check</Button>
        </div>
    );
}
