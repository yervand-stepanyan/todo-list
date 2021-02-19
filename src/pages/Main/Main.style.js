import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.color.mainBackgroundColor,
    boxSizing: 'border-box',
    minHeight: '100vh',
    padding: theme.customSpacing.small,
    '@media only screen and (min-width: 600px)': {
      padding: theme.customSpacing.base,
    },
  },
  titleContainer: {
    marginBottom: theme.customSpacing.base,
  },
  contentContainer: {
    height: '80vh',
    width: '100%',
    '@media only screen and (min-width: 600px)': {
      height: '75vh',
      width: '60%',
    },
  },
  card: {
    height: 'inherit',
  },
}));
