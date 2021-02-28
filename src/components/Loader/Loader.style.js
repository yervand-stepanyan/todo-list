import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  buttonProgress: {
    left: '50%',
    marginLeft: -12,
    marginTop: -12,
    position: 'absolute',
    top: '50%',
  },
  fabProgress: {
    left: 12,
    position: 'absolute',
    top: 12,
    zIndex: 1,
  },
  pageLoaderContainer: {
    marginTop: theme.customSpacing.larger,
    textAlign: 'center',
  },
}));
