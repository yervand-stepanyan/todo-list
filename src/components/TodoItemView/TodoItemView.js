import PropTypes from 'prop-types';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import GreenCheckbox from '../GreenCheckbox';
import { useStyles } from './TodoItemView.style';

function TodoItemView({
  description,
  done,
  handleEdit,
  handleTodoCheckedChange,
  handleRemove,
  id,
}) {
  const classes = useStyles();

  return (
    <div className={classes.todoItemViewContainer}>
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
              className={`${done ? classes.checkedDescription : ''}`}
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
  );
}

TodoItemView.propTypes = {
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleTodoCheckedChange: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default TodoItemView;
