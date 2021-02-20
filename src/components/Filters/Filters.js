import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { BUTTON_LABEL, LABEL } from '../../globals/constants';
import { useStore } from '../../store/use-store';
import { useStyles } from './Filters.style';

function Filters() {
  const classes = useStyles();
  const {
    handleClearAllCompleted,
    handleFilterSelect,
    selectedFilter,
    todolist,
  } = useStore();
  const leftItemCount = todolist.filter(todo => !todo.done).length;
  const leftItemLabel =
    leftItemCount === 1 ? LABEL.leftItem.single : LABEL.leftItem.multi;
  const hideClearCompleted = todolist.some(todo => todo.done);

  const handleFilterClick = text => {
    handleFilterSelect(text);
  };

  const handleClearCompleted = () => {
    handleClearAllCompleted();
  };

  return (
    <div
      className={`${
        todolist.length ? classes.filtersContainer : classes.hideFilters
      }`}
    >
      <div className={classes.leftItemContainer}>
        <div>
          <Typography variant="body2">{leftItemCount}</Typography>
        </div>
        <div className={classes.leftItemLabelWrapper}>
          <Typography variant="body2">{leftItemLabel}</Typography>
        </div>
      </div>
      <div className={classes.buttonGroupContainer}>
        {BUTTON_LABEL.filters.map(button => (
          <div key={button}>
            <Button
              color={button === selectedFilter ? 'secondary' : 'primary'}
              onClick={() => handleFilterClick(button)}
              size="small"
            >
              {button}
            </Button>
          </div>
        ))}
      </div>
      <div
        className={`${classes.clearCompletedContainer} ${
          hideClearCompleted ? '' : classes.hideClearCompletedWrapper
        }`}
      >
        <Button
          color="secondary"
          onClick={handleClearCompleted}
          size="small"
          variant="contained"
        >
          {BUTTON_LABEL.clearCompleted}
        </Button>
      </div>
    </div>
  );
}

export default Filters;
