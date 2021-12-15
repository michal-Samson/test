import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../Redux/action/action'; 

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function ErrorRadios() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const random = useSelector(state => state.mainReducer.random)

  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "25") {
      setHelperText('You got it!');
      setError(false);
      dispatch(actions.setTest()) ;
    } else if (value != "25") {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
    if(random==2)
    dispatch(actions.setRandom(+1)) 

  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        <FormLabel component="legend">56/2-3=</FormLabel>
        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
          <FormControlLabel color="primary"  value="25" control={<Radio />} label="25" />
          <FormControlLabel color="primary"  value="35" control={<Radio />} label="35" />
          <FormControlLabel color="primary"  value="26" control={<Radio />} label="26" />
          <FormControlLabel color="primary"  value="6" control={<Radio />} label="6" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined" color="primary" className={classes.button}>
          Check Answer
        </Button>
      </FormControl>
    </form>
  );
}