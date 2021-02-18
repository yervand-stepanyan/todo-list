import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  inputContainer: {
    display: 'flex',
  },
  textFieldWrapper: {
    width: '100%',
  },
  textField: {
    [`& fieldset`]: {
      'border-top-right-radius': 0,
      'border-bottom-right-radius': 0,
    },
  },
  button: {
    'border-top-left-radius': 0,
    'border-bottom-left-radius': 0,
    height: '100%',
  },
});
