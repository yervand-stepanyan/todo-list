import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.color.mainBackgroundColor,
    boxSizing: 'border-box',
    minHeight: '100vh',
    padding: `${theme.customSpacing.small} ${theme.customSpacing.small} ${theme.customSpacing.large}`,
    '@media only screen and (min-width: 600px)': {
      padding: `${theme.customSpacing.small} ${theme.customSpacing.base} ${theme.customSpacing.large}`,
    },
  },
  contentContainer: {
    marginTop: theme.customSpacing.base,
    width: '100%',
    '@media only screen and (min-width: 600px)': {
      width: '90%',
    },
    '@media only screen and (min-width: 768px)': {
      width: '80%',
    },
    '@media only screen and (min-width: 992px)': {
      width: '70%',
    },
    '@media only screen and (min-width: 1200px)': {
      width: '60%',
    },
  },
  card: {
    height: 'inherit',
  },
}));
