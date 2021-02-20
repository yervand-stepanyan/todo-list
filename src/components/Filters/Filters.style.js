import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  filtersContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: theme.customSpacing.base,
  },
  hideFilters: {
    display: 'none',
  },
  leftItemContainer: {
    display: 'flex',
    order: 0,
    color: theme.color.leftItemLabelColor,
    cursor: 'default',
    width: theme.size.leftItemWidth,
  },
  leftItemLabelWrapper: {
    marginLeft: theme.customSpacing.xSmall,
  },
  buttonGroupContainer: {
    display: 'flex',
    order: 2,
    margin: `${theme.customSpacing.base} auto 0`,
    '@media only screen and (min-width: 499px)': {
      order: 1,
      margin: 0,
    },
  },
  clearCompletedContainer: {
    order: 1,
  },
  hideClearCompletedWrapper: {
    visibility: 'hidden',
  },
}));
