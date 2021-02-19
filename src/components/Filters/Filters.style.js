import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  filtersContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: theme.customSpacing.base,
  },
  hideFilters: {
    display: 'none',
  },
  leftItemContainer: {
    display: 'flex',
    color: theme.color.leftItemLabelColor,
    cursor: 'default',
  },
  leftItemLabelWrapper: {
    marginLeft: theme.customSpacing.xSmall,
  },
  buttonGroupContainer: {
    display: 'flex',
  },
  hideClearCompletedWrapper: {
    visibility: 'hidden',
  },
}));
