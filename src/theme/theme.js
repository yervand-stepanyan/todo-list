import { createMuiTheme } from '@material-ui/core';

const MAIN_SPACING_VALUE = 16;

const mainBackgroundColor = '#F5F7F9';

export const theme = createMuiTheme({
  color: {
    mainBackgroundColor,
  },
  customSpacing: {
    base: `${MAIN_SPACING_VALUE}px`,
  },
});
