import PropTypes from 'prop-types';

import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

import { INPUT } from '../../globals/constants';
import { useStyles } from './TodoItemEdit.style';

function TodoItemEdit({
  handleInputChange,
  handleSubmit,
  handleSubmitOnBlur,
  handleSubmitOnEnter,
  id,
  isError,
  value,
}) {
  const classes = useStyles();

  return (
    <div className={classes.todoItemEditContainer}>
      <div className={classes.textFieldWrapper}>
        <TextField
          autoFocus
          className={classes.textField}
          error={isError}
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
          disabled={isError}
          onClick={() => handleSubmit(id)}
        >
          <CheckIcon />
        </IconButton>
      </div>
    </div>
  );
}

TodoItemEdit.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleSubmitOnBlur: PropTypes.func.isRequired,
  handleSubmitOnEnter: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default TodoItemEdit;
