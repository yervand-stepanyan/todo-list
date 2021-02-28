import PropTypes from 'prop-types';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import GreenCheckbox from '../GreenCheckbox';
import Loader from '../../Loader';
import { LOADER } from '../../../globals/constants';
import { useStyles } from './TodoItemView.style';

function TodoItemView({
  description,
  done,
  handleEdit,
  handleTodoCheckedChange,
  handleRemove,
  iconToLoad,
  id,
  isRemoveIconLoading,
}) {
  const classes = useStyles();

  const handleCheckboxChange = () => {
    handleTodoCheckedChange(id);
  };

  const handleEditClick = () => {
    handleEdit(true);
  };

  const handleRemoveClick = () => {
    handleRemove(id);
  };

  return (
    <div className={classes.todoItemViewContainer}>
      <div>
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={done}
              name="checkedG"
              onChange={handleCheckboxChange}
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
            onClick={handleEditClick}
          >
            <EditIcon />
          </IconButton>
        </div>
        <div className={classes.removeIconWrapper}>
          <IconButton
            aria-label="delete an item"
            color="secondary"
            disabled={iconToLoad === id && isRemoveIconLoading}
            onClick={handleRemoveClick}
          >
            <DeleteIcon />
          </IconButton>
          {iconToLoad === id && isRemoveIconLoading && (
            <Loader type={LOADER.icon.type} />
          )}
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
  iconToLoad: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isRemoveIconLoading: PropTypes.bool.isRequired,
};

export default TodoItemView;
