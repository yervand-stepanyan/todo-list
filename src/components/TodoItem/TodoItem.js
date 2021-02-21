import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import TodoItemEdit from '../TodoItemEdit';
import TodoItemView from '../TodoItemView';
import { useStore } from '../../store/use-store';

function TodoItem({ item }) {
  const { description, done, id } = item;
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState('');
  const {
    handleTodoCheckedChange,
    handleTodoEdit,
    handleTodoRemove,
  } = useStore();

  useEffect(() => {
    setValue(description);
  }, [isEdit]);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleInputChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = itemId => {
    if (value) {
      handleTodoEdit({ description: value, id: itemId });

      setIsEdit(false);
    }
  };

  const handleSubmitOnEnter = event => {
    if (event.key === 'Enter') {
      handleSubmit(id);
    }
  };

  const handleSubmitOnBlur = event => {
    event.preventDefault();

    handleSubmit(id);
  };

  const handleRemove = itemId => {
    handleTodoRemove(itemId);
  };

  return (
    <div>
      {isEdit ? (
        <TodoItemEdit
          handleInputChange={handleInputChange}
          handleSubmitOnEnter={handleSubmitOnEnter}
          handleSubmitOnBlur={handleSubmitOnBlur}
          handleSubmit={handleSubmit}
          id={id}
          isError={!value}
          value={value}
        />
      ) : (
        <TodoItemView
          description={description}
          done={done}
          handleEdit={handleEdit}
          handleRemove={handleRemove}
          handleTodoCheckedChange={handleTodoCheckedChange}
          id={id}
        />
      )}
    </div>
  );
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TodoItem;
