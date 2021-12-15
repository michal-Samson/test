import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import QuestionDND from './questionDND'
import QuestionAmerican from './questionAmerican'
import QuestionOfCompletion from './questionOfCompletion'
import { actions } from '../Redux/action/action'; 
import End from './end'
const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
});
var i = 0
var question = [<QuestionAmerican />, <QuestionDND />, <QuestionOfCompletion />]
export default function Main() {
    const random = useSelector(state => state.mainReducer.random)
    const name = useSelector(state => state.mainReducer.name)
    const dispatch = useDispatch()
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
       dispatch(actions.setRandom(+1)) 
    };

    const handleBack = () => {
        
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        dispatch(actions.setRandom(-1)) 
    };
 
    return (
        <div>
            <p>Hello to</p>{name}
            {question[random]}
           {random<3?<MobileStepper
                variant="dots"
                steps={3}
                position="static"
                activeStep={activeStep}
                className={classes.root}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 2}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                    </Button>
                }
            />:<End/>}
        </div>
    );
}
