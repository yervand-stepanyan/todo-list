import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  todoItemEditContainer: {
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
}));
