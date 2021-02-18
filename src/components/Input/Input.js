import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { BUTTON_LABEL, INPUT } from '../../globals/constants';
import { useStyles } from './Input.style';

function Input() {
  const classes = useStyles();

  return (
    <div className={classes.inputContainer}>
      <div className={classes.textFieldWrapper}>
        <TextField
          className={classes.textField}
          fullWidth
          id="outlined-full-width"
          placeholder={INPUT.placeholder}
          variant="outlined"
        />
      </div>
      <div>
        <Button
          className={classes.button}
          color="primary"
          size="large"
          variant="contained"
        >
          {BUTTON_LABEL.add}
        </Button>
      </div>
    </div>
  );
}

export default Input;
