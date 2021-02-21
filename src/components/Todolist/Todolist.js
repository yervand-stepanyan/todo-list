import { useEffect, useState } from 'react';

import { BUTTON_LABEL } from '../../globals/constants';
import TodoItem from '../TodoItem';
import { useStore } from '../../store/use-store';
import { useStyles } from './Todolist.style';

function Todolist() {
  const classes = useStyles();
  const { filters } = BUTTON_LABEL;
  const { selectedFilter, todolist } = useStore();
  const [todolistToShow, setTodolistToShow] = useState([]);

  useEffect(() => {
    if (selectedFilter === filters[1]) {
      const filteredTodolist = todolist.filter(todo => !todo.done);

      setTodolistToShow(filteredTodolist);
    } else if (selectedFilter === filters[2]) {
      const filteredTodolist = todolist.filter(todo => todo.done);

      setTodolistToShow(filteredTodolist);
    } else {
      setTodolistToShow(todolist);
    }
  }, [selectedFilter, todolist]);

  return (
    <div className={classes.todolistContainer}>
      {todolistToShow.map(item => (
        <TodoItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Todolist;
