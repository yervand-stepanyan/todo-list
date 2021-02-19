import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import GreenCheckbox from '../GreenCheckbox';
import { INPUT } from '../../globals/constants';
import { useStore } from '../../store/use-store';
import { useStyles } from './TodoItem.style';

function TodoItem({ handleTodoCheckedChange, item }) {
  const classes = useStyles();
  const { description, done, id } = item;
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(description || '');
  const { handleTodoEdit, handleTodoRemove } = useStore();

  useEffect(() => {
    setValue(description);
  }, [isEdit]);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleInputChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = itemId => {
    handleTodoEdit({ description: value, id: itemId });

    setIsEdit(false);
  };

  const handleSubmitOnEnter = event => {
    if (event.key === 'Enter') {
      handleSubmit(id);
    }
  };

  const handleRemove = itemId => {
    handleTodoRemove(itemId);
  };

  return (
    <div>
      {isEdit ? (
        <div className={classes.editItemWrapper}>
          <div className={classes.textFieldWrapper}>
            <TextField
              autoFocus
              className={classes.textField}
              fullWidth
              id="outlined-full-width"
              onChange={e => handleInputChange(e)}
              onKeyDown={e => handleSubmitOnEnter(e, id)}
              placeholder={INPUT.placeholder}
              value={value}
              variant="outlined"
            />
          </div>
          <div className={classes.submitIconWrapper}>
            <IconButton
              aria-label="submit edit"
              color="primary"
              onClick={() => handleSubmit(id)}
            >
              <CheckIcon />
            </IconButton>
          </div>
        </div>
      ) : (
        <div className={classes.itemWrapper}>
          <div>
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={done}
                  name="checkedG"
                  onChange={() => handleTodoCheckedChange(id)}
                />
              }
              label={
                <Typography
                  className={`${done ? classes.checkedDescription : null}`}
                  variant="body1"
                >
                  {description}
                </Typography>
              }
            />
          </div>
          <div className={classes.iconsContainer}>
            <div>
              <IconButton
                aria-label="edit an item"
                color="primary"
                onClick={handleEdit}
              >
                <EditIcon />
              </IconButton>
            </div>
            <div>
              <IconButton
                aria-label="delete an item"
                color="secondary"
                onClick={() => handleRemove(id)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

TodoItem.propTypes = {
  handleTodoCheckedChange: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default TodoItem;
