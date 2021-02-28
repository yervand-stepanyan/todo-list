import { createMuiTheme } from '@material-ui/core';

const EDIT_PADDING_VALUE = 62;
const LEFT_ITEM_WIDTH = 90;
const MAIN_SPACING_VALUE = 16;
const TODO_ITEM_HEIGHT = 56;

const checkedDescriptionColor = '#b2b2b2';
const leftItemLabelColor = '#8c8c8c';
const mainBackgroundColor = '#F5F7F9';

export const theme = createMuiTheme({
  color: {
    checkedDescriptionColor,
    leftItemLabelColor,
    mainBackgroundColor,
  },
  customSpacing: {
    xSmall: `${MAIN_SPACING_VALUE / 4}px`,
    small: `${MAIN_SPACING_VALUE / 2}px`,
    base: `${MAIN_SPACING_VALUE}px`,
    larger: `${MAIN_SPACING_VALUE * 1.5}px`,
    large: `${MAIN_SPACING_VALUE * 2}px`,
    editTextFieldPaddingRight: `${EDIT_PADDING_VALUE}px`,
  },
  size: {
    leftItemWidth: `${LEFT_ITEM_WIDTH}px`,
    todoItemHeight: `${TODO_ITEM_HEIGHT}px`,
  },
});
