import { createMuiTheme } from '@material-ui/core';

const EDIT_PADDING_VALUE = 62;
const MAIN_SPACING_VALUE = 16;
const TODO_ITEM_HEIGHT = 56;

const checkedDescriptionColor = '#b2b2b2';
const mainBackgroundColor = '#F5F7F9';

export const theme = createMuiTheme({
  color: {
    checkedDescriptionColor,
    mainBackgroundColor,
  },
  customSpacing: {
    small: `${MAIN_SPACING_VALUE / 2}px`,
    base: `${MAIN_SPACING_VALUE}px`,
    editTextFieldPaddingRight: `${EDIT_PADDING_VALUE}px`,
  },
  size: {
    todoItemHeight: `${TODO_ITEM_HEIGHT}px`,
  },
});
