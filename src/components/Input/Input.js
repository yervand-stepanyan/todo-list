import { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { BUTTON_LABEL, INPUT } from '../../globals/constants';
import { useStore } from '../../store/use-store';
import { useStyles } from './Input.style';

function Input() {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const { handleAddTodo } = useStore();

  const handleInputChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    if (value) {
      handleAddTodo(value);

      setValue('');
    }
  };

  const handleSubmitOnEnter = event => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className={classes.inputContainer}>
      <div className={classes.textFieldWrapper}>
        <TextField
          className={classes.textField}
          fullWidth
          id="outlined-full-width"
          onChange={e => handleInputChange(e)}
          onKeyDown={e => handleSubmitOnEnter(e)}
          placeholder={INPUT.placeholder}
          value={value}
          variant="outlined"
        />
      </div>
      <div>
        <Button
          className={classes.button}
          color="primary"
          onClick={handleSubmit}
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
