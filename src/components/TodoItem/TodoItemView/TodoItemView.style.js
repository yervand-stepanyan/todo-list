import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  todoItemViewContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    minHeight: theme.size.todoItemHeight,
    paddingLeft: '12px',
  },
  checkedDescription: {
    color: theme.color.checkedDescriptionColor,
    textDecoration: 'line-through',
  },
  iconsContainer: {
    display: 'flex',
  },
  removeIconWrapper: {
    position: 'relative',
  },
}));
