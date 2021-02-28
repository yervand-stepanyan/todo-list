import { useState } from 'react';
import PropTypes from 'prop-types';

import TodoItemEdit from './TodoItemEdit';
import TodoItemView from './TodoItemView';
import { useStore } from '../../store/use-store';

function TodoItem({ item }) {
  const { description, done, id } = item;
  const [isEdit, setIsEdit] = useState(false);
  const {
    handleTodoCheckedChange,
    handleTodoEdit,
    handleTodoRemove,
    iconToLoad,
    isRemoveIconLoading,
  } = useStore();

  const handleEdit = edit => {
    setIsEdit(edit);
  };

  const handleRemove = itemId => {
    handleTodoRemove(itemId);
  };

  return (
    <div>
      {isEdit ? (
        <TodoItemEdit
          description={description}
          handleEdit={handleEdit}
          handleTodoEdit={handleTodoEdit}
          id={id}
        />
      ) : (
        <TodoItemView
          description={description}
          done={done}
          handleEdit={handleEdit}
          handleRemove={handleRemove}
          handleTodoCheckedChange={handleTodoCheckedChange}
          iconToLoad={iconToLoad}
          id={id}
          isRemoveIconLoading={isRemoveIconLoading}
        />
      )}
    </div>
  );
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TodoItem;
