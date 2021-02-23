import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

import { INPUT } from '../../../globals/constants';
import { useStyles } from './TodoItemEdit.style';

function TodoItemEdit({ description, handleEdit, handleTodoEdit, id }) {
  const classes = useStyles();
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(description);
  }, []);

  const handleInputChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    if (value) {
      const editedDescription = { description: value, id };

      handleTodoEdit(editedDescription);

      handleEdit(false);
    }
  };

  const handleSubmitOnEnter = event => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmitOnBlur = event => {
    event.preventDefault();

    handleSubmit();
  };

  return (
    <div className={classes.todoItemEditContainer}>
      <div className={classes.textFieldWrapper}>
        <TextField
          autoFocus
          className={classes.textField}
          error={!value}
          fullWidth
          id="outlined-full-width"
          onBlur={e => handleSubmitOnBlur(e)}
          onChange={e => handleInputChange(e)}
          onKeyDown={e => handleSubmitOnEnter(e, id)}
          placeholder={INPUT.editInputPlaceholder}
          value={value}
          variant="outlined"
        />
      </div>
      <div className={classes.submitIconWrapper}>
        <IconButton
          aria-label="submit edit"
          color="primary"
          disabled={!value}
          onClick={handleSubmit}
        >
          <CheckIcon />
        </IconButton>
      </div>
    </div>
  );
}

TodoItemEdit.propTypes = {
  description: PropTypes.string.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleTodoEdit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default TodoItemEdit;
