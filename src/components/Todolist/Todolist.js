import { useEffect, useState } from 'react';

import { FILTER_BUTTON_ITEM } from '../../globals/constants';
import TodoItem from '../TodoItem';
import { useStore } from '../../store/use-store';
import { useStyles } from './Todolist.style';

function Todolist() {
  const classes = useStyles();
  const { selectedFilter, todolist } = useStore();
  const [todolistToShow, setTodolistToShow] = useState([]);

  useEffect(() => {
    if (selectedFilter === FILTER_BUTTON_ITEM.active.value) {
      const filteredTodolist = todolist.filter(todo => !todo.done);

      setTodolistToShow(filteredTodolist);
    } else if (selectedFilter === FILTER_BUTTON_ITEM.completed.value) {
      const filteredTodolist = todolist.filter(todo => todo.done);

      setTodolistToShow(filteredTodolist);
    } else {
      setTodolistToShow(todolist);
    }
  }, [selectedFilter, todolist]);

  return (
    <div
      className={`${todolistToShow.length ? classes.todolistContainer : ''}`}
    >
      {todolistToShow.map(item => (
        <TodoItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Todolist;
