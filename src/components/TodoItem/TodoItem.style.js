import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  editItemWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  textFieldWrapper: {
    width: '100%',
  },
  textField: {
    [`& input`]: {
      'padding-right': theme.customSpacing.editTextFieldPaddingRight,
    },
  },
  submitIconWrapper: {
    position: 'absolute',
    right: 0,
  },
  itemWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    minHeight: theme.size.todoItemHeight,
    paddingLeft: '12px',
  },
  iconsContainer: {
    display: 'flex',
  },
}));
