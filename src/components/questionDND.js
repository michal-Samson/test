import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Button, SvgIcon, TextField } from '@material-ui/core';
import { actions } from '../Redux/action/action';
import Dnd from './end';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Draggable from 'react-draggable'; export default function Main(props) {
    const name = useSelector(state => state.mainReducer.name);
    const dispatch = useDispatch();
    var fontSize = ['small', 'normal', 'large'];
    let drag = "";
    const arrDiv = useSelector(state => state.mainReducer.arrDiv)
    const [feedback, setFeedback] = useState("")
    const random = useSelector(state => state.mainReducer.random)

    function HomeIcon(props) {

        return (
            <SvgIcon {...props}><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>);
    } function dragStart(e) {
        drag = e
    } function check() {
        
            if (arrDiv[0].action == "small" && arrDiv[1].action == "normal" && arrDiv[2].action == "large") {
                dispatch(actions.setTest());
                setFeedback("You got it!")   
            }
            else
                setFeedback("Sorry, wrong answer!")
                if (random == 2)
                dispatch(actions.setRandom(+1))
        } function dragover_handler(e) {
            console.log("dragOver");
            e.preventDefault();
        } function drop(i) {
            dispatch(actions.setArrDiv({ "i": i, "action": drag }))
        }
        return (
            <div >
                <p>Arrange the photos in order</p>
                {fontSize.map((element) => <div draggable onDragStart={(e) => { dragStart(element) }}><HomeIcon fontSize={element} /> </div>)}
                <div style={{ justifyContent: 'space-around', display: 'flex' }}>
                    {arrDiv.map((element, i) => element.action != null ? <div onDrop={(e) => drop(i)} onDragOver={(e) => dragover_handler(e)}
                        style={{ width: "50px", height: "50px", backgroundColor: "blueviolet" }} ><HomeIcon fontSize={element.action} /></div>
                        : <div onDrop={(e) => drop(i)} onDragOver={(e) => dragover_handler(e)} style={{ width: "50px", height: "50px", backgroundColor: "blueviolet" }}></div>
                    )}
                </div>
                {feedback}
                <Button onClick={() => { check() }} color="primary">check</Button>


            </div>);
    }