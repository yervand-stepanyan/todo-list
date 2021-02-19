import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import { useStyles } from './TodoItem.style';

function TodoItem({ handleTodoCheckedChange, item }) {
  const classes = useStyles();
  const { description, done, id } = item;

  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);

  return (
    <div className={classes.todoItemContainer}>
      <div>
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={done}
              name="checkedG"
              onChange={() => handleTodoCheckedChange(id)}
            />
          }
          label={description}
        />
      </div>
      <div className={classes.iconsContainer}>
        <div>
          <IconButton aria-label="edit an item" color="primary">
            <EditIcon />
          </IconButton>
        </div>
        <div>
          <IconButton aria-label="delete an item" color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  handleTodoCheckedChange: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default TodoItem;
